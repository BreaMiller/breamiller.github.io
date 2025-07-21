// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.profile-card, .hello-section, .location-card, .visual-container, .project-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Dynamic project data - pulled from home page cards
const projectsData = [
    {
        name: "Pneuma Collection",
        description: "AI Ready to Wear",
        slug: "pneuma",
        color: "green",
        image: "https://i.imgur.com/ErEqAbd.png"
    },
    {
        name: "Love Birds", 
        description: "AI Decor",
        slug: "lov-birds",
        color: "blue",
        image: "https://i.imgur.com/uWiCWju.jpeg"
    },
    {
        name: "Iridescence",
        description: "AI Couture", 
        slug: "iridescence",
        color: "purple",
        image: "https://i.imgur.com/GxTG4gk.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        name: "Motion Graphics",
        description: "AI video generation",
        slug: "motion-graphics", 
        color: "pink",
        image: "https://images.pexels.com/photos/8566441/pexels-photo-8566441.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        name: "Imagine...",
        description: "Creative AI experiments",
        slug: "imagine",
        color: "teal",
        image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Abstract Visions",
        description: "Digital art exploration",
        slug: "abstract-visions",
        color: "gray",
        image: "https://images.pexels.com/photos/8566485/pexels-photo-8566485.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

// Function to create project item HTML
function createProjectItem(project) {
    const projectItem = document.createElement('div');
    projectItem.className = 'about-project-item';
    projectItem.style.cursor = 'pointer';
    
    projectItem.innerHTML = `
        <div class="project-icon">
            <img src="${project.image}" alt="${project.name}" class="project-thumbnail" />
        </div>
        <div class="project-info">
            <h4 class="project-name">${project.name}</h4>
            <p class="project-desc">${project.description}</p>
        </div>
    `;
    
    // Add click handler
    projectItem.addEventListener('click', function() {
        navigateToProject(project.slug);
    });
    
    return projectItem;
}

// Function to load projects dynamically
function loadLatestProjects() {
    const projectList = document.querySelector('.about-project-list');
    
    if (projectList) {
        // Clear existing content
        projectList.innerHTML = '';
        
        // Add each project
        projectsData.forEach(project => {
            const projectItem = createProjectItem(project);
            projectList.appendChild(projectItem);
        });
        
        console.log(`Loaded ${projectsData.length} projects dynamically`);
    }
}

// Navigation function for projects
function navigateToProject(projectSlug) {
    // Handle special cases for dedicated pages
    if (projectSlug === 'iamgine' || projectSlug === 'imagine...') {
        window.location.href = 'imagine.html';
    } else {
        // Create a simple project page URL
        window.location.href = `project.html?project=${projectSlug}`;
    }
}

// Enhanced hover effects for project items
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Social links hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
});

// Button interactions
document.querySelectorAll('.btn-primary, .btn-secondary, .watch-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0) scale(0.98)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
});

// Floating shapes animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            shape.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 500);
    });
});

// Dynamic time update
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Los_Angeles'
    });
    
    const timeElement = document.querySelector('.location-time');
    if (timeElement) {
        timeElement.textContent = `${timeString} GMT-8 • Local time`;
    }
}

// Update time every minute
updateTime();
setInterval(updateTime, 60000);

// Parallax effect for center section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index % 3) * 0.05;
        const yPos = -(scrolled * speed);
        shape.style.transform += ` translateY(${yPos}px)`;
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any modals or return to main page
        window.location.href = 'index.html';
    }
});

// Contact button functionality
document.querySelector('.btn-primary')?.addEventListener('click', function() {
    // Scroll to contact section or open contact modal
    window.location.href = 'index.html#contact';
});

// Resume button functionality
document.querySelector('.btn-secondary')?.addEventListener('click', function() {
    // Open resume in new tab or download
    window.open('#', '_blank');
});

// Watch button functionality
document.querySelector('.watch-btn')?.addEventListener('click', function() {
    // Play video or open tutorial
    console.log('Opening AI tutorial...');
});

// Project item click handlers
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        const projectName = this.querySelector('.project-name').textContent;
        console.log(`Opening project: ${projectName}`);
        // Navigate to project details or external link
    });
});

// Loading animation
window.addEventListener('load', function() {
    // Load projects dynamically
    loadLatestProjects();
    
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Add initial loading state
document.body.style.opacity = '0';
document.body.style.transform = 'translateY(20px)';
document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations here
}
)
)


// Page View Counter
document.addEventListener('DOMContentLoaded', function() {
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        // Get current page name
        const pageName = window.location.pathname.split('/').pop() || 'about.html';
        const storageKey = `pageViews_${pageName}`;
        
        // Get current view count from localStorage
        let viewCount = parseInt(localStorage.getItem(storageKey) || '0');
        
        // Increment view count
        viewCount++;
        
        // Save updated count
        localStorage.setItem(storageKey, viewCount.toString());
        
        // Display count with animation
        viewCountElement.textContent = '0';
        
        // Animate counter
        let currentCount = 0;
        const increment = Math.ceil(viewCount / 30);
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= viewCount) {
                currentCount = viewCount;
                clearInterval(timer);
            }
            viewCountElement.textContent = currentCount.toLocaleString();
        }, 50);
    }
});
// Vue.js Music Player
new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [
                {
                    name: "As It Was",
                    artist: "Harry Styles",
                    cover: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/18bc2436-740b-44c4-9dd8-fd7be51a07ad?auto=compress&cs=tinysrgb&w=400",
                    source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Harry-Styles-As-It-Was.mp3",
                    url: "https://www.youtube.com/watch?v=example3",
                    favorited: false
                },
                {
                    name: "Physical",
                    artist: "Dua Lipa",
                    cover: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4c5c1727-8b32-48c1-91de-b0496ccf10f6?auto=compress&cs=tinysrgb&w=400",
                    source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Dua-Lipa-Physical.mp3",
                    url: "https://www.youtube.com/watch?v=example3",
                    favorited: false
                },
                {
                    name: "Digital Art",
                    artist: "Future Vision",
                    cover: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400",
                    source: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    url: "https://www.youtube.com/watch?v=example3",
                    favorited: false
                }
            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if(this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function() {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function() {
            vm.generateTime();
        };
        this.audio.onended = function() {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // Preload covers
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});

// Mobile touch gestures
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - scroll down
            window.scrollBy(0, 200);
        } else {
            // Swipe down - scroll up
            window.scrollBy(0, -200);
        }
    }
}