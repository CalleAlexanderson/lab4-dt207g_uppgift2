// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init(){
    if (!localStorage.getItem("token")) {
        window.localStorage.href = "index.html"
    }
    getCatInfo();
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function displayCatInfo(info) {
    document.getElementById('myCat'). innerHTML = info;
}

async function getCatInfo() {
    let token = localStorage.getItem("token");
    
    const response = await fetch(`http://127.0.0.1:3000/users/cat`, {
            method: "GET",
            headers: {
                "content-type": "Application/json",
                "Authorization": "Bearer "+token
                
            }
        });
        const res = await response.json();
        if (res) {
            displayCatInfo(`Min katt ${res.catName}, hon är ${res.catAge} år gammal`)
        } else {
            displayCatInfo("inte giltig JWT")
        }
}