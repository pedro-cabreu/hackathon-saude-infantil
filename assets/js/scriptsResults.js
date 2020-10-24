if(window.location.origin=='http://local.vocacional.com'){
    var rootPath=window.location.origin+'/';
}else{
    var rootPath=window.location.origin+'/teste/';
}

function testando(id_click){

    console.log(id_click);
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

$(document).ready(function () {
    var userId=$.session.get('user_id');
    if(userId!=null){
        getCourseInfo();
        console.log('pegando info');
    }else{
        alert('Olá, é necessário efetuar o seu cadastro!')
        $(location).attr('href', rootPath+'src/pages/signup.php');
        return;
    }
});

function getCourseInfo(){

    console.log($.session.get('typology'));
    var typology=$.session.get('typology').split(',');
    var userId=$.session.get('user_id');

    var r=typology[0],i=typology[1],a=typology[2],s=typology[3],e=typology[4],c=typology[5];

    $.ajax({
        type: "POST",
        url: `http://sis.fae.br:8080/api/vocacional/saveResult/`+userId,
        // url: `http://127.0.0.1:8000/api/vocacional/saveResult/`+userId,
        data:{
            'r':r,
            'i':i,
            'a':a,
            's':s,
            'e':e,
            'c':c,
        },
        success: function (response) {
            sessionStorage.clear();
            makeCourseBox(response);
        },
    });


    function makeCourseBox(response){
        $('.results-container').empty();
        $('#result-msg').html(response.course_msg);
            $.each(response.course_available, function (key, value) {
                $('.results-container').append('<div class="box" id_course="'+value['id']+'">' +
                    '<p>'+value['course_name']+'<br></p>' +
                    '<img src="../../assets/images/cursos/'+value['id'] +'.svg" alt="">' +
                    '<p>Saber Mais</p>'+
                    '</div>');
            });
    }
}

$( document ).ajaxStop(function() {

    $('.loader').hide();
    $('.main-wrapper').css('display', 'flex');

    $('.box').click(function () { 
        // console.log("click");

        let id = $(this).attr('id_course');
        // console.log(id);

        $.ajax({
            type: "GET",
            url: `http://sis.fae.br:8080/api/course/show/${id}`,
            // url: `http://127.0.0.1:8000/api/course/show/${id}`,
            dataType: "JSON",
            success: function (data) {
                
                $('#course-title > h5').text(data[0].name);
                $('#course-description > p').text(data[0].description);
                console.log(data[0].url);
                $('.modal-footer > a').attr("href", data[0].url);
            }
        });

        $('#exampleModal').modal('show');

    });
});
