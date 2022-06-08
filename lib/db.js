import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://Rosacroce:New16131713@cluster0.y52yk.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
