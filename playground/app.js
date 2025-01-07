import path from "path";
import express from "express";
import bodyParser from "body-parser";
import adminData from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import rootDir from "./util/path.js";
import { engine } from "express-handlebars";
const app = express();

// app.engine(
//   "hbs",
//   engine({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main",
//     extname: "hbs",
//   })
// );
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Not Found" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
