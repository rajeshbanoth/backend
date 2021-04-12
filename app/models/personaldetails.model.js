module.exports = (sequelize, Sequelize) => {
    const personaldata = sequelize.define("personaldata", {
        
        email:{
            type: Sequelize.STRING

        },
      
      proffession: {
        type: Sequelize.STRING
      },
      organisation:{
        type: Sequelize.STRING
  
      },
      experience:{
        type: Sequelize.STRING

      },
     
      interest1: {
        type: Sequelize.STRING
      },
      interest2: {
        type: Sequelize.STRING
      },
      interest3: {
        type: Sequelize.STRING
      },
      interest4: {
        type: Sequelize.STRING
      },
      interest5: {
        type: Sequelize.STRING
      },
      createdAt:{
          type:Sequelize.STRING
      },
      updatedAt:{
        type: Sequelize.STRING

      }

    });
  
    return personaldata;
  };
  