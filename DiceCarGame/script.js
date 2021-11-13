var count=0;
function diceRoll(){
	// document.getElementById('dispDiceNo').style.display='block';
	var x=Math.floor(Math.random()*6+1);
	var img1;
	
	count++;
		switch(x){


		case 1:
		img1=document.getElementById('dice').src="images/dice1.png";
		document.getElementById('dice').src=img1;
		document.getElementById('diceNumber').innerText='No. on dice is '+ x;
		break;

		case 2:
		img1=document.getElementById('dice').src="images/dice2.png";
		document.getElementById('dice').src=img1;
		document.getElementById('diceNumber').innerText='No. on dice is '+ x;
		break;

		case 3:
		img1=document.getElementById('dice').src="images/dice3.png";
		document.getElementById('dice').src=img1;
		document.getElementById('diceNumber').innerText='No. on dice is '+ x;

		break;

		case 4:
		img1=document.getElementById('dice').src="images/dice4.png";
		document.getElementById('dice').src=img1;
		document.getElementById('diceNumber').innerText='No. on dice is '+ x;
		break;

		case 5:
		img1=document.getElementById('dice').src="images/dice5.png";
		document.getElementById('dice').src=img1;
		document.getElementById('diceNumber').innerText='No. on dice is '+ x;
		break;

		case 6:
		img1=document.getElementById('dice').src="images/dice6.png";
		document.getElementById('dice').src=img1;
		document.getElementById('diceNumber').innerText='No. on dice is '+ x;
		break;

	}
	document.getElementById('dispOutComes').innerText=count + ' Times';
}


function SelectCar1(){
	var car1=document.getElementById('car1');
	car1.style.animation='car1 1s forwards';

	
}
function SelectCar2(){
	

	var car2=document.getElementById('car2');
	car2.style.animation='car2 5s forwards';
	
	// car1.style.animation-fill-mode='forwards'
}