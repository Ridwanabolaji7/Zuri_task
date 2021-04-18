const request = require("request");
const fs = require("fs");

const data = request(
  {
    url: "https://jsonplaceholder.typicode.com/posts",
    json: true,
  },
  (err, res, body) => {
    fs.writeFile("result/post.json", JSON.stringify(body), (err) => {
      if (err) throw err;
    });
  }
);

console.log(data);
