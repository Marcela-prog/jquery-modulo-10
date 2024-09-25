$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Ex: (DDD) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: ' Ex: 000.000.000-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: 'Ex: 000000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },

        messages: {
            nome: {
                required: 'Por favor, insira seu nome completo.'
            },
            email: {
                required: 'Por favor, insira um e-mail válido.',
                email: 'Insira um endereço de e-mail válido.'
            },
            telefone: {
                required: 'Por favor, insira seu telefone.'
            },
            endereco: {
                required: 'Por favor, insira seu endereço completo.'
            },
            cep: {
                required: 'Por favor, insira seu CEP.'
            },
            cpf: {
                required: 'Por favor, insira seu CPF.'
            }
        },
        submitHandler: function(form) {
            alert('Sua requisição foi enviada para análise, parabéns pela aquisição!');
            form.reset();
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Por favor, preencha ${camposIncorretos} os campos para prosseguir com a compra!`);
            }
        }
    });
});