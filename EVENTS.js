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
  });
  });
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

//stoppropagation
//stopPropagation method is used to stop the event from bubbling up to the parent elements.
//we can use it like this

const images = document.querySelector('.owl');
images.addEventListener('click', function(e) {
  e.stopPropagation();
  alert('You clicked on owl');
});
//this will print only you clicked on owl when we click on the owl image because 
// we have stopped the event from bubbling up to the parent elements.





//preventDefault
//preventDefault is a method of the event object that prevents the default action of the event.
//for example, if we have a link like this
//<a href="https://www.google.com" id="mylink">Go to Google</a>
//and we want to prevent the default action of the link, which is to navigate to google.com, then we can do it like this

const link = document.getElementById('mylink');
link.addEventListener('click', function(e) {
  e.preventDefault();
  alert('You clicked on the link');
});
//this will prevent the default action of the link and it will print only you clicked on the link when we click on the link.



//parentNode
//parentNode is a property of the event object that returns the parent node of the target element.
//for example, if we have a ul with class images and we click on any of the images, 
// then we can get the parent node of the image like this

document.querySelector('#images').addEventListener('click',function(e){
  console.log(e.target.parentNode);

})

//method 1
 //and we can remove the parent node of the image like this
document.querySelector('#images').addEventListener('click',function(e){
  console.log(e.target.parentNode);
  let removeIt = e.target.parentNode; //this will get the parent node of the target element
                                    //  which is the li element and we can remove it like this
  removeIt.remove();


})

//and
//method 2
document.querySelector('#images').addEventListener('click',function(e){
  console.log(e.target.parentNode);
  let removeIt = e.target.parentNode; //this will get the parent node of the target element
  removeIt.parentNode.removeChild(removeIt); 
  
  //this will remove the parent node of the target element which is the li element
})

//differnece between method 1 and method 2 is that 
// in method 1 we are using the remove() method which is a
//  modern method and it is not supported in older browsers, 
// while in method 2 we are using the removeChild() 
// method which is supported in all browsers.

//and
//When you click the image, e.target is the img,
//  and its parentNode is the li,
//  so removeIt becomes the li.
//  In the first method, remove() directly deletes the li.
//  In the second method, removeIt.parentNode gets the ul,
//  and removeChild(removeIt) means “hey ul, remove this li child.” 
// Both do the same thing — they remove the li.

 //events spillover
 //like in this , cicking is removing li element,
   
 document.querySelector('#images').addEventListener('click',function(e){
  console.log(e.target.parentNode);
  let removeIt = e.target.parentNode; //this will get the parent node of the target element
  removeIt.parentNode.removeChild(removeIt); };
 
  //  but if we click on the space between the images, then it will remove the ul element because of event bubbling,
 // so to prevent that we can check if the target element is an image or not like this



document.querySelector('#images').addEventListener('click',function(e){
  if(e.target.tagName === 'IMG') {
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode; //this will get the parent node of the target element
    removeIt.parentNode.removeChild(removeIt); 
  }
  //this will check if the target element is an image or not, 
  // and if it is an image then it will remove the parent node of the image which is the li element, 
  // otherwise it will do nothing when we click on the space between the images.
})

 