// things to do:
// 	-create a list for  the questions
// 	-create a list for the images;
// 	-create 2d list for answers;

var questionBlock = function(question, image){
	

//create the block the question
	this.block = document.createElement('section');
	this.block.classList.add('question-block');
	
	//this.block.style.backgroundImage= "url("+image+")";

//create the block content of the block question
	this.blockContent = document.createElement('div');
	this.blockContent.classList.add('question-content');
	var textNode = document.createTextNode(question);
	this.blockContent.appendChild(textNode);
	this.blockContent.style.display = "block";

// append the content to the block;
	$("<style>.question-block::before{background-image:url("+image+")}</style>").appendTo('.question-block');
	this.block.appendChild(this.blockContent);
	//this.block.style.display = 'block';
	
	document.body.appendChild(this.block);
	$('.question-block').fadeIn(1000);

}

var answerBlock = function(){
	//create the answer block
	this.block = document.createElement('section');
	this.block.classList.add('answers-block');
	console.log("good");
	this.answerList = new Array();
	for(var i = 0; i < 4; i++){
		var text, elem;
		console.log(arguments[i]);
		text = document.createTextNode(arguments[i]);
		elem = document.createElement('div');
		elem.classList.add("answer");
		elem.appendChild(text);
		this.answerList.push(elem);
		this.block.appendChild(elem);
		
	}
	
	document.body.appendChild(this.block);
	$('.answers-block').fadeIn(1000);
}




//MAIN
var  questions = ["Who is considered the greatest basketball player?",
	"Who invented basketball?",
	"Who has the most rings in the history of NBA?",
	"Where was basketball first played?",
	"Who is the largest governing body of basketball?"];
var setOfAnswers = [["Alwin de Leon","Lebron James","Michael Jordan","Kobe Bryant"],
	["James Nanaymosth", "Lebron James","Your mother","James Naismith"],
	["Bill Russel","Michael Jordan","Magic Johnson","Rajon Rondo"],
	["Stella Maris College","YMCA","New York","Chicago"],
	["NBA","PBA","FIBA","NBI"]];
var correctAnswers = ["Michael Jordan","James Naismith","Bill Russel","YMCA","FIBA"];


var questionAT = 0;
var curScore = 0;
$(document).ready(function(){
	var question,answer;
	$(".round").click(function (){
		
		$(".startBlock").fadeOut(500);
		 question = new questionBlock(questions[questionAT],"jordan.jpg");
		 answer = new answerBlock(setOfAnswers[questionAT][0],setOfAnswers[questionAT][1],setOfAnswers[questionAT][2],setOfAnswers[questionAT][3]);
	});

	$(document).on("click",".answer",function(element){
		$(this).siblings().fadeOut(500);
		
		if ($(this).text() == correctAnswers[questionAT]){
			
			var number = questionAT + 1;
			$("."+number.toString()).css('background-color',"green");
			
			curScore++;
		}else {
			var number = questionAT + 1;
			$("."+number.toString()).css('background-color',"red");
			
		}
		if(questionAT<4){
			questionAT++;
		}else {
			$('section').hide();
			return;
		}
		$('section').fadeOut(100,function(){
			$(this).remove();

		});
		question = new questionBlock(questions[questionAT],"jordan.jpg");
		answer = new answerBlock(setOfAnswers[questionAT][0],setOfAnswers[questionAT][1],setOfAnswers[questionAT][2],setOfAnswers[questionAT][3]);
		$(".startBlock > .startContent > .round").fadeOut(500);
	});

});
