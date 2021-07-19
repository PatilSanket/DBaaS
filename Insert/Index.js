const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = "";

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);
  const db = await client.db("AWS");
  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();
  const player = await db.collection("USERS").insertOne(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(player),
  };

  return response;
};

