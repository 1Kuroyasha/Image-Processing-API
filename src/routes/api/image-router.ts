import { Router } from "express";

import { validateQueryParameters } from "../../middlewares/validation";
import { searchForImage } from "../../middlewares/search";

export const router = Router();

router.get("/", validateQueryParameters, searchForImage);
