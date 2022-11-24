import { Request, Response, NextFunction } from "express";
import { SignupDTO } from "../dtos/auth.dto";
class AuthController {
  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: SignupDTO = req.body;
    } catch (err) {}
  };
}

export default AuthController;
