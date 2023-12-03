const main = document.querySelector("[data-main]")
const campoForm = document.querySelectorAll("[required]")
const info = document.querySelectorAll(".card-info")

// pega os valores do form e coloca no cartão
for (let i = 0; campoForm.length && info.length > i; i++) {

    let campo = campoForm[i]
    let card = info[i]

    campo.addEventListener("input", () => {
        card.textContent = campo.value

    })

}

//faz com que o input de 16 digitos se separem automaticamente no cartão
    const formNumber = document.querySelector("[data-numero]")
    const cardNumber = document.querySelector("[data-card-number]")
    
    formNumber.addEventListener("input", function() {
        const number = this.value.replace(/\D/g, '')
        const parts = []

        for(let i = 0; i< number.length; i +=4) {
            parts.push(number.slice(i, i + 4))

        }

        cardNumber.textContent = parts.join(" ")
    })

// botao de confirmar
const botaoConfirm = document.querySelector(".formulario__botao")
const form = document.querySelector("[data-formulario]")
const finalizar = document.querySelector(".finalizacao")

// faz que não repida as mensagens de erro
botaoConfirm.addEventListener("click", () => {
    let mensagemErro = document.querySelectorAll(".is-label-invalid").value

    mensagemErro = ""
    
})

// valida o Formulario
validacao(campoForm)