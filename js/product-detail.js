// Product Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Add to Cart functionality (placeholder)
    const addToCartBtn = document.querySelector('.btn-primary');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            alert('Product added to cart! (This is a demo)');
            this.textContent = '✓ Added to Cart';
            setTimeout(() => {
                this.textContent = 'Add to Cart';
            }, 2000);
        });
    }
    
    // Wishlist functionality (placeholder)
    const wishlistBtn = document.querySelector('.btn-secondary');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            if (this.textContent.includes('Added')) {
                this.textContent = 'Add to Wishlist';
            } else {
                this.textContent = '♥ Added to Wishlist';
            }
        });
    }
});

