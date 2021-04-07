// Aumenta Fonte

function aumentarFonte(n) {
    if (n == 1) {
        $('body, header, main, footer').addClass('fonteGrande');
    } else {
        $('body, header, main, footer').removeClass('fonteGrande');
    }
}

$(document).ready(function() {

    $('#input1').change(function(elemento) {
        console.log($(elemento.target).val()); //retorna o valor do input


        var entradaUTI = $(elemento.target).val()
        if (entradaUTI > 80) {
            $(".red").addClass("red2")

            $(".orange").removeClass("orange2")
            $(".yellow").removeClass("yellow2")
            $(".green").removeClass("green2")


        } else if (entradaUTI > 70 && entradaUTI <= 80) {
            $(".orange").addClass("orange2")

            $(".red").removeClass("red2")
            $(".yellow").removeClass("yellow2")
            $(".green").removeClass("green2")

        } else if (entradaUTI <= 70 && entradaUTI > 60) {
            $(".yellow").addClass("yellow2")

            $(".orange").removeClass("orange2")
            $(".green").removeClass("green2")
            $(".red").removeClass("red2")


        } else if (entradaUTI <= 60) {
            $(".green").addClass("green2")

            $(".orange").removeClass("orange2")
            $(".yellow").removeClass("yellow2")
            $(".red").removeClass("red2")
        }
    })


    //LEITOS ENFERMARIA
    $('#input2').change(function(elemento) {
        console.log($(elemento.target).val()); //retorna o valor do input


        var entradaUTI = $(elemento.target).val()
        if (entradaUTI > 80) {
            $(".red").addClass("red2")

            $(".orange").removeClass("orange2")
            $(".yellow").removeClass("yellow2")
            $(".green").removeClass("green2")


        } else if (entradaUTI > 70 && entradaUTI <= 80) {
            $(".orange").addClass("orange2")

            $(".red").removeClass("red2")
            $(".yellow").removeClass("yellow2")
            $(".green").removeClass("green2")

        } else if (entradaUTI <= 70 && entradaUTI > 60) {
            $(".yellow").addClass("yellow2")

            $(".orange").removeClass("orange2")
            $(".green").removeClass("green2")
            $(".red").removeClass("red2")


        } else if (entradaUTI <= 60) {
            $(".green").addClass("green2")

            $(".orange").removeClass("orange2")
            $(".yellow").removeClass("yellow2")
            $(".red").removeClass("red2")
        }
    })

    //mudar a cor do texto leito de UTI
    $("#input1").focus(function() {
        $("#text-leito").addClass("text1")
    })


    /*-------------JAVA SCRIPT BOTAO ACESSIBILIDADE-----------*/
    function aumentarFonte(n) {
        if (n == 1) {
            $('body, header, main, footer').addClass('fonteGrande');
        } else {
            $('body, header, main, footer').removeClass('fonteGrande');
        }
    }
    /*-------------DATA E HORA----------------------------------*/
    var data = new Date();
    $('small').text(`${data.toLocaleDateString()} - ${data.getHours()}:${data.getMinutes()}h`);
})