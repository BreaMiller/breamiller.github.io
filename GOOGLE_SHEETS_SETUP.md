# Google Sheets Integration Setup

## Overview
The contact form automatically submits data to a Google Sheet via Google Apps Script.

## Setup Instructions

### 1. Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Replace all code with the following:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add header row if empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
  }
  
  // Add form data
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.subject,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
}
```

### 2. Deploy Google Apps Script
1. Click **Deploy** → **New Deployment**
2. Select type: **Web app**
3. Execute as: **Your account**
4. Allow access to: **Anyone**
5. Click **Deploy**
6. Copy the deployment URL (format: `https://script.googleapis.com/macros/d/{DEPLOYMENT_ID}/useTrigger`)

### 3. Configure Environment Variable
1. Open `.env` file in the project root
2. Replace `YOUR_DEPLOYMENT_ID` with your actual deployment ID from step 2
3. Example:
   ```
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.googleapis.com/macros/d/AKfycbx1234567890abcdefg/useTrigger
   ```

### 4. Test the Form
1. Run `npm run dev`
2. Open the contact form and submit a test entry
3. Check your Google Sheet - the data should appear automatically!

## Security Notes
- The `.env` file is in `.gitignore` and will not be committed to GitHub
- The `.env.example` file shows the format for other developers
- The Google Apps Script URL is sensitive - keep it private
- Vite exposes only variables prefixed with `VITE_` for frontend use

## How It Works
1. User submits contact form
2. Frontend sends JSON data to Google Apps Script webhook
3. Google Apps Script receives POST request
4. Script parses the data and appends a new row to Google Sheet
5. User sees "Message Sent!" confirmation
6. Data is automatically saved in Google Sheet with timestamp

## Troubleshooting

### Form not submitting
- Check browser console for error messages
- Verify `VITE_GOOGLE_APPS_SCRIPT_URL` is set correctly in `.env`
- Ensure Google Apps Script is deployed as "Web app" with "Anyone" access

### Google Apps Script returns error
- Check the Apps Script execution log (Apps Script dashboard → Execution)
- Verify the Google Sheet is accessible to your account
- Make sure the sheet has write permissions

### Data not appearing in Sheet
- Check that you're looking at the correct sheet
- Verify the script was deployed after code changes
- Try a fresh deployment with new version number
