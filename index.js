const express = require('express');
const cors = require('cors'); // 必须引入，否则前端没法访问
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: "你好！这条消息是来自 Zeabur 后端的动态数据！" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
