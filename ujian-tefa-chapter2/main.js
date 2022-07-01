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
                        forms[8].value != "" ? forms[8].value : "Tidak ada"
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

  if (forms[forms.length - 2].files[0].size > 500000) {
    message.push("File tidak boleh lebih dari 500 KB");
    alert(message);
    forms[forms.length - 2].value = "";
    return false;
  }

  return true;
};
