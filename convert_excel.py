import pandas as pd
import re

# ================= CONFIGURATION =================
INPUT_FILENAME = "060125-Days-with-God-Profile-1.xlsx"

SHEET_MAPPING = {
    "ADMIN": 1000,
    "CSITE": 2000,
    "CON": 3000,
    "FFP": 4000,
    "SED": 5000,
    "SLA": 6000,
    "SMA": 7000,
    "PPO": 8000,
    "CS": 9000
}
# =================================================

def clean_text(text):
    if pd.isna(text) or text == '':
        return 'NULL'
    return "'" + str(text).strip().replace("'", "''") + "'"

def generate_sql_from_excel(filename):
    sql_statements = []
    
    try:
        print(f"Reading {filename}...")
        all_sheets = pd.read_excel(filename, sheet_name=None, header=None)
    except Exception as e:
        return f"Error reading Excel file: {e}"

    for sheet_name, raw_df in all_sheets.items():
        if sheet_name not in SHEET_MAPPING:
            print(f"Skipping sheet '{sheet_name}' (Not in configuration list)")
            continue

        id_prefix = SHEET_MAPPING[sheet_name]
        dept_name = sheet_name 
        print(f"Processing Sheet: {sheet_name} (ID Prefix: {id_prefix})...")

        # --- FIND HEADER ROW ---
        header_row_idx = -1
        for i, row in raw_df.head(20).iterrows():
            row_values = [str(val).strip().lower() for val in row.values]
            if "last name" in row_values:
                header_row_idx = i
                print(f"  -> Found header at row {i}")
                break
        
        if header_row_idx == -1:
            print(f"  Warning: Could not find 'Last Name' header in {sheet_name}. Skipping.")
            continue

        # --- LOAD & CLEAN DATA ---
        df = pd.read_excel(filename, sheet_name=sheet_name, header=header_row_idx)
        
        # *** THE FIX: Remove hidden spaces from column names ***
        df.columns = df.columns.astype(str).str.strip()
        
        # Find the specific column name for "Last Name" (ignoring case)
        last_name_col = next((col for col in df.columns if col.lower() == 'last name'), None)
        
        if not last_name_col:
            print(f"  Error: Header found, but 'Last Name' column is missing after cleanup. Columns found: {list(df.columns)}")
            continue

        # --- GENERATE SQL ---
        count = 0
        for index, row in df.iterrows():
            # Use the flexible column name we found
            lname = row.get(last_name_col)
            
            # Skip if name is empty
            if pd.isna(lname) or str(lname).strip() == '':
                continue

            try:
                # 1. USER INFO
                raw_id = row.iloc[0]
                try:
                    current_id = int(float(raw_id)) + id_prefix
                except:
                    current_id = id_prefix + index + 1

                # Extract Name Parts
                last = str(lname).strip()
                # Find First Name column similarly
                fname_col = next((c for c in df.columns if 'first name' in c.lower()), 'First Name')
                first = str(row.get(fname_col, '')).strip()
                
                # Middle Initial (matches typo 'Inital' or correct 'Initial')
                mname_col = next((c for c in df.columns if 'middle' in c.lower()), 'Middle Inital')
                middle = str(row.get(mname_col, '')).strip()
                if middle == 'nan': middle = ''
                
                full_name = f"{first} {middle} {last}".strip().replace('  ', ' ')
                
                # Position
                pos_col = next((c for c in df.columns if c.lower() in ['position', 'status']), None)
                position = row.get(pos_col, 'Staff') if pos_col else 'Staff'

                # SQL User
                user_sql = f"INSERT INTO USERS (id, name, department, position) VALUES ({current_id}, {clean_text(full_name)}, {clean_text(dept_name)}, {clean_text(position)}) ON DUPLICATE KEY UPDATE name=VALUES(name);"
                sql_statements.append(user_sql)
                count += 1

                # 2. RETREAT RECORDS
                exclude_cols = ['Last Name', 'First Name', 'Middle Inital', 'Middle Initial', 'Position', 'Office', 'Status', 'Unnamed: 0']
                retreat_cols = [c for c in df.columns if c not in exclude_cols and "Unnamed" not in str(c)]

                for col in retreat_cols:
                    date_value = row[col]
                    
                    if pd.notna(date_value) and str(date_value).strip() != '':
                        
                        col_lower = str(col).lower()
                        retreat_type = "Retreat"
                        school_year = "TBD"

                        if "dgy" in col_lower:
                            retreat_type = str(col)
                            school_year = "2024-2025" 
                        elif "3d retreat" in col_lower:
                            retreat_type = "3D Retreat"
                            year_match = re.search(r'(\d{4}\s?-\s?\d{4})', str(col))
                            if year_match:
                                school_year = year_match.group(1)
                        
                        retreat_sql = f"INSERT INTO RETREATRECORDS (user_id, retreat_type, schoolyear, retreat_date) VALUES ({current_id}, {clean_text(retreat_type)}, {clean_text(school_year)}, {clean_text(date_value)});"
                        sql_statements.append(retreat_sql)

            except Exception as e:
                # print(f"Error row {index}: {e}")
                pass
        
        print(f"  -> Success: Generated SQL for {count} users.")
        sql_statements.append(f"-- Completed Sheet: {sheet_name}\n")

    return "\n".join(sql_statements)

# Execute shit
print("Starting Excel conversion v3...")
sql_output = generate_sql_from_excel(INPUT_FILENAME)

with open("insert_queries_from_excel.sql", "w", encoding='utf-8') as f:
    f.write(sql_output)

print("Done! Saved to insert_queries_from_excel.sql")