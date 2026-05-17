const height = document.getElementById("height")
const weight = document.getElementById("weight")
const button = document.getElementById("button")
//const result = document.getElementById("result")
//we dont need to call the value of the result because we will be changing the innerHTML of the result element
const result = document.createElement("div");
result.className ="result";
document.body.appendChild(result);

button.addEventListener("click",CalculateBmi)

function CalculateBmi(){
    const heightInMeters = height.value * 0.0254
    const BMI = weight.value/(heightInMeters*heightInMeters)


    //here we can actually create div in html and then change the innerHTML of that div to display the result 
    // but here we are creating a div element in js and then changing the innerHTML of that div to display the result and
    //  then appending that div to the body of the html document

    //this is more advanced way of doing it and it is also more dynamic because we can create multiple divs
    //  for different results if we want to and we can also style those divs using css if we want to
   
   
   
   
   
    // const resultdiv = document.createElement("div")
    // resultdiv.className ="result";
    // resultdiv.innerHTML = `Your BMI is ${BMI.toFixed(2)}`;
    // document.body.appendChild(resultdiv);

    //this approach was making stacks of results like these
//Your BMI is 320.25
// Your BMI is 320.25
// Your BMI is 320.25
// Your BMI is 142.33
//to fix these   I CREATED THE DIV ELEMENT OUTSIDE THE FUNCTION 


result.textContent = `Your BMI is ${BMI.toFixed(2)}`;
}
