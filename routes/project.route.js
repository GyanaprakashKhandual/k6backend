const express = require('express');
const router = express.Router();
const {
  createProject,
  getMyProjects,
  getProjectById,
  updateProjectData,
} = require('../controllers/project.controller');
const { protect } = require('../middlewares/auth.middleware');

router.post('/create', protect, createProject);              // Create new project
router.get('/my-projects', protect, getMyProjects);          // Get user's projects
router.get('/:id', protect, getProjectById);                 // Get single project
router.put('/:id', protect, updateProjectData);              // Update pasted data

module.exports = router;
