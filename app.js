let colorVal = $('#color').val();

$(function(){

    $('#btn').on('click', function(){
        console.log('aa');

    let colorVal = $('#color').val();
    if(colorVal) {
        $('.body').css('background-color',colorVal);

        if(colorVal == 'red'){
            $('h1').css('color', 'white');

        } else if(colorVal == 'black'){
            $('h1').css('color', 'white');
    
        } else if(colorVal == 'bule'){
            $('h1').css('color', 'white');
    
        } else if(colorVal == 'green'){
            $('h1').css('color', 'white');

        } else {
            $('h1').css('color', 'black');
            let warn = "please use color to express your mood now"
            alert(warn);
        }

        $('#opacity').on('click',function(){
            $('.body').css('opacity','.8');
        })
    } 

    
    })
    

    
})