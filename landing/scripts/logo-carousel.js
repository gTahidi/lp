document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.logo-column');
    
    columns.forEach((column, columnIndex) => {
        const items = column.querySelectorAll('.logo-item');
        let currentIndex = 0;
        
        // Show first item immediately
        items[0].classList.add('active');
        
        // Rotate logos every 2 seconds with column delay
        setTimeout(() => {
            setInterval(() => {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex].classList.add('active');
            }, 2000);
        }, columnIndex * 200);
    });
});
