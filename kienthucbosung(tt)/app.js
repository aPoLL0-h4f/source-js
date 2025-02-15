import debounceFn, {myName, job} from "./JSModule.js";
// import để sử dụng debounceFn

window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    console.log("scroll");
  }, 50)
);

console.log(myName);
console.log(job);
