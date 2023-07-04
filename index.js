var express = require("express");
var app = express();

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");
app.use(express.static("public"));

// post를 사용하기 위한 서버 모듈 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// fake DB파일
const posts = [1, 2];
console.log(posts);
// res.render로 ejs 파일을 전달

// index page
app.get("/", function (req, res) {
  res.render("pages/index.ejs", { posts });
});

app.post("/create", function (req, res) {
  let post = req.body.post;
  posts.push(post);
  res.redirect("/");
  // push로 추가한 다음 다시 index.ejs로 되돌아 올 수 있도록 redirect
});

app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
