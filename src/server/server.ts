import express from 'express';

const staticAssetDir = './static';

const app = express();
const port = 3000;

// Serve all webpack generated stuff from a /static directory
app.use('/static', express.static(staticAssetDir));

app.get('/', async (req, res) => {
  res.send(`<!DOCTYPE html>
  <body style="margin:0px">
    <a href="/static/vanilla/vanilla.html">Vanilla Html Example</a>
  </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
