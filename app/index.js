const http = require("http");
const { MongoClient } = require("mongodb");

const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);

const server = http.createServer(async (req, res) => {
  try {
    await client.connect();
    res.end("App connected to MongoDB successfully");
  } catch (err) {
    res.end("MongoDB connection failed");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
