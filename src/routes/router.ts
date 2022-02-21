import { Router } from "express";

import { router as imageRouter } from "./api/image-router";

export const router = Router();

router.use("/image", imageRouter);

router.get("*", (req, res) => {
	return res.sendStatus(400);
});
