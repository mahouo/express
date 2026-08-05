var express = require('express');
var router = express.Router();
const cors = require('cors');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI が読み込めませんでした');
}

const client = new MongoClient(uri);

router.use(cors());

router.get('/', async function (req, res) {
  try {
    await client.connect();

    // 日本語の「メモ」ではなく、実際の名前は notes
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = { id: 1 };
    const note = await notes.findOne(query);

    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;