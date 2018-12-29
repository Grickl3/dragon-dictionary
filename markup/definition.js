


function definition(a) {
	a.innerHTML = "<h1>Definition Page</h1>" +
	"<p>On landing the user will be greeted by a randomly summoned definition from the initial set of verbs. That definition will appear here. For the sake of this prototype, I am not taking the time to code out the entire definition view, at least at this time. It is shown in the UI sketches.</p>" +
	"<p>Note: Concerning the shapes of things, the handle on the drawer, the circle around the 'Home' button, the elipsises at the terminals of the footer elements, etc. are all stand-ins for custom graphical assets. circles and rectangles are the simplest to write in code, and so those are the graphical assets which are being used.</p>" +
	"<p>In this view the circles of the footer would contain an upper and lower case letter for each letter of the alphabet. The elipsises represent left/right scroll controls.</p>";
};

function setVerbs() {
	definition(mainPanel);
};

function setActivies() {
	mainPanel.innerHTML = "<h1>Activities</h1>" +
	"<p>Here we would show a module specially designed to teach activity related terms.</p>" +
	"<p>In this view the circles of the footer would be thumbnail images of activities.</p>";
}

function setExpressions() {
	mainPanel.innerHTML = "<h1>Expressions</h1>" +
	"<p>Here we would show a module specially designed to teach expressions.</p>" +
	"<p>In this view the circles of the footer would be cartoon faces representing different expressions.</p>";
}

function setExplore() {
	mainPanel.innerHTML = "<h1>Explore</h1>" +
	"<p>This module will be a deeply nested pictographic environment for exploring geographic terms and other nouns.</p>" +
	"<p>In this view the circles of the footer would be thumbnail images of key environs that can be jumped to.</p>";
}