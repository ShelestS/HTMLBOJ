var player = document.querySelector(".player");
var UI = document.querySelector(".UI");
var R = document.querySelector(".R");
var playerhphp = document.querySelector(".playerhphp");
var baton = document.querySelector(".baton");
var enemy = document.querySelector(".enemy");
var sosok = document.querySelector(".sosok");
var sosoktreshini = document.querySelector(".sosoktreshini");
var enemy1 = document.querySelector(".enemy1");
var enemy2 = document.querySelector(".enemy2");
var canangry = true;
var canangry1 = true;
var canangry2 = true;
var background = document.querySelector(".background");
var whatweapon = document.querySelector(".whatweapon");
var bulletsimg = document.querySelector(".bulletsimg");
var bulletsdiv = document.querySelector(".bulletsdiv");
var newbulletsdiv = document.querySelector(".newbulletsdiv");
var reloaddiv = document.querySelector(".reloaddiv");
var weapondiv = document.querySelector(".weapondiv");
var shotgunbulletsdiv = document.querySelector(".shotgunbulletsdiv");
var newshotgunbulletsdiv = document.querySelector(".newshotgunbulletsdiv");
var shotgunimg = document.querySelector(".shotgunimg");
enemy.style.left = "230px";
enemy.style.top = "100px";
enemy1.style.left = "430px";
enemy1.style.top = "500px";
enemy2.style.left = "630px";
enemy2.style.top = "300px";
enemyes=0;
playerhphpwidth=200;
playerhphp.style.width=playerhphpwidth+"px";
var q=1466;//player.offsetLeft;
var w=150;
var e=150;
var r=626;
var shotgunleft=500;
var shotguntop=500;
enemyangry=1;
enemyangry1=0;
enemyangry2=0;
bulletsimg.style.left=r+"px";
bulletsimg.style.top=e+"px";
shotgunimg.style.left=shotgunleft+"px";
shotgunimg.style.top=shotguntop+"px";
bullets=0;
newbullets=0;
newshotgunbullets=0;
boom = 0;
shotgunbullets=0;
playerhps=100;
weapon1=false;
weapon2=false;
weapon1exist=false;
weapon2exist=false;
sosokonfloor = true;
document.onkeydown=function(e){
	if(e.keyCode==68){
	player.src="img1/player1.png";
	q=q+15;
	player.style.left=q+"px";
	}else if(e.keyCode==65){
	player.src="img1/player2.png";
	q=q-15;
	player.style.left=q+"px";
	}else if(e.keyCode==87){
	player.src="img1/player4.png";
	w=w-15;
	player.style.top=w+"px";
	}else if(e.keyCode==83){
	player.src="img1/player3.png";
	w=w+15
	player.style.top=w+"px";
	}
	if(e.keyCode==69){
	inventory.style.height="100%";
	if(inventorym[0]==coin || inventorym[1]==coin){
	newcoin.style.display="block";
	}
	if(inventorym[0]==kosar || inventorym[1]==kosar){
	newkosar.style.display="block";
	}
	}
	if(e.keyCode==82){
		//inventory.style.height="0px";
		//newcoin.style.display="none";
		//newkosar.style.display="none";
		if(weapon1==true){
		reloaddiv.style.background="url(img1/RELOADgif.gif)";
		reloaddiv.style.backgroundSize="100%";

		setTimeout(function(){
			var funct=function(){
			if(bullets<=7){
				if(newbullets>0 && newbullets>=7){
					//alert("YAY");
					newbullets=newbullets-7;
					bullets=bullets+7;
					bulletsdiv.innerHTML=bullets;
					newbulletsdiv.innerHTML=newbullets;
					//setTimeout(function(){
						reloaddiv.style.background="white";
					//},5000)
				}else if(bullets==0 && newbullets>0 && newbullets<7){
					bullets=newbullets;
					newbullets=0;
					bulletsdiv.innerHTML=bullets;
					newbulletsdiv.innerHTML=newbullets;
					reloaddiv.style.background="white";
				}
			}
			reloaddiv.style.background="white";
			}
		funct();
		},5000);
		}
	if(weapon2==true){
		reloaddiv.style.background="url(img1/RELOADgif.gif)";
		reloaddiv.style.backgroundSize="100%";
		setTimeout(function(){
			var funct=function(){
				if(newshotgunbullets>0 && newshotgunbullets>=5){
					//alert("YAY");
					newshotgunbullets=newshotgunbullets-5;
					shotgunbullets=shotgunbullets+5;
					shotgunbulletsdiv.innerHTML=shotgunbullets;
					newshotgunbulletsdiv.innerHTML=newshotgunbullets;
					reloaddiv.style.background="white";
				}else if(newshotgunbullets>0 && newshotgunbullets<5){
					shotgunbullets=newshotgunbullets;
					newshotgunbullets=0;
					shotgunbulletsdiv.innerHTML=shotgunbullets;
					newshotgunbulletsdiv.innerHTML=newshotgunbullets;
					reloaddiv.style.background="white";
				}
			reloaddiv.style.background="white";
			}
		funct();
		},5000);
	}
}
	if(w<30){
	w=w+30;
	player.style.top=w+"px";
	}
	if(w>window.innerHeight-200){
	w=w-30;
	player.style.top=w+"px"
	}
	if(q<0){
	q=q+30;
	player.style.left=q+"px"
	}
	if(q>1456){
	q=q-30;
	player.style.left=q+"px"
	}	
	if(e.keyCode==219){
		UI.play()
	}
	if(q>=600 && q<=641 && w==150 && r==626){
		bulletsimg.style.left="-9999px";
		r=-9999;
		newbullets=newbullets+10;
		newbulletsdiv.innerHTML=newbullets;
		bulletpick=true;
		weapon1exist=true;
	}
	if(q>=463 && q<=551 && w==495 && shotgunleft==500){
		shotgunimg.style.left="-9999px";
		shotgunleft=-999;
		newshotgunbullets=newshotgunbullets+5;
		newshotgunbulletsdiv.innerHTML=newshotgunbullets;//+=
		weapon2exist=true;
	}


	//bullet
if(weapon1==true){
	if(e.keyCode==39 && bullets>0){
		//R.play();
		bullets--;
		bulletsdiv.innerHTML=bullets;
		player.src="img1/player1.png";
		var element=document.createElement("div");
		document.body.appendChild(element);
		element.classList.add("bullet");

		
		element.style.left=player.offsetLeft+"px";
		element.style.top=player.offsetTop+"px";
		

		speed1 = element.innerHTML
		//setTimeout(function(){
		//setInterval(function() {
	   // element.style.marginLeft = (parseInt(element.style.marginLeft || 0) +3) % 1500 + 'px'}, speed1);
	//}, 2000)
		setInterval(function() {
	    element.style.marginLeft = (parseInt(element.style.marginLeft || 0) +3) % 1500 + 'px'}, speed1);

	    var i = 1;
		setInterval(function() {
	  	var func=function(){
		if(element.offsetLeft+50>enemy.offsetLeft && element.offsetLeft<enemy.offsetLeft+150 && 
			element.offsetTop>enemy.offsetTop-20 && element.offsetTop<enemy.offsetTop+150){
	    	//alert("COOL");
	  	  enemyangry++;
	    	element.style.display="none"
	    	//enemy.style.background="url(img1/robotg.png)"
	    	//enemy.style.backgroundSize="100%";
	    }else{
	    	//alert("BOOM")
	    }
					if(element.offsetLeft+50>enemy1.offsetLeft && element.offsetLeft<enemy1.offsetLeft+150 && 
						element.offsetTop>enemy1.offsetTop-20 && element.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				  	  boom++;
				    	element.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element.offsetLeft+50>enemy2.offsetLeft && element.offsetLeft<enemy2.offsetLeft+150 && 
						element.offsetTop>enemy2.offsetTop-20 && element.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				  	  boom++;
				    	element.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
		}
		if(element.offsetLeft>1500){
			element.style.display="none"
		}
		func(i);
		}, 100);
		//bullet
}

if(e.keyCode==37 && bullets>0){
	//R.play();
	bullets--;
	bulletsdiv.innerHTML=bullets;
	player.src="img1/player2.png";
	var element=document.createElement("div");
	document.body.appendChild(element);
	element.classList.add("bullet1");

	
	element.style.left=player.offsetLeft+"px";
	element.style.top=player.offsetTop+"px";
	

	speed1 = element.innerHTML
	setInterval(function() {
    element.style.marginLeft = (parseInt(element.style.marginLeft || 0) -3) % -1500 + 'px'}, speed1);



    var i = 1;
	setInterval(function() {
  	var func=function(){
	if(element.offsetLeft+50>enemy.offsetLeft && element.offsetLeft<enemy.offsetLeft+120 && 
		element.offsetTop>enemy.offsetTop-20 && element.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
    				if(element.offsetLeft+50>enemy1.offsetLeft && element.offsetLeft<enemy1.offsetLeft+150 && 
						element.offsetTop>enemy1.offsetTop-20 && element.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element.offsetLeft+50>enemy2.offsetLeft && element.offsetLeft<enemy2.offsetLeft+150 && 
						element.offsetTop>enemy2.offsetTop-20 && element.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element.offsetLeft<0){
		element.style.display="none";
	}
	func(i);
	}, 100);
	//bullet
}

if(e.keyCode==40 && bullets>0){
	//R.play();
	bullets--;
	bulletsdiv.innerHTML=bullets;
	player.src="img1/player3.png";
	var element=document.createElement("div");
	document.body.appendChild(element);
	element.classList.add("bullet3");

	
	element.style.left=player.offsetLeft+"px";
	element.style.top=player.offsetTop+"px";
	

	speed1 = element.innerHTML
	setInterval(function() {
    element.style.marginTop = (parseInt(element.style.marginTop || 0) +3) % 600 + 'px'}, speed1);



    var i = 1;
	setInterval(function() {
  	var func=function(){
	if(element.offsetLeft+50>enemy.offsetLeft && element.offsetLeft<enemy.offsetLeft+120 && 
		element.offsetTop>enemy.offsetTop-20 && element.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element.offsetLeft+50>enemy1.offsetLeft && element.offsetLeft<enemy1.offsetLeft+150 && 
						element.offsetTop>enemy1.offsetTop-20 && element.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element.offsetLeft+50>enemy2.offsetLeft && element.offsetLeft<enemy2.offsetLeft+150 && 
						element.offsetTop>enemy2.offsetTop-20 && element.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element.offsetTop>600){
		element.style.display="none";
	}
	func(i);
	}, 100);
	//bullet
}

if(e.keyCode==38 && bullets>0){
	//R.play();
	bullets--;
	bulletsdiv.innerHTML=bullets;
	player.src="img1/player4.png";
	var element=document.createElement("div");
	document.body.appendChild(element);
	element.classList.add("bullet4");

	
	element.style.left=player.offsetLeft+"px";
	element.style.top=player.offsetTop+"px";
	

	speed1 = element.innerHTML
	setInterval(function() {
    element.style.marginTop = (parseInt(element.style.marginTop || 0) -3) % -600 + 'px'}, speed1);



    var i = 1;
	setInterval(function() {
  	var func=function(){
	if(element.offsetLeft+50>enemy.offsetLeft && element.offsetLeft<enemy.offsetLeft+120 && 
		element.offsetTop>enemy.offsetTop-20 && element.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element.offsetLeft+50>enemy1.offsetLeft && element.offsetLeft<enemy1.offsetLeft+150 && 
						element.offsetTop>enemy1.offsetTop-20 && element.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element.offsetLeft+50>enemy2.offsetLeft && element.offsetLeft<enemy2.offsetLeft+150 && 
						element.offsetTop>enemy2.offsetTop-20 && element.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element.offsetTop<0){
		element.style.display="none";
	}
	func(i);
	}, 100);
	//bullet
}
}





if(weapon2==true){
if(e.keyCode==39 && shotgunbullets>0){
	shotgunbullets--;
	shotgunbulletsdiv.innerHTML=shotgunbullets;
	player.src="img1/player1.png";
	var element=document.createElement("div");
	document.body.appendChild(element);
	element.classList.add("b");

	
	element.style.left=player.offsetLeft+50+"px";
	element.style.top=player.offsetTop+50+"px";
	

	speed1 = element.innerHTML
	setInterval(function() {
    element.style.marginLeft = (parseInt(element.style.marginLeft || 0) +3) % 1500 + 'px'}, speed1);
	setInterval(function() {
    element.style.marginTop = (parseInt(element.style.marginTop || 0) +1) % 600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element.offsetLeft>=1500){
		element.style.display="none"
		}
	if(element.offsetTop>=window.innerHeight-100){
		element.style.display="none"
		}
	if(element.offsetLeft+50>enemy.offsetLeft && element.offsetLeft<enemy.offsetLeft+120 && 
		element.offsetTop>enemy.offsetTop-20 && element.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element.offsetLeft+50>enemy1.offsetLeft && element.offsetLeft<enemy1.offsetLeft+150 && 
						element.offsetTop>enemy1.offsetTop-20 && element.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element.offsetLeft+50>enemy2.offsetLeft && element.offsetLeft<enemy2.offsetLeft+150 && 
						element.offsetTop>enemy2.offsetTop-20 && element.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element.offsetLeft<0){
		element.style.display="none";
	}
	func(i);
	}, 100);




		var element1=document.createElement("div");
	document.body.appendChild(element1);
	element1.classList.add("b");

	
	element1.style.left=player.offsetLeft+50+"px";
	element1.style.top=player.offsetTop+50+"px";
	

	speed1 = element1.innerHTML
	setInterval(function() {
    element1.style.marginLeft = (parseInt(element1.style.marginLeft || 0) +3) % 1500 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element1.offsetLeft>=1500){
		element1.style.display="none"
		}
	if(element1.offsetTop>=window.innerHeight-100){
		element1.style.display="none"
		}
	if(element1.offsetLeft+50>enemy.offsetLeft && element1.offsetLeft<enemy.offsetLeft+120 && 
		element1.offsetTop>enemy.offsetTop-20 && element1.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element1.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element1.offsetLeft+50>enemy1.offsetLeft && element1.offsetLeft<enemy1.offsetLeft+150 && 
						element1.offsetTop>enemy1.offsetTop-20 && element1.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");2
				  	  enemyangry1++;
				    	element1.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element1.offsetLeft+50>enemy2.offsetLeft && element1.offsetLeft<enemy2.offsetLeft+150 && 
						element1.offsetTop>enemy2.offsetTop-20 && element1.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element1.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element.offsetLeft<0){
		element.style.display="none";
	}
	func(i);
	}, 100);
	//bullet






		var element2=document.createElement("div");
	document.body.appendChild(element2);
	element2.classList.add("b");

	
	element2.style.left=player.offsetLeft+50+"px";
	element2.style.top=player.offsetTop+50+"px";
	

	speed1 = element2.innerHTML
	setInterval(function() {
    element2.style.marginLeft = (parseInt(element2.style.marginLeft || 0) +3) % 1500 + 'px'}, speed1);
	setInterval(function() {
    element2.style.marginTop = (parseInt(element2.style.marginTop || 0) -1) % -600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element2.offsetLeft>=1500){
		element2.style.display="none"
		}
	if(element2.offsetTop>=window.innerHeight-100){
		element2.style.display="none"
		}
	if(element2.offsetLeft+50>enemy.offsetLeft && element2.offsetLeft<enemy.offsetLeft+120 && 
		element2.offsetTop>enemy.offsetTop-20 && element2.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element2.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
	if(element2.offsetLeft+50>enemy1.offsetLeft && element2.offsetLeft<enemy1.offsetLeft+150 && 
						element2.offsetTop>enemy1.offsetTop-20 && element2.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element2.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element2.offsetLeft+50>enemy2.offsetLeft && element2.offsetLeft<enemy2.offsetLeft+150 && 
						element2.offsetTop>enemy2.offsetTop-20 && element2.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element2.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element2.offsetLeft<0){
		element2.style.display="none";
	}
	func(i);
	}, 100);

}///////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(e.keyCode==37 && shotgunbullets>0){
	shotgunbullets--;
	shotgunbulletsdiv.innerHTML=shotgunbullets;
	player.src="img1/player2.png";
	var element3=document.createElement("div");
	document.body.appendChild(element3);
	element3.classList.add("b");

	
	element3.style.left=player.offsetLeft+50+"px";
	element3.style.top=player.offsetTop+50+"px";
	

	speed1 = element3.innerHTML
	setInterval(function() {
    element3.style.marginLeft = (parseInt(element3.style.marginLeft || 0) -3) % -1500 + 'px'}, speed1);
	setInterval(function() {
    element3.style.marginTop = (parseInt(element3.style.marginTop || 0) -1) % -600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element3.offsetLeft>=1500){
		element3.style.display="none"
		}
	if(element3.offsetTop>=window.innerHeight-100){
		element3.style.display="none"
		}
	if(element3.offsetLeft<=0){//////
		element3.style.display="none"
	}
	if(element3.offsetTop<=0){
		element3.style.display="none"
		}
	if(element3.offsetLeft+50>enemy.offsetLeft && element3.offsetLeft<enemy.offsetLeft+120 && 
		element3.offsetTop>enemy.offsetTop-20 && element3.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element3.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element3.offsetLeft+50>enemy1.offsetLeft && element3.offsetLeft<enemy1.offsetLeft+150 && 
						element3.offsetTop>enemy1.offsetTop-20 && element3.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element3.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element3.offsetLeft+50>enemy2.offsetLeft && element3.offsetLeft<enemy2.offsetLeft+150 && 
						element3.offsetTop>enemy2.offsetTop-20 && element3.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element3.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element3.offsetLeft<0){
		element3.style.display="none";
	}
	func(i);
	}, 100);




		var element4=document.createElement("div");
	document.body.appendChild(element4);
	element4.classList.add("b");

	
	element4.style.left=player.offsetLeft+50+"px";
	element4.style.top=player.offsetTop+50+"px";
	

	speed1 = element4.innerHTML
	setInterval(function() {
    element4.style.marginLeft = (parseInt(element4.style.marginLeft || 0) -3) % -1500 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element4.offsetLeft>=1500){
		element4.style.display="none"
		}
	if(element4.offsetTop>=window.innerHeight-100){
		element4.style.display="none"
		}
	if(element4.offsetLeft<=0){
		element4.style.display="none"
	}
	if(element4.offsetTop<=0){
		element4.style.display="none"
		}
	if(element4.offsetLeft+50>enemy.offsetLeft && element4.offsetLeft<enemy.offsetLeft+120 && 
		element4.offsetTop>enemy.offsetTop-20 && element4.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element4.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element4.offsetLeft+50>enemy1.offsetLeft && element4.offsetLeft<enemy1.offsetLeft+150 && 
						element4.offsetTop>enemy1.offsetTop-20 && element4.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element4.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element4.offsetLeft+50>enemy2.offsetLeft && element4.offsetLeft<enemy2.offsetLeft+150 && 
						element4.offsetTop>enemy2.offsetTop-20 && element4.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element4.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element4.offsetLeft<0){
		element4.style.display="none";
	}
	func(i);
	}, 100);
	//bullet






		var element5=document.createElement("div");
	document.body.appendChild(element5);
	element5.classList.add("b");

	
	element5.style.left=player.offsetLeft+50+"px";
	element5.style.top=player.offsetTop+50+"px";
	

	speed1 = element5.innerHTML
	setInterval(function() {
    element5.style.marginLeft = (parseInt(element5.style.marginLeft || 0) -3) % -1500 + 'px'}, speed1);
	setInterval(function() {
    element5.style.marginTop = (parseInt(element5.style.marginTop || 0) +1) % 600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element5.offsetLeft>=1500){
		element5.style.display="none"
		}
	if(element5.offsetTop>=window.innerHeight-100){
		element5.style.display="none"
		}
	if(element5.offsetLeft<=0){
		element5.style.display="none"
	}
	if(element5.offsetTop<=0){
		element5.style.display="none"
		}
	if(element5.offsetLeft+50>enemy.offsetLeft && element5.offsetLeft<enemy.offsetLeft+120 && 
		element5.offsetTop>enemy.offsetTop-20 && element5.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element5.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element5.offsetLeft+50>enemy1.offsetLeft && element5.offsetLeft<enemy1.offsetLeft+150 && 
						element5.offsetTop>enemy1.offsetTop-20 && element5.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element5.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element5.offsetLeft+50>enemy2.offsetLeft && element5.offsetLeft<enemy2.offsetLeft+150 && 
						element5.offsetTop>enemy2.offsetTop-20 && element5.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element5.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element5.offsetLeft<0){
		element5.style.display="none";
	}
	func(i);
	}, 100);

}///////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(e.keyCode==38 && shotgunbullets>0){
	shotgunbullets--;
	shotgunbulletsdiv.innerHTML=shotgunbullets;
	player.src="img1/player4.png";
	var element6=document.createElement("div");
	document.body.appendChild(element6);
	element6.classList.add("b");

	
	element6.style.left=player.offsetLeft+50+"px";
	element6.style.top=player.offsetTop+50+"px";
	

	speed1 = element6.innerHTML
	setInterval(function() {
    element6.style.marginLeft = (parseInt(element6.style.marginLeft || 0) -1) % -1500 + 'px'}, speed1);
	setInterval(function() {
    element6.style.marginTop = (parseInt(element6.style.marginTop || 0) -3) % 600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element6.offsetLeft>=1500){
		element6.style.display="none"
		}
	if(element6.offsetTop>=window.innerHeight-100){
		element6.style.display="none"
		}
	if(element6.offsetLeft<=0){//////
		element6.style.display="none"
	}
	if(element6.offsetTop<=0){
		element6.style.display="none"
		}
	if(element6.offsetLeft+50>enemy.offsetLeft && element6.offsetLeft<enemy.offsetLeft+120 && 
		element6.offsetTop>enemy.offsetTop-20 && element6.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element6.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element6.offsetLeft+50>enemy1.offsetLeft && element6.offsetLeft<enemy1.offsetLeft+150 && 
						element6.offsetTop>enemy1.offsetTop-20 && element6.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element6.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element6.offsetLeft+50>enemy2.offsetLeft && element6.offsetLeft<enemy2.offsetLeft+150 && 
						element6.offsetTop>enemy2.offsetTop-20 && element6.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element6.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element6.offsetLeft<0){
		element6.style.display="none";
	}
	func(i);
	}, 100);




		var element7=document.createElement("div");
	document.body.appendChild(element7);
	element7.classList.add("b");

	
	element7.style.left=player.offsetLeft+50+"px";
	element7.style.top=player.offsetTop+50+"px";
	

	speed1 = element7.innerHTML
	setInterval(function() {
    element7.style.marginTop = (parseInt(element7.style.marginTop || 0) -3) % -600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element7.offsetLeft>=1500){
		element7.style.display="none"
		}
	if(element7.offsetTop>=window.innerHeight-100){
		element7.style.display="none"
		}
	if(element7.offsetLeft<=0){
		element7.style.display="none"
	}
	if(element7.offsetTop<=0){
		element7.style.display="none"
		}
	if(element7.offsetLeft+50>enemy.offsetLeft && element7.offsetLeft<enemy.offsetLeft+120 && 
		element7.offsetTop>enemy.offsetTop-20 && element7.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element7.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element7.offsetLeft+50>enemy1.offsetLeft && element7.offsetLeft<enemy1.offsetLeft+150 && 
						element7.offsetTop>enemy1.offsetTop-20 && element7.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element7.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element7.offsetLeft+50>enemy2.offsetLeft && element7.offsetLeft<enemy2.offsetLeft+150 && 
						element7.offsetTop>enemy2.offsetTop-20 && element7.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element7.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element7.offsetLeft<0){
		element7.style.display="none";
	}
	func(i);
	}, 100);
	//bullet






		var element8=document.createElement("div");
	document.body.appendChild(element8);
	element8.classList.add("b");

	
	element8.style.left=player.offsetLeft+50+"px";
	element8.style.top=player.offsetTop+50+"px";
	

	speed1 = element8.innerHTML
	setInterval(function() {
    element8.style.marginLeft = (parseInt(element8.style.marginLeft || 0) +1) % 1500 + 'px'}, speed1);
	setInterval(function() {
    element8.style.marginTop = (parseInt(element8.style.marginTop || 0) -3) % 600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element8.offsetLeft>=1500){
		element8.style.display="none"
		}
	if(element8.offsetTop>=window.innerHeight-100){
		element8.style.display="none"
		}
	if(element8.offsetLeft<=0){
		element8.style.display="none"
	}
	if(element8.offsetTop<=0){
		element8.style.display="none"
		}
	if(element8.offsetLeft+50>enemy.offsetLeft && element8.offsetLeft<enemy.offsetLeft+120 && 
		element8.offsetTop>enemy.offsetTop-20 && element8.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element8.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element8.offsetLeft+50>enemy1.offsetLeft && element8.offsetLeft<enemy1.offsetLeft+150 && 
						element8.offsetTop>enemy1.offsetTop-20 && element8.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element8.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element8.offsetLeft+50>enemy2.offsetLeft && element8.offsetLeft<enemy2.offsetLeft+150 && 
						element8.offsetTop>enemy2.offsetTop-20 && element8.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element8.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element8.offsetLeft<0){
		element8.style.display="none";
	}
	func(i);
	}, 100);

}///////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(e.keyCode==40 && shotgunbullets>0){
	shotgunbullets--;
	shotgunbulletsdiv.innerHTML=shotgunbullets;
	player.src="img1/player3.png";
	var element9=document.createElement("div");
	document.body.appendChild(element9);
	element9.classList.add("b");

	
	element9.style.left=player.offsetLeft+50+"px";
	element9.style.top=player.offsetTop+50+"px";
	

	speed1 = element9.innerHTML
	setInterval(function() {
    element9.style.marginLeft = (parseInt(element9.style.marginLeft || 0) -1) % 1500 + 'px'}, speed1);
	setInterval(function() {
    element9.style.marginTop = (parseInt(element9.style.marginTop || 0) +3) % 600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element9.offsetLeft>=1500){
		element9.style.display="none"
		}
	if(element9.offsetTop>=window.innerHeight-100){
		element9.style.display="none"
		}
	if(element9.offsetLeft<=0){//////
		element9.style.display="none"
	}
	if(element9.offsetTop<=0){
		element9.style.display="none"
		}
	if(element9.offsetLeft+50>enemy.offsetLeft && element9.offsetLeft<enemy.offsetLeft+120 && 
		element9.offsetTop>enemy.offsetTop-20 && element9.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
   		enemyangry++;
    	element9.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	//enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element9.offsetLeft+50>enemy1.offsetLeft && element9.offsetLeft<enemy1.offsetLeft+150 && 
						element9.offsetTop>enemy1.offsetTop-20 && element9.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element9.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element9.offsetLeft+50>enemy2.offsetLeft && element9.offsetLeft<enemy2.offsetLeft+150 && 
						element9.offsetTop>enemy2.offsetTop-20 && element9.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element9.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element9.offsetLeft<0){
		element9.style.display="none";
	}
	func(i);
	}, 100);




		var element10=document.createElement("div");
	document.body.appendChild(element10);
	element10.classList.add("b");

	
	element10.style.left=player.offsetLeft+50+"px";
	element10.style.top=player.offsetTop+50+"px";
	

	speed1 = element10.innerHTML
	setInterval(function() {
    element10.style.marginTop = (parseInt(element10.style.marginTop || 0) +3) % 600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element10.offsetLeft>=1500){
		element10.style.display="none"
		}
	if(element10.offsetTop>=window.innerHeight-100){
		element10.style.display="none"
		}
	if(element10.offsetLeft<=0){
		element10.style.display="none"
	}
	if(element10.offsetTop<=0){
		element10.style.display="none"
		}
	if(element10.offsetLeft+50>enemy.offsetLeft && element10.offsetLeft<enemy.offsetLeft+120 && 
		element10.offsetTop>enemy.offsetTop-20 && element10.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element10.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
					if(element10.offsetLeft+50>enemy1.offsetLeft && element10.offsetLeft<enemy1.offsetLeft+150 && 
						element10.offsetTop>enemy1.offsetTop-20 && element10.offsetTop<enemy1.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry1++;
				    	element10.style.display="none"
				    	//enemy1.style.background="url(img1/robotg.png)"
				    	//enemy1.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
				    if(element10.offsetLeft+50>enemy2.offsetLeft && element10.offsetLeft<enemy2.offsetLeft+150 && 
						element10.offsetTop>enemy2.offsetTop-20 && element10.offsetTop<enemy2.offsetTop+150){
				    	//alert("COOL");
				  	  enemyangry2++;
				    	element10.style.display="none"
				    	//enemy2.style.background="url(img1/robotg.png)"
				    	//enemy2.style.backgroundSize="100%";
				    }else{
				    	//alert("BOOM")
				    }
	}
	if(element10.offsetLeft<0){
		element10.style.display="none";
	}
	func(i);
	}, 100);
	//bullet






		var element11=document.createElement("div");
	document.body.appendChild(element11);
	element11.classList.add("b");

	
	element11.style.left=player.offsetLeft+50+"px";
	element11.style.top=player.offsetTop+50+"px";
	

	speed1 = element11.innerHTML
	setInterval(function() {
    element11.style.marginLeft = (parseInt(element11.style.marginLeft || 0) +1) % 1500 + 'px'}, speed1);
	setInterval(function() {
    element11.style.marginTop = (parseInt(element11.style.marginTop || 0) +3) % 600 + 'px'}, speed1);

    var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(element11.offsetLeft>=1500){
		element11.style.display="none"
		}
	if(element11.offsetTop>=window.innerHeight-100){
		element11.style.display="none"
		}
	if(element11.offsetLeft<=0){
		element11.style.display="none"
	}
	if(element11.offsetTop<=0){
		element11.style.display="none"
		}
	if(element11.offsetLeft+50>enemy.offsetLeft && element11.offsetLeft<enemy.offsetLeft+120 && 
		element11.offsetTop>enemy.offsetTop-20 && element11.offsetTop<enemy.offsetTop+150){
    	//alert("COOL");
    enemyangry++;
    	element11.style.display="none"
    	//enemy.style.background="url(img1/robotg.png)"
    	enemy.style.backgroundSize="100%";
    }else{
    	//alert("BOOM")
    }
	if(element11.offsetLeft+50>enemy1.offsetLeft && element11.offsetLeft<enemy1.offsetLeft+150 && 
	element11.offsetTop>enemy1.offsetTop-20 && element11.offsetTop<enemy1.offsetTop+150){
	//alert("COOL");
	enemyangry1++;
	element11.style.display="none"
	//enemy1.style.background="url(img1/robotg.png)"
	//enemy1.style.backgroundSize="100%";
	}else{
	//alert("BOOM")
					    }
								    if(element11.offsetLeft+50>enemy2.offsetLeft && element11.offsetLeft<enemy2.offsetLeft+150 && 
										element11.offsetTop>enemy2.offsetTop-20 && element11.offsetTop<enemy2.offsetTop+150){
								    	//alert("COOL");
								  	  enemyangry2++;
								    	element11.style.display="none"
								    	//enemy2.style.background="url(img1/robotg.png)"
								    	//enemy2.style.backgroundSize="100%";
								    }else{
								    	//alert("BOOM")
								    }
	}
	if(element11.offsetLeft<0){
		element11.style.display="none";
	}
	func(i);
	}, 100);

}///////////////////////////////////////////////////////////////////////////////////////////////////////////////
}


