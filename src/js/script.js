const fullName = document.querySelector("#fullName");
const phone = document.querySelector("#phoneNumber");

fullName.addEventListener("change", (event) => {
  console.log(event.target.value);
});

phone.addEventListener("change", (event) => {
  console.log(event.target.value);
});
