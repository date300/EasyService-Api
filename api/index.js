// api/index.js
import express from "express";
import serverless from "serverless-http";
import client from "../lib/mongodb.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const db = client.db("easyservice"); // database name
    const users = await db.collection("users").find({}).toArray();

    res.json({
      message: "EasyService API Live with MongoDB!",
      status: "Success",
      data: users,
      timestamp: new Date()
    });
  } catch (err) {
    res.status(500).json({ status: "Error", error: err.message });
  }
});

export default app;
export const handler = serverless(app);
