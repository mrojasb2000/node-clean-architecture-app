import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasource, AuthRepository } from "../../domain";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();

        // Datasource and Repository
        const datasource: AuthDatasource = new AuthDatasourceImpl();
        const authRepository: AuthRepository = new AuthRepositoryImpl(datasource);

        const controller = new AuthController(authRepository);

        router.use('/login', controller.loginUser)
        router.use('/register', controller.registerUser)
        return router;
    }
}