document.addEventListener('DOMContentLoaded', function () {
    const posts = {
        "youth-focused": [
            {
                text: "Young people in the UK are especially vulnerable to trafficking and exploitation.\n📢 If something feels wrong, speak up. No one deserves to be trapped or exploited.\n💡 Find out how to protect yourself and your friends:\n🌐 AntiSlavery.org/resources\n📞 Helpline: 08000 121 700\nTogether, we can #StopTrafficking.",
                image: "assets/images/person-sitting-in-corner-with-head-down.jpg"

            },
            {
                text: "The strength of youth lies in their ability to challenge and change the status quo. #YouthLeadership #InspireChange",
                image: "assets/images/protest.jpg"
            },
            {
                text: "Youth have the power to drive social change. It's time to take action and lead! #SocialChange #YouthInAction",
                image: "assets/images/use-your-voice.jpg"
            },
            {
                text: "Empower youth to create positive social impact. They are the changemakers of tomorrow! #YouthEmpowerment #ChangeAgents",
                image: "assets/images/change.jpg"
            }
        ],
        "general-awareness": [
            {
                text: "Awareness is the first step toward change. Let's educate and act. #Awareness #TakeAction",
                image: "assets/images/presentation.jpg"
            },
            {
                text: "The more we know, the more we can fight against modern slavery. Knowledge is power. #EndSlavery #EducateToEmpower",
                image: "assets/images/human-rights-sign.jpg"
            },
            {
                text: "Awareness saves lives. Let's spread the message to end human trafficking! #StopTrafficking #PublicAwareness",
                image: "assets/images/hand-and-chain.jpg"
            },
            {
                text: "A world without trafficking begins with awareness. Let's educate ourselves and others. #AwarenessMatters #EndModernSlavery",
                image: "assets/images/boy-through-window.jpg"
            }
        ],
        "donation-appeals": [
            {
                text: "Your donation can change lives. Join us in the fight against modern slavery. #DonateNow #HelpSaveLives",
                image: "assets/images/donate-box.jpg"
            },
            {
                text: "Every dollar you donate can help us rescue victims of human trafficking. Give today! #DonateForFreedom #SaveLives",
                image: "assets/images/donations.jpg"
            },
            {
                text: "Together, we can end modern slavery. Your donation brings hope to those in need. #HopeForChange #DonateToEndSlavery",
                image: "assets/images/light-through-darkness.jpg"
            },
            {
                text: "Your generosity can help us provide critical support to victims of trafficking. Donate now! #SupportSurvivors #DonateToEndSlavery",
                image: "assets/images/am-i-next.jpg"
            }
        ],
        "awareness": [
            {
                text: "Every person deserves to live in freedom. Spread the word, make a difference. #Awareness #EndModernSlavery",
                image: "assets/images/hand-breaking-out-of-cuffs.jpg"
            },
            {
                text: "Join the fight against modern slavery. Awareness is the first step in ending human trafficking. #FightSlavery #BeTheChange",
                image: "assets/images/man-and-door-with-lock.jpg"
            },
            {
                text: "Spread the word, educate others. Together, we can end modern slavery. #Awareness #NoMoreSlavery",
                image: "assets/images/person-sitting-in-corner-with-head-down.jpg"
            },
            {
                text: "Awareness leads to action. Let's shine a light on modern slavery and stand against injustice. #EndSlavery #AwarenessCampaign",
                image: "assets/images/child-under-a-street-lamp.jpg"
            }
        ]
    };

    // Function to update the post content based on the selected category
    function updatePostContent(category) {
        const postList = posts[category];

        // Check if the post exists in our predefined posts object
        if (!postList) {
            console.error('No posts found for this category!');
            return;
        }

        // Randomly select a post from the list
        const randomPost = postList[Math.floor(Math.random() * postList.length)];

        // Update the title, text, and image in the preview area
        document.getElementById('post-title').textContent = category.replace("-", " ").toUpperCase() + " Post";
        document.getElementById('post-text').value = randomPost.text;
        document.getElementById('post-image').src = randomPost.image;
    }

    // Set initial content to "youth-focused"
    updatePostContent("youth-focused");

    // Handle the tab button clicks
    const tabButtons = document.querySelectorAll('.nav-link');
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = button.id.replace('-btn', '');  // Extract category from button ID

            // Hide all content and remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update the content preview based on the selected category
            updatePostContent(category);
        });
    });

    // Handle "Copy Post Text" button click
    document.getElementById('copy-text').addEventListener('click', function () {
        const postText = document.getElementById('post-text').value;
        if (postText && postText !== "Your post content will appear here.") {
            navigator.clipboard.writeText(postText).then(function () {
                alert("Post text copied to clipboard!");
            }).catch(function (err) {
                console.error("Failed to copy text: ", err);
            });
        } else {
            alert("No post content available. Please select a category to generate content.");
        }
    });

    // Handle "Download Post Image" button click
    document.getElementById('download-image').addEventListener('click', function () {
        const postImage = document.getElementById('post-image');
        if (postImage.src && postImage.src !== "") {
            const link = document.createElement('a');
            link.href = postImage.src;
            link.download = 'generated-post.jpg';
            link.click();
        } else {
            alert("No post image available.");
        }
    });

    // Handle "Preview Your Post" button click
    document.getElementById('preview-post').addEventListener('click', function () {

        const postText = document.getElementById('post-text').value;
        const postImage = document.getElementById('post-image').src;

        localStorage.setItem('postText', postText);
        localStorage.setItem('postImage', postImage);

        // Redirect to post-preview.html
        window.location.href = 'post-preview.html';
    });
});

function toggleMenu() {
    const menu = document.getElementById('shareMenu');
    menu.classList.toggle('show');
}

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

    console.log("image URL: ", image);
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(image)}&title=${encodeURIComponent(headline)}&text=${encodeURIComponent(text)}`;
    window.open(linkedinUrl, '_blank');
}
