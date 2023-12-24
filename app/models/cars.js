'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Cars extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	Cars.init({
		plate: DataTypes.STRING,
		manufacture: DataTypes.STRING,
		model: DataTypes.STRING,
		image: DataTypes.STRING,
		rentPerDay: DataTypes.INTEGER,
		capacity: DataTypes.INTEGER,
		description: DataTypes.STRING,
		availableAt: DataTypes.DATE,
		transmission: DataTypes.STRING,
		available: DataTypes.BOOLEAN,
		type: DataTypes.STRING,
		year: DataTypes.INTEGER,
		// type: DataTypes.STRING,
		// userCreate: DataTypes.STRING,
		// userUpdate: DataTypes.STRING,
		// userDelete: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Cars',
	});
	return Cars;
};