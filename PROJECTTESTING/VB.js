// ========================================
// API KEY
// ========================================

// This variable stores your Gemini API key.
//
// Think of API key like:
// a password between your app and Google's AI servers.
//
// When your app talks to Gemini AI,
// Google checks:
//
// "Does this request have a valid key?"
//
// If yes → request accepted
// If no → rejected
//
// const means:
// this variable should not change later.
//
// You mainly use const when:
// - value stays fixed
// - object reference stays fixed
// - safer programming
//
// Example:
//
// const name = "virk";
//
// name = "new"
// ❌ ERROR
//
// Important beginner note:
//
// In JavaScript:
// - const does NOT mean object contents cannot change
// - it only means variable reference cannot change
//
// Example:
//
// const user = {
//    name: "virk"
// }
//
// user.name = "john" ✅ allowed
//
// user = {} ❌ not allowed

const GEMINI_API_KEY =
    "YOUR_API_KEY_HERE";





// ========================================
// HTML ELEMENTS
// ========================================

// JavaScript needs to connect with HTML.
//
// HTML creates the UI.
// JavaScript controls the UI.
//
// Browser converts HTML into OBJECTS.
//
// That system is called:
//
// DOM
// = Document Object Model
//
// DOM is SUPER IMPORTANT.
//
// EVERYTHING frontend depends on DOM.
//
// Example:
//
// <button id="hello"></button>
//
// becomes a JavaScript object internally.
//
// Then JS can:
// - change text
// - change colors
// - add/remove elements
// - listen for clicks
// - animate things



// ========================================
// RECORD BUTTON
// ========================================

// document
// means entire webpage.
//
// getElementById()
// searches HTML by id.
//
// Example:
//
// <button id="recordBtn"></button>
//
// JS:
//
// document.getElementById("recordBtn")
//
// returns the actual button object.
//
// We store that object inside a variable.
//
// Why?
//
// So we can use it later.
//
// Example:
// - change text
// - detect click
// - disable button
// - style button

const recordBtn =
    document.getElementById("recordBtn");



// ========================================
// GENERATE BUTTON
// ========================================

// This button will later:
// send transcript to AI
// generate notes
// summarize lecture

const generateBtn =
    document.getElementById("generateBtn");



// ========================================
// RECORDINGS CONTAINER
// ========================================

// Container means:
// area where recordings appear.
//
// Example:
//
// Recording 1
// Recording 2
// Recording 3
//
// JavaScript will dynamically add HTML here.
//
// VERY IMPORTANT:
//
// Dynamic UI generation
// is HUGE in frontend development.
//
// React also does same thing internally.

const recordingsContainer =
    document.getElementById(
        "recordingsContainer"
    );



// ========================================
// NOTES CONTAINER
// ========================================

// AI-generated notes will appear here later.

const notesContainer =
    document.getElementById(
        "notesContainer"
    );



// ========================================
// STATUS TEXT
// ========================================

// Used to show app state.
//
// Example:
//
// "Recording..."
// "Processing audio..."
// "Finished"

const statusText =
    document.getElementById("status");



// ========================================
// TIMER
// ========================================

// This element shows recording time.
//
// Example:
//
// 00:01
// 00:15
// 01:23

const timer =
    document.getElementById("timer");



// ========================================
// VARIABLES
// ========================================

// let means variable CAN change later.
//
// Example:
//
// let age = 20;
//
// age = 21 ✅ allowed
//
// Difference:
//
// const = fixed reference
// let = changeable variable



// ========================================
// MEDIA RECORDER
// ========================================

// MediaRecorder is a browser API.
//
// Browser APIs are prebuilt tools.
//
// Browser already gives you:
// - camera APIs
// - audio APIs
// - fetch APIs
// - geolocation APIs
// - storage APIs
//
// API means:
//
// "ready-made functionality"
//
// You don't build recording system manually.
// Browser already built it.
//
// You just USE it.
//
// This is how software engineering works.
//
// Engineers rarely build everything from scratch.
// They connect systems together.

let mediaRecorder;



// ========================================
// AUDIO CHUNKS
// ========================================

// This array stores tiny audio pieces.
//
// Why tiny pieces?
//
// Browser records audio continuously.
//
// Instead of:
//
// one giant audio file immediately
//
// browser keeps giving:
// small chunks
//
// chunk
// chunk
// chunk
// chunk
//
// then later we combine them.
//
// [] means array.
//
// Arrays are VERY IMPORTANT.
//
// Arrays store collections.
//
// Example:
//
// let fruits = [
//   "apple",
//   "banana",
//   "orange"
// ];

