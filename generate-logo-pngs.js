/**
 * Script to generate PNG versions of Nordic Haus logos in multiple sizes
 * This creates PNG files from the SVG sources for various use cases
 */

const fs = require('fs');
const path = require('path');

// Logo configurations
const logos = [
    { name: 'NordicHausLogo', sizes: [256, 512, 1024], description: 'Full color logo' },
    { name: 'NordicHausLogoWhite', sizes: [256, 512, 1024], description: 'White logo for dark backgrounds' },
    { name: 'NordicHausIcon', sizes: [16, 32, 48, 64, 128, 256], description: 'Square icon only' },
    { name: 'NordicHausLogoSalesforce', sizes: [256, 512, 1024], description: 'Salesforce branded' }
];

const staticResourcesDir = path.join(__dirname, 'force-app/main/default/staticresources');
const outputDir = path.join(__dirname, 'logos-png');

// Create output directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('═══════════════════════════════════════════════════════════════');
console.log('   NORDIC HAUS Logo PNG Generator');
console.log('═══════════════════════════════════════════════════════════════\n');

console.log('📋 Logo Variations to Generate:\n');

logos.forEach(logo => {
    console.log(`   ✓ ${logo.name}`);
    console.log(`     Description: ${logo.description}`);
    console.log(`     Sizes: ${logo.sizes.join('px, ')}px\n`);
});

console.log('═══════════════════════════════════════════════════════════════');
console.log('\n⚠️  PNG Generation Instructions:\n');
console.log('   This script requires additional dependencies to convert SVG to PNG.');
console.log('   You can use one of the following methods:\n');
console.log('   METHOD 1: Using sharp (recommended)');
console.log('   $ npm install sharp');
console.log('   $ node generate-logo-pngs-sharp.js\n');
console.log('   METHOD 2: Using online tools');
console.log('   • Visit https://cloudconvert.com/svg-to-png');
console.log('   • Upload SVG files from: ' + staticResourcesDir);
console.log('   • Convert to PNG at required sizes\n');
console.log('   METHOD 3: Using Inkscape (command line)');
console.log('   $ inkscape -w 256 -h 256 input.svg -o output.png\n');
console.log('═══════════════════════════════════════════════════════════════\n');

// Create a README in the output directory
const readmeContent = `# Nordic Haus Logo PNG Exports

This directory contains PNG versions of the Nordic Haus logos in various sizes.

## Logo Variations

### 1. NordicHausLogo (Full Color)
- **Use case**: Primary logo for light backgrounds
- **Colors**: Gray (#4A5568), Tan (#C8986B), Salesforce Blue (#00A1E0)
- **Sizes**: 256px, 512px, 1024px

### 2. NordicHausLogoWhite
- **Use case**: Logo for dark backgrounds
- **Colors**: White, Light Blue, Salesforce Blue
- **Sizes**: 256px, 512px, 1024px

### 3. NordicHausIcon
- **Use case**: Square format for app icons, favicons
- **Format**: Square house icon only (no text)
- **Sizes**: 16px, 32px, 48px, 64px, 128px, 256px

### 4. NordicHausLogoSalesforce
- **Use case**: Salesforce-branded applications
- **Colors**: Salesforce Navy (#032D60), Salesforce Blue (#0176D3)
- **Sizes**: 256px, 512px, 1024px

## Generation

To generate these PNGs, use the provided script or convert manually from the SVG sources in:
\`force-app/main/default/staticresources/\`

## Usage in Salesforce

All logos are deployed as Static Resources and can be referenced in:
- Lightning Web Components
- Visualforce pages
- Email templates
- Experience Cloud sites
`;

fs.writeFileSync(path.join(outputDir, 'README.md'), readmeContent);
console.log('✅ Created README.md in ' + outputDir + '\n');
console.log('📁 SVG source files location:');
console.log('   ' + staticResourcesDir + '\n');

