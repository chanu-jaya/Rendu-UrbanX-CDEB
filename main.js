// Sélection du formulaire
let form = document.querySelector('form')

// Ajout d'un évenement pour le form (détection)
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du dorm detecté !')
})

// Ajout d'un évenement pour le form (valide/invalide)
form.addEventListener('submit', function(event){
    event.preventDefault();
    let email = document.querySelector('#email')
    if(email.value == ''){
        console.log('invalide')
    } else {
        console.log('valide')
        email.classList.add('success')
    }
})

// Fonction menu déroulant burger
function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show-menu');
}