const fs = require('fs');
const path = require('path');
const https = require('https');

// IndexNow 配置
const INDEXNOW_KEY = require('fs').readFileSync(require('path').join(__dirname, '../public/indexnow-key.txt'), 'utf8').trim();
const SITE_URL = 'https://outsideweb.net';

// 获取所有文章 URL
function getAllPostUrls() {
  const postsDir = path.join(__dirname, '../content/posts');
  const files = fs.readdirSync(postsDir);

  const urls = [
    SITE_URL, // 首页
    `${SITE_URL}/rankings`, // 排行榜
    `${SITE_URL}/about`, // 关于
    `${SITE_URL}/standards`, // 收录标准
  ];

  // 添加所有文章 URL
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const slug = file.replace('.md', '');
      urls.push(`${SITE_URL}/post/${slug}`);
    }
  });

  return urls;
}

// 提交到 IndexNow (Bing)
function submitToIndexNow(urls) {
  const payload = JSON.stringify({
    host: 'outsideweb.net',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/indexnow-key.txt`,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log('✅ Successfully submitted to IndexNow (Bing)');
          console.log(`📊 Submitted ${urls.length} URLs`);
          resolve(data);
        } else {
          console.log('❌ Failed:', data);
          reject(new Error(`Status: ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Error:', error.message);
      reject(error);
    });

    req.write(payload);
    req.end();
  });
}

// 主函数
async function main() {
  console.log('🚀 Starting IndexNow submission...');
  console.log(`📍 Site: ${SITE_URL}`);

  try {
    const urls = getAllPostUrls();
    console.log(`📝 Found ${urls.length} URLs to submit`);

    await submitToIndexNow(urls);

    console.log('\n✅ IndexNow submission completed!');
    console.log('\n📌 Next steps:');
    console.log('1. Verify key at: https://outsideweb.net/indexnow-key.txt');
    console.log('2. Check Bing Webmaster Tools: https://www.bing.com/webmasters');
    console.log('3. Wait 24-48 hours for indexing');

  } catch (error) {
    console.error('❌ Submission failed:', error.message);
    process.exit(1);
  }
}

main();
