const Project = require('../models/project.model');

// Create project with only name
exports.createProject = async (req, res) => {
  const { projectName } = req.body;

  if (!projectName) {
    return res.status(400).json({ message: 'Project name is required' });
  }

  try {
    const project = await Project.create({
      projectName,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all user's projects
exports.getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single project
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, user: req.user._id });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update pastedData in a project
exports.updateProjectData = async (req, res) => {
  const { pastedData } = req.body;

  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { pastedData },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
