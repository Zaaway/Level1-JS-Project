const form = document.getElementById("myForm");
let guessInput;
let code;
let count = 7;
let gameOver = false;

form.addEventListener("submit", function(event){
    event.preventDefault();

    if(gameOver){
        return;
    }

    guessInput = document.getElementById("guess").value;
    if(!guessInput){
        document.getElementById("response").innerHTML="Make a guess first.";
        return;
    }

    count--;

    if(count==0){
        endGame();
    }

    checkGuess();
});

function generateCode(){
    code = Math.floor((Math.random()*999)+1);
}

function checkGuess(){
    if(gameOver){
        document.getElementById("guessCount").innerHTML=`You have 0 guesses left`;
        return;
    }

    if(guessInput==code){
        document.getElementById("response").innerHTML="Correct!";
    }
    else if(guessInput<code){
        document.getElementById("response").innerHTML="Try guessing higher";
    }
    else{
        document.getElementById("response").innerHTML="Try guessing lower";
    }

    document.getElementById("guessCount").innerHTML=`You have ${count} guesses left`;
}

function endGame(){
    gameOver = true;
    document.getElementById("response").innerHTML="Uh oh! You did not crack the code in time and the police have arrived. Maybe you'll have better luck in your next life.";
}