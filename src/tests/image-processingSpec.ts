import { join } from "path";

import { Request, Response } from "express";

import { resizeImage } from "../services/image-processing";

describe("test sharp rescaling function", (): void => {
	// only testing with a valid parameters because the function runs after lots of validation
	it("test rescaling function", async (): Promise<void> => {
		const req = {
			query: { filename: "fjord", width: 300, height: 200 },
		} as unknown as Request;
		const res = {
			sendFile: (resizedImage: string): string => resizedImage,
			locals: {
				fullImage: join(__dirname, "../../assets/full/fjord.jpg"),
			},
		} as unknown as Response;

		expect(async (): Promise<void> => {
			await resizeImage(req, res);
		}).not.toThrow();
	});
});
