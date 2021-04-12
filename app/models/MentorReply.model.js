module.exports = (sequelize, Sequelize) => {
    const MentorReply = sequelize.define("mentorreply", {

       
        messageid:{
            type: Sequelize.STRING,
           
    
        },
        studentemail:{
            type: Sequelize.STRING

        },
  
    messagesubject:{
        type: Sequelize.STRING,

    },

    messagetext:{
        type: Sequelize.STRING,

    },

    mentoremail:{
        type: Sequelize.STRING,
    },

  replytext:{

    type: Sequelize.STRING,
  },

    replied:{
        type: Sequelize.STRING,

    },


      createdAt:{
          type:Sequelize.STRING
      },
      updatedAt:{
        type: Sequelize.STRING

      }

    });
  
    return MentorReply;
  };
  