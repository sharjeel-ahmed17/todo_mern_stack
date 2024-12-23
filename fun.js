import { promises as fs } from 'fs';
import path from 'path';

const folderPath = path.resolve('src/controllers');
// const fileNames = ['auth.route.js', 'course.route.js', 'todos.route.js', 'tasks.route.js', 'users.route.js'];
// const fileNames = ['auth.model.js', 'course.model.js', 'todos.model.js', 'tasks.model.js', 'users.model.js'];
const fileNames = ['auth.controller.js', 'course.controller.js', 'todos.controller.js', 'tasks.controller.js', 'users.controller.js'];

const routeTemplate = (name) => `
import express from "express";
const router = express.Router();

// Define your routes for ${name} here
router.get("/", (req, res) => {
  res.send("${name} route is working!");
});

export default router;
`;

const createRoutes = async () => {
  try {
    // Ensure the folder exists
    await fs.mkdir(folderPath, { recursive: true });
    console.log(`Folder ensured: ${folderPath}`);

    // Create files
    for (const fileName of fileNames) {
      const filePath = path.join(folderPath, fileName);
      const baseName = path.basename(fileName, '.route.js');

      // Check if file exists, if not create it
      try {
        await fs.access(filePath);
        console.log(`File already exists: ${fileName}`);
      } catch {
        // File does not exist; create it
        await fs.writeFile(filePath, routeTemplate(baseName), 'utf8');
        console.log(`Created file: ${fileName}`);
      }
    }
  } catch (error) {
    console.error('Error creating routes:', error);
  }
};

// Run the function
createRoutes();
