// Get the current root URL
const currentRootUrl = window.location.origin;
let rootUrl = '';

// Check if the current URL is localhost or 127.0.0.1
if (currentRootUrl.includes('localhost') || currentRootUrl.includes('127.0.0.1')) {
    rootUrl = currentRootUrl;  // For local development
} else {
    rootUrl = currentRootUrl + "/";
}

// Functions for button click handling
function onHomeButtonClick() {
    window.location.href = rootUrl + '/index.html';
}

function onPostGeneratorButtonClick() {
    window.location.href = rootUrl + '/post-generator.html';
}

function onLearnMoreButtonClick() {
    window.location.href = rootUrl + '/learn-more.html';
}

function onResourcesButtonClick() {
    window.location.href = rootUrl + '/resources.html';
}

function onAboutButtonClick() {
    window.location.href = rootUrl + '/about.html';
}

// Ensure DOM is loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const postGeneratorBtn = document.getElementById('post-generator-btn');
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const resourcesBtn = document.getElementById('resources-btn');
    const aboutBtn = document.getElementById('about-btn');

    // Attach click events to each button (if the button exists)
    if (homeBtn) homeBtn.addEventListener('click', onHomeButtonClick);
    if (postGeneratorBtn) postGeneratorBtn.addEventListener('click', onPostGeneratorButtonClick);
    if (learnMoreBtn) learnMoreBtn.addEventListener('click', onLearnMoreButtonClick);
    if (resourcesBtn) resourcesBtn.addEventListener('click', onResourcesButtonClick);
    if (aboutBtn) aboutBtn.addEventListener('click', onAboutButtonClick);
});
