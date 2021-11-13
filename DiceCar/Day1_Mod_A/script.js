
var count=0;
function diceRoll(){
	var car1Move=document.getElementById('car1');
	var car2Move=document.getElementById('car2');
	var x = Math.floor(Math.random()*6+1);
	var img1;
	count++;
	points=0;
	switch(x){
		case 1:
		img1=document.getElementById('dice').src="source_files/dice1.png";
		document.getElementById('dice').src=img1;
		document.getElementById('dispNo').innerText= x;
		break;

		case 2:
		img1=document.getElementById('dice').src="source_files/dice2.png";
		document.getElementById('dice').src=img1;
		document.getElementById('dispNo').innerText= x;
		break;

		case 3:
		img1=document.getElementById('dice').src="source_files/dice3.png";
		document.getElementById('dice').src=img1;
		document.getElementById('dispNo').innerText= x;

		break;

		case 4:
		img1=document.getElementById('dice').src="source_files/dice4.png";
		document.getElementById('dice').src=img1;
		document.getElementById('dispNo').innerText= x;
		break;

		case 5:
		img1=document.getElementById('dice').src="source_files/dice5.png";
		document.getElementById('dice').src=img1;
		document.getElementById('dispNo').innerText= x;
		break;

		case 6:
		img1=document.getElementById('dice').src="source_files/dice6.png";
		document.getElementById('dice').src=img1;
		document.getElementById('dispNo').innerText= x;
		break;

	}
	if(x=='1'){
		car1.style.animation="none";
		car1Move.style.animation='car1Move 3s forwards';
		points=x*100;

		
	}
	if(x=='2'){
		car1.style.animation="none";
		car1Move.style.animation='car2Move 3s forwards';
		points=x*100;
	}
	document.getElementById('count').innerText=count + ' Times';

	document.getElementById('points').innerText=points;
}

function stop(){
	var diceAni=document.getElementById('dice');
	diceAni.style.animation='none';
	var bonusAni=document.getElementById('bonus_img');
	bonusAni.style.animation='none';
}
function SelectCar1(){
	var car1=document.getElementById('car1');
	car1.style.animation='car1 3s forwards';
}
function SelectCar2(){
var car2=document.getElementById('car2');
	car2.style.animation='car2 3s forwards';
	
}
function startNew(){
	var carb1=document.getElementById('car1');
	carb1.style.animation='carb1 3s backwards';
		var carb2=document.getElementById('car2');
	carb2.style.animation='carb2 3s backwards';
	document.getElementById('dispNo').innerText= "";
	document.getElementById('count').innerText="";
	img1=document.getElementById('dice').src="source_files/dice-2.png";

}