import pandas as pd
import re
import datetime

# ================= CONFIGURATION =================
INPUT_FILENAME = "060125-Days-with-God-Profile-1.xlsx"

SHEET_CONFIG = {
    "ADMIN": {"id_start": 1000, "dept": "Admin"},
    "CSITE": {"id_start": 2000, "dept": "CSITE"},
    "CON":   {"id_start": 3000, "dept": "CON"},
    "FFP":   {"id_start": 4000, "dept": "FFP"},
    "SED":   {"id_start": 5000, "dept": "SED"},
    "SLA":   {"id_start": 6000, "dept": "SLA"},
    "SMA":   {"id_start": 7000, "dept": "SMA"},
    "PPO":   {"id_start": 8000, "dept": "PPO"},
    "CS":    {"id_start": 9000, "dept": "CS"}
}
IGNORE_YEARS_STARTING = 2027 

# Map DGY codes to School Years if no date is present
DGY_MAPPING = {
    'dgy1': '2023-2024',
    'dgy2': '2024-2025',
    'dgy3': '2025-2026',
    'dgy4': '2026-2027',
    'dgy5': '2027-2028'
}
# =================================================

def normalize_year(year_str):
    if len(year_str) == 2:
        return f"20{year_str}"
    return year_str

def parse_dates_raw(date_str):
    s = str(date_str).replace(u'\xa0', ' ').strip()
    if not s or s.lower() == 'nan': return None
    
    try:
        # 1. ISO Format (2024-02-02)
        match = re.match(r'^(\d{4})-(\d{1,2})-(\d{1,2})$', s)
        if match:
            return f"{match.group(1)}-{match.group(2).zfill(2)}-{match.group(3).zfill(2)}"

        # 2. Range/Slash Format (02/02-03/2024, 02/17-18/23, 2/2/24)
        # Matches M/D/Y or M/D-D/Y
        match = re.search(r'(\d{1,2})[/\.-].*?[/\.-](\d{2,4})$', s)
        if match:
            month = match.group(1).zfill(2)
            year = normalize_year(match.group(2))
            return f"{year}-{month}-01" # Day doesn't matter for SY calc
            
    except: 
        pass
        
    return None

def calculate_school_year(date_iso_str):
    if not date_iso_str: return None
    try:
        dt = datetime.datetime.strptime(date_iso_str, "%Y-%m-%d")
        if dt.month >= 7:
            sy_start = dt.year
        else:
            sy_start = dt.year - 1
        return f"{sy_start}-{sy_start + 1}"
    except: return None

def get_sy_from_header(header_text):
    """Extracts year range from header like '3D Retreat 2023-2024'"""
    h = str(header_text).lower().replace(' ', '') # Remove spaces for easier matching
    
    # 1. Check Explicit Years (e.g. "2023-2024")
    match = re.search(r'(20\d{2})-(20\d{2})', str(header_text))
    if match:
        return f"{match.group(1)}-{match.group(2)}"
        
    # 2. Check DGY Codes
    for dgy_code, mapping_sy in DGY_MAPPING.items():
        if dgy_code in h:
            return mapping_sy
            
    return None

def analyze_attendance(filename):
    # Structure: { "2023-2024": { "ADMIN": set(user_ids) } }
    attendance_data = {} 
    
    # Track Total Records (Cells) to compare with "49 cells"
    record_count_data = {} 

    try:
        all_sheets = pd.read_excel(filename, sheet_name=None, header=None)
    except Exception as e:
        return f"Error reading file: {e}"

    for sheet_name_raw, raw_df in all_sheets.items():
        sheet_name = sheet_name_raw.strip()
        if sheet_name not in SHEET_CONFIG: continue

        config = SHEET_CONFIG[sheet_name]
        dept_name = config['dept']
        
        header_idx = -1
        for i, row in raw_df.head(20).iterrows():
            row_vals = [str(v).replace(u'\xa0', ' ').strip().lower() for v in row.values]
            if "last name" in row_vals or "lastname" in row_vals:
                header_idx = i
                break
        if header_idx == -1: continue

        df = pd.read_excel(filename, sheet_name=sheet_name_raw, header=header_idx)
        df.columns = df.columns.astype(str).str.replace(u'\xa0', ' ').str.strip()

        col_last = next((c for c in df.columns if c.lower() in ['last name', 'lastname']), None)
        
        for idx, row in df.iterrows():
            lname_val = row.get(col_last)
            if pd.isna(lname_val) or str(lname_val).strip() == '': continue

            user_id = f"{dept_name}_{idx}" 

            exclude = [col_last, 'first name', 'middle', 'position', 'office', 'status', 'id', 'no.']
            retreat_cols = [c for c in df.columns if not any(k in str(c).lower() for k in exclude) and "Unnamed" not in str(c)]

            for r_col in retreat_cols:
                date_val = row[r_col]
                r_header = str(r_col).strip()
                
                if any(str(y) in r_header for y in range(IGNORE_YEARS_STARTING, 2035)): continue

                if pd.notna(date_val) and str(date_val).strip() != '':
                    sy = None
                    
                    # 1. Try Date Parse
                    raw_date = parse_dates_raw(date_val)
                    if raw_date: 
                        sy = calculate_school_year(raw_date)
                    
                    # 2. Fallback to Header
                    if not sy:
                        sy = get_sy_from_header(r_header)

                    if sy:
                        # Init Dictionaries
                        if sy not in attendance_data: 
                            attendance_data[sy] = {}
                            record_count_data[sy] = {}
                        if dept_name not in attendance_data[sy]: 
                            attendance_data[sy][dept_name] = set()
                            record_count_data[sy][dept_name] = 0
                        
                        # Add Unique Person
                        attendance_data[sy][dept_name].add(user_id)
                        
                        # Add Record Count (Cell Count)
                        record_count_data[sy][dept_name] += 1

    # PRINT RESULTS
    print(f"{'SCHOOL YEAR':<15} | {'DEPARTMENT':<15} | {'UNIQUE PEOPLE':<15} | {'TOTAL RECORDS (Cells)'}")
    print("-" * 70)
    
    sorted_years = sorted(attendance_data.keys())
    for sy in sorted_years:
        print(f"{sy:<15} | {'-'*15} | {'-'*15} | {'-'*20}") 
        
        sorted_depts = sorted(attendance_data[sy].keys())
        for dept in sorted_depts:
            unique_count = len(attendance_data[sy][dept])
            cell_count = record_count_data[sy][dept]
            print(f"{'':<15} | {dept:<15} | {unique_count:<15} | {cell_count}")
        print("")

analyze_attendance(INPUT_FILENAME)