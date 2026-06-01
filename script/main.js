(function(){
  const vid          = document.getElementById('vid');
  const dropOverlay  = document.getElementById('dropOverlay');
  const browseBtn    = document.getElementById('browseBtn');
  const fileInput    = document.getElementById('fileInput');
  const openBtn      = document.getElementById('openBtn');
  const playBtn      = document.getElementById('playBtn');
  const playSvg      = document.getElementById('playSvg');
  const muteBtn      = document.getElementById('muteBtn');
  const volSvg       = document.getElementById('volSvg');
  const volInput     = document.getElementById('volInput');
  const volFill      = document.getElementById('volFill');
  const seekInput    = document.getElementById('seekInput');
  const trackFill    = document.getElementById('trackFill');
  const trackThumb   = document.getElementById('trackThumb');
  const timeBadge    = document.getElementById('timeBadge');
  const vidName      = document.getElementById('vidName');
  const speedSel     = document.getElementById('speedSel');
  const loopBtn      = document.getElementById('loopBtn');
  const pipBtn       = document.getElementById('pipBtn');
  const fsBtn        = document.getElementById('fsBtn');
  const fsSvg        = document.getElementById('fsSvg');
  const skipBackBtn  = document.getElementById('skipBackBtn');
  const skipFwdBtn   = document.getElementById('skipFwdBtn');
  const prevBtn      = document.getElementById('prevBtn');
  const nextBtn      = document.getElementById('nextBtn');
  const centerPlay   = document.getElementById('centerPlay');
  const centerIcon   = document.getElementById('centerIcon');
  const videoWrap    = document.getElementById('videoWrap');
  const player       = document.querySelector('.player');

  let dragging   = false;
  let hideTimer  = null;
  let lastVol    = 0.75;

  vid.volume = 0.75;

  /* ── helpers ── */
  function fmt(s) {
    if (!s || isNaN(s)) return '0:00';
    s = Math.floor(s);
    const m = Math.floor(s / 60);
    return `${m}:${String(s % 60).padStart(2,'0')}`;
  }

  function setPlayIcon(playing) {
    playSvg.innerHTML = playing
      ? '<rect x="6" y="4" width="4" height="16" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" fill="currentColor" stroke="none"/>'
      : '<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none"/>';
  }

  function flashCenter(playing) {
    centerIcon.innerHTML = playing
      ? '<rect x="6" y="4" width="4" height="16" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" fill="currentColor" stroke="none"/>'
      : '<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none"/>';
    centerPlay.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => centerPlay.classList.remove('show'), 600);
  }

  function setVolIcon(v, muted) {
    volSvg.innerHTML = (muted || v === 0)
      ? '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'
      : v < 0.5
        ? '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/>'
        : '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07"/>';
  }

  function updateProgress() {
    if (!vid.duration || dragging) return;
    const pct = vid.currentTime / vid.duration;
    const p   = (pct * 100).toFixed(3) + '%';
    trackFill.style.width = p;
    trackThumb.style.left = p;
    seekInput.value = Math.round(pct * 1000);
    timeBadge.textContent = fmt(vid.currentTime) + ' / ' + fmt(vid.duration);
  }

  /* ── load file ── */
  function loadFile(file) {
    if (!file || !file.type.startsWith('video/')) return;
    const url = URL.createObjectURL(file);
    vid.src   = url;
    vid.load();
    vidName.textContent = file.name.replace(/\.[^.]+$/, '');
    dropOverlay.style.display = 'none';
    vid.play();
  }

  /* ── file input / drop ── */
  browseBtn.onclick = (e) => { e.stopPropagation(); fileInput.click(); };
  openBtn.onclick   = () => fileInput.click();
  fileInput.onchange = () => { if (fileInput.files[0]) loadFile(fileInput.files[0]); };

  const dz = dropOverlay;
  dz.addEventListener('dragover',  e => { e.preventDefault(); dz.classList.add('drag-active'); });
  dz.addEventListener('dragleave', ()=> dz.classList.remove('drag-active'));
  dz.addEventListener('drop', e => {
    e.preventDefault();
    dz.classList.remove('drag-active');
    loadFile(e.dataTransfer.files[0]);
  });

  videoWrap.addEventListener('dragover',  e => { e.preventDefault(); });
  videoWrap.addEventListener('drop', e => {
    e.preventDefault();
    loadFile(e.dataTransfer.files[0]);
  });

  /* ── play / pause ── */
  playBtn.onclick = togglePlay;
  vid.onclick     = togglePlay;

  function togglePlay() {
    if (!vid.src) return;
    if (vid.paused) vid.play(); else vid.pause();
  }

  vid.onplay  = () => { setPlayIcon(true);  flashCenter(true);  };
  vid.onpause = () => { setPlayIcon(false); flashCenter(false); };

  /* ── progress ── */
  vid.ontimeupdate = updateProgress;

  vid.onloadedmetadata = () => {
    timeBadge.textContent = '0:00 / ' + fmt(vid.duration);
  };

  seekInput.addEventListener('mousedown',  () => { dragging = true; });
  seekInput.addEventListener('touchstart', () => { dragging = true; }, { passive: true });

  seekInput.addEventListener('input', () => {
    const pct = seekInput.value / 1000;
    const p   = (pct * 100).toFixed(3) + '%';
    trackFill.style.width = p;
    trackThumb.style.left = p;
    if (vid.duration) timeBadge.textContent = fmt(pct * vid.duration) + ' / ' + fmt(vid.duration);
  });

  seekInput.addEventListener('change', () => {
    dragging = false;
    if (vid.duration) vid.currentTime = (seekInput.value / 1000) * vid.duration;
  });

  /* ── volume ── */
  volInput.addEventListener('input', () => {
    const v = volInput.value / 100;
    vid.volume = v;
    lastVol    = v;
    volFill.style.width = volInput.value + '%';
    vid.muted  = false;
    setVolIcon(v, false);
  });

  muteBtn.onclick = () => {
    vid.muted = !vid.muted;
    setVolIcon(vid.volume, vid.muted);
    if (!vid.muted) {
      vid.volume = lastVol || 0.75;
      volInput.value = Math.round(lastVol * 100);
      volFill.style.width = volInput.value + '%';
    }
  };

  /* ── skip ── */
  skipBackBtn.onclick = () => { vid.currentTime = Math.max(0, vid.currentTime - 10); };
  skipFwdBtn.onclick  = () => { vid.currentTime = Math.min(vid.duration || 0, vid.currentTime + 10); };
  prevBtn.onclick     = () => { vid.currentTime = Math.max(0, vid.currentTime - 5); };
  nextBtn.onclick     = () => { vid.currentTime = Math.min(vid.duration || 0, vid.currentTime + 5); };

  /* ── speed ── */
  speedSel.onchange = () => { vid.playbackRate = parseFloat(speedSel.value); };

  /* ── loop ── */
  loopBtn.onclick = () => {
    vid.loop = !vid.loop;
    loopBtn.classList.toggle('on', vid.loop);
  };

  /* ── PiP ── */
  pipBtn.onclick = async () => {
    if (!vid.src) return;
    try {
      if (document.pictureInPictureElement) await document.exitPictureInPicture();
      else await vid.requestPictureInPicture();
    } catch(e) {}
  };

  /* ── Fullscreen ── */
  fsBtn.onclick = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else player.requestFullscreen();
  };

  document.addEventListener('fullscreenchange', () => {
    const fs = !!document.fullscreenElement;
    fsSvg.innerHTML = fs
      ? '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/>'
      : '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>';
  });

  /* ── keyboard ── */
  document.addEventListener('keydown', e => {
    if (['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)) return;
    if (e.code === 'Space')      { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowLeft')  { e.preventDefault(); prevBtn.click(); }
    if (e.code === 'ArrowRight') { e.preventDefault(); nextBtn.click(); }
    if (e.code === 'KeyM')       muteBtn.click();
    if (e.code === 'KeyL')       loopBtn.click();
    if (e.code === 'KeyF')       fsBtn.click();
    if (e.code === 'KeyP')       pipBtn.click();
  });

  setVolIcon(0.75, false);
})();