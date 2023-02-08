import _ from "lodash";
import "./style.css";
import Icon from "../public/images/icon.jpeg";
import dataXML from "../public/data/data.xml";
import dataCSV from "../public/data/data.csv";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const btnServer = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  const myIcon = new Image();
  myIcon.src = Icon;

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  btnServer.innerHTML = "Send to server!";
  element.appendChild(btnServer);
  btnServer.addEventListener("click", async () => {
    try {
      await fetch("http://127.0.0.1:8080/");
      console.log("Success!");
    } catch (error) {
      console.log("Something was wrong:", error);
    }
  });

  element.appendChild(btn);

  console.log(dataXML);
  console.log(dataCSV);
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
