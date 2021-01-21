module.exports = function(sequelize, Datatypes) {
  const Favorites = sequelize.define("Favorites", {
    // Username who favorited Recipe
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // Store Recipe ID to create link back to recipe
    recipeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Store Recipe name to build front end link
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Store joke Setup to create Link back to joke
    jokeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Store joke ID to build front end link
    jokeId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
