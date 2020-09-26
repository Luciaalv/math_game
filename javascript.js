
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById('startreset').onclick = function (){

    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
        timeremaining = 60;

        document.getElementById('scorevalue').innerHTML = score;
        document.getElementById('timeremaining').style.display = "block";
        document.getElementById('timeremainingvalue').innerHTML = timeremaining;
        document.getElementById('startreset').innerHTML = "Reset Game";
        document.getElementById('gameover').style.display = "none";

        startCountdown();

        generateQuestion();
    }
}
for(i=1; i<5; i++){
    document.getElementById('box'+i).onclick = function(){
        if(playing ==true){
            if(this.innerHTML == correctAnswer){
                score++;
                document.getElementById('scorevalue').innerHTML = score;
                document.getElementById('correct').style.display = "block";

                setTimeout(function(){
                    document.getElementById('correct').style.display = "none";
                }, 1000);

                generateQuestion();

            }else{
                document.getElementById('wrong').style.display = "block";

                setTimeout(function(){
                    document.getElementById('wrong').style.display = "none";
                }, 1000);
            }
        }
    }
}
function startCountdown(){
    action = setInterval(function(){
        timeremaining-=1;
        document.getElementById('timeremainingvalue').innerHTML = timeremaining;
        if(timeremaining == 0){
            clearInterval(action);
            document.getElementById('gameover').style.display = "block";
            document.getElementById('scoreover').innerHTML = score;
            document.getElementById('timeremaining').style.display = "none";
            document.getElementById('startreset').innerHTML = "Start Game";
            playing = false;
        }
    }, 1000)
}

function generateQuestion(){
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;

    document.getElementById('question').innerHTML = x + " x " + y;
    
    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById('box' + correctPosition).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for(i=1; i<5; i++){
        if (i !== correctPosition){
            var wrongAnswer;

            do{
                wrongAnswer = (1 + Math.round(9 * Math.random()))*(1 + Math.round(9 * Math.random()));
            }
            while(answers.indexOf(wrongAnswer) > -1);
            document.getElementById('box' + i).innerHTML = wrongAnswer;

            answers.push(wrongAnswer);
        }
    }
}