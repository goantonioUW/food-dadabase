module.exports = function(sequalize, DataTypes) {
    const List = sequelize.define("List", {
        // Username who enters adds the ingredient to list, so we can join with user list.
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
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
}