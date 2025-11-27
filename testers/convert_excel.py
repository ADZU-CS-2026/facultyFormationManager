import pandas as pd
import re
import datetime

# ================= CONFIGURATION =================
INPUT_FILENAME = "060125-Days-with-God-Profile-1with-total.xlsx"

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

DGY_MAPPING = {
    'dgy1': '2023-2024',
    'dgy2': '2024-2025',
    'dgy3': '2025-2026',
    'dgy4': '2026-2027',
    'dgy5': '2027-2028'
}
# =================================================

def clean_sql_str(text):
    if pd.isna(text): return 'NULL'
    clean = str(text).replace(u'\xa0', ' ').strip()
    if clean == '': return 'NULL'
    clean = clean.replace("'", "''") 
    return f"'{clean}'"

def normalize_year(year_str):
    if len(year_str) == 2:
        return f"20{year_str}"
    return year_str

def parse_dates_raw(date_val):
    """
    Parses messy text OR datetime objects into ISO dates.
    Returns tuple: (start_date, end_date)
    If single date, end_date is None.
    """
    # 1. Handle actual Timestamp/datetime objects from pandas
    if isinstance(date_val, (pd.Timestamp, datetime.datetime, datetime.date)):
        iso = date_val.strftime('%Y-%m-%d')
        return iso, None

    s = str(date_val).replace(u'\xa0', ' ').strip()
    if not s or s.lower() == 'nan': return None, None

    try:
        # Case A: ISO Format with optional time (2025-02-06 or 2025-02-06 00:00:00)
        # Relaxed regex: start anchor only
        match = re.match(r'^(\d{4})-(\d{1,2})-(\d{1,2})', s)
        if match:
            iso = f"{match.group(1)}-{match.group(2).zfill(2)}-{match.group(3).zfill(2)}"
            return iso, None 

        # Case B: Range Format (02/02-03/2024 OR 02/17-18/23) - RANGE
        match = re.match(r'(\d{1,2})/(\d{1,2})-(\d{1,2})/(\d{2,4})', s)
        if match:
            year = normalize_year(match.group(4))
            month = match.group(1).zfill(2)
            day1 = match.group(2).zfill(2)
            day2 = match.group(3).zfill(2)
            
            start = f"{year}-{month}-{day1}"
            end = f"{year}-{month}-{day2}"
            return start, end 

        # Case C: Single Date Slash Format (02/06/25 OR 2/6/2025) - SINGLE DATE
        # Matches Month/Day/Year
        match = re.match(r'(\d{1,2})[/\.-](\d{1,2})[/\.-](\d{2,4})', s)
        if match:
            year = normalize_year(match.group(3))
            month = match.group(1).zfill(2)
            day = match.group(2).zfill(2)
            iso = f"{year}-{month}-{day}"
            return iso, None 

    except Exception:
        pass
    
    return None, None

def calculate_school_year(date_iso_str):
    if not date_iso_str: return None
    try:
        dt = datetime.datetime.strptime(date_iso_str, "%Y-%m-%d")
        # July Cutoff
        if dt.month >= 7:
            sy_start = dt.year
        else:
            sy_start = dt.year - 1
        return f"{sy_start}-{sy_start + 1}"
    except:
        return None

def get_sy_from_header(header_text):
    h = str(header_text).lower().replace(' ', '')
    match = re.search(r'(20\d{2})-(20\d{2})', str(header_text))
    if match: return f"{match.group(1)}-{match.group(2)}"
    for dgy_code, mapping_sy in DGY_MAPPING.items():
        if dgy_code in h: return mapping_sy
    return None

