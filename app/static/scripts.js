$(document).ready(function(){
    var j = 0;
    var k = 0;
    var limite_j = 0; 
    var limite_k = 0;
    for (var i = 0; i < 5; i++){
        if (i == 4){
            limite_j += 1;
        }else{
            limite_j += 2;
        }
        $("#todasasplantas").append('<div id="aba'.concat(i).concat('"class="item"></div>'));
        for (j; j < limite_j; j++){
            if (j == 8){
                limite_k += 5;
            }else{
                limite_k += 8;
            }
            $("#aba".concat(i)).append('<div id="fileira'.concat(j).concat('"></div>'));
            for (k; k < limite_k; k++){
                $("#fileira".concat(j)).append('<img class="addplanta plantasPossiveis" id="P_'.concat(k).concat('"src="/static/').concat(k).concat('.webp" alt="">'));
            }
        }
    }
});




$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});
var plantas = []
var limite_slots = 15
for (var i = 0; i < 15; i++) {
    var por = plantas.push('');
 }

function baixarcartela(){
        var node = document.getElementById("cartela");
        domtoimage.toPng(node)
            .then(function(dataUrl){
                var img = new Image();
                img.src = dataUrl;
                donwloadURI(dataUrl, "cartela.png");
            })
            .catch(function(error){
                console.log("algo deu errado", error);
            })

}

function donwloadURI(uri, name){
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

$(function(){
    $(".addplanta").click(function( event ) {
    event.preventDefault();
    var vazio = plantas.indexOf('')
    if (plantas.includes('') == true && vazio < limite_slots){
    var id = this.id;
    var split_id = id.split("_");
    var planta_id = split_id[1];
    if (plantas.includes(planta_id) == false){
    plantas[vazio] = planta_id;
    $('#'.concat('P_'.concat(planta_id))).addClass('escolhida');
    $('#'.concat(vazio)).attr('src', '/static/'+ planta_id + '.webp');
    }
    }
    })

})

$(function(){
    $(".removerplanta").click(function( event ) {
    event.preventDefault();
    var slot_id = this.id;
    if (plantas[slot_id] != ''){
    var planta_slot = plantas[slot_id]
    plantas[slot_id] = '';
    $('#'.concat('P_'.concat(planta_slot))).removeClass('escolhida');
    $('#'.concat(slot_id)).attr('src', '/static/'+ 'none.png');
    }
    })

})

function cartelaaleatoria(){
    $(".addplanta").removeClass('escolhida');
    $(".removerplanta").attr('src', '/static/'+ 'none.png');;
    for (var i = 0; i < limite_slots; i++) {
        plantas[i] = '';
    }
    var plantasPossiveis = []
    for (var i = 0; i < 69; i++) {
        plantasPossiveis[i] = i + '';
    }
    for (var i = 0; i < limite_slots; i++) {
        var min = 0;
        var max = plantasPossiveis.length - 1;
        var sorteio = (Math.floor(Math.random() * (max - min + 1)) + min);
        var item = plantasPossiveis[sorteio];
        plantas[i] = item + '';
        $('#'.concat('P_'.concat(item))).addClass('escolhida');
        $('#'.concat(i)).attr('src', '/static/'+ item + '.webp');
        plantasPossiveis.splice(sorteio, 1);
    }
}

function deletarcartela(){
    $(".addplanta").removeClass('escolhida');
    $(".removerplanta").attr('src', '/static/'+ 'none.png');;
    for (var i = 0; i < limite_slots; i++) {
        plantas[i] = '';
    }
}

function membromilho(){
    limite_slots = 14;
    $('#'.concat('P_'.concat(plantas[14]))).removeClass('escolhida');
    $('#14').attr('src', '/static/'+ 'none.png').addClass('esconder');
    plantas[14] = '';
    $('#13').removeClass('esconder');

}

function membroperu(){
    limite_slots = 13;
    $('#'.concat('P_'.concat(plantas[13]))).removeClass('escolhida');
    $('#13').attr('src', '/static/'+ 'none.png').addClass('esconder');
    plantas[13] = '';
    $('#'.concat('P_'.concat(plantas[14]))).removeClass('escolhida');
    $('#14').attr('src', '/static/'+ 'none.png').addClass('esconder');
    plantas[14] = '';

}

function semmembro(){
    limite_slots = 15;
    $('#13').removeClass('esconder');
    $('#14').removeClass('esconder');
}