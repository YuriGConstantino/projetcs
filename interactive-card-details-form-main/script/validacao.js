
function validacao() {

    const validation = new JustValidate('[data-formulario]',
        {
            errorLabelCssClass: 'is-label-invalid',
            errorLabelStyle: {
                color: 'hsl(0, 100%, 66%)',
                marginTop: '0.2rem',
                fontSize: '15px',
                width: '100%',
                display: 'inline-block',
                position: 'relative'
            },

            errorFieldCssClass: ['erro'],
        }
    );

    validation
        .addField('[data-nome]', [

            {
                rule: 'required',
                errorMessage: 'Name is required',


            },
            {
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 30,
            },




        ])

        .addField('[data-numero]', [
            {
                rule: 'required',
                errorMessage: 'Card number is required',

            },

            {
                rule: 'minLength',
                value: 16,
            },

            {
                rule: 'maxLength',
                value: 16,
            },


        ])

        .addField('[data-mes]', [
            {
                rule: 'required',
                errorMessage: 'Month is required',

            },

            {
                rule: 'minNumber',
                value: 1
            },

            {
                rule: 'maxNumber',
                value: 12
            }
        ])

        .addField('[data-ano]', [
            {
                rule: 'required',
                errorMessage: 'Year is required',

            },

            {
                rule: 'minNumber',
                value: 30
            },

            {
                rule: 'maxNumber',
                value: 99
            }
        ])

        .addField('[data-cvc]', [
            {
                rule: 'required',
                errorMessage: 'CVC is required',

            },
            {
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 3,
            },

        ])

        .onSuccess(() => {
            //remove o formulario
            form.remove()

            //adiciona a tela de finalização
            const telaFinal = document.createElement("div")

            telaFinal.innerHTML = 
            `<img src="images/icon-complete.svg" class="finalizacao__imagem">
            <span class="finalizacao__texto">Thank you!</span>
            <span class="finalizacao__texto-segundario">We've added your card details</span>
            <button class="finalizacao__botao botao" data-btn>Continue</button>`

            telaFinal.className = "finalizacao"

            main.appendChild(telaFinal);

            //recarreca a pagina
            const botaoContinue = document.querySelector("[data-btn]")

            botaoContinue.addEventListener("click", () => {

                location.reload()

            })
        })

}