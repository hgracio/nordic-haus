# Nordic Haus - Embedded Service Branding Configuration

## How to Update Branding for Nordic_Haus_Agent

Since Embedded Service Branding for Web V2 (Embedded Messaging) has limited Metadata API support, follow these steps to update the branding through the Salesforce UI:

### Step 1: Navigate to Embedded Service Deployments
1. Log in to your Salesforce org: `https://orgfarm-37c511d2f9.my.salesforce.com`
2. Go to **Setup** → Search for "Embedded Service Deployments"
3. Click on **Embedded Service Deployments**

### Step 2: Open Nordic_Haus_Agent Configuration
1. Find and click on **Nordic_Haus_Agent** deployment
2. Click **Edit** or navigate to the branding section

### Step 3: Update Branding Settings

#### Colors (Salesforce Blue Theme):
- **Primary Color**: `#00A1E0` (Salesforce Light Blue)
- **Secondary Color**: `#0176D3` (Salesforce Dark Blue)
- **Background Color**: `#E6F4F9` (Light Blue)
- **Contrast Color**: `#FFFFFF` (White)
- **Text Color**: `#032D60` (Salesforce Navy)

#### Images (Use Nordic Haus Assets):

**Company Logo / Brand Image:**
- Click "Upload" or "Choose from Files"
- Select Static Resource: `NordicHausLogo`
- This is the full Nordic Haus logo with house icon and text

**Avatar / User Icon:**
- Click "Upload" or "Choose from Files"  
- Select Static Resource: `NordicHausAvatarMinimal`
- This is the minimal flat design avatar (200x200px)

**Alternative Avatar Options:**
- `NordicHausAvatar` - Circular with gradient (for profile pictures)
- `NordicHausAvatarSquare` - Square with rounded corners
- `NordicHausAvatarDark` - Dark theme version

#### Typography:
- **Font Family**: Salesforce Sans (or Arial as fallback)
- **Font Size**: 16px

### Step 4: Preview and Save
1. Use the **Preview** button to see how it looks
2. Test on both desktop and mobile views
3. Click **Save** when satisfied with the appearance

### Step 5: Verify on Website
1. Visit your website: Nordic Haus website
2. Click on the chat button (bottom-right corner)
3. Verify that:
   - The Nordic Haus avatar appears
   - The logo is visible in the chat header
   - Colors match the Nordic Haus brand (#00A1E0 Salesforce Blue)

## Available Static Resources

All Nordic Haus branding assets are deployed to your org:

### Logos (Full):
- ✅ **NordicHausLogo** (`081gL000000jFisQAE`) - Full color, recommended for header
- ✅ **NordicHausLogoWhite** - White version for dark backgrounds
- ✅ **NordicHausLogoSalesforce** - Salesforce branded colors
- ✅ **NordicHausIcon** - Icon only (square format)

### Avatars (200x200px):
- ✅ **NordicHausAvatar** (`081gL000000jFm5QAE`) - Circular with gradient
- ✅ **NordicHausAvatarMinimal** (`081gL000000jFm7QAE`) - **RECOMMENDED** for bot
- ✅ **NordicHausAvatarSquare** - Square with rounded corners
- ✅ **NordicHausAvatarDark** - Dark theme with border

## Branding Best Practices

### Recommended Configuration:
1. **Header/Logo**: Use `NordicHausLogo` for the company branding
2. **Bot Avatar**: Use `NordicHausAvatarMinimal` for the agent/bot icon
3. **Primary Color**: `#00A1E0` (matches website and Salesforce)
4. **Background**: Keep light (`#E6F4F9`) for easy readability

### Why These Choices:
- **NordicHausAvatarMinimal**: Clean, simple design that works at small sizes
- **NordicHausLogo**: Professional full logo with brand recognition
- **Salesforce Blue (#00A1E0)**: Consistent with website and Salesforce ecosystem

## Troubleshooting

### If images don't appear:
1. Verify Static Resources are deployed (check list above)
2. Ensure Static Resources are set to "Public" cache control
3. Clear browser cache and reload
4. Check that file types are `image/svg+xml`

### If colors don't apply:
1. Enter hex codes WITH the `#` symbol
2. Use 6-digit hex codes (not 3-digit)
3. Save and refresh the deployment

## Alternative: API/Metadata Approach

**Note**: Embedded Service Branding for Web V2 currently has limited Metadata API support. The UI method above is the recommended approach. If you need to automate this, consider using:
- Salesforce CLI with `sf force:source:push` (may have limitations)
- Custom Apex or REST API calls to update configuration
- Selenium/automated browser testing for UI updates

## References

- Embedded Service Deployment ID: `04IgL00000062aDUAQ`
- Deployment Name: `Nordic_Haus_Agent`
- Site URL: `https://orgfarm-37c511d2f9.my.site.com/ESWNordicHausAgent1763644200189`
- Salesforce Org: `00DgL00000Etw1h` (nordic-haus)

---

**Last Updated**: 2025-11-20
**Created By**: AI Assistant for Hugo Gracio

