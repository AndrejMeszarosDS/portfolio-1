// Scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Create observer for scroll-reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after revealing
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all scroll-reveal elements
  const scrollRevealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
  scrollRevealElements.forEach(el => observer.observe(el));

  // Smooth scroll for anchor links on the same page
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || !href.includes('#')) return;

      const [pathname, hash] = href.split('#');
      const target = document.querySelector(`#${hash}`);
      if (!target) return;

      const linkPath = pathname ? new URL(pathname, location.href).pathname.replace(/\/+$/, '') : location.pathname.replace(/\/+$/, '');
      const currentPath = location.pathname.replace(/\/+$/, '');

      if (linkPath === currentPath) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const autoplayVideos = document.querySelectorAll('video[data-autoplay]');
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (!(video instanceof HTMLVideoElement)) return;

      if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
        if (video.paused && video.muted) {
          video.play().catch(() => null);
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    });
  }, {
    root: null,
    threshold: [0.35]
  });

  autoplayVideos.forEach(video => videoObserver.observe(video));

  // Parallax effect for floating elements
  const floatingElements = document.querySelectorAll('.animate-float');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    floatingElements.forEach((el, index) => {
      const speed = 0.05 * (index + 1);
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // Pause autoplay videos when the tab is inactive
  const handleVisibilityChange = () => {
    const videos = document.querySelectorAll('video');
    if (document.hidden) {
      videos.forEach(video => video.pause());
    } else {
      videos.forEach(video => {
        if (video.autoplay && video.muted && video.paused) {
          video.play().catch(() => null);
        }
      });
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  handleVisibilityChange();
});
