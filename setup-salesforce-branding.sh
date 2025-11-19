#!/bin/bash
# Setup script for Nordic Haus Salesforce branding

echo "📦 Nordic Haus - Salesforce Branding Setup"
echo "=========================================="
echo ""

# Check if logo exists
if [ ! -f "images/nordic-haus-logo.png" ]; then
    echo "⚠️  Logo file not found!"
    echo "Please save the Nordic Haus logo as: images/nordic-haus-logo.png"
    exit 1
fi

echo "✓ Logo file found"
echo ""

# Copy logo to static resources
echo "📋 Copying logo to Static Resources..."
cp images/nordic-haus-logo.png force-app/main/default/staticresources/NordicHausLogo.png

if [ $? -eq 0 ]; then
    echo "✓ Logo copied successfully"
else
    echo "✗ Failed to copy logo"
    exit 1
fi

echo ""
echo "🚀 Deploying to Salesforce org: nordic-haus..."
sf project deploy start --source-dir force-app/main/default/staticresources --target-org nordic-haus

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ Deployment successful!"
    echo ""
    echo "📝 Next Steps:"
    echo "1. Go to Setup → Company Settings → Company Information"
    echo "2. Upload the logo as Company Logo"
    echo "3. Go to Setup → Themes and Branding"
    echo "4. Create/edit theme with Nordic Haus colors"
    echo ""
    echo "Opening Salesforce Setup..."
    sf org open --target-org nordic-haus --path "/lightning/setup/CompanyInformation/home"
else
    echo "✗ Deployment failed"
    exit 1
fi
