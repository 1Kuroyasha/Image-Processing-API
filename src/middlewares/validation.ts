import { Request, Response, NextFunction } from "express";

export const validateQueryParameters = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const { filename, width, height } = req.query;

	if (!filename) return res.status(400).send("filename parameter is essential");

	if (!width && !height) return next();

	if (!width || !height)
		return res
			.status(400)
			.send("parameters width and height should be used together");

	if (isNaN(+width))
		return res.status(400).send("width value must be a number");

	if (isNaN(+height))
		return res.status(400).send("height value must be a number");

	if (+width <= 0)
		return res.status(400).send("width value must be a positive number");

	if (+height <= 0)
		return res.status(400).send("height value must be a positive number");

	next();
};
