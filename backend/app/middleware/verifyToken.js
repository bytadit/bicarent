const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const crypto = require('crypto');


module.exports = {
    async verifyToken(req, res, next) {
        try {
            const secretKey = crypto.randomBytes(32).toString('hex');
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];

            const tokenPayload = jwt.verify(
                token,
                process.env.JWT_SIGNATURE_KEY || secretKey
            );

            req.user = await Users.findByPk(tokenPayload.id);
            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({
                message: "Unauthorized",
            });
        }
    }

}