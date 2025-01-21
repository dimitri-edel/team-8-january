
// Function to post on Twitter
function postOnTwitter() {
  const image = document.getElementById('post-image').src;
  const text = document.getElementById('post-text').value;
  const headline = document.getElementById('post-title').textContent;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(headline + " " + text)}&url=${encodeURIComponent(image)}`;
  window.open(twitterUrl, '_blank');
}
// Function to post on Facebook (simplified)
function postOnFacebook() {    
  const image = document.getElementById('post-image').src;
  const text = document.getElementById('post-text').value;
  const headline = document.getElementById('post-title').textContent;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}&quote=${encodeURIComponent(text)}&title=${encodeURIComponent(headline)}`;
  window.open(facebookUrl, '_blank'); 
}

// Function to post on LinkedIn (simplified)
function postOnLinkedIn() {
  const image = document.getElementById('post-image').src;
  const text = document.getElementById('post-text').value;
  const headline = document.getElementById('post-title').textContent;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(image)}&title=${encodeURIComponent(headline)}&text=${encodeURIComponent(text)}`;
window.open(linkedinUrl, '_blank');
  window.open(linkedinUrl, '_blank');
}