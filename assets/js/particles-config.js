particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // White particles
        },
        shape: {
            type: "circle" // Circular shape for particles
        },
        opacity: {
            value: 0.6,  // Increased opacity to make particles more visible
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
                sync: false
            }
        },
        size: {
            value: 5,  // Size of particles
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff", // White links between particles
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // Repulse effect on hover
            },
            onclick: {
                enable: true,
                mode: "push" // Push particles on click
            }
        }
    },
    retina_detect: true
});