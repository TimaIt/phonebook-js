let text = document.querySelector(".text");
let form = document.querySelector(".box");

let data = [
  { name: "Temirlan", number: +996555999888 },
  { name: "Eldana", number: +996708443888 },
  { name: "Muhammadali", number: +9965002121865 },
];

let userName = null;
let userNum = null;
let newContact = {};

form.addEventListener("change", (e) => {
  if (e.target.id == "name") {
    userName = e.target.value;
  }
  if (e.target.id == "number") {
    userNum = e.target.value;
  }

  if (userName != null && userNum != null) {
    newContact.name = userName;
    newContact.number = userNum;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addContacts();

  data.map((item) => {
    let span = document.createElement("span");
    span.textContent = `${item.name} : ${item.number}`;
    text.appendChild(span);
  });
});
//!commit
function addContacts() {
  data.forEach((item) => {
    if (item.name === newContact.name) {
      alert(`This contact ${newContact.name} already exists`);
    }
  });
  return data.push(newContact);
}
