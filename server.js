const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

// Initialize Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Trust the reverse proxy (Plesk/nginx/Apache)
      // Plesk terminates SSL and forwards HTTP internally
      // We need to tell Next.js the original request was HTTPS
      const proto = req.headers['x-forwarded-proto'];
      
      // If behind a proxy, ensure the protocol is set correctly
      if (!req.headers['x-forwarded-proto']) {
        req.headers['x-forwarded-proto'] = 'https';
      }

      // Force HTTPS redirect if accessed directly over HTTP
      if (proto === 'http' && !dev) {
        const host = req.headers.host || hostname;
        res.writeHead(301, {
          Location: `https://${host}${req.url}`
        });
        res.end();
        return;
      }

      // Parse request URL
      const parsedUrl = parse(req.url, true);
      
      // Handle the request with Next.js
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
      console.log(`> Environment: ${dev ? 'development' : 'production'}`);
    });
});
