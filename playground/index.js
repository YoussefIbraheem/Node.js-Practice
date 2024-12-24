import express from "express";
import router from "./routes/admin.js";
import bodyParser from "body-parser";
import path from 'path'
import helpers from "./helpers/path.js";

const app = express();

const adminRoutes = router;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.get("/", (req, res, next) => {
  res.send(
    "<h1>Hello from Express!</h1><br><a href='/admin/add-product'>Add Product</a>"
  );
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(helpers.rootDir,'views','404.html'))
});

const expressPort = 3000;
app.listen(expressPort, () => {
  console.log(`Express app running at http://localhost:${expressPort}`);
});
