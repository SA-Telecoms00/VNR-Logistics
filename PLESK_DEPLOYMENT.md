# VNR Logistics - Plesk Deployment Guide

This guide will help you deploy the VNR Logistics Next.js website on Plesk hosting.

## Prerequisites

- Plesk panel with Node.js support enabled
- Node.js version 18.x or higher
- SSH access to your server (recommended)
- Domain configured in Plesk

---

## Deployment Steps

### 1. Upload Files to Plesk

Upload all project files to your domain's document root (usually `httpdocs` or `public_html`).

**Option A: Via FTP/SFTP**
- Connect to your server using FTP/SFTP
- Upload all files to the document root

**Option B: Via Git (Recommended)**
- In Plesk, go to **Git** under your domain
- Add repository: `https://github.com/SA-Telecoms00/VNR-Logistics.git`
- Set deployment path to document root
- Click **Pull Updates**

### 2. Configure Node.js in Plesk

1. Go to **Domains** → Select your domain
2. Click on **Node.js**
3. Enable Node.js for this domain
4. Configure settings:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/` (or your document root path)
   - **Application startup file**: `server.js`
   - **Custom environment variables** (add these):
     ```
     NODE_ENV=production
     PORT=3000
     ```

### 3. Install Dependencies

**Option A: Via Plesk Node.js Interface**
1. In the Node.js settings page
2. Click **NPM Install** button
3. Wait for dependencies to install

**Option B: Via SSH**
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
npm install --production
```

### 4. Build the Application

**Via SSH (Recommended):**
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
npm run build
```

**Via Plesk:**
1. Go to **Node.js** settings
2. Click **Run Script**
3. Enter: `build`
4. Click **Run**

### 5. Start the Application

1. In Plesk Node.js settings
2. Click **Enable Node.js**
3. Click **Restart App**

Your website should now be running!

---

## Environment Variables (Optional)

If you need to set custom environment variables:

1. Go to **Node.js** settings in Plesk
2. Scroll to **Environment Variables**
3. Add variables:
   ```
   NODE_ENV=production
   PORT=3000
   HOSTNAME=yourdomain.com
   ```

---

## Troubleshooting

### Application Won't Start

**Check Node.js version:**
- Ensure Node.js 18.x or higher is selected
- Go to Node.js settings and verify version

**Check logs:**
1. In Plesk, go to **Logs** under your domain
2. Check **Error Log** for issues
3. Common issues:
   - Missing dependencies: Run `npm install`
   - Build not completed: Run `npm run build`
   - Port conflict: Change PORT environment variable

### 502 Bad Gateway Error

**Solution:**
1. Restart the Node.js application in Plesk
2. Check if port 3000 is available
3. Verify `server.js` file exists in root directory

### Application Crashes After Restart

**Check memory limits:**
1. Go to **Service Plans** in Plesk
2. Increase memory limit if needed (recommended: 512MB minimum)

**Check startup file:**
1. Verify `server.js` is set as the startup file
2. Ensure file has correct permissions (644)

---

## Performance Optimization

### Enable Production Mode

Ensure `NODE_ENV=production` is set in environment variables.

### Use Process Manager (PM2) - Advanced

For better process management:

```bash
npm install -g pm2
pm2 start server.js --name vnr-logistics
pm2 save
pm2 startup
```

### Enable Caching

1. In Plesk, go to **Apache & nginx Settings**
2. Enable **Proxy mode**
3. Add caching rules for static assets

---

## Updating the Website

### Via Git (Recommended)

1. Go to **Git** in Plesk
2. Click **Pull Updates**
3. Go to **Node.js** settings
4. Click **NPM Install** (if dependencies changed)
5. Run `build` script
6. Click **Restart App**

### Via FTP

1. Upload changed files via FTP
2. SSH into server and run:
   ```bash
   npm run build
   ```
3. Restart app in Plesk Node.js settings

---

## Important Files

- `server.js` - Custom server for Plesk hosting
- `package.json` - Dependencies and scripts
- `.next/` - Built application (generated after `npm run build`)
- `public/` - Static assets (images, documents)

---

## Support

For issues specific to:
- **Plesk configuration**: Contact your hosting provider
- **Website functionality**: Check GitHub repository issues
- **Node.js errors**: Check Plesk error logs

---

## Quick Command Reference

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Start with custom server (Plesk)
node server.js

# Check Node.js version
node --version

# Check npm version
npm --version
```

---

**Last Updated:** March 17, 2026
