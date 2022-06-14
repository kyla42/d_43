const bulb = document.querySelector(".bulb-area");
const bulbColor = ["on-yellow", "on-orange", "on-pink", "on-white", "on-lightblue", "on-mediumorchid", "on-lightgreen"];

bulb.addEventListener("mouseover", function(){
    const randomC = bulbColor[Math.floor(Math.random() * bulbColor.length)];

    bulb.classList.add(randomC);

    bulb.addEventListener("mouseout", function(){
        bulb.classList.remove(randomC);     
    });
});