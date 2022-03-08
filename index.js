const app = require("express")();
const cors = require("cors");
app.use(cors());
const PORT = 3003;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
//Example importing middleware as a placeholder for future middewares
const example1 = require("./middlewares").example1;
app.use(require("express").json());

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
