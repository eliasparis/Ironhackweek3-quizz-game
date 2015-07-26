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



//------ creating questions
var question1 = new Question('¿Capital de España?','madrid',1);
var question2 = new Question('¿Capital de Francia?','paris',2);
var question3 = new Question('¿Capital de Alemania?', 'berlin',3);
var question4 = new Question('¿Capital de Portugal?', 'lisboa',4);
//------


var Quizz = function ()
{
	
	this.listOfQuestions = [];	
	this.listOfUsers = [];
	var totalpoints = 0;
	var i = 0;
	//------ set a random number dependig on the number of cuestions
	this.randomnumber = Math.floor(Math.random() * this.listOfQuestions.length +1);
	//------

	//------ Asking if the user is registered
	this.userlog = function ()
	{
		console.log('New user?');
		prompt.start();
		prompt.get(['yesorno'], function (err, result)
				{
					if (result.yesorno.toLowerCase() === 'yes')
					{ 
						quizz.userLogAnswerYes();
					
					}else if (result.yesorno.toLowerCase() === 'no') 
					{
						quizz.userLogAnswerNo();

					}else{
						console.log('Not understand, repeat please');
						quizz.userlog(); 
					}
				});
	}

	//----- If userlog answer === 'yes' ask for user name
	this.userLogAnswerYes = function ()
	{
		console.log('Enter username');
		prompt.start();
		prompt.get(['username'], function (err, result)
			{
				quizz.adduser(result.username);
				console.log(quizz.listOfUsers)
			});
	}		

	//----- If userlog answer 'no' as for register
	this.userLogAnswerNo = function ()
	{
		console.log('Enter your username (case sensitive)');
		prompt.start();
		prompt.get(['username'], function (err, result)
			{
				var currentuser = result.username;

				if ( //--- add condition )
				{
					console.log(currentuser);
					quizz.play();
				}else{
					console.log('Wrong username, try again');
					quizz.userLogAnswerNo();
				}
			});
	}

	//------ checking if the username inserter exists in userslist
	
	

	//------ this functions begins the game with the first question
	this.play = function ()
	{	
		quizz.makequestion();
	};
	

	this.useprompt = function ()
	{
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

	//----- question maker
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

Quizz.prototype.adduser = function (username)
{
	this.listOfUsers.push(username);
}

//------ User class
var User = function(name)
{
	this.name = name;
	this.points = 0;
	this.lastquestion = 1;
}


//------ creating the game
var quizz = new Quizz();

//------ adding cuestions to the game
quizz.addquestion(question1);
quizz.addquestion(question2);
quizz.addquestion(question3);
quizz.addquestion(question4);

//------ hardcoding some gamers
var user1 = new User('elias');
var user2 = new User('Pintos');
var user3 = new User('aris');

quizz.adduser(user1);
quizz.adduser(user2);
quizz.adduser(user3);

//----- playing the game
quizz.userlog();












