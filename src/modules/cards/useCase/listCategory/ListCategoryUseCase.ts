import { ICategoriesRepository } from "../../repository/implementations/ICategoriesRepository";


class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }
  execute() {
    const categoryRepository = this.categoryRepository.list();
    return categoryRepository;
  }
}
export { ListCategoryUseCase };
