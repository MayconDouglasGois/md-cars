import { Request, Response } from "express";
import { UploadCategoryUseCase } from "./UploadCategoryUseCase";


class UploadCategoryController {
    constructor(private uploadCategoryUseCase: UploadCategoryUseCase){
        this.uploadCategoryUseCase = uploadCategoryUseCase
    }
  
  handle(req: Request, res: Response): Response {
    const {file} = req
    this.uploadCategoryUseCase.execute(file)
    console.log("Controller Console:",file)



    return res.status(201).send();
  }
}
export { UploadCategoryController };
