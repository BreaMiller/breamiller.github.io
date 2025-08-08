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
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) pageTitle.textContent = `${data.title} - Brea Miller`;
        document.title = `${data.title} - Brea Miller`;
        
        // Update hero section
        const projectLabel = document.getElementById('project-label');
        if (projectLabel) projectLabel.textContent = data.label;
        
        const projectTitle = document.getElementById('project-title');
        if (projectTitle) projectTitle.textContent = data.title;
        
        const projectDescription = document.getElementById('project-description');
        if (projectDescription) projectDescription.innerHTML = `<span class="accent-text">✐ᝰ</span> ${data.description}`;
        
        const heroImage = document.getElementById('hero-image');
        if (heroImage) {
            heroImage.src = data.heroImage;
            heroImage.alt = data.title;
        }
        
        // Update overview
        const projectOverview = document.getElementById('project-overview');
        if (projectOverview) projectOverview.textContent = data.overview;
        
        // Render dynamic sections
        this.renderSections(data.sections);
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

    createSingleSection(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'imagine-section';
        
        sectionDiv.innerHTML = `
            <div class="imagine-text">
                <h3>${section.title}</h3>
                <p>${section.text}</p>
            </div>
            <div class="imagine-card large">
                <img src="${section.image}" alt="${section.title}" loading="lazy">
                <video src="${section.video}" alt="${section.title}" loading="lazy">
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

    hideLoading() {
        this.loadingState.style.display = 'none';
        this.projectContent.style.display = 'block';
        
        // Trigger animations
        setTimeout(() => {
            const elements = document.querySelectorAll('.imagine-section, .project-hero-image');
            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, 100);
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