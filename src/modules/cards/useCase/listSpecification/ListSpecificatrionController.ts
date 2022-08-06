import { Request, Response } from "express";
import { ListSpeficationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpeficationUseCase: ListSpeficationUseCase) {
    this.listSpeficationUseCase = listSpeficationUseCase;
  }

  handle(req: Request, res: Response): Response {
    const specificationList = this.listSpeficationUseCase.execute();

    return res.json(specificationList);
  }
}
export { ListSpecificationController };
