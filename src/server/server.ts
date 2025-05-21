import express from 'express';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send(`<!DOCTYPE html>
  <body style="margin:0px">
    <a href="/vanilla">Vanilla Html Example</a>
  </body>
  </html>`);
});

app.get('/vanilla', (req, res) => {
  res.send(`<!DOCTYPE html>
  <body style="margin:0px">
    Hello!
  </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
