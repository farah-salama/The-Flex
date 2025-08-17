const express = require('express');
const router = express.Router();
const mockProperties = require('../data/mockProperties');

// Get all properties
router.get('/', (req, res) => {
  try {
    res.json({
      status: 'success',
      data: mockProperties
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch properties'
    });
  }
});

// Get property by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const property = mockProperties.find(prop => prop.id === id);
    
    if (!property) {
      return res.status(404).json({
        status: 'error',
        message: 'Property not found'
      });
    }
    
    res.json({
      status: 'success',
      data: property
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch property'
    });
  }
});

module.exports = router; 