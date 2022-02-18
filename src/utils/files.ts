import { existsSync } from "fs";
import { join } from "path";

export const search = (dir: string, fileName: string): string | null => {
	const filePath = join(dir, fileName);

	const exist = existsSync(filePath);
	return exist ? filePath : null;
};
