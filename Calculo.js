const botao = document.getElementById("botao")

botao.addEventListener("click", () => {

    const n1 = Number(document.getElementById("num_1").value)
    const n2 = Number(document.getElementById("num_2").value)

    const resposta = n1 + n2

    document.getElementById("resultado").textContent = resposta
})
