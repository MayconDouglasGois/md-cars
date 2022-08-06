import { Specification } from "../../model/Specification";

interface ICreateSpecification {
    name: string;
    description: string;
}

interface ISpecificationRepository{
    create({name, description}:ICreateSpecification):void;

    list(): Specification[];

    findByname(name: string):Specification | undefined
}

export {ISpecificationRepository, ICreateSpecification}