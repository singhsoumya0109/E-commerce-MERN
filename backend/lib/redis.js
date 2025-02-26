import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.UPSTASH_URL;
//console.log(url);
const client = new Redis(url);
await client.set("foo", "bar");
//47.43