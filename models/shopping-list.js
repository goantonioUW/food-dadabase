module.exports = function(sequelize, DataTypes) {
  const List = sequelize.define("List", {
    // UserID who enters adds the ingredient to list, so we can join with user list.
    username: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Ingredient Name
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Amount of the ingredient on list
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Measurement type (teaspoons, tablespoons, cups, lbs, etc.)
    measurement: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Date ingredient was added to list
    addedDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      isDate: true
    }
  });
  return List;
};
