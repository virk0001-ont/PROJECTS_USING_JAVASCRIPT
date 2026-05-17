
const clockDiv = document.createElement("div");
clockDiv.className = "clock";
clockDiv.innerHTML = "Time in Ontario is:";//why not innercontent? 
// because we want to add the time after this text and if we use innerContent it will 
// replace the text with the time but if we use innerHTML it will add the time after the text
document.body.appendChild(clockDiv);


// const clock = document.getElementById=('clock');  DONT DO THIS!! BCZ WE ARE CREATING THE CLOCK DIV IN JS AND APPENDING IT TO THE BODY SO WE CANT GET IT BY ID BECAUSE IT DOESNT EXIST IN THE HTML YET


//setInterval is a function that takes two arguments, the first argument is a function that will be executed
//second argument is the time in milliseconds that we want to wait before executing the function again

setInterval(()=>{ 
    const now = new Date();
    clockDiv.textContent = "Time in Ontario is: " + now.toLocaleTimeString();
    
},1000);


//const now , we are setting value of now, new date() is a method in js that returns the current date and time
//toLocaleTimeString() is a method that returns the time in a human readable format based on the user's locale
//means it just shows time then other wise without tolcaleTimeString it will show the date and time together