if(e.keyCode==81){
	if(weapon1==true){
			weapon1=false
			weapondiv.innerHTML="no weapon";
			whatweapon.style.background="";
	}else if(weapon1exist==true && weapon1==false){
			weapon1=true
			weapondiv.innerHTML="pistollet";
			whatweapon.style.background="url(img1/pistollet.png)";
			whatweapon.style.backgroundRepeat = "no-repeat";
			whatweapon.style.backgroundSize="100%";
	}
	if(weapon2exist==true){
		if(weapon1==false){
			weapon2=true
			weapondiv.innerHTML="shotgun";
			whatweapon.style.background="url(img1/shotgundeg.png)";
			whatweapon.style.backgroundRepeat = "no-repeat";
			whatweapon.style.backgroundSize="100%";
		}else if(weapon2==true){
			weapon2=false
			weapondiv.innerHTML="pistol";
			whatweapon.style.background="url(img1/pistollet.png)";
			whatweapon.style.backgroundRepeat = "no-repeat";
			whatweapon.style.backgroundSize="100%";
		}
	}
}
}
baton.onclick = function(){
	enemyes++;
	r=626;
	bulletsimg.style.left="626px";
	var sosokfly = function(){
		sosok.style.background = "green";
	setTimeout(sosokcvetup = function(){sosok.style.top = "-500px";},500);
	sosokonfloor=false;
	//alert(sosokonfloor);
	}
	sosokfly();
	setTimeout(sosokfall = function(){
		sosok.style.left = player.style.left;
		sosok.style.right = player.style.right;
		sosok.style.background = "red";
		setTimeout(sosokcvetdown = function(){sosok.style.background = "purple";},1500);
		setTimeout(sosokfalldown = function(){sosok.style.top = player.style.top},500);

		sosokonfloor=true;
		setTimeout(tresk = function(){
			sosoktreshini.style.display="block";
			sosoktreshini.style.top=sosok.style.top;
			sosoktreshini.style.left=sosok.offsetLeft-80+"px";
		},2000);
		setTimeout(endtresk = function(){
			sosoktreshini.style.display="none";
			//.style.top=sosok.style.top;
			//sosoktreshini.style.left=sosok.style.left;
		},3000);
		
	},1000);
	//setTimeout(sosokfall(),5000);
	/*if(enemyes<4){
	enemyzlo++;
	enemy.style.top=player.offsetTop+"px";
	enemy.style.left=player.offsetLeft+"px";
	var newrobot=document.createElement("div");
	document.body.appendChild(newrobot);
	//newrobot.style.height = "140px";
	//newrobot.style.width = "2.8%";
	//newrobot.style.position = "absolute";
	//newrobot.style.background = "url(img1/robot.png)";
	//newrobot.style.zIndex="3";
	//newrobot.style.backgroundRepeat = "noRepeat";
	//newrobot.style.backgroundSize="100%";
	//newrobot.style.transition="4s";
	newrobot.classList.add("enemy1");
	newrobot.style.left="0px";
							var i = 1;
						setInterval(function() {
					  	var func=function(){
					  	if(enemyangry1>0){
						newrobot.style.top=player.offsetTop+"px";
						newrobot.style.left=player.offsetLeft+"px";



						if(player.offsetLeft+50>newrobot.offsetLeft && player.offsetLeft<newrobot.offsetLeft+150 && 
							player.offsetTop>newrobot.offsetTop-20 && player.offsetTop<newrobot.offsetTop+150){
					    	alert("WAOW");
					    	newrobot.style.background="url(img1/robot.png)"
					    	newrobot.style.backgroundSize="100%";
					    }
					    if(enemyangry1>5){
					    	newrobot.style.position="static"
					    }

						}
					}
						func(i);
						}, 100);
					}*/

}
//alert(screen.width+" "+screen.height);
background.style.height=window.innerHeight+"px";
//alert(window.innerHeight+"px")




