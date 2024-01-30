import data from "./data.json" assert { type: "json" };

function setData(id, data) {
  document.getElementById(id).innerHTML = data;
}

setData("firstName", data.head.firstName);
setData("secondName", data.head.secondName);
setData("age", data.head.age);
setData("description", data.head.description);
setData("language", data.head.language);
setData("location", data.head.location);

//
const contactsEl = document.getElementById("contacts");
contactsEl.innerHTML = null;
data.head.contacts.forEach((el) => {
  const element = document.createElement("li");
  element.classList = "flex gap-2";
  element.innerHTML = `<span class="material-symbols-outlined">
  ${el.type}
</span>
<a href="${el.link}">${el.value}</a>`;
  contactsEl.appendChild(element);
});
//
//
const aboutEl = document.getElementById("about");
aboutEl.innerHTML = null;
data.about.forEach((el) => {
  const element = document.createElement("p");
  element.classList = "";
  element.innerHTML = el.text;
  aboutEl.appendChild(element);
});

//
const educationEl = document.getElementById("education");
educationEl.innerHTML = null;
data.education.forEach((el) => {
  const element = document.createElement("li");
  element.classList = "";
  element.innerHTML = `<div class="flex items-center gap-2">
  <i class="fa-solid fa-graduation-cap"></i>
  <h3 class="opacity-75 font-light">${el.title}</h3>
</div>
<p>${el.education}</p>`;
  educationEl.appendChild(element);
});
//

//
const hardSkillsEl = document.getElementById("hardSkills");
hardSkillsEl.innerHTML = null;
data.hardSkills.forEach((el) => {
  const element = document.createElement("li");
  element.classList = "flex flex-col items center w-64";
  element.innerHTML = `<div class="flex gap-2 items-center">
  <i class="fa-brands fa-html5"></i>
  <h4>${el.name}</h4>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${el.progress}%"></div>
</div>`;
  hardSkillsEl.appendChild(element);
});
//

//
const softSkills = document.getElementById("softSkills");
softSkills.innerHTML = null;
data.softSkills.forEach(({ icon, skill }) => {
  const element = document.createElement("li");
  element.classList = "flex flex-col lg:flex-row lg:gap-2 lg:items-center";
  element.innerHTML = `     <i class="${icon} pt-1 lg:pt-0"></i>
  <h3>${skill}</h3>`;
  softSkills.appendChild(element);
});
//

//
const experience = document.getElementById("experience");
experience.innerHTML = null;
data.experience.forEach(({ title, period, description, link }) => {
  const element = document.createElement("li");
  element.classList =
    "flex flex-col p-2 rounded-xl duration-75 hover:bg-gray-300";
  element.innerHTML = `
  <div class>
                <p class="font-light text-xs">${period}</p>
                <h1 class="font-semibold">${title}</h1>
              </div>
              <p>
                ${description}
              </p>
  `;
  experience.appendChild(element);
});
//
