  document.querySelectorAll('.video-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const videoUrl = btn.getAttribute('data-video');
        document.getElementById('videoPlayer').src = videoUrl;
      });
    });