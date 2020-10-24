<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>UNIFAE - Teste Vocacional</title>
    <link rel="shortcut icon" href="assets/images/favico.png" type="image/x-icon">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="assets/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="navbar">
        <div class="logo">
            <img src="assets/images/logo-unifae-positiva-horizontal-png.png" alt="UNIFAE">
        </div>
        <div class="social">
            <a href="https://www.instagram.com/unifae/?hl=pt-br"><i class="fab fa-instagram"></i></a>
            <a href="https://pt-br.facebook.com/unifaesaojoao1"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>
    <div class="main-wrapper">
        <div class="main-text">
            <h1>Quer saber em qual curso você se encaixa? <br> A gente te ajuda.</h1>
            <img class="web-vector" src="assets/images/web-vector.svg" alt="">
            <button id="init-test" type="button">Iniciar Teste</button>
        </div>
        <div class="main-vector">
            <img src="assets/images/index2.svg" alt="">
        </div>
    </div>
    <script src="assets/js/jquery-3.5.1.js"></script>
    <script src="assets/js/jquery.mask.js"></script>
</body>
</html>
<script>
    if(window.location.origin=='http://local.vocacional.com'){
        var rootPath=window.location.origin+'/';
    }else{
        var rootPath=window.location.origin+'/teste/';
    }


    console.log(rootPath);

    $('#init-test').click(function () {
        $(location).attr('href', rootPath+'src/pages/signup.php');
    });
</script>
