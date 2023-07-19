// Dataset property ကို သေချာ Documentation ပြန်လုပ်ပါ data-skills အတွင်းရှိတန်ဖိုးများဖြစ်တည်ပုံကိုသိဖို့လိုသည်

const searchBox = document.querySelector(".searchBox input");
const listBox = document.querySelectorAll(".listBox");
const allBtns = document.querySelectorAll(".btn");
const main = document.querySelector(".main");

document.addEventListener('DOMContentLoaded', function() {
    main.classList.add("loadingAnimation");
});

searchBox.addEventListener('input', () => {
    let searchSkills = searchBox.value.trim().toLowerCase();
    listBox.forEach(box => {
        let skills = box.dataset.skills.toLowerCase(); // ဒီနေရာသည် အဓိက HTML ထဲက data-skills Attribute ကို လှမ်းယူပြီး အထဲက Value များကို တိုက်စစ်ခြင်း
        let roles = box.dataset.role.toLowerCase();
        if(skills.includes(searchSkills) || roles.includes(searchSkills)) {
            box.style.display = "flex";
        } else {
            box.style.display = "none";
        }
    });
});
