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
document.querySelectorAll('.project-card, .stat-card, .media-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for statistics
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const minTimer = 50;
    // For large numbers, use bigger increments to speed up animation
    const increment = range > 10000 ? Math.ceil(range / 100) : 1;
    const stepTime = Math.abs(Math.floor(duration / (range / increment)));
    const timer = stepTime < minTimer ? minTimer : stepTime;
    
    let current = start;
    const step = end > start ? increment : -increment;
    
    const counter = setInterval(() => {
        current += step;
        
        // Ensure we don't overshoot the target
        if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
            current = end;
        }
        
        // Format numbers with appropriate suffixes
        let displayValue = current;
        if (current >= 1000000) {
            displayValue = (current / 1000000).toFixed(1) + 'M+';
        } else if (current >= 1000) {
            displayValue = (current / 1000).toFixed(0) + 'K+';
        } else if (current >= 100) {
            displayValue = current + '+';
        } else {
            displayValue = current;
        }
        
        // Handle percentage values
        if (element.textContent.includes('%')) {
            displayValue = current + '%';
        }
        
        // Handle 24/7 format
        if (element.textContent.includes('/')) {
            displayValue = current + '/7';
        }
        
        element.textContent = displayValue;
        
        if (current === end) {
            clearInterval(counter);
        }
    }, timer);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            
            stats.forEach(stat => {
                const originalText = stat.textContent;
                        
                        // Skip animation for 24/7 - keep it static
                        if (originalText.includes('24/7')) {
                            // Keep the original 24/7 text, no animation
                            return;
                        }
                        
                        let finalValue;
                        
                        // Parse different number formats
                        if (originalText.includes('M+')) {
                            finalValue = parseFloat(originalText.replace('M+', '')) * 1000000;
                        } else if (originalText.includes('K+')) {
                            finalValue = parseInt(originalText.replace('K+', '')) * 1000;
                        } else if (originalText.includes('+')) {
                            finalValue = parseInt(originalText.replace('+', ''));
                        } else if (originalText.includes('%')) {
                            finalValue = parseFloat(originalText.replace('%', ''));
                        } else if (originalText.includes('/')) {
                            finalValue = 24; // For 24/7
                        } else {
                            finalValue = parseInt(originalText.replace(/[^0-9]/g, ''));
                        }
                        
                        stat.textContent = '0';
                        
                        setTimeout(() => {
                            animateCounter(stat, 0, finalValue, 2000);
                        }, 100);
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats sections
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats');
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Video play button functionality
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function() {
        // Simulate video play
        this.style.opacity = '0';
        setTimeout(() => {
            this.innerHTML = '⏸';
            this.style.opacity = '1';
        }, 300);
        
        // Reset after 3 seconds
        setTimeout(() => {
            this.innerHTML = '▶';
        }, 3000);
    });
});

// Image lazy loading with fade effect
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                const newImg = new Image();
                newImg.onload = function() {
                    img.style.opacity = '1';
                };
                newImg.src = img.src;
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Smooth reveal animations for sections
const revealElements = document.querySelectorAll('.hero-container, .media-card, .about-content, .contact-content');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', function() {
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(el);
    });
});

// Hero button interaction
document.querySelector('.hero-button')?.addEventListener('click', function() {
    window.location.href = 'about.html';
});

// Back Home button interaction
document.querySelector('.back-home-button')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Navigation function for project cards
function navigateToProject(projectName) {
    // Handle special cases for dedicated pages
    if (projectName === 'imagine' || projectName === 'imagine...') {
        window.location.href = 'imagine.html';
    } else {
        // Create a simple project page URL
        window.location.href = `project.html?project=${projectName}`;
    }
}

// Add click handlers to existing cards
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to cards that don't already have onclick
    const cards = document.querySelectorAll('.bento-item:not([onclick])');
    cards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const title = this.querySelector('.project-title')?.textContent || `project-${index}`;
            navigateToProject(title.toLowerCase().replace(/\s+/g, '-'));
        });
    });
});
// Platform button hover effects
document.querySelectorAll('.platform-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic background gradient for coming soon card
document.addEventListener('DOMContentLoaded', function() {
    const gradientBg = document.querySelector('.gradient-bg');
    if (gradientBg) {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            gradientBg.style.background = `linear-gradient(135deg, 
                hsl(${hue}, 70%, 60%) 0%, 
                hsl(${(hue + 60) % 360}, 70%, 60%) 50%, 
                hsl(${(hue + 120) % 360}, 70%, 60%) 100%)`;
        }, 100);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 100);
    } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -100);
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
}, 100));

// Page View Counter
document.addEventListener('DOMContentLoaded', function() {
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        // Get current page name
        const pageName = window.location.pathname.split('/').pop() || 'index.html';
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