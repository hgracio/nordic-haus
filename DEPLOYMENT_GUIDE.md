# Nordic Haus - Deployment Guide

## 🚀 Deploy to GitHub Pages (HTTPS)

### Why GitHub Pages?
✅ **Free HTTPS hosting** - Resolves Private Network Access warnings
✅ **Automatic SSL certificate** - Secure by default
✅ **Fast CDN** - Global content delivery
✅ **No server management** - Just push and it's live

### Steps to Deploy:

1. **Enable GitHub Pages** (One-time setup):
   - Go to: https://github.com/hgracio/nordic-haus
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select **"Deploy from a branch"**
   - Choose **"main"** branch and **"/ (root)"** folder
   - Click **Save**

2. **Wait 1-2 minutes** for deployment

3. **Access your site**:
   - URL: `https://hgracio.github.io/nordic-haus/`
   - The Embedded Service will work perfectly with NO warnings

### ✅ Result:
- ✅ HTTPS website (secure)
- ✅ HTTPS Salesforce resources (secure)
- ✅ No Private Network Access warnings
- ✅ Agentforce bot works flawlessly

---

## 🛠️ Solution 2: Local Development with HTTPS

If you need to test locally before deploying:

### Option A: Python Simple HTTPS Server

```bash
# Navigate to project directory
cd "/Users/hgracio/Documents/Furnishing Retailer"

# Generate self-signed certificate (one-time)
openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes

# Start HTTPS server
python3 -m http.server 8000 --bind 127.0.0.1
```

Then access: `https://localhost:8000`

### Option B: Node.js with http-server

```bash
# Install http-server globally
npm install -g http-server

# Start with HTTPS
http-server -S -C cert.pem -K key.pem -p 8080
```

### Option C: VS Code Live Server Extension

1. Install **Live Server** extension in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**
4. Access at `http://127.0.0.1:5500` (local development mode)

**Note:** Chrome warnings may still appear with self-signed certificates during local development. This is expected and safe for local testing.

---

## 🔧 Solution 3: Disable Warning (Development Only)

**⚠️ Only for local testing - DO NOT use in production!**

### Chrome Flags (Temporary Override):

1. Open: `chrome://flags/`
2. Search for: **"Block insecure private network requests"**
3. Set to: **"Disabled"**
4. Restart Chrome

**Warning:** This disables a security feature. Re-enable after testing!

---

## 🎯 Recommended Workflow

### For Development:
```bash
# Test locally with simple HTTP (warnings expected)
python3 -m http.server 8000
# Access: http://localhost:8000
```

### For Production/Testing Bot:
```
# Deploy to GitHub Pages (HTTPS - no warnings)
1. Push code to GitHub
2. Enable Pages in Settings
3. Access: https://hgracio.github.io/nordic-haus/
```

---

## 📊 Why This Happens

| Scenario | Website Protocol | Salesforce Protocol | Result |
|----------|-----------------|---------------------|---------|
| **Local File** | `file://` | `https://` | ⚠️ Warning |
| **Local HTTP** | `http://localhost` | `https://` | ⚠️ Warning |
| **GitHub Pages** | `https://` | `https://` | ✅ Perfect |
| **Production HTTPS** | `https://` | `https://` | ✅ Perfect |

---

## 🆘 Current Issue Summary

**What you're seeing:**
```
⚠️ Private Network Access warning
Files: bootstrap.min.js, init.min.css, rpc-manager.iife.js, lwc
```

**Why:**
- Opening `index.html` locally (file:// or http://)
- Salesforce loads from https:// (secure)
- Chrome flags this as mixed security context

**Fix:**
Deploy to GitHub Pages for HTTPS → Warnings disappear completely!

---

## 📝 Quick Deploy Commands

```bash
# Ensure latest code is pushed
git add .
git commit -m "Ready for GitHub Pages deployment"
git push origin main

# Then enable Pages in GitHub Settings (one-time)
# Your site will be live at: https://hgracio.github.io/nordic-haus/
```

---

**Last Updated:** 2025-11-20
**For:** Hugo Gracio - Nordic Haus Project

