import { Router, Response, Request } from "express";
import { createSpecificationController } from "../modules/cards/useCase/createSpecification";
import { listSpecificationController } from "../modules/cards/useCase/listSpecification";

const specificationRouter = Router();

specificationRouter.post("/", (req: Request, res: Response) => {
    createSpecificationController.handle(req, res);
});

specificationRouter.get("/", (req: Request, res: Response) => {
    listSpecificationController.handle(req, res)
});

export { specificationRouter };
