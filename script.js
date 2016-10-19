$(document).ready(function(){
//code
    var MagicNumber = 5;
    
    $("button").click(function(){
    
    var MagicGuess = $("#NumberGuess").val();
    
    if(MagicNumber == MagicGuess)
    {
        $("#Clue").html("Correcto!");
    }
    else if (MagicNumber > MagicGuess)
    {
        $("#Clue").html("Go Higher");

    }
    else
    {
        $("#Clue").html("Go Lower");
    }
    });
});
