var page = 0;

$('#nxt-button').click(function () { 
    
    switch(page){

        case 0:

            $('.child-info').hide();
            $('.child-imc').show();

            break;

        case 1:

            $('.child-imc').hide();
            $('.adult-imc').show();
    
            break;

        case 2:

            $('.adult-imc').hide();
            $('#question-1').show();
    
            break;

        case 3:

            $('#question-1').hide();
            $('#question-2').show();
    
            break;

        case 4:

            $('#question-2').hide();
            $('#question-3').show();
    
            break;

        case 5:

            $('#question-3').hide();
            $('#question-4').show();
    
            break;

        case 6:

            $('#question-4').hide();
            $('#question-5').show();
    
            break;

        case 7:

            alert('final');
    
            break;
    

    }

    page++;
});