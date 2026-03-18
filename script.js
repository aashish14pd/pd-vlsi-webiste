// DARK MODE TOGGLE

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggleBtn.innerText="☀️";
}else{
toggleBtn.innerText="🌙";
}

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(".flow-card");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

cards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.6s";
observer.observe(card);
});
