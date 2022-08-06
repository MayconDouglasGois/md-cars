import {
  ISpecificationRepository,
} from "../../repository/implementations/ISpecificationRepository";

interface ISpecification {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private iSpecificationRepository: ISpecificationRepository) {
    this.iSpecificationRepository = iSpecificationRepository;
  }

  execute({ name, description }: ISpecification) {
    const verifyArreadyExist = this.iSpecificationRepository.findByname(name);
    if (verifyArreadyExist) {
      throw new Error("Spefication arready exist!");
    }

    this.iSpecificationRepository.create({ name, description });
  }
}
export { CreateSpecificationUseCase };
