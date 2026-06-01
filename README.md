<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/No_Dependencies-00C896?style=for-the-badge" />

# 🎬 Custom Video Player

**A sleek, fully custom-built HTML/CSS/JS video player with zero dependencies.**  
Drop in a local video file and get a cinematic, keyboard-driven playback experience — no libraries, no frameworks, no fluff.

[Features](#-features) · [Preview](#-preview) · [Getting Started](#-getting-started) · [Keyboard Shortcuts](#-keyboard-shortcuts) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

- 🎯 **Drag & Drop** — Drop any video file directly onto the player to load it instantly
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

## 👁️ Preview

> The player uses a deep dark theme with a purple accent palette, custom progress bar, animated controls, and a minimal, distraction-free layout.

```
┌──────────────────────────────────────────┐
│                                          │
│            [ Video Area ]                │
│         Drop file / Browse here          │
│                                          │
├──────────────────────────────────────────┤
│ video-filename.mp4          0:34 / 3:22  │
├──────────────────────────────────────────┤
│ ──────────────●────────────────────────  │
├──────────────────────────────────────────┤
│ 🔊░░░   |◀  ⏮  ▶  ⏭  ▶|   | 1× ↺ ⛶ │
└──────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Zeddy-Forreal/custom-video-player.git
cd custom-video-player
```

### 2. Project structure

```
custom-video-player/
├── index.html
├── style/
│   └── main.css
├── javascript/
│   └── main.js
└── media/
    └── (your video files go here)
```

### 3. Open in browser

No build step needed. Just open `index.html` directly in any modern browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or serve it locally for best results:

```bash
npx serve .
# then open http://localhost:3000
```

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
index.html          Main HTML — player markup and structure
style/main.css      All styles — layout, controls, animations, responsive
javascript/main.js  All logic — playback, seek, volume, shortcuts, PiP
media/              Place your local video files here
```

---

## 🎨 Customization

All colors are defined as CSS custom properties at the top of `main.css`. You can retheme the entire player by changing just these variables:

```css
:root {
  --bg:         #0a0b0e;   /* Page background       */
  --shell:      #111318;   /* Player card background */
  --surface2:   #1d2030;   /* Button hover surfaces  */
  --line2:      #2d3248;   /* Track / border color   */
  --accent:     #6c63ff;   /* Primary accent (purple)*/
  --accent2:    #9d97ff;   /* Lighter accent tint    */
  --text:       #eef0f8;   /* Primary text           */
  --text2:      #7b80a0;   /* Secondary / icon color */
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

## 📄 Supported Video Formats

Depends on the browser's native codec support:

| Format | Chrome | Firefox | Safari |
|--------|--------|---------|--------|
| MP4 (H.264) | ✅ | ✅ | ✅ |
| WebM (VP8/VP9) | ✅ | ✅ | ⚠️ |
| MOV | ✅ | ⚠️ | ✅ |
| OGG | ✅ | ✅ | ❌ |
| MKV | ✅ | ✅ | ⚠️ |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
