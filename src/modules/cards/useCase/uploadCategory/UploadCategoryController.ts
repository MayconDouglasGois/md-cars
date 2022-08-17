import { Request, Response } from "express";

import { UploadCategoryUseCase } from "./UploadCategoryUseCase";

class UploadCategoryController {
  constructor(private uploadCategoryUseCase: UploadCategoryUseCase) {
    this.uploadCategoryUseCase = uploadCategoryUseCase;
  }

  handle(req: Request, res: Response): Response {
    const { file } = req;
    ///////////////
    //verificar correção da tipagem dos dados
    this.uploadCategoryUseCase.execute(file as Express.Multer.File);
    //verificar correção da tipagem dos dados
    ///////////////

    return res.status(201).send();
  }
}
export { UploadCategoryController };
