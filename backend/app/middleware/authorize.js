const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const crypto = require('crypto');

module.exports = {
  async authorize(req, res, next) {
    try {
      const secretKey = process.env.JWT_SIGNATURE_KEY || crypto.randomBytes(32).toString('hex');

      // Check if the Authorization header is present
      const bearerToken = req.headers.authorization;
      if (!bearerToken) {
        return res.status(401).json({
          message: 'Unauthorized - Token missing',
        });
      }

      // Extract the token from the Authorization header
      const token = bearerToken.split('Bearer ')[1];

      // Verify the token
      const tokenPayload = jwt.verify(token, secretKey);

      // Retrieve user information from the database based on the user ID in the token
      const user = await Users.findByPk(tokenPayload.id);

      // Check if the user exists
      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized - User not found',
        });
      }

      // Set the user information on the request object for further use
      req.user = user;

      // Continue to the next middleware or route handler
      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({
        message: 'Unauthorized - Invalid token',
      });
    }
  },
};
