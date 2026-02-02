// import fs from "fs";
// import path from "path";

// const filePath = path.join(__dirname, "logs.txt");

// const logfun = (req, res, next) => {
//   const log = `timestamp: ${new Date().toString()} | url: ${req.url} | method: ${req.method}\n`;

//   fs.appendFileSync(filePath, log);
//   console.log(log);

//   next();
// };

// export default logfun;

// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const filePath = path.join(process.cwd(), "logs.txt");

// const logfun = (req, res, next) => {
//   const log = `${new Date().toISOString()} | ${req.method} | ${req.url}`;

//   fs.appendFileSync(filePath, log + "\n");
//   console.log("LOGGED:", log);

//   next();
// };

// export default logfun;

import fs from "fs";

const logfun = (req, res, next) => {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.url}`;

  // FORCE create logs.txt in project root
  fs.appendFileSync("./logs.txt", log + "\n");

  console.log("LOG WRITTEN:", log);
  next();
};

export default logfun;
