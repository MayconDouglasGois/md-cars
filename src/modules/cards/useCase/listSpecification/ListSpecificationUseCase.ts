import { ISpecificationRepository } from "../../repository/implementations/ISpecificationRepository";

class ListSpeficationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  execute() {
    const listEpecification = this.specificationRepository.list();
    return listEpecification
  }
}
export { ListSpeficationUseCase };
