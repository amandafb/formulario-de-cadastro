// MENU MOBILE
function menuMobile() {
    var x = document.getElementById("menu-principal");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


      $("#menuMobile").click(function(){
        $("#menu-principal").toggle();
      })
  

//******REQUISITO BOTÃO DE ACESSIBILIDADE******//
function aumentarFonte(n) {
    if (n == 1) {
        $('body, header, main, footer').addClass('fonteGrande');
    } else {
        $('body, header, main, footer').removeClass('fonteGrande');
    }
}


//******REQUISITO VALIDAÇÃO CAMPO: NOME******//
function validaNome() {
    let num = $("#nome").val();
    if (num == '') {
        $('#nome').css("border", "2px solid red");
    } else {
        $('#nome').css("border", "");
    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#nome').focus(function () {
    $('#nome').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#nome').blur(function () {
    $('#nome').css({
        backgroundColor: ""
    });
})

//******REQUISITO VALIDAÇÃO CAMPO: CPF******//
function VerificaCPF() {
    let strCpf = $("#cpf").val();

    var soma = 0;
    var resto;
    if (strCpf == '') {
        $('#cpf').css("border", "2px solid red");
        return false
    }

    if (strCpf == "00000000000" || strCpf.length != 11) {

        $('#cpf').css("border", "2px solid red");
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {

        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {

        $('#cpf').css("border", "2px solid red");
        return false;
    }

    $('#cpf').css("border", "");
    return true;
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#cpf').focus(function () {
    $('#cpf').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#cpf').blur(function () {
    $('#cpf').css({
        backgroundColor: ""
    });
})

//******REQUISITO VALIDAÇÃO CAMPO: CARTÃO DO SUS******//
function validaSus() {
    let num = $("#cartao-sus").val();
    if (num == '' || num.length < 15) {
        $('#cartao-sus').css("border", "2px solid red");
    } else {
        $('#cartao-sus').css("border", "");
    }
}

//******REQUISITO FOCUS() E BLUR()*******//

$('#cartao-sus').focus(function () {
    $('#cartao-sus').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#cartao-sus').blur(function () {
    $('#cartao-sus').css({
        backgroundColor: ""
    });
})

//******REQUISITO VALIDAÇÃO CAMPO: DIA******//
function validaDia() {
    let num = $("#dia").val();
    if (num == '') {
        $('#dia').css("border", "2px solid red");
    } else if (num < 1 || num > 31) {
        $('#dia').css("border", "2px solid red");

    } else {
        $('#dia').css("border", "");
    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#dia').focus(function () {
    $('#dia').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#dia').blur(function () {
    $('#dia').css({
        backgroundColor: ""
    });
})


//******REQUISITO VALIDAÇÃO CAMPO: MÊS******//
function validaMes() {
    let num = $("#mesNascimento").val();
    if (num == 0) {
        $('#mesNascimento').css("border", "2px solid red");
    } else {
        $('#mesNascimento').css("border", "");
    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#mesNascimento').focus(function () {
    $('#mesNascimento').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#mesNascimento').blur(function () {
    $('#mesNascimento').css({
        backgroundColor: ""
    });
})

//******REQUISITO VALIDAÇÃO CAMPO: ANO******//
function validaAno() {
    let num = $("#ano").val();
    if (num == '') {
        $('#ano').css("border", "2px solid red");
    } else if (num > 2021 || num < 1891) {
        $('#ano').css("border", "2px solid red");
    } else {
        $('#ano').css("border", "");
    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#ano').focus(function () {
    $('#ano').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#ano').blur(function () {
    $('#ano').css({
        backgroundColor: ""
    });
})

//******REQUISITO VALIDAÇÃO CAMPO: SEXO******//
function validaSexo() {
    let num = $("#sexo").val();
    if (num == 0) {
        $('#sexo').css("border", "2px solid red");
        $('#gestante').prop("disabled", true);
        $('#gestante').val(0);
    } else if (num == 1) {
        $('#sexo').css("border", "");
        $('#gestante').prop("disabled", false);
    } else {
        $('#sexo').css("border", "");
        $('#gestante').prop("disabled", true);
        $('#gestante').val(0);
    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#sexo').focus(function () {
    $('#sexo').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#sexo').blur(function () {
    $('#sexo').css({
        backgroundColor: ""
    });
})


//******REQUISITO VALIDAÇÃO CAMPO: ETNIA******//
function validaEtnia() {
    let num = $("#etnia").val();
    if (num == 0) {
        $('#etnia').css("border", "2px solid red");
    } else {
        $('#etnia').css("border", "");
    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#etnia').focus(function () {
    $('#etnia').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#etnia').blur(function () {
    $('#etnia').css({
        backgroundColor: ""
    });
})

//******CAMPO OPCIONAL - VALIDAÇÃO: EMAIL******//
function validaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        $('#email').css("border", "");

    } else {
        $("#email").css("border", "2px solid red");

    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#email').focus(function () {
    $('#email').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#email').blur(function () {
    $('#email').css({
        backgroundColor: ""
    });
})

