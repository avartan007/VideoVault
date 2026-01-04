# 🎬 VideoVault

A beautiful, locally-hosted video player for your personal video library with progress tracking, playback controls, and intelligent organization. Perfect for organizing and watching your downloaded videos with a professional interface.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

## ✨ Features

- **📁 Smart Course Organization** - Automatically scans and organizes video files into courses
- **▶️ Modern Video Player** - Built-in HTML5 video player with playback controls
- **⏱️ Playback Speed Control** - Watch videos at 0.5x, 0.75x, 1x, 1.25x, 1.5x, or 2x speed
- **📊 Progress Tracking** - Automatically saves your position in each video
- **✅ Lesson Completion** - Mark lessons as complete and track course progress
- **🔍 Search & Filter** - Quick search through courses and lessons
- **⏭️ Skip Controls** - Skip forward/backward 10 seconds with keyboard shortcuts
- **🎬 Theater Mode** - Immersive full-width video viewing
- **⌨️ Keyboard Shortcuts** - Space to play/pause, arrow keys to navigate, etc.
- **📱 Responsive Design** - Works on desktop with optimized layouts
- **💾 Local Storage** - All progress saved locally in browser storage
- **📈 Statistics** - View watch time, completion rates, and estimated time to completion

## 🚀 Quick Start

### Prerequisites
- Node.js 12.0 or higher
- macOS, Linux, or Windows
- Chrome, Edge, or Chromium-based browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avartan007/VideoVault.git
   cd VideoVault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your videos**
   - Place your video files in the `videos/` folder
   - Organize them in folders:
   ```
   videos/
   ├── Courses/
   │   ├── 01 - Introduction.mp4
   │   ├── 02 - Basics.mp4
   │   └── 03 - Advanced.mp4
   ├── Tutorials/
   │   ├── Tutorial 1.mp4
   │   └── Tutorial 2.mp4
   └── Other Videos/
       ├── Video 1.mp4
       └── Video 2.mp4
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in your browser**
   - Navigate to `http://localhost:3000`
   - Select your videos folder from the welcome screen
   - Start learning! 🎬

## 📖 Usage

### Basic Controls
- **Select Folder**: Click the welcome button to choose your videos directory
- **Play/Pause**: Click play button or press `Space`
- **Navigate**: Click on any lesson to play it
- **Mark Complete**: Click the checkmark to mark a lesson as complete
- **Adjust Speed**: Use the speed dropdown (0.5x - 2x)

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `→` | Next video |
| `←` | Previous video |
| `>` | Skip forward 10s |
| `<` | Skip backward 10s |
| `P` | Picture-in-Picture |
| `T` | Theater mode |
| `C` | Toggle completion |

### Supported Video Formats
- MP4 (.mp4)
- Matroska (.mkv)
- WebM (.webm)
- AVI (.avi)
- MOV (.mov)
- M4V (.m4v)

## 🛠️ Configuration

Edit `server.js` to customize the default videos folder:

```javascript
// Line 8 - Change this to your preferred default folder
let VIDEOS_FOLDER = './videos';
```

## 📁 Project Structure

```
VideoVault/
├── index.html          # Main UI and client-side logic
├── server.js           # Express server for video hosting
├── package.json        # Project metadata and dependencies
├── public/             # Static assets (future expansion)
├── videos/             # Your video files
└── README.md          # This file
```

## 🎯 How It Works

1. **Server-Side**: Express.js scans your videos folder recursively, auto-organizing videos into collections
2. **Client-Side**: Vanilla JavaScript manages the professional UI, video playback, and local storage
3. **Progress**: Automatically saves watched time, completion status, and playback position
4. **Statistics**: Calculates watch time, completion rates, and estimated time to finish your library

## 🔧 API Endpoints

The server exposes several endpoints for course management:

- `GET /api/courses` - Returns all available courses and videos
- `GET /api/set-folder?path=/your/path` - Changes the videos folder
- `GET /api/current-folder` - Returns the current videos folder path

## 💡 Tips for Best Experience

- **Name videos clearly** (e.g., "01 - Intro", "02 - Basics") for automatic sorting
- **Organize by folders** - each folder becomes a collection in the library
- **Consistent naming** helps with natural sorting (1, 2, 10 not 1, 10, 2)
- **Close other tabs** for better performance with large video files
- **Use Chrome or Edge** for best compatibility and speed
- **Rename and restart** - restart the server after adding/removing videos

## 🐛 Troubleshooting

**Videos not appearing?**
- Ensure they're in the `videos/` folder with correct naming
- Supported formats: .mp4, .mkv, .webm, .avi, .mov, .m4v
- Restart the server after adding new videos

**Progress not saving?**
- Check browser's localStorage permissions
- Try a different browser
- Clear browser cache if stuck on old data

**Playback issues?**
- Verify the video file is valid
- Try converting to MP4 format
- Check browser console for errors (F12)

## 🎨 Customization

You can customize the appearance by editing the CSS variables in `index.html`:

```css
:root {
  --primary: #2196F3;
  --bg: #1a1a1a;
  --fg: #ffffff;
  /* ... more colors ... */
}
```

## 📦 Dependencies

- **express** - Fast, unopinionated web framework
- **Node.js fs** - File system operations
- **Node.js path** - Path utilities

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🙋 Support

- Found a bug? Open an issue
- Have a feature request? Discuss it in issues
- Want to contribute? Pull requests welcome!

## 📝 Changelog

### Version 1.0.0
- Initial release
- Core video player with playback controls
- Course organization and progress tracking
- Keyboard shortcuts and theater mode
- Local storage for progress persistence

## 👨‍💻 Author

Created with ❤️ for better video watching.

---

**Enjoy Your Videos! 🎬**

*Built with vanilla JavaScript, Express.js, and a passion for great interfaces.*
