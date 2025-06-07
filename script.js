document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("input[type='button']");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;

      switch (value) {
        case "AC":
          display.value = "";
          break;
        case "DE":
          display.value = display.value.slice(0, -1);
          break;
        case "+/-":
          if (display.value.startsWith("-")) {
            display.value = display.value.slice(1);
          } else if (display.value !== "") {
            display.value = "-" + display.value;
          }
          break;
        case "=":
          try {
            display.value = eval(display.value);
          } catch {
            alert("Invalid Expression");
            display.value = "";
          }
          break;
        default:
          display.value += value;
      }
    });
  });
});
