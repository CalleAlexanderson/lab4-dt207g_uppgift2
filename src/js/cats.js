// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init(){
    if (!localStorage.getItem("token")) {
        window.localStorage.href = "index.html"
    }
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------