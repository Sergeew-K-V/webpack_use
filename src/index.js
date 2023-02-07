import _ from "lodash";
import "./style.css";
import Icon from "./public/images/icon.jpeg";
import dataXML from "./public/data/data.xml";
import dataCSV from "./public/data/data.csv";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  const myIcon = new Image();
  myIcon.src = Icon;

  console.log(dataXML);
  console.log(dataCSV);
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
