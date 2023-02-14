let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let users = [];

submit.addEventListener("click", function () {
  if (CheckInput()) {
    CreateObject();
  }
});

class Phonebook {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  getUserContainer() {
    return `<div class="outputContent">
            <p>${this.name} : ${this.phone}</p>
            </div>`;
  }
}

function CreateObject() {
  let user = new Phonebook(input1.value, input2.value);
  output.insertAdjacentHTML("beforeend", user.getUserContainer());

  users.push(user);
}

function CheckInput() {
  if (input1.value === "" || input2.value === "") {
    alert("Please enter a name or phone number");
    return false;
  }
  return true;
}

// let text = document.querySelector(".text");
// let form = document.querySelector(".box");
// let filter = document.querySelector(".Filter");
// let filteredData = null;

// let data = [
//   { name: "Temirlan", number: +996555999888 },
//   { name: "Eldana", number: +996708443888 },
//   { name: "Muhammadali", number: +9965002121865 },
// ];

// filter.addEventListener("change", (e) => {
//   console.log(data);
//   const FILTER = e.target.value.toLowerCase();
//   filteredData = data.filter(({ name }) => name.toLowerCase().includes(FILTER));
//   console.log(filteredData);

//   text.innerHTML = "";
//   filteredData.forEach(({ name }) => {
//     text.innerHTML += `<p>${name}</p>`;
//   });
// });
// let userName = null;
// let userNum = null;
// let newContact = {};

// form.addEventListener("change", (e) => {
//   if (e.target.id == "name") {
//     userName = e.target.value;
//   }
//   if (e.target.id == "number") {
//     userNum = e.target.value;
//   }

//   if (userName != null && userNum != null) {
//     newContact.name = userName;
//     newContact.number = userNum;
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   addContacts();

//   data.map((item) => {
//     let span = document.createElement("span");
//     span.textContent = `${item.name} : ${item.number}`;
//     text.appendChild(span);
//   });
// });
// //!commit
// function addContacts() {
//   data.forEach((item) => {
//     if (item.name === newContact.name) {
//       alert(`This contact ${newContact.name} already exists`);
//     }
//   });
//   return data.push(newContact);
// }