let audioChunks = [];



// ========================================
// BOOLEAN VARIABLE
// ========================================

// Boolean means:
// true OR false
//
// Used literally everywhere.
//
// Example:
//
// isLoggedIn
// isDarkMode
// isAdmin
// isRecording

let isRecording = false;



// ========================================
// RECORDINGS ARRAY
// ========================================

// We store ALL recording objects here.
//
// Later each recording will look like:
//
// {
//    id: 123,
//    audioBlob: ...,
//    audioURL: "...",
//    transcript: "hello"
// }

let recordings = [];



// ========================================
// TIMER SECONDS
// ========================================

// Stores total seconds recorded.
//
// Example:
//
// 0
// 1
// 2
// 3

let seconds = 0;



// ========================================
// TIMER INTERVAL
// ========================================

// setInterval() returns an ID.
//
// We save that ID here.
//
// Later:
//
// clearInterval(timerInterval)
//
// stops timer.
//
// VERY IMPORTANT:
//
// Many beginners forget this.
//
// If you don't clear intervals,
// they keep running forever.

let timerInterval;



// ========================================
// EVENT LISTENER
// ========================================

// Event listener waits for something.
//
// Examples:
//
// click
// keyboard press
// mouse move
// form submit
// touch
// scroll
//
// Frontend development is VERY event-driven.
//
// User does something → JS reacts.



recordBtn.addEventListener(
    "click",
    toggleRecording
);

// Read this slowly.
//
// addEventListener(
//      "click",
//      toggleRecording
// )
//
// Means:
//
// "When user clicks button,
// run toggleRecording function"
//
// IMPORTANT:
//
// We pass function REFERENCE.
//
// NOT:
//
// toggleRecording()
//
// If you add () here,
// function runs immediately.
//
// HUGE beginner mistake.



// ========================================
// TOGGLE RECORDING
// ========================================

// async keyword means:
//
// This function may wait for async operations.
//
// Example async things:
//
// - API calls
// - microphone access
// - fetch
// - database
// - file reading
//
// JavaScript is asynchronous.
//
// VERY IMPORTANT CONCEPT.
//
// JS does not like blocking app.
//
// It keeps app responsive.

async function toggleRecording() {

    // ! means NOT
    //
    // !true  => false
    // !false => true

    if (!isRecording) {

        // if NOT recording
        // then start recording

        startRecording();

    } else {

        // otherwise stop recording

        stopRecording();
    }
}



// ========================================
// START RECORDING
// ========================================

// Main recording logic starts here.

