import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryControler {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase;
  }

  handle(req: Request, res: Response): Response {
    const categoriesList = this.listCategoryUseCase.execute();
    return res.json(categoriesList);
  }
}
export { ListCategoryControler };
