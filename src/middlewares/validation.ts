import { Request, Response, NextFunction } from "express";

export const validateQueryParameters = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { filename, width, height } = req.query;

	if (!filename) return res.status(400).send("filename parameter is essential");

	if (!width && !height) return next();

	if (!width || !height)
		return res
			.status(400)
			.send("parameters width and height should be used together");

	next();
};