//ROB01
 var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(enemyangry>1){
  	if(enemy.offsetLeft<player.offsetLeft){
  		enemy.style.background="url(img1/skright.png)";
  		enemy.style.backgroundSize="100%";
    	enemy.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy.offsetLeft>player.offsetLeft){
  		enemy.style.background="url(img1/skleft.png)"
  		enemy.style.backgroundSize="100%";
    	enemy.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy.offsetTop>player.offsetTop && enemy.offsetLeft==player.offsetLeft){
  		enemy.style.background="url(img1/skback.png)";
  		enemy.style.backgroundSize="100%";
    	enemy.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy.offsetTop<player.offsetTop && enemy.offsetLeft==player.offsetLeft){
  		enemy.style.background="url(img1/skforward.png)"
  		enemy.style.backgroundSize="100%";
    	enemy.style.backgroundRepeat="noRepeat";
  	}
  	if(canangry==true){
  	enemy.style.top=player.offsetTop+"px";
	enemy.style.left=player.offsetLeft+"px";
	}

	if(canangry==true){
	if(player.offsetLeft+50>enemy.offsetLeft && player.offsetLeft<enemy.offsetLeft+150 && 
		player.offsetTop>enemy.offsetTop-20 && player.offsetTop<enemy.offsetTop+150){
    	playerhps=playerhps-10;
    	playerhphpwidth=playerhphpwidth-20;
    	playerhphp.style.width=playerhphpwidth+"px";
    	//enemy.style.background="url(img1/robot.png)"
    	//enemy.style.backgroundSize="100%";
    	//enemy.style.backgroundRepeat="noRepeat"
    }
	}
    if(enemyangry>5){
    	//enemy.style.position="static";
    	enemy.style.background="url(img1/gruda.png)";
    	canangry=false;
    	enemy.style.height="25px";
    	enemy.style.backgroundPosition="bottom";
    	UI.play();
    }
	}
}
	func(i);
	}, 100);
