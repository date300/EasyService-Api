// lib/mongodb.js
import { MongoClient } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

const uri = process.env.MONGO_URI; // Vercel environment variable

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Attach pool for serverless
attachDatabasePool(client);

export default client;
