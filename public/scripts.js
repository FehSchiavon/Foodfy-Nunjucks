const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.type-recipes')


for (let recipe of recipes) {
    recipe.addEventListener('click', function(){
        modalOverlay.classList.add('active')

        const typeRecipesImg = recipe.getAttribute('id')
        modalOverlay.querySelector('img').src = `../layouts/assets/${typeRecipesImg}.png`

        const titleRecipes = recipe.querySelector('.whatRecipes').innerHTML
        modalOverlay.querySelector('.titleRecipes').innerHTML = `${titleRecipes}`

        const nameCreator = recipe.querySelector('.whatNameCreator').innerHTML
        modalOverlay.querySelector('.nameCreator').innerHTML = `${nameCreator}`

    })
}


document.querySelector('.button-close').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
    modalOverlay.querySelector('.titleRecipes').innerHTML = ""
    modalOverlay.querySelector('.nameCreator').innerHTML = ""
})