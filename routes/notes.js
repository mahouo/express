var express = require('express');
var router = express.Router();

// レスポンスのデータ（ノート全件）
const responseObjectDataAll = {
  textObject1: {
    id: 1,
    title: 'ノート１のタイトルです',
    subTitle: 'ノート１のサブタイトルです',
    bodyText: 'ノート１の本文です'
  },
  textObject2: {
    id: 2,
    title: 'ノート２のタイトルです',
    subTitle: 'ノート２のサブタイトルです',
    bodyText: 'ノート２の本文です'
  }
};

/**
 * メモを全件取得するAPI
 */
router.get('/', function (req, res, next) {
  // 全件取得して返す
  res.json(responseObjectDataAll);
});

module.exports = router;