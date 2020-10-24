if($(window).width() > 625){
    $("input[type='email']").attr("placeholder","exemplo@email.com");
    $("input[type='text']").attr("placeholder","Nome completo");
    $("input[name='city']").attr("placeholder","Selecione sua cidade");
    $("input[name='school']").attr("placeholder","Selecione sua escola");
    $("input[type='tel']").attr("placeholder","(XX)XXXXX-XXXX");
}

if(window.location.origin=='http://local.vocacional.com'){
    var rootPath=window.location.origin+'/';
}else{
    var rootPath=window.location.origin+'/teste/';
}

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://sis.fae.br:8080/api/vocacional/city",
        // url: "http://127.0.0.1:8000/api/vocacional/city",
        dataType: "JSON",
        success: function (data) {
            if($(window).width() > 625){
                $('#city').append('<option>Selecione sua cidade</option>');
                $('#school').append('<option>Selecione sua Escola</option>');
            }else{
                $('#city').append('<option>&#xf64f; Cidade</option>');
                $('#school').append('<option>&#xf19d; Escola</option>');
            }

            $.each(data, function (key, value) { 
                $('#city').append('<option city_id="'+value.id+'" value="'+value.name+'">'+value.name+'</option>');
            });

            $('#city').append('<option city_id="outro" value="">Outra</option>');
        }
    });
});

$('#city').change(function () { 

    var city_id = $('option:selected', this).attr('city_id');

    if(city_id == 'outro'){

        $('#form-city').empty();
        $('#form-school').empty();

        $('#form-city').append('<h1>Cidade:</h1><input placeholder="Digite sua cidade" type="text" name="city" id="city" required>');
        $('#form-school').append('<h1>Escola:</h1><input placeholder="Digite sua escola" type="text" name="school" id="school" required>');
        
    }else{

        $('#school').empty();

        if($(window).width() > 625){
            $('#school').append('<option>Selecione sua Escola</option>');
        }else{
            $('#school').append('<option>&#xf19d; Escola</option>');
        }

        console.log(city_id);
        $.ajax({
            type: "GET",
            url: `http://sis.fae.br:8080/api/vocacional/school/${city_id}`,
            // url: `http://127.0.0.1:8000/api/vocacional/school/${city_id}`,
            dataType: "JSON",
            success: function (data) {

                $.each(data, function (key, value) { 
                    $('#school').append('<option value="'+value.name+'">'+value.name+'</option>');
                });

                $('#school').append('<option value="Outra">Outra</option>');
            }
        });
    }
});

function signUp(){
    var flag=$("#check-terms").is(":checked");

    if(flag==false){
        alert('Olá, precisamos que você confirme nossos termos antes de prosseguir! :)');
        return;
    }


    $.ajax({
        type: "POST",
        url: "http://sis.fae.br:8080/api/user/addVocacional",
        // url: "http://127.0.0.1:8000/api/user/addVocacional",
        context: 'json',
        dataType: 'JSON',
        data: {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'city': $('#city').val(),
            'school': $('#school').val(),
            'phone': $('#phone').val().replace(/[^0-9\.]/g, ''),
            'is_confirmed':flag
        },
        success: function (data) {
        
            if(data.msg == 'error'){
                alert('E-mail já cadastrado.');
            }else{
                console.log(data);
                $(location).attr('href', rootPath+'src/pages/questionary.php');
                $.session.set("user_id", data.data.user_id);
            }
        },
        error: function () {

            console.log('errorrr');
        }
    });
}

// $(".checkbox-input").click(function () {
//     if($("#check-terms").is(":checked")){
//         $("#check-terms").prop('checked', false);
//     }else{
//         $("#check-terms").prop('checked', true);
//     }

// });

$(document).ready(function(){
    $('#phone').mask('(00)0 0000-0000');
});

$('#terms-conditions-modal').click(function () {
    $('#modal-terms').modal('show');
});