//
var i = 1;
	setInterval(function() {
  	var func=function(){
  	if(enemyangry1>0){
  	if(enemy1.offsetLeft<player.offsetLeft){
  		enemy1.style.background="url(img1/skright.png)";
  		enemy1.style.backgroundSize="100%";
    	enemy1.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy1.offsetLeft>player.offsetLeft){
  		enemy1.style.background="url(img1/skleft.png)"
  		enemy1.style.backgroundSize="100%";
    	enemy1.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy1.offsetTop>player.offsetTop && enemy1.offsetLeft==player.offsetLeft){
  		enemy1.style.background="url(img1/skback.png)";
  		enemy1.style.backgroundSize="100%";
    	enemy1.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy1.offsetTop<player.offsetTop && enemy1.offsetLeft==player.offsetLeft){
  		enemy1.style.background="url(img1/skforward.png)"
  		enemy1.style.backgroundSize="100%";
    	enemy1.style.backgroundRepeat="noRepeat";
  	}
  	if(canangry1==true){
  	enemy1.style.top=player.offsetTop+"px";
	enemy1.style.left=player.offsetLeft+"px";
	}

	if(canangry1==true){
	if(player.offsetLeft+50>enemy1.offsetLeft && player.offsetLeft<enemy1.offsetLeft+150 && 
		player.offsetTop>enemy1.offsetTop-20 && player.offsetTop<enemy1.offsetTop+150){
    	playerhps=playerhps-10;
    	playerhphpwidth=playerhphpwidth-20;
    	playerhphp.style.width=playerhphpwidth+"px";
    	//enemy1.style.background="url(img1/robot.png)"
    	//enemy1.style.backgroundSize="100%";
    	//enemy1.style.backgroundRepeat="noRepeat"
    }
	}
    if(enemyangry1>5){
    	//enemy1.style.position="static"
    	enemy1.style.background="url(img1/gruda.png)";
    	canangry1=false;
    	enemy1.style.height="25px";
    	enemy1.style.backgroundPosition="bottom";
    	UI.play();
    }
	}
}
	func(i);
	}, 100);

