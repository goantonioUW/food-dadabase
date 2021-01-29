module.exports = function(sequelize, DataTypes) {
  const Search = sequelize.define("Search", {
    // UserID who searched for Recipe
    username: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Store Search ID to build front end link
    searchId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Store search name to create link back to search
    searchName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Search;
};
