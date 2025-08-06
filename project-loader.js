// project-loader.js - Dynamic project content loader
class ProjectLoader {
    constructor() {
        this.loadingState = document.getElementById('loading-state');
        this.errorState = document.getElementById('error-state');
        this.projectContent = document.getElementById('project-content');
        this.init();
    }

    init() {
        // Get project slug from URL
        const urlParams = new URLSearchParams(window.location.search);
        const projectSlug = urlParams.get('project');
        
        if (!projectSlug) {
            this.showError();
            return;
        }

        // Load project data
        this.loadProject(projectSlug);
    }

    loadProject(slug) {
        // Simulate loading delay for better UX
        setTimeout(() => {
            const projectData = window.projectsData[slug];
            
            if (!projectData) {
                this.showError();
                return;
            }

            this.renderProject(projectData);
            this.hideLoading();
        }, 500);
    }

        renderProject(data) {
        // Update page title
        const pageTitleElement = document.getElementById('page-title');
    if (pageTitleElement) {
        pageTitleElement.textContent = `${data.title} - Brea Miller`;
    }
    document.title = `${data.title} - Brea Miller`;
        
        // Update hero section
 const projectLabelElement = document.getElementById('project-label');
    if (projectLabelElement) {
        projectLabelElement.textContent = data.label;
    }

    const projectTitleElement = document.getElementById('project-title');
    if (projectTitleElement) {
        projectTitleElement.textContent = data.title;
    }

    const projectDescriptionElement = document.getElementById('project-description');
    if (projectDescriptionElement) {
        projectDescriptionElement.innerHTML = `<span class="accent-text">✐ᝰ</span> ${data.description}`;
    }

    const heroImageElement = document.getElementById('hero-image');
    if (heroImageElement) {
        heroImageElement.src = data.heroImage;
        heroImageElement.alt = data.title;
    }
        
        // Update overview
        const projectOverviewElement = document.getElementById('project-overview');
    if (projectOverviewElement) {
        projectOverviewElement.textContent = data.overview;
    }
          
        // Render dynamic sections
  this.renderSections(data.sections);
    this.setupLightboxListeners();
    }

    renderSections(sections) {
        const container = document.getElementById('dynamic-sections');
        container.innerHTML = '';

        sections.forEach((section, index) => {
            if (section.type === 'single') {
                container.appendChild(this.createSingleSection(section));
            } else if (section.type === 'double') {
                container.appendChild(this.createDoubleSection(section));
            }
        });
 }

  // Inside ProjectLoader class, e.g., after renderSections(data.sections);
// Or create a new method like this.setupLightboxListeners(); and call it.
setupLightboxListeners() {
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');

    // Event listener for opening the lightbox
    document.addEventListener('click', (event) => {
        // Check if the clicked element is an image within an imagine-card
        if (event.target.classList.contains('project-media-element') && event.target.closest('.imagine-card')) {
            const imageUrl = event.target.src;
            if (imageUrl) {
                lightboxImage.src = imageUrl;
                lightboxOverlay.classList.add('active');
            }
        }
    });

    // Event listener for closing the lightbox via close button
    lightboxClose.addEventListener('click', () => {
        lightboxOverlay.classList.remove('active');
    });

    // Event listener for closing the lightbox by clicking outside the image
    lightboxOverlay.addEventListener('click', (event) => {
        if (event.target === lightboxOverlay) {
            lightboxOverlay.classList.remove('active');
        }
    });
}

// Call this method after the project content is rendered
// For example, in the renderProject method, after renderSections:
// this.renderSections(data.sections);
// this.setupLightboxListeners();

    createSingleSection(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'imagine-section';
        
let mediaContent = '';
    if (section.video) {
        mediaContent = `
            <video controls autoplay loop muted playsinline class="project-media-element">
                <source src="${section.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (section.image) {
        mediaContent = `
            <img src="${section.image}" alt="${section.title}" loading="lazy" class="project-media-element">
        `;
    }

    sectionDiv.innerHTML = `
        <div class="imagine-text">
            <h3>${section.title}</h3>
            <p>${section.text}</p>
        </div>
        <div class="imagine-card large">
            ${mediaContent}
        </div>
    `;
        
        return sectionDiv;
    }

    createDoubleSection(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'imagine-section';
        
        const rowDiv = document.createElement('div');
        rowDiv.className = 'imagine-row';
        
        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'imagine-item';
            
            itemDiv.innerHTML = `
                <div class="imagine-text">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
                <div class="imagine-card medium">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
            `;
            
            rowDiv.appendChild(itemDiv);
        });
        
        sectionDiv.appendChild(rowDiv);
        return sectionDiv;
    }

    setupLightboxListeners() {
        const lightboxOverlay = document.getElementById('lightbox-overlay');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxClose = document.getElementById('lightbox-close');

        // Event listener for opening the lightbox
        document.addEventListener('click', (event) => {
            // Check if the clicked element is an image within an imagine-card
            if (event.target.classList.contains('project-media-element') && event.target.closest('.imagine-card')) {
                const imageUrl = event.target.src;
                if (imageUrl) {
                    lightboxImage.src = imageUrl;
                    lightboxOverlay.classList.add('active');
                }
            }
        });

        // Event listener for closing the lightbox via close button
        lightboxClose.addEventListener('click', () => {
            lightboxOverlay.classList.remove('active');
        });

        // Event listener for closing the lightbox by clicking outside the image
        lightboxOverlay.addEventListener('click', (event) => {
            if (event.target === lightboxOverlay) {
                lightboxOverlay.classList.remove('active');
            }
        });
    }

 hideLoading() {
    this.loadingState.style.display = 'none'; // Hide the loading spinner
    this.projectContent.style.display = 'block'; // Make the content container visible (but still transparent due to CSS)
    
    // A small delay is needed to allow the browser to apply 'display: block'
    // before the opacity transition starts. This forces a reflow.
    setTimeout(() => {
        this.projectContent.style.opacity = '1'; // Trigger the fade-in for the main content
        
        // The individual elements inside (imagine-section, project-hero-image)
        // will also animate based on their own CSS transitions and the
        // opacity/transform changes applied here.
        const elements = document.querySelectorAll('.imagine-section, .project-hero-image');
        elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 50); // A minimal delay (e.g., 50ms) is usually sufficient
}

    showError() {
        this.loadingState.style.display = 'none';
        this.errorState.style.display = 'flex';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectLoader();
});