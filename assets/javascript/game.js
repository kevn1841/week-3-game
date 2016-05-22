//Word list

var words = {
	0 : "cliff",
	1 : "grass",
	2 : "tree",
	3 : "hill",
	4 : "moon",
	5 : "water",
	6 : "valley",
	7 : "sun",
	8 : "sky",
	9 : "night",
	10 : "ocean",
	11 : "stars",
	12 : "river",
	13 : "rain",
	14 : "clouds",
	15 : "jungle",
	16 : "forest",
	17 : "tropical",
	18 : "biome",
	19 : "tundra",
	20 : "storm",
	

}

//Setting variables

var c = Math.floor(Math.random() * 20);

document.write(words[c]);

//lives message

var n = words[c].length;

var str = "You have " +n;

var str2 = " lives left."

var lives = n;

document.getElementById("lives").innerHTML = str + str2;

//determining how many underscores there should be,depending on the characters

var element = document.getElementById("underscores");
	element.innerHTML = " ";

if((c==7) || (c==8)){
	element.innerHTML = " _ _ _ ";
} else if((c==2) || (c==3) || (c==4) || (c==13)){
	element.innerHTML = " _ _ _ _ ";
} else if((c==0) || (c==1) || (c==5) || (c==9) || (c==10) || (c==11) || (c==12) || (c==18) || (c==20)){
	element.innerHTML = " _ _ _ _ _ ";
} else if((c==6) || (c==14) || (c==15) || (c==16) || (c==19)){
	element.innerHTML = " _ _ _ _ _ _ ";
} else {
	element.innerHTML = " _ _ _ _ _ _ _ _ ";
};

//replacing the underscores with onkey events.

document.onkeyup = function(event) {

    var userKey = String.fromCharCode(event.keyCode).toLowerCase();
    
    console.log(userKey);

//if user picks a certain letter, replace the underscore with that letter if correct
//sun
if((userKey=="s") && (element==" _ _ _ ") && (words[c]==7)){
	element[1]="s";
} else if((userKey=="u") && (element==" _ _ _ ") && (words[c]==7)){
	element[3]="u";
} else if((userKey=="n") && (element==" _ _ _ ") && (words[c]==7)){
	element[5]="n";
} else {
	n-1;
};

if((userKey=="s") && (element==" _ _ _ ") && (words[c]==8)){
	element[1]="s";
} else if((userKey=="k") && (element==" _ _ _ ") && (words[c]==8)){
	element[3]="k";
} else if((userKey=="y") && (element==" _ _ _ ") && (words[c]==8)){
	element[5]="y";
} else {
	n-1;
}
}










