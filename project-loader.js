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
        const projectData = window.projectsData[slug];
        
        if (!projectData) {
            this.showError();
            return;
        }

        this.renderProject(projectData);
    }

    // Helper function to create media element (img or video)
    createMediaElement(src, alt, isVideo, poster = '') {
        if (isVideo) {
            const video = document.createElement('video');
            video.src = src;
            video.alt = alt;
            video.loop = true;
            video.muted = true;
            video.autoplay = true;
            video.playsInline = true;
            video.controls = true; // Add this line to show controls
            if (poster) {
                video.poster = poster;
            }
            return video;
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            img.loading = 'lazy';
            return img;
        }
    }

    renderProject(data) {
        // Update page title FIRST
        document.title = `${data.title} - Brea Miller`;
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) pageTitle.textContent = `${data.title} - Brea Miller`;
        
        // Update hero section
        //const projectLabel = document.getElementById('');
        //if (projectLabel) projectLabel.textContent = data.label;
        
        const projectTitle = document.getElementById('project-title');
        if (projectTitle) projectTitle.textContent = data.title;
        
        const projectDescription = document.getElementById('project-description');
        if (projectDescription) projectDescription.innerHTML = `<span class="accent-text">✐ᝰ</span> ${data.description}`;
        
        const heroMediaContainer = document.getElementById('hero-media-container');
        if (heroMediaContainer) {
            heroMediaContainer.innerHTML = ''; // Clear existing content
            const heroMediaElement = this.createMediaElement(
                data.heroVideo || data.heroImage,
                data.title,
                !!data.heroVideo,
                data.heroImage
            );
            heroMediaContainer.appendChild(heroMediaElement);
        }
        
        // Update overview
        const projectOverview = document.getElementById('project-overview');
        if (projectOverview) projectOverview.textContent = data.overview;
        
        // Render dynamic sections
        this.renderSections(data.sections);
        
        // Render visit button if URL exists
        this.renderVisitButton(data);
    }

    renderSections(sections) {
        const container = document.getElementById('dynamic-sections');
        if (!container) return; // Add null check for container

        container.innerHTML = '';

        sections.forEach((section, index) => {
            if (section.type === 'single') {
                const el = this.createSingleSection(section);
                el.style.animationDelay = `${index * 0.1}s`;
                container.appendChild(el);
            } else if (section.type === 'double') {
                const el = this.createDoubleSection(section);
                el.style.animationDelay = `${index * 0.1}s`;
                container.appendChild(el);
            }
        });
    }

    createSingleSection(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'imagine-section';
        
        const imagineTextDiv = document.createElement('div');
        imagineTextDiv.className = 'imagine-text';
        imagineTextDiv.innerHTML = `<h3>${section.title}</h3><p>${section.text || ''}</p>`;
        sectionDiv.appendChild(imagineTextDiv);

        const imagineCardDiv = document.createElement('div');
        imagineCardDiv.className = 'imagine-card large';
        
        const mediaElement = this.createMediaElement(
            section.video || section.image,
            section.title,
            !!section.video,
            section.image
        );
        imagineCardDiv.appendChild(mediaElement);
        
        sectionDiv.appendChild(imagineCardDiv);
        
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
            
            const imagineTextDiv = document.createElement('div');
            imagineTextDiv.className = 'imagine-text';
            imagineTextDiv.innerHTML = `<h3>${item.title}</h3><p>${item.text || ''}</p>`;
            itemDiv.appendChild(imagineTextDiv);

            const imagineCardDiv = document.createElement('div');
            imagineCardDiv.className = 'imagine-card medium';

            const mediaElement = this.createMediaElement(
                item.video || item.image,
                item.title,
                !!item.video,
                item.image
            );
            imagineCardDiv.appendChild(mediaElement);
            
            itemDiv.appendChild(imagineCardDiv);
            
            rowDiv.appendChild(itemDiv);
        });
        
        sectionDiv.appendChild(rowDiv);
        return sectionDiv;
    }
    
    renderVisitButton(data) {
        const container = document.getElementById('project-buttons-container');
        if (!container) return;
        
        if (data.visitUrl && data.visitLabel) {
            const visitButton = document.createElement('a');
            visitButton.href = data.visitUrl;
            visitButton.target = '_blank';
            visitButton.rel = 'noopener noreferrer';
            visitButton.className = 'visit-project-button';
            visitButton.textContent = data.visitLabel;
            container.appendChild(visitButton);
        }
    }

    showError() {
        if (this.loadingState) this.loadingState.style.display = 'none';
        if (this.errorState) this.errorState.style.display = 'flex';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectLoader();
});