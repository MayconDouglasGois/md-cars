import { Specification } from "../model/Specification";
import {
  ICreateSpecification,
  ISpecificationRepository,
} from "./implementations/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecification): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }
  list(): Specification[] {
    return this.specifications;
  }
  findByname(name: string): Specification | undefined {
    const specifications = this.specifications.find(
      (specification) => specification.name === name
    );
    return specifications;
  }
}
export { SpecificationRepository };
