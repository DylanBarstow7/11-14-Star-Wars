// import { promises as fs } from "fs";
// const rootPath = new URL("../..", import.meta.url).pathname;

const data = [
  {
    route: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000,
  },
  {
    route: "darth-maul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200,
  },
  {
    route: "obi-wan-kenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 42,
    forcePoints: 1350,
  },
];
// this method can be imported and used by other files to get access to the data
export const index = () => data;

// console.log(fs, "characters");
// IIFE - Immediately Invoked Function Expression
// IF MY ROOT PATH WOULD've WORKED YOU USE THIS EXPRESSION to call data from db.json
// semicolon in front tells vs code this is a separate chunk
// ;(async () => {
//  DATA = await fs.readFile(`${rootPath}db.json`, "utf8");
//  console.log(DATA);
// })();
