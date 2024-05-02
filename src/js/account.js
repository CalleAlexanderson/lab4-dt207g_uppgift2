// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {
    const form = document.getElementById('create_acc');
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // taget härifrån: https://www.javascripttutorial.net/web-apis/javascript-formdata/
        const formData = new FormData(form);
        const values = [...formData.entries()];
        console.log(values);
        createAccount(values);
    });


} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function createAccount(accDetails) {
    console.log("formulär skickat");
    console.log(accDetails);
    let newAccount;
    accDetails[0][1] = accDetails[0][1].replace(/(<([^>]+)>)/ig,''); // tar bort tags från accountUserName eftersom det skrivs ut på webbsidan sen
    if (accDetails[0][1] != "" && accDetails[1][1] != "" && accDetails[2][1] != "" && accDetails[3][1] != "") {
        newAccount = {
            "accountUserName": accDetails[0][1],
            "userName": accDetails[1][1],
            "password": accDetails[2][1],
            "mail": accDetails[3][1],
            "creationDate": new Date()
        }
        document.getElementById('create_msg').innerHTML = "";
        console.log(newAccount);
        const response = await fetch(`http://127.0.0.1:3000/users/register`, {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(newAccount)
        });
        const res = await response.json();
        console.log(res);
        sessionStorage.setItem("user", res.accountUserName)
        console.log(sessionStorage.getItem("user"));
    } else {
        document.getElementById('create_msg').innerHTML = "Var snäll och fyll i alla fält";
    }

}

