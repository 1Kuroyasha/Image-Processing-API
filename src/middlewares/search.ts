import { join } from "path";

import { Request, Response } from "express";

import { search } from "../utils/files";

export const searchForImage = (req: Request, res: Response) => {
	const fullSizedImages = join(__dirname, "../../assets/full");

	const { filename } = req.query;

	const fullSize = search(fullSizedImages, `${filename}.jpg`);
	if (!fullSize) return res.status(404).send("image not found");

	return res.sendFile(fullSize);
};
