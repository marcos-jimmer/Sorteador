const botaoSortear = document.querySelector("div.box button")
var numeroSorteado = document.querySelector("div.box h1")
var roleta = []

for(i = 1; i <= 25; i++){
    roleta.push(i)
}

botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = "O número sorteado é " + roleta[Math.floor(Math.random() * roleta.length)]
})