async function startRecording() {

    // try/catch handles errors.
    //
    // Example errors:
    //
    // - microphone denied
    // - browser unsupported
    // - permission blocked

    try {

        // =================================
        // GET MICROPHONE ACCESS
        // =================================

        // navigator
        // is browser object.
        //
        // navigator.mediaDevices
        // gives access to devices.

        // getUserMedia()
        // asks permission for:
        //
        // camera
        // microphone

        // { audio: true }
        // means:
        //
        // we only want microphone.

        // await means:
        //
        // "pause here until finished"

        const stream =
            await navigator.mediaDevices
                .getUserMedia({
                    audio: true
                });

        // stream contains live microphone data.
        //
        // Think:
        //
        // stream = flowing audio pipe



        // =================================
        // CREATE MEDIA RECORDER
        // =================================

        // new keyword creates object instance.
        //
        // VERY IMPORTANT.
        //
        // This is OOP.
        //
        // Object-Oriented Programming.
        //
        // MediaRecorder is a CLASS internally.
        //
        // We create instance using new.

        mediaRecorder =
            new MediaRecorder(stream);

        // mediaRecorder is now an object.
        //
        // It contains:
        //
        // methods:
        // - start()
        // - stop()
        //
        // properties:
        // - state
        //
        // events:
        // - onstop
        // - ondataavailable



        // =================================
        // RESET OLD AUDIO
        // =================================

        // Before new recording,
        // clear old chunks.

        audioChunks = [];



        // =================================
        // AUDIO DATA EVENT
        // =================================

        // This event fires repeatedly.
        //
        // Browser keeps giving audio chunks.

        mediaRecorder.ondataavailable =
            (event) => {

                // Arrow function.
                //
                // Modern JS syntax.
                //
                // Alternative:
                //
                // function(event) {}



                // event object contains data.
                //
                // Event objects are SUPER important.
                //
                // click events
                // keyboard events
                // submit events
                // audio events
                //
                // all provide event object.



                // size check avoids empty data.

                if (event.data.size > 0) {

                    // push() adds item to array.

                    audioChunks.push(
                        event.data
                    );

                    console.log(
                        "Audio chunk added"
                    );
                }
            };



        // =================================
        // STOP EVENT
        // =================================

        // When recording stops,
        // this function runs.

        mediaRecorder.onstop =
            async () => {

                // =================================
                // CREATE BLOB
                // =================================

                // Blob means:
                //
                // Binary Large Object
                //
                // Used for:
                // audio
                // video
                // images
                // files

                // We combine all chunks together.

                const audioBlob =
                    new Blob(
                        audioChunks,
                        {
                            type: "audio/webm"
                        }
                    );

                // Blob is actual audio file now.



                // =================================
                // CREATE URL
                // =================================

                // Browser creates temporary URL
                // for blob.
                //
                // So audio player can play it.

                const audioURL =
                    URL.createObjectURL(
                        audioBlob
                    );



                // =================================
                // CREATE RECORDING OBJECT
                // =================================

                // Objects are EVERYTHING in JS.
                //
                // Almost everything is object.
                //
                // arrays
                // functions
                // DOM elements
                // events
                //
                // all objects.

                const recording = {

                    // unique ID

                    id: Date.now(),

                    // actual audio file

                    audioBlob,

                    // playable URL

                    audioURL,

                    // transcript initially empty

                    transcript: ""
                };



                // =================================
                // SAVE RECORDING
                // =================================

                // unshift()
                // adds at beginning of array.
                //
                // push()
                // adds at end.

                recordings.unshift(
                    recording
                );



                // =================================
                // UPDATE UI
                // =================================

                displayRecordings();



                // =================================
                // TRANSCRIBE AUDIO
                // =================================

                // Later this function
                // will send audio to Gemini AI.

                await transcribeAudio(
                    recording
                );
            };



        // =================================
        // START RECORDER
        // =================================

        // start(1000)
        //
        // give chunk every 1000ms

        mediaRecorder.start(1000);



        // =================================
        // UPDATE RECORDING STATE
        // =================================

        isRecording = true;



        // =================================
        // UPDATE BUTTON TEXT
        // =================================

        // innerText changes text.

        recordBtn.innerText =
            "Stop Recording";



        // =================================
        // UPDATE STATUS
        // =================================

        statusText.innerText =
            "🔴 Recording...";



        // =================================
        // RESET TIMER
        // =================================

        seconds = 0;



        // =================================
        // START TIMER
        // =================================

        // setInterval runs forever
        // every X milliseconds
        // until stopped.

        timerInterval =
            setInterval(() => {

                seconds++;

                // convert seconds to minutes

                let mins =
                    Math.floor(
                        seconds / 60
                    );

                // remainder

                let secs =
                    seconds % 60;



                // String()
                // converts to string.

                // padStart(2, "0")
                //
                // Example:
                //
                // 1 => 01

                timer.innerText =
                    `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

            }, 1000);

    } catch (error) {

        // error object contains details.

        console.log(error);

        alert(
            "Microphone access denied"
        );
    }
}



// ========================================
// STOP RECORDING
// ========================================

function stopRecording() {

    // stop media recorder

    mediaRecorder.stop();



    // stop timer loop

    clearInterval(timerInterval);



    // reset UI timer

    timer.innerText = "00:00";



    // update boolean

    isRecording = false;



    // update button text

    recordBtn.innerText =
        "Start Recording";



    // update status

    statusText.innerText =
        "Processing audio...";
}



// ========================================
// DISPLAY RECORDINGS
// ========================================

// This function updates HTML dynamically.
//
// Dynamic UI rendering is HUGE.
//
// React basically automates this idea.

function displayRecordings() {

    // clear old HTML first.
    //
    // Otherwise duplicates appear.

    recordingsContainer.innerHTML = "";



    // forEach loop runs for every item.

    recordings.forEach((recording) => {

        // create div element

        const div =
            document.createElement("div");



        // add CSS class

        div.classList.add(
            "recording-item"
        );



        // innerHTML inserts HTML.

        // Template literals use backticks ``

        // ${}
        // inserts JS values inside HTML.

        div.innerHTML = `

            <audio controls
                   src="${recording.audioURL}">
            </audio>

            <div class="transcript">

                ${
                    recording.transcript
                    || "Transcribing..."
                }

            </div>

        `;

        // || means OR.
        //
        // If transcript empty,
        // show "Transcribing..."



        // append element to page

        recordingsContainer.appendChild(
            div
        );
    });
}