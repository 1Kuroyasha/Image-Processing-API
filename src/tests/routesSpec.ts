import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Test routes", () => {
	it("test endpoint /image", async () => {
		const response = await request.get("/image");
		expect(response.status).toBe(400);
		expect(response.text).toBe("filename parameter is essential");
	});

	it("tests endpoint /image/fjord", async () => {
		const response = await request.get("/image/fjord");
		expect(response.status).toBe(400);
	});

	it("tests endpoint /invalidEndpoint", async () => {
		const response = await request.get("/invalidEndpoint");
		expect(response.status).toBe(400);
	});
});
