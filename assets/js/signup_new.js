if($(window).width() < 620){
    $('#city').append('<option>&#xf64f; Cidade</option>');
    $('#school').append('<option>&#xf19d; Escola</option>');
}

$(document).ready(function(){
    $('#phone').mask('(00)0 0000-0000');
    $('#cep').mask('00000-000');
});

$('#cep').change(function () { 
    
    let cep = $('#cep').val().replace(/[^0-9\.]/g, '');
    console.log(cep);

    $.ajax({
        type: "GET",
        url: `http://viacep.com.br/ws/${cep}/json/`,
        data: "data",
        dataType: "JSON",
        success: function (response) {
            console.log(response);
            $('#city').val(response.localidade);
        },
    });
    
});

function signUp(){

    if(window.location.origin=='http://localhost'){
        var rootPath=window.location.origin+'/hackathon-saude-infantil/';
    }else{
        var rootPath=window.location.origin+'/hackathon/';
    }


    console.log(rootPath);

    $('#init-test').click(function () {
        $(location).attr('href', rootPath+'src/pages/questionary.php');
    });

}