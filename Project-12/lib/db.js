import { MongoClient } from "mongodb";

export async function connectToDatabase() {
 const client = await MongoClient.connect(
  "mongodb+srv://vjba:iOQNeVDNtv8ln5w8@cluster0.c7hid.mongodb.net/newsletter?retryWrites=true&w=majority"
 );

 return client;
}
