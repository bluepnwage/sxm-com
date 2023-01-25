const fs = require("fs");
const path = require("path");
const readline = require("readline");
const stream = fs.createReadStream(path.join(process.cwd(), "scripts", "theme.txt"));

const settings = {
  input: stream
};

const interface = readline.createInterface(settings);
const values = {};

interface.on("line", (data) => {
  const [key, value] = data.trim().split(":");
  const realKey = key.replace("--md-sys-color-", "").replace("-light", "");
  values[`${realKey}`] = value.slice(0, -1);
});

interface.on("close", () => {
  fs.writeFile(path.join(process.cwd(), "scripts", "theme.json"), JSON.stringify(values, null, 2), (err) =>
    console.log(err)
  );
});
