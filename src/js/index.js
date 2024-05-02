// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init(){
    getCatLink();
    let user = sessionStorage.getItem("user");
    if (user != "" && user != null) {
        console.log(user);
        document.getElementById('logged_in').innerHTML = `<p>Du är inloggad som: ${user} <br> <a href="log_in.html">Byt konto</a></p>`;
    } else {
        document.getElementById('logged_in').innerHTML = `<a href="log_in.html">Logga in</a>`;
        console.log("finns inte");
    }


} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function getCatLink() {
    let token = localStorage.getItem("token");
    
    const response = await fetch(`http://127.0.0.1:3000/users/protected`, {
            method: "GET",
            headers: {
                "content-type": "Application/json",
                "Authorization": "Bearer "+token
                
            }
        });
        const res = await response.json();
        console.log(res);
        console.log(res.protectedSite);
        if (res) {
            document.getElementById('cat_link').innerHTML = `<a href="${res.protectedSite}">Bilder på katter</a>`;
        } else {
            document.getElementById('cat_link').innerHTML = `Bilder på katter: Logga in för att se denna sida.`;
        }
}