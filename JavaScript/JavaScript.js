// Aumenta Fonte

function aumentarFonte(n) {
    if (n == 1) {
        $('body, header, main, footer').addClass('fonteGrande');
    } else {
        $('body, header, main, footer').removeClass('fonteGrande');
    }
}

// Function Tabs

$(function() {
    $("#tabs").tabs();
});

// Function Accordion

$(function() {
    $("#accordion").accordion();
});
//Hover Tratamentos



$(document).ready(function() {
    //Ao clicar em alguma âncora, ir "lentamente" até ela (tcb05 - 05)
    $(function() {
        $('a[href*="#"]:not([href="#"],[href="#tabs-1"],[href="#tabs-2"],[href="#tabs-3"],[href="#tabs-4"])').click(function() {
            var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({ scrollTop: target.offset().top }, 1000);
                return false;
            }
        });
    });

    //Requisitos efeito de FADE, SLIDE e TOGGLE (CLICK)
    $('#info').hide();
    $('#info').hide();
    $('#info').hide();
    $(".divTratamentos").click(function() {
        $('#info1').toggle();
        $('#info2').fadeToggle(1000);
        $('#info3').slideToggle(1000);
    });

    //GALERIA DE FOTOS

    //Velocidade da rotação e contador
    var speed = 5000;
    var run = setInterval('rotate()', speed);

    //Pega o valor da largura e calcular o valor da posição da esquerda
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);

    //Coloca o último item antes do primeiro item, caso o usuário clique no botão de ANTERIOR
    $('#slides li:first').before($('#slides li:last'));

    //Coloca o item atual na posição correta
    $('#slides ul').css({ 'left': left_value });

    //Se o usuário clica no botão ANTERIOR
    $('#prev').click(function() {

        //Pega a posição da direita
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;

        //Move o item
        $('#slides ul').animate({ 'left': left_indent }, 200, function() {

            //Move o último item e o coloca como o primeiro
            $('#slides li:first').before($('#slides li:last'));

            //Coloca o item atual na posição correta
            $('#slides ul').css({ 'left': left_value });

        });

        //Cancela o comportamento do click
        return false;

    });

    //Se o usuário clica no botão PROXIMO
    $('#next').click(function() {

        //Pega a posição da direita
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;

        //Move o item
        $('#slides ul').animate({ 'left': left_indent }, 200, function() {

            //Move o último item e o coloca como o primeiro
            $('#slides li:last').after($('#slides li:first'));

            //Coloca o item atual na posição correta
            $('#slides ul').css({ 'left': left_value });

        });

        //Cancela o comportamento do click
        return false;

    });

    //Se o usuário está com o mouse sob a imagem, para a rotacao, caso contrário, continua
    $('#slides').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', speed);
        }
    );

    $("#dialog").hide();

    //DATA E HORA FOOTER

    var data = new Date();
    $('small').text(`${data.toLocaleDateString()} - ${data.getHours()}:${data.getMinutes()}h`);

});

//O temporatizador chamará essa função e a rotação será feita
function rotate() {
    $('#next').click();
}

// DIALOG 

function dialoog() {
    $("#dialog").dialog();
};