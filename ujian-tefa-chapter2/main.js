const button = document.getElementById("button");
const result = document.getElementById("result");
const forms = document.getElementById("forms");
const openPopup = document.querySelector(".openPopup");

// get element input form
const nama = document.getElementById("inputNama");
const telepon = document.getElementById("inputTelepon");
const email = document.getElementById("inputEmail");
const pendidikan = document.getElementById("inputPendidikan");

// check if all input already exist and add attribute id for modal popup
forms.addEventListener("change", () => {
  if (nama.value != "" && telepon != "" && email != "") {
    openPopup.setAttribute("id", "staticBackdrop");
  }
});

// form validation
forms.addEventListener("submit", (e) => {
  let message = [];
  if (nama.value === "" || nama.value === null) {
    message.push("Nama Tidak Boleh kosong");
  }

  if (telepon.value === "" || telepon.value === null) {
    message.push("Telepon tidak boleh kosong");
  }

  if (email.value === "" || email.value === null) {
    message.push("Email Tidak boleh kosong ");
  }

  result.innerHTML = ``;

  if (message.length > 0) {
    e.preventDefault();
    alert(message);
  } else {
    result.innerHTML = `${nama.value}`;
    e.preventDefault();
  }
});
