var painted;
var content;
var winningCombinations;
var c;
var ctx;
var turn=0;
var theCanvas;
var squaresFilled = 0;
// var width=100;
// var height=100;

// 				var centerX=width/2;
// 					var centerY=height/2;
let audioTurn = new Audio("ting.mp3");
let audioGameOver= new Audio("gameover.mp3");
window.onload=function(){
	painted= new Array();
	content=new Array();
	winningCombinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	for(let i=0;i<=8;i++){
		painted[i]=false;
		content[i]="";
	}
}
function canvasClicked(canvasNumber){
	theCanvas="canvas"+canvasNumber;
	c=document.getElementById(theCanvas);
	ctx=c.getContext('2d');

	if(painted[canvasNumber-1] ==false){
				if(turn%2==0){
					ctx.beginPath();
					ctx.moveTo(60,30);
					ctx.lineTo(180,120);
					ctx.moveTo(60,120);
					ctx.lineTo(180,30);
					ctx.lineWidth=7;
					ctx.strokeStyle='#fff';
					ctx.stroke();
					// ctx.closePath();
					content[canvasNumber-1] = 'X';
					// let player1Symbol='X';
					//  document.getElementsByClassName('info').innerText="Turn For" + player1Symbol;
					 audioTurn.play();
					 
				}

				else{
					ctx.beginPath();
	
					ctx.arc(140,75,50,0,Math.PI*2);
					ctx.strokeStyle='#fff';
					ctx.lineWidth=7;
					ctx.stroke();
					// ctx.closePath();
					content[canvasNumber-1] = 'O';
					// let player2Symbol='X';
					//  document.getElementsByClassName('info').innerText="Turn For" + player2Symbol;
					 audioTurn.play();
					

				}
					turn++;
				painted[canvasNumber-1] = true;
				squaresFilled++;
				checkForWinners(content[canvasNumber-1]);
				if(squaresFilled==9){
				
					document.getElementById('gameoverText').innerText="It's a draw match";
					audioGameOver.play();

				}

		}
		else{
					document.getElementById('gameoverText').innerText="The Space is already occupied";
					
			}
}
function checkForWinners(symbol){
			
			for(var a = 0; a < winningCombinations.length; a++){
			if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==	symbol&&content[winningCombinations[a][2]]==symbol){
				var getCanvasId=winningCombinations[a][0]+1;
				var getCanvasId1=winningCombinations[a][1]+1;
				var getCanvasId2=winningCombinations[a][2]+1;
				var getActualId='canvas'+getCanvasId;
				var getActualId1='canvas'+getCanvasId1;
				var getActualId2='canvas'+getCanvasId2;

				// console.log(getCanvasId);
				// console.log(getCanvasId1);
				// console.log(getCanvasId2);
				// console.log(getActualId);
				// console.log(getActualId1);
				// console.log(getActualId2);
				document.getElementById(getActualId).style.background='orange';
				document.getElementById(getActualId1).style.background='orange';
				document.getElementById(getActualId2).style.background='orange';
				


			document.getElementById('gameoverText').innerText=symbol + " Won";
				document.getElementById('wonImg').style.display='block';
				audioGameOver.play();
			}
			console.log(painted[winningCombinations[a][a]]);
// if(painted[winningCombinations[a][a]] ==false){
// 				//ctx.strokeStyle='#000';
// 				painted[winningCombinations[a][a]] ='true';
// 			}
			}


		}

		function reset(){
			location.reload(true);
		}