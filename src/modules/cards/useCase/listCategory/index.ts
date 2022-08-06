import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { ListCategoryControler } from "./ListCategoryControler";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstace();

const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

const listCategoryControler = new ListCategoryControler(listCategoryUseCase);

export { listCategoryControler };
