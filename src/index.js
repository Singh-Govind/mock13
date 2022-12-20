const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", require("./user/user.router"));
app.use("/games", require("./game/game.router"));

app.get("/", (req, res) => {
  res.send("please make get or post request on /users or /games");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`server started at http://localhost:${PORT}`);
});
