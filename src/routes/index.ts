import { Router } from "express";
import { categoryRouter } from "./category.routes";
import { specificationRouter } from "./specification.routes";

const router = Router();

router.use("/categories", categoryRouter);
router.use("/specification", specificationRouter);

export { router };
