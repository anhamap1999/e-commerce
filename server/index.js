const express = require("express");

const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("LISTEN TO PORT ", 5000);
});
