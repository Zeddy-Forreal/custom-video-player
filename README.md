<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/No_Dependencies-00C896?style=for-the-badge" />

# 🎬 Custom Video Player

**A sleek, fully custom-built HTML/CSS/JS video player with zero dependencies.**  
Upload any local video file through the browser and get a cinematic, keyboard-driven playback experience — no libraries, no frameworks, no fluff.

[Features](#-features) · [Getting Started](#-getting-started) · [Keyboard Shortcuts](#-keyboard-shortcuts) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

- 📂 **File Upload** — Click "Browse files" or "Open" to load any video from your device
- 🖱️ **Drag & Drop** — Drag a video file directly onto the player to load it instantly
- ▶️ **Full Playback Controls** — Play, pause, seek, skip ±5s and ±10s
- 🔊 **Volume Control** — Smooth hover-to-expand volume slider with mute toggle
- ⚡ **Playback Speed** — 0.25× to 2× speed selection
- 🔁 **Loop Mode** — Toggle seamless looping with a single click
- 🖼️ **Picture-in-Picture** — Native browser PiP support
- ⛶ **Fullscreen** — One-click fullscreen with icon state feedback
- ⌨️ **Keyboard Shortcuts** — Full keyboard control for power users
- 💡 **Dynamic Icons** — Volume icon updates based on level (high / low / muted)
- 🎞️ **Center Flash** — Play/pause feedback animation on the video itself
- 📱 **Responsive** — Adapts cleanly across screen sizes
- 🚫 **Zero Dependencies** — Pure HTML, CSS, and JavaScript. No npm, no bundler.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Zeddy-Forreal/custom-video-player.git
cd custom-video-player
```

### 2. Open in browser

No build step, no installs. Just open `index.html` in any modern browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. Load a video

Once the player is open, either:
- Click **"Browse files"** on the placeholder screen, or
- Click **"Open"** in the bottom-right controls, or
- **Drag and drop** any video file directly onto the player

That's it. No uploads to a server, no configuration — everything runs locally in your browser.

---

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `←` | Rewind 5 seconds |
| `→` | Skip forward 5 seconds |
| `M` | Toggle mute |
| `L` | Toggle loop |
| `F` | Toggle fullscreen |
| `P` | Toggle Picture-in-Picture |

---

## 📁 File Structure

```
custom-video-player/
├── index.html            Player markup and structure
├── style/
│   └── main.css          All styles — layout, controls, animations, responsive
└── javascript/
    └── main.js           All logic — playback, seek, volume, shortcuts, PiP
```

---

## 🎨 Customization

All colors are CSS custom properties at the top of `main.css`. Change the whole look by editing just these:

```css
:root {
  --bg:         #0a0b0e;   /* Page background        */
  --shell:      #111318;   /* Player card background  */
  --surface2:   #1d2030;   /* Button hover surfaces   */
  --line2:      #2d3248;   /* Track / border color    */
  --accent:     #6c63ff;   /* Primary accent (purple) */
  --accent2:    #9d97ff;   /* Lighter accent tint     */
  --text:       #eef0f8;   /* Primary text            */
  --text2:      #7b80a0;   /* Secondary / icon color  */
}
```

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 80+ | ✅ Full |
| Firefox 78+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 80+ | ✅ Full |

> **Picture-in-Picture** requires Chrome or Edge. Firefox support varies by version.

---

## 📦 Supported Video Formats

Depends on the browser's native codec support:

| Format | Chrome | Firefox | Safari |
|--------|--------|---------|--------|
| MP4 (H.264) | ✅ | ✅ | ✅ |
| WebM (VP8/VP9) | ✅ | ✅ | ⚠️ |
| MOV | ✅ | ⚠️ | ✅ |
| MKV | ✅ | ✅ | ⚠️ |

---

## 🤝 Contributing

Contributions and feature requests are welcome.

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
