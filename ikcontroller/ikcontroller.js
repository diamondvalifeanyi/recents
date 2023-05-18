const allTeams = require("../ikmodel/ikmodel");

const totalTeams = async () => {
  try {
    teams = await allTeams();
    if (!teams) {
      console.log("error");
    } else {
      return teams;
      console.log(teams);
    }
  } catch (error) {}
};

module.exports = totalTeams;