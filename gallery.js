function filterImages(category)
 {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => 
        {
        img.style.display = (category === 'all' || img.classList.contains(category)) ? 'block' : 'none';
    });
}
