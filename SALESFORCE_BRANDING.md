# Salesforce Org Branding Setup - Nordic Haus

## Overview
This guide helps you brand your Salesforce org with the Nordic Haus logo.

## Prerequisites
- Nordic Haus logo image saved as: `/images/nordic-haus-logo.png`
- Salesforce CLI connected to org: `nordic-haus`

## Step 1: Upload Logo as Static Resource

The logo has been configured as a Static Resource. To deploy:

```bash
# Copy the logo to static resources
cp images/nordic-haus-logo.png force-app/main/default/staticresources/NordicHausLogo.png

# Deploy to Salesforce
sf project deploy start --source-dir force-app/main/default/staticresources --target-org nordic-haus
```

## Step 2: Update Company Information

### Via Setup UI:
1. Go to **Setup** → **Company Settings** → **Company Information**
2. Click **Edit**
3. Upload the Nordic Haus logo in the **Company Logo** section
4. Set dimensions: 400x400 pixels (recommended)
5. Click **Save**

### Via Themes and Branding:
1. Go to **Setup** → **User Interface** → **Themes and Branding**
2. Create a new theme or edit the existing one
3. Upload Nordic Haus logo as:
   - **Brand Image**: Header logo
   - **Brand Image Small**: Compact logo
   - **Page Background**: Optional background
4. Set **Theme Colors**:
   - Primary: `#4A5568` (Nordic Gray)
   - Secondary: `#C8986B` (Nordic Gold)
   - Accent: `#00A1E0` (Salesforce Blue)
5. **Activate** the theme

## Step 3: Update Lightning Experience Branding

### App Manager:
1. Go to **Setup** → **App Manager**
2. Edit your app (e.g., "Sales", "Service")
3. Click on **Branding** tab
4. Upload Nordic Haus logo as **App Logo**
5. Save

### Lightning App Builder:
1. Go to **Setup** → **User Interface** → **Lightning App Builder**
2. Edit Home Page or any Lightning page
3. Use **Rich Content** or **Image** component
4. Add Nordic Haus logo from Static Resources
5. Publish

## Step 4: Email Templates and Letterhead

### Classic Email Templates:
1. Go to **Setup** → **Classic Email Templates** → **Letterheads**
2. Create new letterhead
3. Upload Nordic Haus logo
4. Use in email templates

### Lightning Email Templates:
1. Use the logo URL from Static Resources:
   - `/resource/NordicHausLogo`
2. Insert in email template HTML

## Step 5: Experience Cloud (Communities/Sites)

If you have Experience Cloud:
1. Go to **Setup** → **All Sites**
2. Click **Builder** for your site
3. Go to **Settings** → **Branding**
4. Upload Nordic Haus logo as:
   - **Company Logo**
   - **Login Page Logo**
5. Publish changes

## Step 6: Reports and Dashboards

### Dashboard Logo:
1. Create a Dashboard
2. Add an **Image** component
3. Upload Nordic Haus logo
4. Position it in the header

## Step 7: PDF Documents and Printable Views

### Configure via Visualforce:
```html
<apex:image value="{!$Resource.NordicHausLogo}" 
            alt="Nordic Haus" 
            width="200" 
            height="200"/>
```

## Step 8: Mobile App Branding

1. Go to **Setup** → **Mobile Publisher** or **Salesforce Mobile App**
2. Configure **App Branding**
3. Upload Nordic Haus logo
4. Set app colors to match brand

## Quick Deployment Commands

```bash
# Deploy all branding assets
cd "/Users/hgracio/Documents/Furnishing Retailer"
cp images/nordic-haus-logo.png force-app/main/default/staticresources/NordicHausLogo.png
sf project deploy start --source-dir force-app/main/default/staticresources --target-org nordic-haus

# Open org to configure branding
sf org open --target-org nordic-haus --path "/lightning/setup/CompanyInformation/home"
```

## Logo Specifications

- **Format**: PNG (with transparency recommended)
- **Dimensions**: 400x400 pixels minimum
- **File Size**: < 5MB
- **Color Mode**: RGB
- **Background**: Transparent or white

## Brand Colors

Use these colors consistently across Salesforce:
- **Nordic Gray**: `#4A5568` (Primary text, backgrounds)
- **Nordic Gold**: `#C8986B` (Accents, highlights)
- **Salesforce Blue**: `#00A1E0` (CTAs, buttons)
- **White**: `#FFFFFF` (Backgrounds)
- **Light Gray**: `#F3F4F6` (Subtle backgrounds)

## Verification

After setup, verify the logo appears in:
- [ ] Lightning Experience header
- [ ] Company Information page
- [ ] Email letterheads
- [ ] Mobile app
- [ ] Reports/Dashboards
- [ ] Experience Cloud sites (if applicable)
- [ ] Login page

## Troubleshooting

**Logo not appearing?**
1. Clear browser cache
2. Verify Static Resource is deployed
3. Check file permissions
4. Ensure image format is supported

**Logo too large/small?**
- Adjust in Themes and Branding settings
- Resize image before upload
- Use CSS if embedded via components

## Support

For questions, contact your Salesforce administrator or refer to:
- [Salesforce Branding Documentation](https://help.salesforce.com/)
- Nordic Haus IT Support


