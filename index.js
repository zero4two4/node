const book = require("./data.js");
const fs = require("fs");
const path = require("path");
const generator = require("./generate_password.js");

const data = [
  {
    name: "John",
    color: "primary",
  },
  {
    name: "Olawale",
    color: "blue",
  },
];

// const url = '/contact'

// if (url === '/contact') {
//     fs.mkdir(path.join(__dirname, '/contact', '/inside_contact'), (err) => {
//         if (err) throw err;
//     });
// } else if (url === '/about') {
//     fs.mkdir(path.join(__dirname, '/about'), (err) => {
//         if (err) throw err;
//     });
// } else if (url === '/index') {
//     fs.mkdir(path.join(__dirname, '/index'), (err) => {
//         if (err) throw err;
//     })
// }

// console.log(book)

const url = "/public";

if (fs.existsSync(path.join(__dirname, "/public"))) {
  console.log('public folder already exist')
}else{
    fs.mkdir(path.join(__dirname, "/public"), (err) => {
        if (err) throw err;
      });
}

if (fs.existsSync(path.join(__dirname, "/public", "/about"))) {
  console.log('about folder already exist')
}else{
    fs.mkdir(path.join(__dirname, "/public", "/about"), (err) => {
        if (err) throw err;
      });
}

if (fs.existsSync(path.join(__dirname, "/public", '/contact'))) {
  console.log('contact folder already exist')
}else{
    fs.mkdir(path.join(__dirname, "/public", '/contact'), (err) => {
        if (err) throw err;
      });
}
if (fs.existsSync(path.join(__dirname, "/public", '/index'))) {
  console.log('index folder already exist')
}else{
    fs.mkdir(path.join(__dirname, "/public", '/index'), (err) => {
        if (err) throw err;
      });
}

const data2 = [
  {
    name: 'kenny'
  },
  {
    name: 'olawale'
  }
]
if (fs.existsSync(path.join(__dirname, '/public', '/about'))) {
  console.log('about folder already exist')
}else{
fs.writeFile(path.join(__dirname, '/public', '/about', '/data.js'), JSON.stringify(data2), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}
if (fs.existsSync(path.join(__dirname, '/public','/about', '/data.js'))) {
  console.log('data.js folder already exist')
}else{
fs.readFile(path.join(__dirname, '/public','/about', '/data.js'), (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});
}

const data3 = [
  {
    name: "kenny"
  },
  {
    number: [1, 2, 3, 4, 5],
    new: {
      name: 'cool'
    }
  }
]

if (fs.existsSync(path.join(__dirname, '/public', '/contact'))) {
  fs.writeFile(path.join(__dirname, '/public', '/contact', '/contact.js'), JSON.stringify(data3), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
}
if (fs.existsSync(path.join(__dirname, '/public','/contact', '/contact.js'))) {
  fs.readFile(path.join(__dirname, '/public','/contact', '/contact.js'), (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});
}
const data4 = [
  {
    number: [100, 200, 500]
  }
]

if (fs.existsSync(path.join(__dirname, '/public', '/index'))) {
  fs.writeFile(path.join(__dirname, '/public', '/index', '/index.js'), JSON.stringify(data4), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}
if (fs.existsSync(path.join(__dirname, '/public','index', 'index.js'))) {
  fs.readFile(path.join(__dirname, '/public','/index', '/index.js'), (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });
}else{
  console.log('index file does not exist!')
}
//console.log(generator)

// console.log('Hello world')
// console.log(data)

if (fs.existsSync(path.join(__dirname, '/public','index'))) {
  fs.rmdir(path.join(__dirname, '/public','index'), { recursive: true }, (err) =>{
    if (err) throw err;
    console.log('this file has been removed')
  })
}