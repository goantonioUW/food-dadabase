module.exports = function(sequelize, DataTypes) {
  const Favorites = sequelize.define("Favorites", {
    // UserID who favorited Recipe and joke
    username: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  return Favorites;
};
