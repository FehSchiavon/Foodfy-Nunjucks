//=== MOSTRAR E ESCONDER EM MAIS BOTOES===//

document.addEventListener('click', toggleDocs, true)
// let buttonDescription = document.querySelector('.stuff-button')

function toggleDocs (event) {
    if (event.target && event.target.className == 'stuff-button') {

        let next = event.target.nextElementSibling

        if (next.style.display == 'block') {
            next.style.display = 'none'
            // buttonDescription.innerHTML = "MOSTRAR"

        } else {
            next.style.display = 'block'
            // buttonDescription.innerHTML = "ESCONDER"
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

