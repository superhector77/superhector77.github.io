// document.addEventListener('DOMContentLoaded', () => {
//     const track = document.getElementById('project-track');
//     const leftBtn = document.querySelector('.left-btn');
//     const rightBtn = document.querySelector('.right-btn');

//     // Calculate how far to scroll (width of one card + the gap)
//     const getScrollAmount = () => {
//         const card = document.querySelector('.project-card');
//         return card.offsetWidth + 24; // 24px is the 1.5rem gap defined in CSS
//     };

//     leftBtn.addEventListener('click', () => {
//         track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
//     });

//     rightBtn.addEventListener('click', () => {
//         track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
    
//     // --- Interactive PCB Click Logic ---
//     const hotspots = document.querySelectorAll('.hotspot');
//     const titleEl = document.getElementById('info-title');
//     const descEl = document.getElementById('info-desc');

//     hotspots.forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             // Remove active class from all buttons
//             hotspots.forEach(b => b.classList.remove('active-hotspot'));
            
//             // Add active class to the clicked button
//             const clickedBtn = e.currentTarget;
//             clickedBtn.classList.add('active-hotspot');

//             // Update the info panel text
//             titleEl.textContent = clickedBtn.getAttribute('data-title');
//             descEl.textContent = clickedBtn.getAttribute('data-desc');
//         });
//     });

//     // --- Single-Image Carousel Logic ---
//     const track = document.getElementById('project-track');
//     const leftBtn = document.querySelector('.left-btn');
//     const rightBtn = document.querySelector('.right-btn');

//     if (track && leftBtn && rightBtn) {
//         const getScrollAmount = () => {
//             // Now scrolls by the full width of the container
//             return track.clientWidth; 
//         };

//         leftBtn.addEventListener('click', () => {
//             track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
//         });

//         rightBtn.addEventListener('click', () => {
//             track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Front/Back View Toggle Logic ---
    const viewToggleBtns = document.querySelectorAll('.view-toggle .toggle-btn');
    
    viewToggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const group = e.target.getAttribute('data-group');
            const targetId = e.target.getAttribute('data-target');
            
            // 1. Highlight the correct button
            const container = e.target.closest('.view-toggle');
            container.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // 2. Hide all views for this specific board (guitar or ginger)
            document.querySelectorAll(`.${group}-view`).forEach(view => {
                view.style.display = 'none';
            });

            // 3. Show the requested view
            document.getElementById(targetId).style.display = 'flex';
        });
    });

    // --- Interactive PCB Click Logic ---
    const hotspots = document.querySelectorAll('.hotspot');

    hotspots.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const clickedBtn = e.currentTarget;
            
            // Find the specific split container we are currently inside
            const parentContainer = clickedBtn.closest('.pcb-split-container');
            
            // Remove active class from all hotspots ONLY inside this container
            parentContainer.querySelectorAll('.hotspot').forEach(b => b.classList.remove('active-hotspot'));
            
            // Highlight the clicked button
            clickedBtn.classList.add('active-hotspot');

            // Find the specific title and description text fields for THIS container
            const titleEl = parentContainer.querySelector('.info-title');
            const descEl = parentContainer.querySelector('.info-desc');

            // Update the text
            titleEl.textContent = clickedBtn.getAttribute('data-title');
            descEl.textContent = clickedBtn.getAttribute('data-desc');
        });
    });

//     // --- Single-Image Carousel Logic (Fixed Scroll Math) ---
//     const track = document.getElementById('project-track');
//     const leftBtn = document.querySelector('.left-btn');
//     const rightBtn = document.querySelector('.right-btn');

//     if (track && leftBtn && rightBtn) {
//         const getScrollAmount = () => {
//             // BUG FIX: Measure exactly one slide width so it snaps perfectly
//             const slide = document.querySelector('.carousel-slide');
//             return slide.clientWidth; 
//         };

//         leftBtn.addEventListener('click', () => {
//             track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
//         });

//         rightBtn.addEventListener('click', () => {
//             track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
//         });
//     }
// });

// --- Multi-Carousel Logic ---
    const carousels = document.querySelectorAll('.single-item-carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const leftBtn = carousel.querySelector('.left-btn');
        const rightBtn = carousel.querySelector('.right-btn');

        if (track && leftBtn && rightBtn) {
            const getScrollAmount = () => {
                const slide = track.querySelector('.carousel-slide');
                return slide.clientWidth; 
            };

            leftBtn.addEventListener('click', () => {
                track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
            });

            rightBtn.addEventListener('click', () => {
                track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
            });
        }
    });
});