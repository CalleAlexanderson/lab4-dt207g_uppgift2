// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init(){
    let user = sessionStorage.getItem("user");
    if (user != "" && user != null) {
        console.log(user);
        document.getElementById('logged_in').innerHTML = `<p>Du är inloggad som: ${user}, <a href="log_in.html">Byt konto</a></p>`;
    } else {
        document.getElementById('logged_in').innerHTML = `<a href="log_in.html">Logga in</a>`;
        console.log("finns inte");
    }
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------