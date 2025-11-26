┌─────────────────────────────────────────────────────────────────────────────┐
│ STAFF CREATES RECORD │
└─────────────────────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. AddRecord.js (Frontend Component) │
│ - Staff fills form: name, department, retreat types, etc. │
│ - Clicks "Add" button │
│ - Calls: fetchCreateRecord(formData) │
└─────────────────────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 2. fetchCreateRecord.js (Fetch Function) │
│ - POST /api/records/create │
│ - Sends: { user, school_year, retreat_types } │
│ - Includes JWT token in cookies │
└─────────────────────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 3. /api/records/create/route.js (API Endpoint) │
│ - Extracts JWT from cookies │
│ - Decodes to get: { id, username, role } │
│ - Checks role: │
│ ├── If ADMINISTRATOR → Direct insert to database │
│ └── If STAFF → Create pending change │
└─────────────────────────────────────────────────────────────────────────────┘
│
┌───────────────┴───────────────┐
│ │
▼ ▼
┌───────────────────┐ ┌───────────────────────────┐
│ ADMINISTRATOR │ │ STAFF │
│ Direct Insert │ │ Pending Change │
└───────────────────┘ └───────────────────────────┘
│ │
▼ ▼
┌───────────────────┐ ┌───────────────────────────┐
│ INSERT INTO │ │ 1. Create change_batches │
│ users + retreat │ │ status: 'Draft' │
│ \_records tables │ │ │
│ │ │ 2. Create pending_changes│
│ Response: │ │ action_type: 'INSERT' │
│ { success, │ │ old_values: null │
│ status: 'saved'│ │ new_values: {data} │
│ } │ │ │
└───────────────────┘ │ Response: │
│ { success, │
│ status: 'pending', │
│ batch_id: 5 │
│ } │
└───────────────────────────┘
