module.exports = function(sequelize, DataTypes) {
  const FavoriteJokes = sequelize.define("FavoriteJokes", {
    // User Name who favorited Joke
    username: {
      type: DataTypes.INTEGER,
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
  return FavoriteJokes;
};
