import dotenv from "dotenv";

// injects into process.env
dotenv.config();

const PORT= process.env.PORT || 8080;

const resolved = { ...process.env, PORT };

export default resolved;
