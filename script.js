document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.portfolio-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const closeButton = document.getElementById('lightbox-close');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const type = item.dataset.type;
      const src = item.dataset.src;
      const alt = item.dataset.alt || '';
      const poster = item.dataset.poster || '';

      lightboxContent.innerHTML = '';

      if (type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.poster = poster;
        video.innerHTML = `<source src="${src}" type="video/mp4">`;
        lightboxContent.appendChild(video);
      } else {
        const image = document.createElement('img');
        image.src = src;
        image.alt = alt;
        lightboxContent.appendChild(image);
      }

      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxContent.innerHTML = '';
    document.body.style.overflow = '';
  };

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});
