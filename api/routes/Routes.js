const taskBuilder = require("../controllers/Controller");
module.exports = (app) => {
  app
    .route("/Game")
    .get(taskBuilder.list_all_datas)
 
    
};
