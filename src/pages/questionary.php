<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>UNIFAE - Teste Vocacional</title>
    <link rel="shortcut icon" href="../assets/images/favico.png" type="image/x-icon">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="../../assets/css/questionary.css">
</head>
<body>
    <input type="hidden" id="area" name="area" value=1>
    <input type="hidden" id="ids" name="ids" value="">
    <div class="main-wrapper">
        <div class="nav">
            <img id="logo-branco" src="../../assets/images/logo-unifae-positiva-horizontal-png.png" alt="">
            <img id="logo-preto" src="../../assets/images/logo-unifae-negativa-horizontal-png.png" alt="">
        </div>
        <div class="square-test">
            <div class="square-header">
                <h4>Selecione uma ou mais características que mais se parecem com você:</h4>
            </div>
            <div class="questions-container">
            </div>
            <div class="test-footer">
                <button type="button" id="button-next" onclick="next()">Próxima</button>
            </div>
        </div>


        <!-- Parte do teste com slider -->

        <div class="slider-header">
            <div class="slider-header-type">
            </div>
        </div>
        <div class="slider-test">
            <div class="slider-content">

                <div class="question">
                    <h5>Lorem ipsum dolor sit amet consectetur?</h5>
                    <div class="slider-label">
                        <p>Discordo</p><p>Neutro</p><p>Concordo</p>
                    </div>
                    <input class="slider" type="range" id="vol" name="vol" default="2" min="1" max="3">
                </div>
                <div class="question">
                    <h5>Lorem ipsum dolor sit amet consectetur?</h5>
                    <div class="slider-label">
                        <p>Discordo</p><p>Neutro</p><p>Concordo</p>
                    </div>
                    <input class="slider" type="range" id="vol" name="vol" default="2" min="1" max="3">
                </div>
                <div class="question">
                    <h5>Lorem ipsum dolor sit amet consectetur?</h5>
                    <div class="slider-label">
                        <p>Discordo</p><p>Neutro</p><p>Concordo</p>
                    </div>
                    <input class="slider" type="range" id="vol" name="vol" default="2" min="1" max="3">
                </div>
            </div>
        </div>


    </div>
    <script src="../../assets/js/jquery-3.5.1.js"></script>
    <script src="../../assets/js/jquery.session.js"></script>
    <script src="../../assets/js/scripts.js"></script>
</body>
</html>