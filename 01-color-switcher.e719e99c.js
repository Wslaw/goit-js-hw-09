const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.stopBtn.disabled=!0;let e=null;t.startBtn.addEventListener("click",(()=>{t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.e719e99c.js.map