def generate_sql(filename):
    sql_statements = []
    sql_statements.append("-- SQL Generated with Single Date Fix")

    try:
        # Read all sheets - ignoring header initially
        all_sheets = pd.read_excel(filename, sheet_name=None, header=None)
    except Exception as e:
        return f"Error reading file: {e}"

    for sheet_name_raw, raw_df in all_sheets.items():
        sheet_name = sheet_name_raw.strip()
        if sheet_name not in SHEET_CONFIG: continue

        config = SHEET_CONFIG[sheet_name]
        dept_enum = config['dept']
        id_prefix = config['id_start']
        print(f"Processing {sheet_name}...")

        # 1. FIND HEADER
        header_idx = -1
        for i, row in raw_df.head(20).iterrows():
            row_vals = [str(v).replace(u'\xa0', ' ').strip().lower() for v in row.values]
            if "last name" in row_vals:
                header_idx = i
                break
        
        if header_idx == -1:
            print(f"  Skipping {sheet_name}: No header found.")
            continue

        # 2. LOAD DATA
        df = pd.read_excel(filename, sheet_name=sheet_name_raw, header=header_idx)
        df.columns = df.columns.astype(str).str.replace(u'\xa0', ' ').str.strip()

        col_last = next((c for c in df.columns if c.lower() in ['last name', 'lastname']), None)
        col_first = next((c for c in df.columns if c.lower() in ['first name', 'firstname']), None)
        col_mid  = next((c for c in df.columns if c.lower() in ['middle initial', 'middle inital']), None)
        col_pos  = next((c for c in df.columns if c.lower() == 'position'), None)
        col_off  = next((c for c in df.columns if c.lower() == 'office'), None)
        col_stat = next((c for c in df.columns if c.lower() == 'status'), None)

        count = 0
        for idx, row in df.iterrows():
            lname_val = row.get(col_last)
            if pd.isna(lname_val): continue
            lname_clean = str(lname_val).replace(u'\xa0', ' ').strip()
            if lname_clean == '': continue

            # --- USER ---
            raw_id = row.iloc[0]
            try: user_id = int(float(raw_id)) + id_prefix
            except: user_id = id_prefix + idx + 1
            
            last_name = clean_sql_str(lname_val)
            first_name = clean_sql_str(row.get(col_first))
            mid = str(row.get(col_mid, '')).strip()
            if mid.lower() == 'nan': mid = ''
            middle_initial = clean_sql_str(mid)
            
            position = clean_sql_str(row.get(col_pos)) if col_pos else 'NULL'
            office = clean_sql_str(row.get(col_off)) if col_off else 'NULL'
            status = clean_sql_str(row.get(col_stat)) if col_stat else 'NULL'
            
            sql = f"""INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES ({user_id}, {last_name}, {first_name}, {middle_initial}, '{dept_enum}', {position}, {office}, {status}, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);"""
            sql_statements.append(sql)
            count += 1

            # --- RETREATS ---
            exclude = [col_last, col_first, col_mid, col_pos, col_off, col_stat, 'Unnamed: 0']
            retreat_cols = [c for c in df.columns if c not in exclude and "Unnamed" not in str(c)]

            for r_col in retreat_cols:
                date_val = row[r_col]
                r_header = str(r_col).strip()
                if any(str(y) in r_header for y in range(IGNORE_YEARS_STARTING, 2035)): continue

                if pd.notna(date_val) and str(date_val).strip() != '':
                    s_year = None
                    raw_start = None 
                    raw_end = None

                    # 1. Parse Date
                    raw_start, raw_end = parse_dates_raw(date_val)
                    
                    if raw_start: 
                        s_year = calculate_school_year(raw_start)
                    
                    # 2. Fallback to Header
                    if not s_year:
                        s_year = get_sy_from_header(r_header)
                        if not raw_start:
                            # Don't create record if date is totally invalid/missing
                            continue 
                    
                    if s_year:
                        lower_h = r_header.lower()
                        r_type = 'Retreat'
                        if 'dgy' in lower_h: r_type = r_header.split()[0] if ' ' in r_header else r_header
                        elif '3d retreat' in lower_h: r_type = '3D_Retreat'

                        start_val = f"'{raw_start}'" if raw_start else 'NULL'
                        end_val = f"'{raw_end}'" if raw_end else 'NULL'
                        
                        r_sql = f"""INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES ({user_id}, '{r_type}', '{s_year}', {start_val}, {end_val}, 'Present');"""
                        sql_statements.append(r_sql)
        
        print(f"  -> Generated {count} users")

    return "\n".join(sql_statements)

# ================= RUN =================
print("Generating final SQL...")
sql_code = generate_sql(INPUT_FILENAME)
with open("final_inserts_fixed.sql", "w", encoding='utf-8') as f: f.write(sql_code)
print("Done! Check 'final_inserts_fixed.sql'")