//******FUNÇÃO RESETA O ESTILO PARA QUANDO O CAMPO É CORRIGIDO******//
function resetEstilo(e) {
    e.style.border = "";
}

//******REQUISITO FUNÇÃO IMC******//
function imc() {
    let peso = $("#peso").val();
    let altura = $("#altura").val();

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        $("#span").text(`Seu IMC é de ${imc.toFixed(2)}. Você está abaixo do peso ideal.`);
    } else if (imc >= 18.5 && imc < 25) {
        $("#span").text(`Seu IMC é de ${imc.toFixed(2)}. Você está no peso ideal`);
    } else if (imc >= 25 && imc < 30) {
        $("#span").text(`Seu IMC é de ${imc.toFixed(2)}. Você está com sobrepeso`);
    } else if (imc >= 30 && imc < 40) {
        $("#span").text(`Seu IMC é de ${imc.toFixed(2)}. Você está Obeso.`)
    } else if (imc >= 40) {
        $("#span").text(`Seu IMC é de ${imc.toFixed(2)}. Você está com Obesidade Grave.`)
    } else {
        $("#span").text(`Por favor digite seu peso e altura corretamente`)
    }

}

//******CAMPO OPCIONAL - VALIDAÇÃO TELEFONE******//
function validaTel() {
    let num = $("#tel").val();
    if (num == '' || num.length < 10) {
        $('#tel').css("border", "2px solid red");
    } else {
        $('#tel').css("border", "");
    }
}

//******REQUISITO FOCUS() E BLUR()*******//
$('#tel').focus(function () {
    $('#tel').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#tel').blur(function () {
    $('#tel').css({
        backgroundColor: ""
    });
})

//******REQUISITO FOCUS() E BLUR()*******//
$('#profissao').focus(function () {
    $('#profissao').css({
        backgroundColor: "#e7e7e7"
    });
})

$('#profissao').blur(function () {
    $('#profissao').css({
        backgroundColor: ""
    });
})

//******FUNÇÃO PARA CADASTRO DO USUÁRIO******//
function cadastro() {
    var diaBase = 31
    var anoBase = 2021
    var mesBase = 3
    var mesNasc = $("#mesNascimento").val();
    var anoNascimento = parseInt($("#ano").val());
    var diaUsuario = parseInt($("#dia").val());

    var idade = anoBase - anoNascimento;

    if (mesBase < mesNasc) {
        idade--;
    } else {
        if (mesBase == mesNasc) {
            if (diaBase < diaUsuario) {
                idade--;
            }
        }
    }

    let peso = $("#peso").val();
    let altura = $("#altura").val();

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    let imc = peso / (altura * altura);

    var profissao = $("#profissao").val();
    var etnia = $("#etnia").val();
    var comorbidade = $("#comorbidades").val();
    var gestante = $("#gestante").val();

    if (gestante == 1) {
        $("#exibe").text(`Você não pode participar do Programa de Vacinação enquanto estiver grávida`);
    } else if (idade > 18 && etnia == 4 || profissao == 1 || idade >= 75) {
        $("#exibe").text(`Você está no GRUPO 1 de VACINAÇÃO`);
    } else if (idade >= 60 && idade <= 74) {
        $("#exibe").text(`Você está no GRUPO 2 de VACINAÇÃO`);
    } else if (idade > 18 && comorbidade > 0 || imc >= 40) {
        $("#exibe").text(`Você está no GRUPO 3 de VACINAÇÃO`);
    } else if (profissao > 1 && profissao < 5) {
        $("#exibe").text(`Você está no GRUPO 4 de VACINAÇÃO`);
    } else {
        $("#exibe").text(`Você ainda não compõe nenhum dos grupos prioritários de VACINAÇÃO`);
    }

}

//******REQUISITO BARRA DE PROGRESSO******//
const inputs = document.querySelectorAll('.progress');
const progress = document.querySelector('#progressBar');
const segments = 100 / inputs.length;

let fieldValues = [];

const checkFields = () => {
    let fieldsCompleted = 0;
    let barWidth = 0;

    for (let i = fieldValues.length; i--;) {
        if (fieldValues[i] === true) {
            fieldsCompleted += 1;
        }
    }

    barWidth = fieldsCompleted * segments;
    progress.style.width = barWidth + '%';
    progress.innerHTML = `<strong>${barWidth.toFixed(0)}%</strong>`;
}

for (let i = inputs.length; i--;) {
    inputs[i].addEventListener('input', (event) => {
        const currentInput = event.currentTarget;

        if (!currentInput.value.length) {
            fieldValues[i] = false;
        } else {
            fieldValues[i] = true;
        }

        checkFields();
    });
}



//******REQUISITO DATA E HORA DO SISTEMA******//
var data = new Date();
$('small').text(`${data.toLocaleDateString()} - ${data.getHours()}:${data.getMinutes()}h`);


