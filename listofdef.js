//----- requiring prompt
var prompt = require('prompt');


//----- formatin questions
var Question = function  (text,answer,id) 
{
	this.text = text;
	this.answer = answer;
	this.id = id;
	this.points = 3;
}

var Randomnumber = function (length)
{

}

//------ creating questions
var question1 = new Question('¿Capital de España?','madrid',1);
var question2 = new Question('¿Capital de Francia?','paris',2);
var question3 = new Question('¿Capital de Alemania?', 'berlin',3);
var question4 = new Question('¿Capital de Portugal?', 'lisboa',4);
//------


var Quizz = function ()
{
	
	this.listOfQuestions = [];	
	var totalpoints = 0;
	var i = 0;
	//------ set a random number dependig on the number of cuestions
	this.randomnumber = Math.floor(Math.random() * this.listOfQuestions.length +1);
	//------
	
	
	this.play = function ()
	{	
		quizz.makequestion();
	};
	

	this.useprompt = function ()
	{
		//console.log(randomnumber);
		prompt.start();
				prompt.get(['answer'], function (err, result)
				{
					if (result.answer.toLowerCase() === quizz.listOfQuestions[i]['answer'] && quizz.ifrandomnumber())
					{ 
						quizz.ifAnswerCorrectAndBonus();
					
					}else if (result.answer.toLowerCase() === quizz.listOfQuestions[i]['answer']) 
					{
						quizz.ifAnswerCorrect();

					}else{
						quizz.ifAnswerWrong();
					}
					quizz.makequestion();
				});
	}


	//------ answer checker, based on the answer acts in different ways
	this.ifAnswerCorrect = function ()
	{
		totalpoints += quizz.listOfQuestions[i]['points'];
		console.log('Well done, you have ' + totalpoints + ' points. \n ');
		i++;
	}

	this.ifAnswerCorrectAndBonus = function ()
	{
		totalpoints += quizz.listOfQuestions[i]['points']*2;
		console.log('Well done, you have ' + totalpoints + ' points. \n ');
		i++;
	}

	this.ifAnswerWrong = function ()
	{
		console.log('Wrong answer, you missed one point \n');
		totalpoints -= 1 ;
	}
	//------ 

	//------ compares if random
	this.ifrandomnumber = function ()
	{
		return quizz.listOfQuestions[i]['id'] === this.randomnumber;
	}

	this.makequestion = function()
	{

		if (i < this.listOfQuestions.length && quizz.ifrandomnumber() ) {
			console.log('NEXT IS A BONUS QUESTION \nwhorts double points\n')
			console.log(this.listOfQuestions[i]['text']);
			quizz.useprompt();
			
		}else if (i < this.listOfQuestions.length) {
			
			console.log(this.listOfQuestions[i]['text']);
			quizz.useprompt();
		
		}else{
			console.log('Winner¡¡¡¡');
		}				
	}
}

Quizz.prototype.addquestion = function (question)
{
	this.listOfQuestions.push(question);
	this.randomnumber = Math.floor(Math.random() * this.listOfQuestions.length +1);
}



var quizz = new Quizz();

//------ adding cuestions to the game
quizz.addquestion(question1);
quizz.addquestion(question2);
quizz.addquestion(question3);
quizz.addquestion(question4);


//----- playing the game
quizz.play();












