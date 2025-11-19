# 🎨 Nordic Haus Salesforce Branding - Step-by-Step Walkthrough

## ✅ Browser Tabs Opened for You

I've opened these Salesforce Setup pages in your browser:
1. **Company Information** - Upload company logo
2. **Themes and Branding** - Configure Lightning Experience theme
3. **App Manager** - Configure app logos

Follow the steps below in order.

---

## 📋 Step 1: Upload the Nordic Haus Logo (REQUIRED FIRST)

**Before proceeding, save the Nordic Haus circular logo as:**
```
/Users/hgracio/Documents/Furnishing Retailer/images/nordic-haus-logo.png
```

---

## 🏢 Step 2: Company Information

**Current Tab: Company Information**

1. Click the **Edit** button
2. Scroll to **Company Logo** section
3. Click **Choose File** or drag-and-drop the logo:
   - File: `images/nordic-haus-logo.png`
4. Click **Save**

✅ **Verification**: The logo should appear in the header of some Salesforce pages

---

## 🎨 Step 3: Themes and Branding

**Current Tab: Themes and Branding**

### Create New Theme:

1. Click **New Theme** (or edit existing if you have one)
2. **Theme Details:**
   - Name: `Nordic Haus`
   - Description: `Nordic Haus branded theme with company colors`

3. **Upload Images:**
   - **Brand Image** (Header Logo):
     - Upload: `images/nordic-haus-logo.png`
     - Description: "Nordic Haus Logo"
   
   - **Brand Image Small** (Optional, for compact views):
     - Upload: Same logo or smaller version
   
   - **Loading Image** (Optional):
     - Can use logo or leave default

4. **Configure Colors:**
   
   **Action Bar:**
   - Background Color: `#4A5568` (Nordic Gray)
   - Text Color: `#FFFFFF` (White)
   
   **Brand Color:**
   - Brand Color: `#C8986B` (Nordic Gold)
   
   **Accent Colors:**
   - Default Action Color: `#00A1E0` (Salesforce Blue)
   - Default Action Hover: `#0176D3` (Darker Blue)
   
   **Navigation Bar:**
   - Background: `#2D3748` (Darker Gray)
   - Items Text: `#FFFFFF` (White)
   
   **Header:**
   - Background: `#FFFFFF` (White)
   - Text: `#1A202C` (Dark Gray)

5. **Page Background:**
   - Background Color: `#F7FAFC` (Very Light Gray)

6. Click **Save**

7. **Activate Theme:**
   - Click **Activate** button
   - Confirm activation

✅ **Verification**: Refresh any Lightning page - you should see Nordic Haus colors

---

## 📱 Step 4: App Manager (Configure App Logos)

**Navigate to: Setup → App Manager**

For each app you want to brand:

1. Find your main app (e.g., "Sales", "Service", or custom app)
2. Click the dropdown arrow → **Edit**
3. Go to **App Branding** or **Branding** tab
4. **Upload App Logo:**
   - Click **Upload Image**
   - Select: `images/nordic-haus-logo.png`
5. **Configure:**
   - App Logo Subtitle: "Nordic Haus"
   - Primary Color: `#4A5568`
6. Click **Save**

Repeat for other apps as needed.

---

## 📧 Step 5: Email Letterhead (Optional but Recommended)

**Navigate to: Setup → Classic Email Templates → Letterheads**

1. Click **New Letterhead**
2. **Letterhead Properties:**
   - Name: `Nordic Haus Letterhead`
   - Active: ✓ Checked
3. **Header:**
   - Logo Type: Upload Image
   - Upload: `images/nordic-haus-logo.png`
   - Logo Height: 100px
   - Logo Position: Left
   - Background Color: `#FFFFFF`
4. **Top Line:**
   - Text: "NORDIC HAUS"
   - Font: Arial, 24pt, Bold
   - Color: `#4A5568`
5. **Middle Line:**
   - Text: "Functional Furniture & Home Goods"
   - Font: Arial, 14pt
   - Color: `#C8986B`
