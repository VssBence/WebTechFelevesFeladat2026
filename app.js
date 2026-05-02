const NeptunCode = "Z5BZ1O";


const kocsilista = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Hyundai', 'Kia', 'Subaru', 'Lexus', 'Mazda', 'Tesla', 'Jeep', 'Porsche', 'Volvo', 'Jaguar', 'Land Rover', 'Mitsubishi', 'Ferrari', 'Lamborghini'];


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