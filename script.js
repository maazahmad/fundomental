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

// Portfolio categories
const categories = [
    { id: 'all', name: 'All Work', icon: '🎬' },
    { id: 'showreel', name: 'Showreels', icon: '⭐' },
    { id: 'commercial', name: 'Commercial', icon: '📺' },
    { id: 'music', name: 'Music Videos', icon: '🎵' },
    { id: 'documentary', name: 'Documentary', icon: '📽️' },
    { id: 'corporate', name: 'Corporate', icon: '🏢' },
    { id: 'creative', name: 'Creative', icon: '🎨' }
];

// Portfolio/Work items data - Categorized with diverse content
const workItems = [
    {
        title: "2024 Showreel",
        description: "Our latest creative showcase and highlights",
        category: "showreel",
        videoId: "839875942",
        thumbnail: "https://vumbnail.com/839875942.jpg",
        vimeoUrl: "https://vimeo.com/839875942"
    },
    {
        title: "Brand Campaign - Tech Startup",
        description: "Modern brand storytelling for innovative company",
        category: "commercial",
        videoId: "fundomentalfilms", // Replace with actual commercial video ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=📺+Commercial",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    },
    {
        title: "Indie Artist Music Video",
        description: "Creative direction and visual storytelling",
        category: "music",
        videoId: "fundomentalfilms", // Replace with actual music video ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=🎵+Music+Video",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    },
    {
        title: "Local Stories Documentary",
        description: "Authentic community storytelling",
        category: "documentary",
        videoId: "fundomentalfilms", // Replace with actual documentary ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=📽️+Documentary",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    },
    {
        title: "Corporate Training Series",
        description: "Professional training content production",
        category: "corporate",
        videoId: "fundomentalfilms", // Replace with actual corporate video ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=🏢+Corporate",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    },
    {
        title: "Fashion Brand Promo",
        description: "Stylish promotional content with dynamic editing",
        category: "commercial",
        videoId: "fundomentalfilms", // Replace with actual fashion video ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=📺+Fashion",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    },
    {
        title: "Experimental Short",
        description: "Creative visual experimentation and effects",
        category: "creative",
        videoId: "fundomentalfilms", // Replace with actual creative project ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=🎨+Creative",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    },
    {
        title: "Event Highlight Reel",
        description: "Dynamic event coverage and post-production",
        category: "corporate",
        videoId: "fundomentalfilms", // Replace with actual event video ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=🏢+Event",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    },
    {
        title: "Artist Profile Documentary",
        description: "In-depth creative process documentation",
        category: "documentary",
        videoId: "fundomentalfilms", // Replace with actual artist doc ID
        thumbnail: "https://via.placeholder.com/640x360/2a2a2a/ff6b6b?text=📽️+Artist+Profile",
        vimeoUrl: "https://vimeo.com/fundomentalfilms"
    }
];

// Function to get Vimeo thumbnail using oEmbed API
async function getVimeoThumbnail(videoId) {
    try {
        const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`);
        const data = await response.json();
        return data.thumbnail_url;
    } catch (error) {
        console.log('Could not fetch Vimeo thumbnail:', error);
        return null;
    }
}

// Create category filters
function createCategoryFilters() {
    const filtersContainer = document.querySelector('.category-filters');

    categories.forEach(category => {
        const filterBtn = document.createElement('button');
        filterBtn.className = `filter-btn ${category.id === 'all' ? 'active' : ''}`;
        filterBtn.dataset.category = category.id;
        filterBtn.innerHTML = `
            <span class="icon">${category.icon}</span>
            <span>${category.name}</span>
        `;

        filterBtn.addEventListener('click', () => {
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');

            // Filter work items
            filterWorkItems(category.id);
        });

        filtersContainer.appendChild(filterBtn);
    });
}

// Filter work items by category
function filterWorkItems(categoryId) {
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        const itemCategory = item.dataset.category;

        if (categoryId === 'all' || itemCategory === categoryId) {
            item.style.display = 'block';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';

            // Animate in
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';

            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Populate work grid
function populateWorkGrid() {
    const workGrid = document.querySelector('.work-grid');

    workItems.forEach(async (item, index) => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.dataset.category = item.category;

        // Try to get actual Vimeo thumbnail
        const vimeoThumbnail = await getVimeoThumbnail(item.videoId);
        const thumbnailUrl = vimeoThumbnail || item.thumbnail;

        workItem.innerHTML = `
            <img src="${thumbnailUrl}" alt="${item.title}" class="work-video" 
                 onerror="this.src='https://via.placeholder.com/640x360/1a1a1a/ff6b6b?text=${item.category === 'showreel' ? '⭐' : categories.find(c => c.id === item.category)?.icon || '🎬'}+${encodeURIComponent(item.title.replace(/\s+/g, '+'))}'">
            <div class="work-overlay">
                <div class="work-info">
                    <h3 class="work-title">${item.title}</h3>
                    <p class="work-description">${item.description}</p>
                    <span class="work-category">${categories.find(c => c.id === item.category)?.name || 'Video'}</span>
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
document.querySelector('.contact-form').addEventListener('submit', function (e) {
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
    // Create category filters
    createCategoryFilters();

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