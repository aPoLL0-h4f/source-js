const fruit = prompt("Nhap trai cay ban yeu thich");
switch (fruit) {
  case "apple":
    console.log("you like apple");
    break;
  case "watermelon":
  case "lemon":
    console.log("you like lemon and watermelon");
    break;
  case "banana":
    console.log("you like banana");
    break;
  default:
    console.log("Ko tim thay trai cay ban yeu thich");
}
