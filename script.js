/**
 * DONE: Create a keydown listener to track what keys are hit
 * DONE: Create a Beat class to represent the beat object in utils.js
 * DONE: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * DONE: Button pt1: Initialize color and element values
 * DONE: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * DONE: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * DONE: Button pt4: Call the select() function upon key press ;)
 * DONE: Button pt5: Add transition for button selection
 * DONE: Button pt6: Remove the button style upon transition end | Use deselect function
 * DONE: Complete all button instances with the following colors
 * DONE: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
	a: {
		beat: new Beat("./assets/Piano Chord 331.mp3"),
		button: new Button("#00fffe", "a"),
	},
	s: {
		beat: new Beat("./assets/Piano Chord 209.mp3"),
		button: new Button("#00fffe", "s"),
	},
	d: {
		beat: new Beat("./assets/Piano Chord 208.mp3"),
		button: new Button("#00fffe", "d"),
	},
	f: {
		beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
		button: new Button("#FF00FF", "f"),
	},
	g: {
		beat: new Beat("./assets/Drum Snare Roll.mp3"),
		button: new Button("#FF00FF", "g"),
	},
	h: {
		beat: new Beat("./assets/PREL Musical 57.mp3"),
		button: new Button("#FF00FF", "h"),
	},
	j: {
		beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
		button: new Button("#FF00FF", "j"),
	},
	k: {
		beat: new Beat("./assets/Musical Compos 33.mp3"),
		button: new Button("#FFFFFF", "k"),
	},
	l: {
		beat: new Beat("./assets/Musical Orches 4.mp3"),
		button: new Button("#FFFFFF", "l"),
	},
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
function triggerBeat(event) {
    const key = event.type === "click" ? event.target.id : event.key.toLowerCase();
	if (key in beats) {
		beats[key].beat.play();
		beats[key].button.select();
	}
}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
document.addEventListener("keydown", triggerBeat);

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", triggerBeat);
});
