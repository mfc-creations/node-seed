import { Router } from "express";
import Route from "../interface/routes.interface";

class AuthRoutes implements Route {
  public router = Router();
  public path = "/auth";

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/signup`, (req, res) =>
      res.json({ message: "Success" })
    );
  }
}

export default AuthRoutes;
