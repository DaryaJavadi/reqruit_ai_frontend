const https = require('https');
const API_BASE = process.env.VITE_API_URL || 'https://reqruit-ai-backend.onrender.com';
const url = new URL('/health', API_BASE).toString();

https.get(url, (res) => {
  console.log('status', res.statusCode);
  let body = '';
  res.setEncoding('utf8');
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log('body:', body));
}).on('error', (e) => console.error('error', e.message));
