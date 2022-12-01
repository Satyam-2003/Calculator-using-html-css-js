let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (c) => {
    if (c.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (c.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(c.target);
      string = string + c.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
