let el = document.getElementById("Title");
console.log(el);

el.innerText = "Welcome to DOM Manipulation";
el.innerHTML = "<span style='color: red'>Welcome to DOM Manipulation</span>";
el.innerHTML += "<i>Class Name Changed</i>";

let box = document.getElementsByClassName("box");
console.log(box);
for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "red";
}

const qr = document.querySelector("#Title");
console.log(qr)

const qrAll = document.querySelectorAll(".box");
console.log(qrAll);

el.style.fontSize = "16px";
el.style.color = "blue";

box[0].classList.add("newClass");
console.log(box[0].classList);

box[1].classList.add("class1", "Class2");
console.log(box[1].classList);

box[2].classList.remove("box");
console.log(box[2].classList);