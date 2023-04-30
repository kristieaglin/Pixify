//MODE BUTTON


const modeButton = document.querySelector("#mode-btn");
const toggleMode = () => {
   const body = document.querySelector("body");
   const aboutUs = document.querySelector("h2");
   const p = document.querySelector("p");
   const p1 = document.querySelector(".p1");
   const p2 = document.querySelector(".p2");
   const p3 = document.querySelector(".p3");
   const p4 = document.querySelector(".p4");
   const btn = document.querySelector(".about-btn");


   if(body.style.backgroundColor === "var(--grayBlue)"){
    body.style.backgroundColor = "var(--white)";
    modeButton.innerHTML = "Dark Mode";
    aboutUs.style.color = "var(--black)";
    p.style.color = "var(--black)";
    p1.style.color = "var(--black)";
    p2.style.color = "var(--black)";
    p3.style.color = "var(--black)";
    p4.style.color = "var(--black)";
    btn.style.border = "none";
   }else{
    body.style.backgroundColor = "var(--grayBlue)";
    modeButton.innerHTML = "Light Mode";
    aboutUs.style.color = "var(--white)";
    p.style.color = "var(--white)";
    p1.style.color = "var(--white)";
    p2.style.color = "var(--white)";
    p3.style.color = "var(--white)";
    p4.style.color = "var(--white)";
    btn.style.border = "1px solid var(--neonBlue)";
   }

}

modeButton.onclick = toggleMode;