6. Click **Save**

**Create Email Template Using This Letterhead:**
- Setup → Email Templates
- Use the Nordic Haus letterhead for your templates

---

## 🌐 Step 6: Experience Cloud/Sites (If Applicable)

If you have Experience Cloud sites:

**Navigate to: Setup → All Sites**

1. Find your site
2. Click **Builder**
3. Click **Settings** (gear icon) → **General**
4. **Branding:**
   - Company Logo: Upload `images/nordic-haus-logo.png`
   - Login Page Logo: Same logo
5. **Theme:**
   - Go to **Theme** section
   - Set Primary Color: `#4A5568`
   - Set Secondary Color: `#C8986B`
   - Set Accent Color: `#00A1E0`
6. Click **Publish**

---

## 📊 Step 7: Reports and Dashboards

**Create a Branded Dashboard Header:**

1. Navigate to **Reports & Dashboards**
2. Create or edit a dashboard
3. Add **Image** component at the top
4. Upload: `images/nordic-haus-logo.png`
5. Set size: 200px width
6. Save dashboard

---

## 📄 Step 8: Lightning App Builder Pages

**Add Logo to Home Page:**

1. Navigate to: Setup → Lightning App Builder
2. Edit **Home Page Default** (or your custom home page)
3. Drag **Rich Content** or **Image** component to header area
4. Click the component
5. Select **Upload Image** → Upload logo
6. Set alignment: Center or Left
7. Click **Save** → **Activate**

---

## 📱 Step 9: Mobile App Configuration (Optional)

**Navigate to: Setup → Salesforce Mobile App**

1. Go to **Branding** section
2. Upload logo
3. Set brand colors:
   - Primary: `#4A5568`
   - Secondary: `#C8986B`
4. Save changes

---

## ✅ Verification Checklist

After completing all steps, verify the logo appears in:

- [ ] Lightning Experience header (top navigation)
- [ ] Company Information page
- [ ] App tiles/icons in App Launcher
- [ ] Email letterheads
- [ ] Experience Cloud login page (if applicable)
- [ ] Experience Cloud header (if applicable)
- [ ] Dashboards with logo component
- [ ] Home page (if configured)
- [ ] Mobile app (if configured)

---

## 🎨 Quick Reference: Nordic Haus Brand Colors

```
Nordic Gray (Primary):     #4A5568
Nordic Gold (Secondary):   #C8986B
Salesforce Blue (Accent):  #00A1E0
Dark Blue (Hover):         #0176D3
White:                     #FFFFFF
Light Gray (Background):   #F7FAFC
Dark Gray (Text):          #1A202C
```

---

## 🔄 If Logo Doesn't Appear

1. **Clear browser cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check file format**: Ensure PNG format with transparency
3. **Check file size**: Must be under 5MB
4. **Reupload**: Try uploading again
5. **Wait**: Some changes take a few minutes to propagate

---

## 💡 Pro Tips

1. **Consistency**: Use the same logo everywhere for brand consistency
2. **File Size**: Optimize the logo to be under 100KB for faster loading
3. **Format**: PNG with transparent background works best
4. **Dimensions**: 400x400px minimum, square aspect ratio
5. **Testing**: View in both Light and Dark themes if users have both
6. **Mobile**: Test on Salesforce Mobile App to ensure logo looks good

---

## 🆘 Need Help?

If you encounter issues:
1. Check the logo file exists: `ls -lh images/nordic-haus-logo.png`
2. Verify file permissions
3. Try a different browser
4. Contact Salesforce support if branding options are missing

---

## 📝 Summary

You've now branded your Salesforce org with:
✓ Company logo
✓ Custom theme with Nordic Haus colors
✓ App branding
✓ Email letterheads
✓ Optional: Experience Cloud, dashboards, mobile app

**Your Salesforce org now has a professional, consistent Nordic Haus brand experience! 🎉**

