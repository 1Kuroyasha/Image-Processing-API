import { Request, Response, NextFunction } from "express";

export const validateQueryParameters = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { filename } = req.query;

	if (!filename) return res.status(400).send("filename parameter is essential");

	next();
};
