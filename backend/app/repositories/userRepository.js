const { Users } = require('../models');

module.exports = {

	findAll() {
		return Users.findAll();
	},

	create(createArgs) {
		return Users.create(createArgs);
	},

	findUserByEmail(email) {
		return Users.findOne({
			where: {
				email
			}
		});
	},

	UpdateToken(refreshToken, id) {
		Users.update({
			refresh_token: refreshToken,
		}, {
			where: {
				id
			}
		});
	},

	getTotalUser() {
		return Users.count();
	},
};