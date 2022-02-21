import { join } from "path";

import { Request, Response, NextFunction } from "express";

import { search } from "../utils/files";

export const searchForImage = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const fullSizedImages = join(__dirname, "../../assets/full");
	const thumbs = join(__dirname, "../../assets/thumb");

	const { filename, width, height } = req.query;

	const fullSize = search(fullSizedImages, `${filename}.jpg`);
	if (!fullSize) return res.status(404).send("image not found");

	if (!width && !height) return res.sendFile(fullSize);

	const found = search(thumbs, `${filename}(${width}x${height}).jpg`);
	if (found) return res.sendFile(found);

	res.locals.fullImage = fullSize;
	next();
};
