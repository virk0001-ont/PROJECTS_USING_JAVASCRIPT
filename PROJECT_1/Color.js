
//why did we call button in javascript when we could have use onclick in html?
//we can use onclick in html but it is not a good practice because it is not separated from the structure of the html and it is not reusable. 
//it is better to use addEventListener in javascript because it is separated from the structure of the html and it is reusable.
const color = document.getElementById("redbutton");


color.addEventListener("click",changeColor);

function changeColor(){

   document.body.style.backgroundColor = "red";
}





const color2 = document.getElementById("pinkbutton");

color2.addEventListener("click",changeColor2);

function changeColor2(){
    document.body.style.backgroundColor = "pink";

}


const color3 = document.getElementById("bluebutton");

color3.addEventListener("click",changeColor3);

function changeColor3(){
    document.body.style.backgroundColor = "blue";
}





