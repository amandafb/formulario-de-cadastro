// Aumenta Fonte

function aumentarFonte(n) {
    if (n == 1) {
        $('body, header, main, footer').addClass('fonteGrande');
    } else {
        $('body, header, main, footer').removeClass('fonteGrande');
    }
}

//UTILIZEI O SCROLL TOP

function animeScroll() {
    //ñ deixa um espaço em branco maior do que três quartos
    var tela = $(window).height() * 3 / 4;

    //captar a distância do topo da pág para o scroll
    var distanciaTopo = $(document).scrollTop();
    //use o console para pegar o valor da distancia no console para calcular a distancia
    console.log(distanciaTopo);

    //each() aplica o efeito de um em um(e ñ todos de uma vez)
    $(".fotos-pessoas").each(function() {
        //distancia do item p/ o topo
        itemTopo = $(this).offset().top
        console.log(itemTopo);
        //ou usar -tela
        if (distanciaTopo > itemTopo - tela) { //ou colocar -200 ou -100 etc, p/ajustar como preferir.             
            $(this).addClass("anime_final")
        } else {
            $(this).removeClass("anime_final")
        }
    })
}
animeScroll();
$(window).scroll(function() {
    animeScroll()


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