import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Test the endpoint /image", () => {
	it("test the endpoint response when specifing a non existing image", async () => {
		const response = await request.get("/image/?filename=NotAnImage");
		expect(response.status).toBe(404);
		expect(response.text).toBe("image not found");
	});

	it("test the endpoint response when specifing an existing image", async () => {
		const response = await request.get("/image/?filename=fjord");
		expect(response.status).toBe(200);
	});

	it("test the endpoint response when specifing width without height", async () => {
		const response = await request.get("/image/?filename=fjord&width=300");
		expect(response.status).toBe(400);
		expect(response.text).toBe(
			"parameters width and height should be used together",
		);
	});

	it("test the endpoint response when specifing height without width", async () => {
		const response = await request.get("/image/?filename=fjord&height=200");
		expect(response.status).toBe(400);
		expect(response.text).toBe(
			"parameters width and height should be used together",
		);
	});

	it("test the endpoint response when specifing width and height", async () => {
		const response = await request.get(
			"/image/?filename=fjord&width=300&height=200",
		);
		expect(response.status).toBe(200);
	});

	it("test the endpoint response when specifing an invalid height", async () => {
		const response = await request.get(
			"/image/?filename=fjord&width=300&height=ffff",
		);
		expect(response.status).toBe(400);
		expect(response.text).toBe("height value must be a number");
	});

	it("test the endpoint response when specifing an invalid width", async () => {
		const response = await request.get(
			"/image/?filename=fjord&width=ffff&height=200",
		);
		expect(response.status).toBe(400);
		expect(response.text).toBe("width value must be a number");
	});

	it("test the endpoint response when specifing a negative height", async () => {
		const response = await request.get(
			"/image/?filename=fjord&width=-100&height=200",
		);
		expect(response.status).toBe(400);
		expect(response.text).toBe("width value must be a positive number");
	});

	it("test the endpoint response when specifing a negative width", async () => {
		const response = await request.get(
			"/image/?filename=fjord&width=300&height=-200",
		);
		expect(response.status).toBe(400);
		expect(response.text).toBe("height value must be a positive number");
	});
});
