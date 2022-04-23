var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  method: 'POST',
  hostname: 'api.mailgun.net',
  path: '/v3/powerkernel.net/messages',
  headers: {
    Authorization: `Basic ${process.env.MAILGUN_API}`,
  },
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on('error', function (error) {
    console.error(error);
  });
});

var postData =
  '------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="from"\r\n\r\nBadminton Event <badminton-test@powerkernel.net>\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="to"\r\n\r\nharry@powerkernel.com\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="subject"\r\n\r\nUpcoming Badminton Events\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="template"\r\n\r\nbadminton-event\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--';

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
