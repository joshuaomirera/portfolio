// I Marmik Gelani, 000884216 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 

const summary = document.getElementById('summary');
const education = document.getElementById('education');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const resume = document.getElementById('resume');
const contact = document.getElementById('contact');

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const link6 = document.getElementById('link6');

const close = document.getElementById('close');


link1.onclick = function() {
    scrollToElement(summary);
};
link2.onclick = function() {
    scrollToElement(education);
};
link3.onclick = function() {
    scrollToElement(skills);
};
link4.onclick = function() {
    scrollToElement(projects);
};
link5.onclick = function() {
    scrollToElement(resume);
};
link6.onclick = function() {
    scrollToElement(contact);
};

// Function to scroll to an element smoothly
function scrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');
const sentences = [
"I am a passionate software developer with experience in various programming languages and frameworks.",
"I enjoy problem-solving and have a strong interest in continuous learning.",
"I have worked on projects ranging from web development to machine learning.",
"I am proficient in Java, Python, JavaScript, and other programming languages.",
"I strive to create efficient and scalable solutions to complex problems.",
"I am dedicated to staying updated with the latest technologies and trends in the industry."
// Add more relevant sentences here
];

let sentenceIndex = 0;
let letterIndex = 0;

function typeSentence() {
if (letterIndex < sentences[sentenceIndex].length) {
typingText.textContent += sentences[sentenceIndex].charAt(letterIndex);
letterIndex++;
setTimeout(typeSentence, 50); // Adjust typing speed here (milliseconds)
} else {
setTimeout(eraseSentence, 1500); // Adjust delay before erasing (milliseconds)
}
}

function eraseSentence() {
if (letterIndex >= 0) {
typingText.textContent = typingText.textContent.substring(0, letterIndex);
letterIndex--;
setTimeout(eraseSentence, 0); // Instant erasure
} else {
sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to the next sentence
setTimeout(typeSentence, 500); // Adjust delay before typing next sentence (milliseconds)
}
}

function blinkCursor() {
cursor.style.visibility = cursor.style.visibility === 'visible' ? 'hidden' : 'visible';
setTimeout(blinkCursor, 500); // Adjust blinking speed here (milliseconds)
}

// Start typing the first sentence
typeSentence();
// Start blinking cursor
blinkCursor();


close.onclick = function() {
const box = document.getElementById('alert-box');
box.style.display = 'none';
};

window.addEventListener('DOMContentLoaded', () => {
    const gifContainer = document.querySelector('.gif');
    gifContainer.style.backgroundImage = "url('/gifs/gif.gif')";
});