//----- requiring prompt
var prompt = require('prompt');
var totalpoints = 0;

var Question = function  (text,answer,id) 
{
	this.text = text;
	this.answer = answer;
	this.id = id;
	this.points = 3;
}

//------ create questions
var question1 = new Question('¿Capital de España?','madrid',0001);
var question2 = new Question('¿Capital de Francia?','paris',0002);
var question3 = new Question('¿Capital de Alemania?', 'berlin',0003);


var Quizz = function ()
{
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
					if (result.answer === quizz.listOfQuestions[i]['answer']) 
					{
						console.log('Well done, you have ' + totalpoints + ' points. \n ');
						console.log('Next question:');
						totalpoints + quizz.listOfQuestions[i]['points'];
						i++
					
					}else
						console.log('Wrong answer, you missed one point');
						quizz.makequestion();
					;
	
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

quizz.play();