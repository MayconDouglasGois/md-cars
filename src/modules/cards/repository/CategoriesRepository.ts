
import { Category } from "../model/Category";
import { iCategoriesRepository, iCreatedRepository } from "./implementations/ICategoriesRepository";



class CategoriesRepository implements iCategoriesRepository {
    
  private categories: Category[];

  private static INSTANCE: CategoriesRepository

 private constructor() {
    this.categories = [];
  }

 public static getInstace(): CategoriesRepository {
  if(!CategoriesRepository.INSTANCE){
    CategoriesRepository.INSTANCE = new CategoriesRepository()
  }
return CategoriesRepository.INSTANCE
 }

  created({ name, description }: iCreatedRepository) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByname(name: string){
    const category = this.categories.find((category) => {
    return  category.name === name;
    });
    return category;
  }
}
export { CategoriesRepository };
