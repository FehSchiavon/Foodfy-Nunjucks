//=== MOSTRAR E ESCONDER EM MAIS BOTOES===//

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

function ingridient() {
    let ingridient = document.querySelector('#ingridient-position')
    if (ingridient.innerHTML === "ESCONDER") {
        ingridient.innerHTML = "MOSTRAR";
    } else {
        ingridient.innerHTML = "ESCONDER";
    }
}

function preparation() {
    let preparation = document.querySelector('#preparation-position')
    if (preparation.innerHTML === "ESCONDER") {
        preparation.innerHTML = "MOSTRAR";
    } else {
        preparation.innerHTML = "ESCONDER";
    }
}

function extra() {
    let extra = document.querySelector('#extra-position')
    if (extra.innerHTML === "ESCONDER") {
        extra.innerHTML = "MOSTRAR";
    } else {
        extra.innerHTML = "ESCONDER";
    }
}