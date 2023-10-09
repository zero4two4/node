const fs = require("fs");
const path = require("path");

if (fs.existsSync(path.join(__dirname, "/views", "index.html"))) {
  fs.readFile(
    path.join(__dirname, "/views", "/index.html"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
} else {
  console.log("index file does not exist!");
}

if (fs.existsSync(path.join(__dirname, "/views", "about.html"))) {
  fs.readFile(
    path.join(__dirname, "/views", "/about.html"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
} else {
  console.log("about file does not exist!");
}

if (fs.existsSync(path.join(__dirname, "/views", "contact.html"))) {
  fs.readFile(
    path.join(__dirname, "/views", "/contact.html"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
} else {
  console.log("contact file does not exist!");
}
