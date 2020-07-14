var time = new Date();
var greeting;



if ( (time.getDate() !==6 && time.getDate() !==9 && time.getDate() !==18 && time.getDate() !==26  && time.getDate() !==31 )) {
 greeting=document.getElementById('a').style.display='none';
} else {

greeting= document.getElementById('a').style.display='block';
}


document.image = greeting;






