const NeptunCode = "Z5BZ1O";


function loadNavigation(){
    fetch('./navbar.html')
        .then(res => res.text())
        .then(navbarHTML => {
            document.body.insertAdjacentHTML('afterbegin',navbarHTML);
        })
        .catch(err => {
            console.log(err);
            alert("Hiba a menürendszer betöltésekor.");
        });
}
loadNavigation();