var i = 1;
	setInterval(function() {
  	var func=function(){
  	background.style.height=window.innerHeight+"px";
  	playerhphp.innerHTML=playerhps;
  	if(enemyangry2>0){
  		if(enemy2.offsetLeft<player.offsetLeft){
  		enemy2.style.background="url(img1/skright.png)";
  		enemy2.style.backgroundSize="100%";
    	enemy2.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy2.offsetLeft>player.offsetLeft){
  		enemy2.style.background="url(img1/skleft.png)"
  		enemy2.style.backgroundSize="100%";
    	enemy2.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy2.offsetTop>player.offsetTop && enemy2.offsetLeft==player.offsetLeft){
  		enemy2.style.background="url(img1/skback.png)";
  		enemy2.style.backgroundSize="100%";
    	enemy2.style.backgroundRepeat="noRepeat";
  	}
  	if(enemy2.offsetTop<player.offsetTop && enemy2.offsetLeft==player.offsetLeft){
  		enemy2.style.background="url(img1/skforward.png)"
  		enemy2.style.backgroundSize="100%";
    	enemy2.style.backgroundRepeat="noRepeat";
  	}
  	if(canangry2==true){
  	enemy2.style.top=player.offsetTop+"px";
	enemy2.style.left=player.offsetLeft+"px";
	}

	if(canangry2==true){
	if(player.offsetLeft+50>enemy2.offsetLeft && player.offsetLeft<enemy2.offsetLeft+150 && 
		player.offsetTop>enemy2.offsetTop-20 && player.offsetTop<enemy2.offsetTop+150){
    	playerhps=playerhps-10;
    	playerhphpwidth=playerhphpwidth-20;
    	playerhphp.style.width=playerhphpwidth+"px";
    	//enemy2.style.background="url(img1/robot.png)"
    	//enemy2.style.backgroundSize="100%";
    	//enemy2.style.backgroundRepeat="noRepeat"
    }
	}
    if(enemyangry2>5){
    	//enemy2.style.position="static"
    	enemy2.style.background="url(img1/gruda.png)";
    	canangry2=false;
    	enemy2.style.height="25px";
    	enemy2.style.backgroundPosition="bottom";
    	UI.play();
    }
	}
}
	func(i);
	}, 100);



var i = 1;
	setInterval(function() {
  	var func=function(){
  	playerhphp.innerHTML=playerhps;
  	if(playerhps<=0){
  		alert("WAOW")
	}
}
	func(i);
	}, 100);
//element.style.top=q.clientY+"px";
