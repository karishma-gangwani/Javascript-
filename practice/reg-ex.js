let re = /see (chapter \d+(\.\d)*)/i;
let str =
  "For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3";

console.log(re.exec(str));
