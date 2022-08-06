import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstace()
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)



export{createCategoryController}