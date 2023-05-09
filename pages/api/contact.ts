import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export interface MessageType {
  id?: string;
  email: string;
  name: string;
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newMessage: MessageType = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.o9wuh6s.mongodb.net/?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db(process.env.mongodb_database);

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId.toString();
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored message!",
      newMessage: newMessage,
    });
  }
};

export default handler;
