let thresholdValue;



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var navigation = document.getElementById("navigation");
            navigation.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        } else {
            var navigation = document.getElementById("navigation");
            navigation.style.backgroundColor = "black";
        }
    });
}, {
    threshold: thresholdValue // 0 means even 1px visible will trigger it
});

const target = document.getElementById("header");
observer.observe(target);

/*const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var navigation = document.getElementById("tower-nav");
            navigation.classList.add("active");
            console.log("Hello");
        } else {
            var navigation = document.getElementById("tower-nav");
            navigation.classList.remove("active");
        }
    });
}, {
    threshold: thresholdValue // 0 means even 1px visible will trigger it
});

const target2 = document.getElementById("towers");
observer2.observe(target2);

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var navigation = document.getElementById("virus-nav");
            navigation.classList.add("active");
        } else {
            var navigation = document.getElementById("virus-nav");
            navigation.classList.remove("active");
        }
    });
}, {
    threshold: thresholdValue
    // 0 means even 1px visible will trigger it
});

const target3 = document.getElementById("viruses");
observer3.observe(target3);

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var navigation = document.getElementById("control-nav");
            navigation.classList.add("active");
        } else {
            var navigation = document.getElementById("control-nav");
            navigation.classList.remove("active");
        }
    });
}, {
    threshold: thresholdValue // 0 means even 1px visible will trigger it
});

const target4 = document.getElementById("controls");
observer4.observe(target4); */

let observer2, observer3, observer4;
const target2 = document.getElementById("towers");
const target3 = document.getElementById("viruses");
const target4 = document.getElementById("controls");

function displayHamMenu() {
    if (window.innerWidth < 500) {
        var hamburgerMenu = document.getElementById("navigation2");
        var normalNav = document.getElementById("navigation");
        normalNav.style.display = "none";
        hamburgerMenu.style.display = "inline";
    }
    else {
        var hamburgerMenu = document.getElementById("navigation2");
        var normalNav = document.getElementById("navigation");
        normalNav.style.display = "flex";
        hamburgerMenu.style.display = "none";
    }
}

function createAllObservers() {

    if (window.innerWidth < 768) {
        thresholdValue = 0.2; // smaller screens = trigger sooner
    } else {
        thresholdValue = 0.25; // bigger screens = trigger later
    }

    // Disconnect existing observers
    if (observer2) observer2.disconnect();
    if (observer3) observer3.disconnect();
    if (observer4) observer4.disconnect();

    // Observer for tower section
    observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const nav = document.getElementById("tower-nav");
            if (entry.isIntersecting) {
                nav.classList.add("active");
                console.log("Hello");
            } else {
                nav.classList.remove("active");
            }
        });
    }, { threshold: thresholdValue });
    if (target2) observer2.observe(target2);

    // Observer for virus section
    observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const nav = document.getElementById("virus-nav");
            if (entry.isIntersecting) {
                nav.classList.add("active");
            } else {
                nav.classList.remove("active");
            }
        });
    }, { threshold: thresholdValue });
    if (target3) observer3.observe(target3);

    // Observer for control section
    observer4 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const nav = document.getElementById("control-nav");
            if (entry.isIntersecting) {
                nav.classList.add("active");
            } else {
                nav.classList.remove("active");
            }
        });
    }, { threshold: thresholdValue });
    if (target4) observer4.observe(target4);
}

// Create observers on page load
createAllObservers();
displayHamMenu();

function start() {
    createAllObservers();
    displayHamMenu();
}


// Re-create observers on window resize
window.addEventListener("resize", createAllObservers);
window.addEventListener("resize", displayHamMenu); 
