import express from "express";
const app = express();

app.get('/', (req, res) => {
  res.send('Hello with typeScript 1');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`TypeScriptApp: listening on port ${port}`);
});