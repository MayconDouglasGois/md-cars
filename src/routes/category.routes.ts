import { Router, Request, Response } from "express";
import { createCategoryController } from "../modules/cards/useCase/createCategory";
import { listCategoryControler } from "../modules/cards/useCase/listCategory";
import multer from "multer";
import { uploadCategoryController } from "../modules/cards/useCase/uploadCategory";


const categoryRouter = Router();
const upload = multer({ dest: './tmp' })



categoryRouter.post("/", (req: Request, res: Response) => {
  createCategoryController.handle(req, res);
});

categoryRouter.get("/", (req: Request, res: Response) => {
  listCategoryControler.handle(req, res);
});

categoryRouter.post("/upload",upload.single("file"),  (req: Request, res: Response) => {
  uploadCategoryController.handle(req, res);

});
export { categoryRouter };
