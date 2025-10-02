const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
	addRttResult,
	clearRttResults,
	sortRttResults,
	addOtwResult,
	clearOtwResults,
	sortOtwResults,
	addScResult,
	clearScResults,
	sortScResults,
	migrateGuestData
} = require('../controllers/appControllers.js');

// Middleware
const {isAuthenticated} = require('../middleware/auth.js');

// Add a Reaction Time Test result to a user's User.rttResults array
router.post('/addRttResult', isAuthenticated, addRttResult);

// Clear a user's Reaction Time Test results history
router.post('/clearRttResults', isAuthenticated, clearRttResults);

// Sort a user's Reaction Time Test results history
router.post('/sortRttResults', isAuthenticated, sortRttResults);

// Add an Off The Wall result to a user's User.otwResults array
router.post('/addOtwResult', isAuthenticated, addOtwResult);

// Clear a user's Off The Wall results history
router.post('/clearOtwResults', isAuthenticated, clearOtwResults);

// Sort a user's Off The Wall results history
router.post('/sortOtwResults', isAuthenticated, sortOtwResults);

// Add an Speed Clicker result to a user's User.scResults array
router.post('/addScResult', isAuthenticated, addScResult);

// Clear a user's Speed Clicker results history
router.post('/clearScResults', isAuthenticated, clearScResults);

// Sort a user's Speed Clicker results history
router.post('/sortScResults', isAuthenticated, sortScResults);

// Merge guest-mode data into an authenticated account
router.post('/migrateGuestData', isAuthenticated, migrateGuestData);

module.exports = router;
