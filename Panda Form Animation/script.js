let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
    eyeL.style.cssText = `
      left:0.6em;
      top: 0.6em;
    `;
    eyeR.style.cssText = `
    right:0.6em;
    top:0.6em;
    `;
  };
  
  let normalHandStyle = () => {
    handL.style.cssText = `
          height: 2.81em;
          top:8.4em;
          left:7.5em;
          transform: rotate(0deg);
      `;
    handR.style.cssText = `
          height: 2.81em;
          top: 8.4em;
          right: 7.5em;
          transform: rotate(0deg)
      `;
  };
  