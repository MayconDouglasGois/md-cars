import { SpecificationRepository } from "../../repository/SpecificationRepository";
import { ListSpeficationUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationController } from "./listSpecificatrionController";


const specificationRepository= SpecificationRepository.getInstance()

const listSpeficationUseCase = new ListSpeficationUseCase(specificationRepository)

const listSpecificationController = new ListSpecificationController(listSpeficationUseCase)

export {listSpecificationController}