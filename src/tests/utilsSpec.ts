import { join } from "path";

import { search } from "../utils/files";

describe("test search function", (): void => {
	it("test the function using an existing file", () => {
		const filePath = join(__dirname, "../..");
		const result = search(filePath, "package.json");
		expect(result).toBeTruthy();
	});

	it("test the function using a non-existing file", (): void => {
		const filePath = join(__dirname, "../..");
		const result = search(filePath, "nonExistingFile");
		expect(result).toBeFalsy();
	});
});
