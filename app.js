require("dotenv").config();
require("./config/db");
const express = require("express");
const app = express();
const routes = require("./routes/index");
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`listing server on http://localhost:${port}`);
});
