var userInput = function(choice){

    var choice = choice.toLowerCase();
    const randomNumber = Math.floor(Math.random() * 3);

    console.log('Rock, Paper, Scissors!');
    console.log('----------------------');

    if(choice == 'r' || choice == 'p' || choice == 's'){

        switch (randomNumber){

            case 0: //Rock

                if(choice == 'r'){
                    console.log('You chose Rock!');
                    console.log('Rock = Rock')
                    console.log('Draw!');
                    break;
                }
                else if(choice == 'p'){
                    console.log('You chose Paper!');
                    console.log('Paper > Rock')
                    console.log('You win!');
                    break;
                }
                else if(choice == 's'){
                    console.log('You chose Scissors!');
                    console.log('Scissors < Rock')
                    console.log('You lose!');
                    break;
                }
                else{
                    break;
                }

            case 1: //Paper

                if(choice == 'r'){
                    console.log('You chose Rock!');
                    console.log('Rock < Paper')
                    console.log('You lose!');
                    break;
                }
                else if(choice == 'p'){
                    console.log('You chose Paper!');
                    console.log('Paper = Paper')
                    console.log('Draw!');
                    break;
                }
                else if(choice == 's'){
                    console.log('You chose Scissors!');
                    console.log('Scissors > Paper')
                    console.log('You win!');
                    break;
                }
                else{
                    break;
                }

            case 2: //Scissors

                if(choice == 'r'){
                    console.log('You chose Rock!');
                    console.log('Rock > Scissors')
                    console.log('You win!');
                    break;
                }
                else if(choice == 'p'){
                    console.log('You chose Paper!');
                    console.log('Paper < Scissors')
                    console.log('You Lose!');
                    break;
                }
                else if(choice == 's'){
                    console.log('You chose Scissors!');
                    console.log('Scissors = Scissors')
                    console.log('Draw!');
                    break;
                }
                else{
                    break;
                }
        }
    }
    
    else if(choice == 'bomb'){
        console.log('You Sir are the best!');
    }

    else{
        console.log('Wrong Input!');
    }
}
userInput('s');

//Self note: Without spaces its 83 lines 
