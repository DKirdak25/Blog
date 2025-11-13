   
        // Optional JS for interactivity
        document.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', function() {
                const link = this.querySelector('a.post-title');
                if(link) { window.location.href = link.href; }
            });
        });
    