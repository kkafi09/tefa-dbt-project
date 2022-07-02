// get element in html
const button = document.getElementById("button");
const result = document.getElementById("result");
const forms = document.getElementById("forms");
const openPopup = document.querySelector(".openPopup");
let message = [];

// form validation
forms.addEventListener("submit", (e) => {
  if (message.length === 0) {
    result.innerHTML = `<div class="row g-2">
                <div class="col">
                  <div>
                    <span class="fw-bold">Nama lengkap</span>
                    <p>${forms[0].value}</p>
                  </div>
                  <div>
                    <span class="fw-bold">No. Telepon</span>
                    <p>${forms[1].value}</p>
                  </div>
                  <div>
                    <span class="fw-bold">Email</span>
                    <p>${forms[2].value}</p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <span class="fw-bold">Pendidikan Terakhir</span>
                    <p>${forms[3].value}</p>
                  </div>
                  <div>
                    <span class="fw-bold">Asal Universitas</span>
                    <p>${forms[4].value}</p>
                  </div>
                  <div>
                    <span class="fw-bold">Pengalaman</span>
                    <p>${forms[5].value} (${forms[6].value} Tahun)</p>
                  </div>
                </div>
                <table class="col table table-bordered">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Input data</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Background sekolah</td>
                      <td>${
                        forms[7].value != "" ? forms[7].value : "Tidak ada"
                      }</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Sertifikat Internasional</td>
                      <td>${
                        forms[8].files.length != ""
                          ? forms[8].files.length
                          : "Tidak ada"
                      }</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Portfolio yang pernah dibuat</td>
                      <td>${
                        forms[9].value != "" ? forms[9].value : "Tidak ada"
                      }</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Nama CV. yang di upload</td>
                      <td>${forms[10].files[0].name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>`;
    e.preventDefault();
  }
});

// check if all input already exist and add attribute id for modal popup
forms.addEventListener("change", () => {
  // normalization phone number

  // open popup modal and remove attribute disable
  if (
    validation() &&
    forms[0].value != "" &&
    forms[1].value != "" &&
    forms[2].value != "" &&
    forms[3].value != ""
  ) {
    openPopup.setAttribute("id", "staticBackdrop");
    button.removeAttribute("disabled");
  }
});

// all function for validation
const validation = () => {
  message = [];
  let phoneNumber = normalizationPhoneNumber(forms[1].value);

  // email validation
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (forms[2].value != "" && !forms[2].value.match(validEmail)) {
    alert("Email tidak valid");
    return false;
  }

  // phone number validation
  const validPhoneNumber = /^08[1-9][0-9]{7,10}$/;
  if (forms[1].value != "" && !phoneNumber.match(validPhoneNumber)) {
    alert("No. Telepon tidak valid");
    return false;
  }

  // cv input validation
  if (forms[forms.length - 2].files[0].size > 500000) {
    message.push("File tidak boleh lebih dari 500 KB");
    alert(message);
    forms[forms.length - 2].value = "";
    return false;
  }

  return true;
};

// normalization phone number id from (+62....) to (085...)
function normalizationPhoneNumber(phone) {
  phone = String(phone).trim();
  if (phone.startsWith("+62")) {
    phone = "0" + phone.slice(3);
  } else if (phone.startsWith("62")) {
    phone = "0" + phone.slice(2);
  }
  return phone.replace(/[- .]/g, "");
}
