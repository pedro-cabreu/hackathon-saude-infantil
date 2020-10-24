if($(window).width() > 420){
    $("input[type='email']").attr("placeholder","exemplo@email.com");
    $("input[type='text']").attr("placeholder","Nome completo");
    $("input[name='city']").attr("placeholder","Selecione sua cidade");
    $("input[name='school']").attr("placeholder","Selecione sua escola");
    $("input[type='tel']").attr("placeholder","(XX)XXXXX-XXXX");
}

var r = 0, i = 0, a = 0, s = 0, e = 0, c = 0;
var lastCliked;
var lastClikedValue;

if(window.location.origin=='http://local.vocacional.com'){
    var rootPath=window.location.origin+'/';
}else{
    var rootPath=window.location.origin+'/teste/';
}


console.log(rootPath);


function clickSquared(id_click){

    let id_box = "box-"+id_click;

    if($('#'+id_box).hasClass('checked')){

        $('#'+id_box).removeClass('checked');

        switch(id_click){

            case 1:
                r--;
                break;

            case 2:
                i--;
                break;

            case 3:
                a--;
                break;

            case 4:
                s--;
                break;

            case 5:
                e = e - 1;
                break;

            case 6:
                c--;
                break;
        }
    }else{

        $('#'+id_box).addClass('checked');

        switch(id_click){

            case 1:
                r++;
                break;

            case 2:
                i++;
                break;

            case 3:
                a++;
                break;

            case 4:
                s++;
                break;

            case 5:
                e++;
                break;

            case 6:
                c++;
                break;
        }
    }

    console.log(r, i, a, s, e, c);
}


var questionsType='square';

$(document).ready(function () {
    var userId=$.session.get('user_id');
    if(userId!=null){
        next();
    }else{
        alert('Olá, é necessário efetuar o seu cadastro primeiro!')
        $(location).attr('href', rootPath+'src/pages/signup.php');
        return;
    }

});

function sumSliderOptions(){
    $(".slider-question").each(function() {
        updateValueTypology($(this).val(),$(this).attr('cont'));
    });

    next();
}

function updateValueTypology(value,id_click){
    if(value==3) {
        switch(parseInt(id_click)){
            case 1:
                r++;
                break;

            case 2:
                i++;
                break;

            case 3:
                a++;
                break;

            case 4:
                s++;
                break;

            case 5:
                e++;
                break;

            case 6:
                c++;
                break;
        }
    }
    console.log(r, i, a, s, e, c);
}

function next(type){
    var ids = $('#ids').val();
    var area = $('#area').val();

    if(area>1 && area <=4){
        limit=3;
        questionsType='slider'
    }else if(area>4){
        console.log('ACABOU AS QUESTÕES');
        console.log(r, i, a, s, e, c);

        var typology = [r, i, a, s, e, c];
        $.session.set("typology", typology);

        $(location).attr('href', rootPath+'src/pages/results.php');
        return;
    }else{
        limit=6;
    }

    $.ajax({
        type: "POST",
        // url: `http://127.0.0.1:8000/api/vocacional/questions/${area}`,
        url: `http://sis.fae.br:8080/api/vocacional/questions/${area}`,
        data:{
            'ids':ids,
            'limit':limit,
        },
        context: "json",
        success: function (response) {
            console.log(response);

            if(response.questions=='0'){
                $('#area').val(parseInt(area) + 1);
                ids=null;
                $('#ids').val('');
                $("#button-next").click();
            }else{
                makeQuestions(questionsType,response);
            }

        },
    });


    function makeQuestions(typeQuestions,response){
        if(typeQuestions=='square'){
            $('.questions-container').empty();
            var contador=1;
            $.each(response.questions, function (key, value) {
                $('.questions-container').append('<div class="box" onclick="clickSquared('+contador+')" id="box-'+contador+'">'+
                    '<p class="question-text">'+value['question_desc']+'</p>'+
                    '<img src="../../assets/images/caracteristicas/'+value['question_id']+'.svg" alt="">');
                contador++;
            });
            ids=$('#ids').val()+','+response.ids;
            $('#ids').val('');
            $('#ids').val(ids);
            contador = 0;
        }else{
            displayQuestions(typeQuestions);

            contador=response.group;
            $('.slider-content').empty();
            setAreaPhrase();
            $.each(response.questions, function (key, value) {

                $('.slider-content').append('<div class="question">' +
                    '<h5>'+value['question_desc']+'</h5>' +
                    '<div class="slider-label">' +
                    '<p>Não</p><p></p><p>Sim</p>' +
                    '</div>\n' +
                    '<input class="slider slider-question" type="range" id="slider-'+contador+'" cont='+contador+'  name="vol" default="2" min="1" max="3">');
                contador++;
            });

            $('.slider-content').append('' +
                '<div class="test-footer">' +
                '            <button type="button" id="button-next-slider" onclick="sumSliderOptions()">Próxima</button>' +
                '        </div>');


            ids=$('#ids').val()+','+response.ids;
            $('#ids').val('');
            $('#ids').val(ids);
            contador = 0;
        }
    }

    function displayQuestions(typeQuestions){

        if(typeQuestions=='slider'){
            $('.square-test').css("display", "none");
            $('.slider-test').css("display", "block");
        }
    }

    function setAreaPhrase() {
        $('.slider-header').empty();
        $('.test-footer').empty();
        switch ($('#area').val()) {
            case '2':
                $('.slider-header').append('<h2>INTERESSES</h2><h3 style="border-bottom: 1px solid white;font-size: 22px;'+
                    '">Atividades que gostaria de fazer, mesmo que não tenha habilidades para fazê-las:</h3>');
                break;
            case '3':
                $('.slider-header').append('<h2>HABILIDADES</h2><h3 style="border-bottom: 1px solid white;font-size: 22px;'+
                    '">Você consegue fazer bem essas atividades?</h3>');
                break;
            case '4':
                $('.slider-header').append('<h2>VALORES</h2><h3 style="border-bottom: 1px solid white;font-size: 22px;' +
                    '">Assinale suas expectativas com relação ao trabalho.</h3>');
                break;

        }
    }
}