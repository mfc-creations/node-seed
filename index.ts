import express from "express";
import sequelize from "./models";
import AuthRoutes from "./routes/auth.routes";

const app = express();
const port = process.env.PORT || 3000;

const routes = [new AuthRoutes()];

routes.forEach((route) => app.use("/api", route.router));

sequelize.authenticate().then(async () => {
  await sequelize.sync();
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
