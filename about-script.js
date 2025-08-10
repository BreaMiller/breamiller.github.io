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
        description: "AI Ready-to-Wear",
        slug: "pneuma-collection", // Ensure slug matches project-data.js
        color: "green",
        image: "https://i.imgur.com/ErEqAbd.png"
    },
    {
        name: "Love Birds", 
        description: "AI Decor",
        slug: "love-birds", // Ensure slug matches project-data.js
        color: "blue",
        image: "https://i.imgur.com/uWiCWju.jpeg"
    },
    {
        name: "The Art of Attraction",
        description: "AI Couture", 
        slug: "attraction", // Ensure slug matches project-data.js
        color: "purple",
        image: "https://i.imgur.com/GxTG4gk.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        name: "Buku TV",
        description: "Where to Watch",
        slug: "buku-tv", // Ensure slug matches project-data.js
        color: "teal",
        image: "https://i.imgur.com/W9YVpm6.gif?auto=compress&cs=tinysrgb&w=800"
    },
    {
        name: "Knack",
        description: "Kids Reading App",
        slug: "knack", // Ensure slug matches project-data.js
        color: "pink",
        image: "https://i.imgur.com/fGq1EDQ.png?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "GeneProof",
        description: "Health Tracking App",
        slug: "geneproof", // Ensure slug matches project-data.js
        color: "gray",
        image: "https://i.imgur.com/GyRDHxC.gif?auto=compress&cs=tinysrgb&w=800"
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

// Function to navigate to project page
function navigateToProject(projectSlug) {
    window.location.href = `project.html?project=${projectSlug}`; // Ensure .html is included if needed
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
        timeZone: 'America/Chicago'
    });
    
    const timeElement = document.querySelector('.location-time');
    if (timeElement) {
        timeElement.textContent = `${timeString} CST • Local time`;
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
        window.location.href = 'index';
    }
});

// Skills button functionality
document.querySelector('.btn-primary')?.addEventListener('click', function() {
    // Open skills list in new tab or download
    window.location.href = 'https://grave-ozraraptor-fa8.notion.site/Brea-Miller-24a81d719ffb80ceacd7f69ea926b8b4';
});

// Military Service button functionality
document.querySelector('.btn-secondary')?.addEventListener('click', function() {
    // Open military service in new tab or download
    window.location.href = 'https://grave-ozraraptor-fa8.notion.site/Brea-Miller-24a81d719ffb803fa29cd1d221d7750e?pvs=74';
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
        const pageName = window.location.pathname.split('/').pop() || 'about';
        const storageKey = `pageViews_${pageName}`;
        
        // Get current view count from localStorage
        let viewCount = parseInt(localStorage.getItem(storageKey) || '0');
        
        // Increment view count
        viewCount++;
        
        // Save updated count
        localStorage.setItem(storageKey, viewCount.toString());
        
        // Display count with animation
        viewCountElement.textContent
