//const fs = require('fs');
// //node.js의 fs모듈을 사용해 파일을 읽어온다

const input = fs.readFileSync(filePath, "utf8").split(" ");
// //fs모듈을 사용해 ('filePath')안에 있는 파일을 읽어서 input에 넣는다
// //읽어온 값은 array로 저장된다
// //입력받은걸 코딩하기 편하게 바꿔서 쓰면된다
