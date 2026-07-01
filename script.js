// ===============================
// Dark/Light Mode Toggle
// ===============================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ===============================
// Mobile Preview
// ===============================

const mobilePreviewBtn = document.getElementById('mobilePreviewBtn');
const mobilePreviewContainer = document.getElementById('mobilePreviewContainer');
const closePreview = document.getElementById('closePreview');
const mobileContent = document.getElementById('mobileContent');
const mainWrapper = document.querySelector('.main-wrapper');

mobilePreviewBtn.addEventListener('click', () => {
    mobilePreviewContainer.classList.add('active');
    mainWrapper.classList.add('blur');
    renderMobilePreview();
});

closePreview.addEventListener('click', () => {
    mobilePreviewContainer.classList.remove('active');
    mainWrapper.classList.remove('blur');
});

// Close mobile preview when clicking outside
mobilePreviewContainer.addEventListener('click', (e) => {
    if (e.target === mobilePreviewContainer) {
        mobilePreviewContainer.classList.remove('active');
        mainWrapper.classList.remove('blur');
    }
});

function renderMobilePreview() {
    // Clone the main content
    const mainContent = document.querySelector('.main-wrapper').cloneNode(true);
    
    // Remove the preview controls from the clone
    const previewControls = mainContent.querySelector('.preview-controls');
    if (previewControls) previewControls.remove();
    
    // Clear and update mobile content
    mobileContent.innerHTML = mainContent.innerHTML;
    
    // Add click handlers for mobile navigation
    const mobileNavLinks = mobileContent.querySelectorAll('.nav-menu a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = mobileContent.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });
    
    // Add hamburger functionality for mobile preview
    const mobileHamburger = mobileContent.querySelector('.hamburger');
    const mobileNavMenu = mobileContent.querySelector('.nav-menu');
    
    if (mobileHamburger) {
        mobileHamburger.addEventListener('click', () => {
            mobileHamburger.classList.toggle('active');
            mobileNavMenu.classList.toggle('active');
        });
    }
}

// ===============================
// Mobile Navigation
// ===============================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===============================
// Projects Data
// ===============================

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with payment integration, product management, and user authentication.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveLink: "https://ecommerce-demo.com",
        githubLink: "https://github.com/vishnuboya143/ecommerce-platform",
        icon: "fas fa-shopping-cart"
    },
    {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
        technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
        liveLink: "https://taskmanager-demo.com",
        githubLink: "https://github.com/vishnuboya143/task-manager",
        icon: "fas fa-tasks"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather dashboard with location-based forecasts, weather alerts, and beautiful data visualization.",
        technologies: ["React", "OpenWeather API", "Chart.js"],
        liveLink: "https://weather-demo.com",
        githubLink: "https://github.com/vishnuboya143/weather-dashboard",
        icon: "fas fa-cloud-sun"
    },
    {
        title: "AI Chat Application",
        description: "AI-powered chat application with natural language processing, conversation history, and user analytics.",
        technologies: ["React", "Python", "Flask", "TensorFlow"],
        liveLink: "https://aichat-demo.com",
        githubLink: "https://github.com/vishnuboya143/ai-chat",
        icon: "fas fa-comments"
    },
    {
        title: "Social Media Analytics",
        description: "Analytics dashboard for social media metrics with data visualization, trend analysis, and reporting features.",
        technologies: ["Next.js", "D3.js", "Node.js", "PostgreSQL"],
        liveLink: "https://analytics-demo.com",
        githubLink: "https://github.com/vishnuboya143/social-analytics",
        icon: "fas fa-chart-bar"
    },
    {
        title: "Portfolio Generator",
        description: "Dynamic portfolio generator that creates professional portfolios from user data with multiple templates.",
        technologies: ["React", "Tailwind CSS", "Firebase", "PDF Export"],
        liveLink: "https://portfolio-gen-demo.com",
        githubLink: "https://github.com/vishnuboya143/portfolio-generator",
        icon: "fas fa-briefcase"
    }
];

// ===============================
// Render Projects
// ===============================

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.githubLink}" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
});

// ===============================
// Scroll Animations
// ===============================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===============================
// Initialize
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});