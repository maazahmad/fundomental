// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Portfolio/Work items data - Customized with specific Vimeo videos
const workItems = [
    {
        title: "Featured Showreel",
        description: "Our latest creative showcase and highlights",
        videoId: "839875942",
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Commercial Production",
        description: "Brand storytelling through compelling visuals",
        videoId: "839875942", // Using same video as example - replace with actual video ID
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Music Video",
        description: "Creative direction and post-production excellence",
        videoId: "839875942", // Replace with actual music video ID
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Documentary Work",
        description: "Authentic storytelling and cinematic editing",
        videoId: "839875942", // Replace with actual documentary ID
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Corporate Video",
        description: "Professional video production and branding",
        videoId: "839875942", // Replace with actual corporate video ID
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Event Coverage",
        description: "Live event documentation and editing",
        videoId: "839875942", // Replace with actual event video ID
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Creative Project",
        description: "Innovative visual storytelling and effects",
        videoId: "839875942", // Replace with actual creative project ID
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Short Film",
        description: "Narrative storytelling and cinematic production",
        videoId: "839875942", // Replace with actual short film ID
        thumbnail: "https://i.vimeocdn.com/video/839875942-640x360.jpg?r=pad",
        vimeoUrl: "https://vimeo.com/839875942"
    }
];

// Populate work grid
function populateWorkGrid() {
    const workGrid = document.querySelector('.work-grid');
    
    workItems.forEach(item => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" class="work-video" 
                 onerror="this.src='https://via.placeholder.com/640x360/333/fff?text=${encodeURIComponent(item.title)}'">
            <div class="work-overlay">
                <div class="work-info">
                    <h3 class="work-title">${item.title}</h3>
                    <p class="work-description">${item.description}</p>
                </div>
            </div>
        `;
        
        // Add click event to open video in modal or new tab
        workItem.addEventListener('click', () => {
            // Option 1: Open video in modal (better user experience)
            openVideoModal(item.videoId);
            
            // Option 2: Open in new tab (uncomment if preferred)
            // window.open(item.vimeoUrl, '_blank');
        });
        
        workGrid.appendChild(workItem);
    });
}

// Video Modal (optional implementation)
function openVideoModal(videoId) {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1" 
                    width="800" height="450" frameborder="0" 
                    allow="autoplay; fullscreen" allowfullscreen>
            </iframe>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const project = this.querySelector('input[type="text"]:nth-of-type(2)').value;
    const message = this.querySelector('textarea').value;
    
    // Here you would typically send the data to your server
    // For now, we'll just show an alert
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    this.reset();
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
document.addEventListener('DOMContentLoaded', () => {
    // Populate work grid
    populateWorkGrid();
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.work-item, .about-text, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero video (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 20);
    });
}

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about-section');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    statsObserver.observe(aboutSection);
}