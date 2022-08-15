const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const openDbConnection = require("./helpers/db");
const routes = require("./routes");

async function main() {
  try {
    const dbConfig = {
      dbName: "database_ternakhub_development",
      username: "root",
      password: "rahman123",
    };

    await openDbConnection(dbConfig);

    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(routes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log("main: ", err);
  }
}

main();
