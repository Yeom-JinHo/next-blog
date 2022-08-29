import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, msg } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !msg ||
      msg.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMsg = { email, name, msg };
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://jinho1:${process.DB_PASSWORD}@cluster0.htmkxdg.mongodb.net/next?retryWrites=true&w=majority`
      );
    } catch (e) {
      res.status(500).json({ message: e.message });
      return;
    }
    console.log("여긴되냐2?");
    const db = client.db();
    try {
      const result = await db.collection("msg").insertOne(newMsg);
      newMsg.id = result.insertedId;
    } catch (e) {
      client.close();
      res.status(500).json({ message: "메세지 저장 실패" });
    }
    client.close();
    res.status(201).json({ message: "메세지 저장 성공", msg: newMsg });
  }
}

export default handler;
