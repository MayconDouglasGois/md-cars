import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { UploadCategoryController } from "./UploadCategoryController";
import { UploadCategoryUseCase } from "./UploadCategoryUseCase";


const categoryRepository = CategoriesRepository.getInstace()
const uploadCategoryUseCase = new UploadCategoryUseCase(categoryRepository)
const uploadCategoryController = new UploadCategoryController(uploadCategoryUseCase)

export {uploadCategoryController}