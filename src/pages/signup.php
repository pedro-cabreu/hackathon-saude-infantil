<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Educa Mais Saúde</title>
    <link rel="shortcut icon" href="../assets/images/favico.png" type="image/x-icon">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css">
    <link rel="stylesheet" href="../../assets/css/signup.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="main-wrapper">
        <div class="signup-form">
            <div class="logo">

            </div>
            <div class="form-header">
                <h1>Olá, antes de tudo precisamos saber com quem estamos falando.</h1>
            </div>
            <div class="form-wrapper">
                <form onsubmit="signUp()" action="javascript:void(0)">
                    <div class="form-field">
                        <h1></h1>
                        <select name="" id="" required>
                            <option value="">
                                Você é Professor ou Responsável?
                            </option>
                            <option value="">
                                Responsável
                            </option>
                            <option value="">
                                Professor
                            </option>
                        </select>                    
                    </div>
                    <div class="form-field">
                        <h1>Nome Completo:</h1>
                        <input placeholder="&#xF007; Nome Completo" type="text" name="name" id="name" required>
                    </div>
                    <div class="form-field">
                        <h1>E-mail:</h1>
                        <input placeholder="&#xf658; E-mail" type="email" name="email" id="email" required>
                    </div>
                    <div class="form-field" id="form-city">
                        <h1>CEP:</h1>
                        <input placeholder="&#xf3c5; CEP" type="text" name="cep" id="cep">
                    </div>
                    <div class="form-field" id="form-city">
                        <h1>Cidade:</h1>
                        <input placeholder="&#xf64f; Cidade"  type="text" name="city" id="city" disabled required>
                    </div>
                    <div class="form-field" id="form-school">
                        <h1>Escola:</h1>
                        <input placeholder="&#xf19d; Escola" type="text" name="school" id="school" required>
                    </div>
                    <div class="form-field">
                        <h1>Telefone:</h1>
                        <input placeholder="&#xf095; Telefone" type="tel" name="phone" id="phone" required>
                    </div>
                    <div class="checkbox-input">
                        <input id="check-terms" type="checkbox">
                        <label id="terms-conditions" class="container">Concordo com os termos e condições</label>
                    </div>
                    <span id="terms-conditions-modal">Termos e Condições
                        </span>
            </div>
            <button id="init-test" type="submit">Tudo Pronto!</button>
            </form>
        </div>
    </div>
    </div>
    <script src="../../assets/js/jquery-3.5.1.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="../../assets/js/jquery.mask.js"></script>
    <script src="../../assets/js/jquery.session.js"></script>
    <script src="../../assets/js/signup_new.js"></script>
</body>
</html>