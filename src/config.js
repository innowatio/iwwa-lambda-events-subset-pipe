import dotenv from "dotenv";

dotenv.load();

export const KINESIS_STREAM_NAME = process.env.KINESIS_STREAM_NAME || "test";

export const PRODUCER = "iwwa-lambda-events-subset-pipe";
