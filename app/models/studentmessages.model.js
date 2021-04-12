module.exports = (sequelize, Sequelize) => {
    const studentmessage = sequelize.define("studentqueries", {
        messageid:{
            type: Sequelize.STRING,
            primaryKey: true,
        
    
        },
        email:{
            type: Sequelize.STRING

        },
  
    messagesubject:{
        type: Sequelize.STRING,

    },

    messagetext:{
        type: Sequelize.STRING,

    },
      
   
      createdAt:{
          type:Sequelize.STRING
      },
      updatedAt:{
        type: Sequelize.STRING

      }

    });
  
    return studentmessage;
  };
  