//----- requiring prompt
var prompt = require('prompt');


var Question = function  (text,answer,id) 
{
	this.text = text;
	this.answer = answer;
	this.id = id;
	this.points = 3;
}

//------ creating questions
var question1 = new Question('¿Capital de España?','madrid',0001);
var question2 = new Question('¿Capital de Francia?','paris',0002);
var question3 = new Question('¿Capital de Alemania?', 'berlin',0003);
//------


var Quizz = function ()
{
	var totalpoints = 0;
	var i = 0;
	this.listOfQuestions = [];	
	
	this.play = function ()
	{	
			quizz.makequestion();
			
	};
	
	this.useprompt = function ()
	{
		prompt.start();
				prompt.get(['answer'], function (err, result)
				{
					if (result.answer.toLowerCase() === quizz.listOfQuestions[i]['answer']) 
					{
						totalpoints += quizz.listOfQuestions[i]['points'];
						console.log('Well done, you have ' + totalpoints + ' points. \n ');
						i++;
					
					}else{
						console.log('Wrong answer, you missed one point \n');
						totalpoints -= 1 ;
						
					}
					quizz.makequestion();
				});
	}

	this.makequestion = function()
	{
		
		if (i < this.listOfQuestions.length) {
			
			console.log(this.listOfQuestions[i]['text']);
			quizz.useprompt();
			
		}else
			console.log('Winner¡¡¡¡');
			
		;
	}
}

Quizz.prototype.addquestion = function (question)
{
	this.listOfQuestions.push(question);
}



var quizz = new Quizz();

//------ adding cuestions to the game
quizz.addquestion(question1);
quizz.addquestion(question2);
quizz.addquestion(question3);

//----- playing
quizz.play();




