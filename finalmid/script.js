

//darkmode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");}
    

//resume
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {

        const resumeDetails = document.querySelectorAll('.resume-detail');

            resumeBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            btn.classList.add('active');

            resumeDetails.forEach(detail => {
                detail.classList.remove('active');
            });
        resumeDetails[idx].classList.add('active');
    });
});


//text-animation
const typed = new Typed('.multiple-text', {
    strings: ["IT Student", "Logo Maker", "Web Developer"],
    typeSpeed: 100,
    typeSpeed: 100,
    backSpeed: 300,
    loop: true
});


//persocal information
const profilePic = document.getElementById('profilePic');
const infoModal = document.getElementById('infoModal');
const closeBtn = document.getElementById('closeBtn');

    profilePic.onclick = function() {
    infoModal.style.display = 'flex';
}


    closeBtn.onclick = function() {
    infoModal.style.display = 'none';
}


    window.onclick = function(event) {
    if (event.target === infoModal) {
    infoModal.style.display = 'none';
}
};


//transitions
ScrollReveal ({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .project-info, .desc', { origin: 'top' });
ScrollReveal().reveal('.home-img, .resume-container, .project-slider, .contact-container, .project-container, .activity-container', { origin: 'bottom' });


//activity
const slides = document.querySelectorAll(".slides img");
const projectNumber = document.getElementById("projectNumber");
const projectTitle = document.getElementById("projectTitle");
const projectTech = document.getElementById("projectTech");

let index = 0;

// Example data for each slide
const projectData = [
{ number: "Activity 01", title: "Portfolio",},
{ number: "Activity 02", title: "Tags" },
{ number: "Activity 03", title: "Button Card" },
{ number: "Activity 04", title: "Dark Mode" },
{ number: "Activity 05", title: "Toggle Dark Mode" },
{ number: "Activity 06", title: "Grocery Lists" }
];

function updateProjectInfo() {
projectNumber.textContent = projectData[index].number;
projectTitle.textContent = projectData[index].title;
projectTech.innerHTML = projectData[index].tech.replace("");
}

document.getElementById("next").addEventListener("click", () => {
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
updateProjectInfo();
});

document.getElementById("prev").addEventListener("click", () => {
slides[index].classList.remove("active");
index = (index - 1 + slides.length) % slides.length;
slides[index].classList.add("active");
updateProjectInfo();
});