// Filename: api-routes.js
const api = require("./api");
// Initialize express router
let router = require('express').Router();
// Set default API response and routes

router.route('/register')
    .post(api.register)

router.route('/login')
.post(api.Login)
// Export API routes
module.exports = router;