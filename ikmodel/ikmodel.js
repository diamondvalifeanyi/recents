const footballDB = require("../ikdatabase.json");

const allTeams = () => {
  return new Promise((resolve, reject) => {
    resolve(footballDB);
  });
};

module.exports = allTeams;