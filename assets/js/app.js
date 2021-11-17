const shiFuMi = ["pierre", "ciseaux", "feuille"]

let wordUser = "pierre", a = 0, scoreUser = 0, scoreIA = 0

scoreu.textContent = scoreUser
scoreia.textContent = scoreIA

function setScore(id, user){

    if(user == "null"){
        result.innerHTML = '<span class="d-inline-block btn btn-warning text-white">Egalité</span>'
    }else if(user == "User"){
        scoreUser++
        id.textContent = scoreUser
        result.innerHTML = '<span class="d-inline-block btn btn-success text-white">Gagné</span>'
    }else{
        scoreIA++
        id.textContent = scoreIA
        result.innerHTML = '<span class="d-inline-block btn btn-danger text-white">Perdu</span>'
    }

    imgUser.src = `assets/img/${wordUser}.png`
    imgIA.src = `assets/img/${wordIA}.png`
}

containerForm.addEventListener("click", (e) => {

    if(e.target.nodeName == "IMG"){
        document.getElementById(`${wordUser}IMG`).src = `assets/img/${wordUser}.png`
        e.target.src = `assets/img/${e.target.alt}Clicked.png`

        wordUser = e.target.alt
        a = e.target.dataset.number
    }

    if(e.target.nodeName == "BUTTON"){
        b = Math.floor(Math.random() * shiFuMi.length)
        wordIA = shiFuMi[b]
        a == b ? setScore(null, "null") : a < b && a == b-1 || a == 2 && a == b+2 ? setScore(scoreu, "User") : setScore(scoreia, "IA")
    }
})