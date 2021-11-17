const shiFuMi = ["pierre", "ciseaux", "feuille"]

let wordUser = "pierre"
let nbUser = 0
let scoreUser = 0
let scoreIA = 0
scoreofuser.textContent = `${scoreUser}`
scoreofia.textContent = `${scoreIA}`



function setScore(id, user){

    if(user == "null"){
        result.innerHTML = '<span class="d-inline-block btn btn-warning text-white">Egalité</span>'
    }
    else if(user == "User"){
        scoreUser++
        id.textContent = `${scoreUser}`
        result.innerHTML = '<span class="d-inline-block btn btn-success text-white">Gagné</span>'
    }else{
        scoreIA++
        id.textContent = `${scoreIA}`
        result.innerHTML = '<span class="d-inline-block btn btn-danger text-white">Perdu</span>'
    }
}

containerForm.addEventListener("click", (e) => {

    if(e.target.nodeName == "IMG"){

        document.getElementById(`${wordUser}IMG`).src = `assets/img/${wordUser}.png`
        e.target.src = `assets/img/${e.target.alt}Clicked.png`

        wordUser = e.target.alt
        nbUser = e.target.dataset.number

    }

    if(e.target.nodeName == "BUTTON"){

        nbIA = Math.floor(Math.random() * shiFuMi.length)
        wordIA = shiFuMi[nbIA]
        nbUser == nbIA ? setScore(null, "null") : (nbUser < nbIA && nbUser == nbIA-1 || nbUser == 2 && nbUser == nbIA+2) ? setScore(scoreofuser, "User") : setScore(scoreofia, "IA")

        imgUser.src = `assets/img/${wordUser}.png`
        imgIA.src = `assets/img/${wordIA}.png`
    }
})