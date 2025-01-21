document.addEventListener('DOMContentLoaded', function () {
    // Instagram - Toggle Description
    const expandDescriptionLink = document.getElementById('expand-description');
    const descriptionText = document.getElementById('post-text');

    // Check if expandDescriptionLink and descriptionText exist
    if (expandDescriptionLink && descriptionText) {
        expandDescriptionLink.addEventListener('click', function() {
            // Toggle the class to expand or collapse the text
            descriptionText.classList.toggle('expanded');

            // Change the link text based on the expanded state
            if (descriptionText.classList.contains('expanded')) {
                expandDescriptionLink.textContent = '...less';
            } else {
                expandDescriptionLink.textContent = '...more';
            }
        });
    }

    // Retrieve the post data from localStorage (if available)
    const postText = localStorage.getItem('postText');
    const postImage = localStorage.getItem('postImage');

    // Check if post data exists in localStorage and apply to the previews
    if (postText && postImage) {
        // Instagram Preview
        if (descriptionText) {
            descriptionText.textContent = postText;
        }
        if (document.getElementById('post-image')) {
            document.getElementById('post-image').src = postImage;
        }

        // Facebook Preview
        const facebookContent = document.getElementById('facebook-text');
        const facebookImage = document.getElementById('facebook-image');
        if (facebookContent) {
            facebookContent.textContent = postText;
        }
        if (facebookImage) {
            facebookImage.src = postImage;
        }

        // X (Twitter) Preview
        const xContent = document.getElementById('x-text');
        const xImage = document.getElementById('x-image');
        if (xContent) {
            xContent.textContent = postText;
        }
        if (xImage) {
            xImage.src = postImage;
        }
    } else {
        console.error("No post data found in localStorage.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const goBackButton = document.getElementById('go-back');
    if (goBackButton) {
        goBackButton.addEventListener('click', function () {
            window.history.back();
        });
    }
    const copyPostTextButton = document.getElementById('copy-post-text');
    if (copyPostTextButton) {
        copyPostTextButton.addEventListener('click', function () {
            const postText = localStorage.getItem('postText');
            if (postText) {
                navigator.clipboard.writeText(postText).then(function () {
                    alert('Post text copied to clipboard!');
                }).catch(function (err) {
                    console.error('Failed to copy text: ', err);
                });
            } else {
                alert('No post content available to copy.');
            }
        });
    }
    const downloadImageButton = document.getElementById('download-post-image');
    if (downloadImageButton) {
        downloadImageButton.addEventListener('click', function () {
            const postImage = localStorage.getItem('postImage');
            if (postImage) {
                const link = document.createElement('a');
                link.href = postImage;
                link.download = 'generated-post-image.jpg';
                link.click();
            } else {
                alert('No post image available to download.');
            }
        });
    }
});