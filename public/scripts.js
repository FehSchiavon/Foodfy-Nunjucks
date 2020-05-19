//=== MOSTRAR E ESCONDER DOS BOTÕES (Porém não esta em todos os botões) ===//

// let buttonDescription = document.querySelector('.stuff-button')
// let infoDescription = document.querySelector('.fullStuff-description')

// buttonDescription.addEventListener('click', function (event) {
//     if (infoDescription.style.display == "") {
//         infoDescription.style.display = "none"
//         buttonDescription.innerHTML = "MOSTRAR"
//     } else {
//         infoDescription.style.display = ""
//         buttonDescription.innerHTML = "ESCONDER"
//     }
// })


//=== MOSTRAR E ESCONDER EM MAIS BOTOES===//

// let buttonDescription = document.querySelector('.stuff-button')
// let infoDescription = document.querySelector('.fullStuff-description')

document.addEventListener('click', toggleDocs, true)

function toggleDocs (event) {
    if (event.target && event.target.className == 'stuff-button') {

        let next = event.target.nextElementSibling

        if (next.style.display == 'block') {
            next.style.display = 'none'
            

        } else {
            next.style.display = 'block'
        }
    }
}



// document.addEventListener('click', toggleDocs, true);

// function toggleDocs(event) {

//     if (event.target && event.target.className == 'stuff-button') {

//         var next = event.target.nextElementSibling;


//         if (next.style.display == "none") {
//             next.style.display = "block";

//         } else {
//             next.style.display = "none";
//         }
//     }
// }

