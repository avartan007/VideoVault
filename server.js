const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configure your videos folder here
let VIDEOS_FOLDER = './videos';

// Serve static files
app.use(express.static('public'));
app.use(express.static('.'));  // Serve root files (index.html)
app.use('/videos', express.static(VIDEOS_FOLDER));

// Video extensions to look for
const VIDEO_EXTENSIONS = ['.mp4', '.mkv', '.webm', '.avi', '.mov', '.m4v'];

/**
 * Recursively scans a directory for course folders and video files
 * @param {string} dir - Directory path to scan
 * @param {string} basePath - Base path for relative path construction
 * @returns {Array} Array of course objects with videos
 */
function scanVideos(dir, basePath = '') {
  const courses = [];
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        // This is a course folder
        const videos = scanVideosInFolder(fullPath, relativePath);
        if (videos.length > 0) {
          courses.push({
            id: Buffer.from(relativePath).toString('base64'),
            name: item.name,
            path: relativePath,
            videos: videos
          });
        }
        
        // Also check subfolders
        const subCourses = scanVideos(fullPath, relativePath);
        courses.push(...subCourses);
      }
    }
  } catch (err) {
    console.error('Error scanning directory:', err);
  }
  
  return courses;
}

/**
 * Scans a specific folder for video files
 * @param {string} dir - Directory path to scan for videos
 * @param {string} basePath - Base path for relative path construction
 * @returns {Array} Array of video objects
 */
function scanVideosInFolder(dir, basePath) {
  const videos = [];
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (VIDEO_EXTENSIONS.includes(ext)) {
          const relativePath = path.join(basePath, item.name);
          videos.push({
            id: Buffer.from(relativePath).toString('base64'),
            name: item.name.replace(ext, ''),
            filename: item.name,
            path: relativePath
          });
        }
      }
    }
    
    // Sort videos naturally (1, 2, 10 instead of 1, 10, 2)
    videos.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  } catch (err) {
    console.error('Error scanning folder:', err);
  }
  
  return videos;
}

/**
 * API endpoint to retrieve all available courses and videos
 * @route GET /api/courses
 * @returns {Array} Array of course objects with their videos
 */
app.get('/api/courses', (req, res) => {
  const courses = scanVideos(VIDEOS_FOLDER);
  res.json(courses);
});

/**
 * API endpoint to update the videos folder path
 * @route GET /api/set-folder
 * @param {string} path - Query parameter containing the folder path
 * @returns {Object} Success status and the new folder path
 */
app.get('/api/set-folder', (req, res) => {
  const folderPath = req.query.path;
  if (folderPath && fs.existsSync(folderPath)) {
    VIDEOS_FOLDER = folderPath;
    app.use('/videos', express.static(VIDEOS_FOLDER));
    res.json({ success: true, path: VIDEOS_FOLDER });
  } else {
    res.status(400).json({ error: 'Invalid folder path' });
  }
});

/**
 * API endpoint to get the current videos folder path
 * @route GET /api/current-folder
 * @returns {Object} The absolute path to the current videos folder
 */
app.get('/api/current-folder', (req, res) => {
  res.json({ path: path.resolve(VIDEOS_FOLDER) });
});

/**
 * Start the Express server and display welcome message
 */
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════╗
  ║       Course Player is running!           ║
  ║                                           ║
  ║   Open: http://localhost:${PORT}             ║
  ║                                           ║
  ║   Videos folder: ${VIDEOS_FOLDER.padEnd(22)}║
  ╚═══════════════════════════════════════════╝
  `);
});
