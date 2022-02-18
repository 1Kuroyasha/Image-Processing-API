import { Router } from "express";

import { validateQueryParameters } from "../../middlewares/validation";
import { searchForImage } from "../../middlewares/search";
import { resizeImage } from "../../services/image-processing";

export const router = Router();

router.get("/", validateQueryParameters, searchForImage, resizeImage);
