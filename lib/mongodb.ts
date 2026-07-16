import { MongoClient } from "mongodb";

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

if (!process.env.MONGODB_URI) {
  throw new Error('Missing "MONGODB_URI" environment variable');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In dev, Next.js hot-reloads modules, which would otherwise create a new
  // MongoClient on every reload. Stashing the promise on the global object
  // keeps a single connection alive across reloads.
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production, no HMR concerns, so just create one client per instance.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
