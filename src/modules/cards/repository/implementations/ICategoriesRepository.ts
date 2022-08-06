import { Category } from "../../model/Category";

interface iCreatedRepository {
    name: string;
    description: string;
  }

  interface ICategoriesRepository {
    created({ name, description }: iCreatedRepository): void;
    list(): Category[];
    findByname(name: string):Category | undefined

  }
  export {ICategoriesRepository , iCreatedRepository}