let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let delbtn = document.createElement("button");
  delbtn.classList.add("delete");
  delbtn.innerText = "delete";
  item.innerText = inp.value;
  ul.appendChild(item);
  item.appendChild(delbtn);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let Listitem = event.target.parentElement;
    Listitem.remove();
  }
});

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
