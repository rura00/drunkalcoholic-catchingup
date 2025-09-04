import { MongoClient } from "mongodb";




async function handler(req, res) {
  if (req.method === 'POST') {
    const dated = req.body;

    const client = await MongoClient.connect(

    );

  }
}

export default handler;