import { iCategoriesRepository } from "../../repository/implementations/ICategoriesRepository";


interface IResquest {
    name: string;
    description: string
}


class CreateCategoryUseCase {
    private categoriesRepository: iCategoriesRepository

    constructor(categoriesRepository: iCategoriesRepository){
        this.categoriesRepository = categoriesRepository
    }
  execute({name,description}: IResquest): void {

    const categoryArreadyExists = this.categoriesRepository.findByname(name)

    if (categoryArreadyExists) {
        throw new Error("category aready exists!" );
    }

    this.categoriesRepository.created({ name, description });

}
}
export {CreateCategoryUseCase}