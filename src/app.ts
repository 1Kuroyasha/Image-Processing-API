import express from "express";
import morgan from "morgan";

import { router } from "./routes/router";

const PORT = 8000;

const app = express();

app.use(morgan("short"));

app.use("/", router);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

export default app;
