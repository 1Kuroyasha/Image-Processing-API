import { Router, Request, Response } from "express";

import { router as imageRouter } from "./api/image-router";

export const router = Router();

router.use("/image", imageRouter);

router.get("*", (req: Request, res: Response): Response => {
	return res.sendStatus(400);
});
