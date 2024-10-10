const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main-Container");
document.body.append(mainDiv);

const subContainer = document.createElement("div");
subContainer.setAttribute("class", "card");
const heading = document.createElement("h2");
heading.setAttribute("class", "heading");
const formDt = document.createElement("form");
formDt.setAttribute("class", "form-container");
formDt.setAttribute("name", "userDetails");
heading.innerHTML = "<i>Create User</i>";
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");
const input4 = document.createElement("input");
const input5 = document.createElement("input");
const submit = document.createElement("button");
input1.setAttribute("placeholder", "Ender Your FirstName");
input2.setAttribute("placeholder", "Ender Your LastName");
input3.setAttribute("placeholder", "Ender Your Email");
input4.setAttribute("placeholder", "Ender Your Gender");
input5.setAttribute("placeholder", "Ender Your Address");
input1.setAttribute("name", "firstName");
input2.setAttribute("name", "lastName");
input3.setAttribute("name", "email");
input4.setAttribute("name", "gender");
input5.setAttribute("name", "address");
input1.setAttribute("required", "");
input3.setAttribute("required", "");
input4.setAttribute("required", "");
input5.setAttribute("required", "");
input2.setAttribute("required", "");
submit.innerText = "submit";
submit.setAttribute("class", "submit");
mainDiv.append(subContainer);
subContainer.append(heading, formDt);
formDt.append(input1, input2, input3, input4, input5);
formDt.append(submit);
submit.setAttribute("type", "submit");
// submit.setAttribute("onclick", "handleSubmit");
const table = document.createElement("table");
table.setAttribute("class", "table");
const tablehead = document.createElement("thead");
const tableth1 = document.createElement("th");
const tableth2 = document.createElement("th");
const tableth3 = document.createElement("th");
const tableth4 = document.createElement("th");
const tableth5 = document.createElement("th");
tableth1.innerText = "FULL NAME";
tableth2.innerText = "LAST NAME";
tableth3.innerText = "GENDER";
tableth4.innerText = "ADDRESS";
tableth5.innerText = "EMAIL";
tablehead.append(tableth1, tableth2, tableth5, tableth4, tableth3);
table.append(tablehead);
mainDiv.append(table);
const tableBody = document.createElement("tbody");
table.append(tableBody);
const submitBtn = document.querySelector(".submit");
const formEl = document.forms.userDetails;
const data = [];

const { firstName } = formEl.elements;
const { lastName } = formEl.elements;
const { email } = formEl.elements;
const { gender } = formEl.elements;
const { address } = formEl.elements;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newData = [
    {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      gender: gender.value,
      address: address.value,
    },
  ];
  data.push(newData);

  newData.map((e, i) => {
    tableBody.innerHTML += `
    <td>${e.firstName}</td>
    <td>${e.lastName}</td>
    <td>${e.email}</td>
    <td>${e.gender}</td>
    <td>${e.address}</td>
    `;
  });
  document.userDetails.reset();
});
