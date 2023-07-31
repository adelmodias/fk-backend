import express from "express";
import cors from "cors";
import { routes } from "./routes";

// Init Express()
const app = express();

// CORS config
const allowedOrigins = ["http://localhost:3001"];

const options: cors.CorsOptions = {
    origin: allowedOrigins,
};

app.use(cors(options));

// SERVER and ROUTES config
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("Server is Running!");
});
