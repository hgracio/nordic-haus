# Static Resources

## Nordic Haus Logo

**Required Action**: Copy the Nordic Haus logo to this directory:

```bash
cp ../../images/nordic-haus-logo.png NordicHausLogo.png
```

Once copied, deploy to Salesforce:

```bash
sf project deploy start --source-dir . --target-org nordic-haus
```

The logo will be accessible in Salesforce as:
- Static Resource Name: `NordicHausLogo`
- URL: `/resource/NordicHausLogo`

