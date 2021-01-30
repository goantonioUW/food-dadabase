require("dotenv").config();

const options = {
  siteUrl: process.env.SITEURL || "https://localhost:8080/",
  mysqldb: process.env.DB_PASS,
  port: process.env.PORT || 8080,
  foodApi: process.env.EDEMAM_API,
  foodId: process.env.EDEMAM_ID
};

module.exports = key => options[key];
