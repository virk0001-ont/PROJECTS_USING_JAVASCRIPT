//learning abt events in js

//if we talk about html events, then we can say that an event is something that happens to HTML elements.
//  When JavaScript is used in HTML pages,
//  JavaScript can react on these events. An event can be something the browser does, or something a user does.

//in html we can add on click event to a button like this
// <button onclick="alert('Hello World!')">Click me</button>



//or even in js file we can add .onclick event to a button like this
// const button = document.querySelector('button');
// button.onclick = function() {
//   alert('Hello World!');
// };
//but this method is not recommended because it can lead to code that is difficult to maintain and debug.

//we should add EVENT LISTENERS in js file to make our code more organized and maintainable.


//example

// in html file we have a button like this

//<button id="mybutton">Click me</button>

// in js file we can add event listener to the button like this

// const button = document.getElementById('mybutton');
// button.addEventListener('click', function() {
//   alert('Hello World!');
// });
//this will show alert or instead of alert we can add any function
//  that we want to execute when the button is clicked.


//also                        EVENT OBJECT




//button.addEventListener('click', function(e) {
//   alert('Hello World!');                 ^ this is called event object 
// and it contains information about the event that occurred,
//  such as the type of event, the target element, and any additional data 
// associated with the event.


//we have to learn about

//imp ones
//type,timestamp,defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altKey,ctrlKey,shiftKey,keyCode

//these are some of the properties of the event object that 
// we can use to get information about the event that occurred.


//event propagation and bubbling

//when an event occurs on an element, it can trigger other events on parent elements. 
// This is called event propagation. There are two types of event propagation: 
// bubbling and capturing.

//bubbling is the default behavior where the event starts from the target element and 
// then bubbles up to the parent elements. For example, if we have a button inside a div, 
// and we click the button, the click event will first trigger on the button, and then 
// it will bubble up to the div.

//capturing is the opposite of bubbling, where the event starts from the parent elements and 
// then captures down to the target element. To use capturing, we can pass a third argument 
// as true in the addEventListener method like this:

// button.addEventListener('click', function() {
//   alert('Hello World!');
// }, true);


//if we have 4images in a html like this
//<ul class="images">
// <li><img src="image1.jpg" class="sparrow"></li>
// <li><img src="image2.jpg" class="hen"></li>
// <li><img src="image3.jpg" class="owl"></li>
// <li><img src="image4.jpg" class="crow"></li>
//</ul>
//and we want to add click event to all the images, then we can do it like this

const images = document.querySelectorAll('.images img');
//              //why just images wont select the images, because we have to select the images inside the ul with class images
                //we have to select the img tag elements also
images.forEach(function(image) {
  image.addEventListener('click', function() {
    alert('You clicked');
//   });
// });
//this will print alert when we click on any of the images.

//but if we call the event listener on the child also after that it will also print the alert because of event bubbling, 
//like if we add event listener to the ul with class images like
 const images = document.querySelector('.owl');
images.addEventListener('click', function() {
  alert('You clicked on owl');
});
//and if we click on the owl image then it will print both the alerts because of event bubbling,
// so to prevent that we can use stopPropagation method like this

//but it print first you clicked on own then you clicked because the event is first captured by the owl image and then it bubbles up to the ul element,
//  so we have to use stopPropagation method in the owl image event listener like this

//capturing works like this
document.querySelector('.images').addEventListener('click', function() {
  alert('You clicked');
}, true);
const images = document.querySelector('.owl');
images.addEventListener('click', function() {
  alert('You clicked on owl');
}, true);
//this will print first you clicked then you clicked on owl because we have capturing enabled and
// ,  the event is first captured by the ul element and then it captures down to the owl image.