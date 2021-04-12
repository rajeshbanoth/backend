const postqueryreply =(req, res, dbconnect)=>{

    const replydata=req.body.data
    const replytext=replydata.replytext
    const mentoremail=replydata.mentoremail
    const  studentemail = replydata.studentemail
    const  messageid = replydata.messageid
    const updatedAt = new Date()
  const replied = 'Y'
    console.log(replied)
  
    dbconnect.query(
      "UPDATE  mentorreplies   set replytext=? ,updatedAt=? ,replied=? WHERE mentoremail=? and studentemail=? and messageid=? " ,
      [replytext,updatedAt,replied,mentoremail,studentemail,messageid],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        else{
  
          res.send(result)
  
        }
    
      
  }
    )
  }



  
const getqueryreply =(req, res, dbconnect)=>{

    const studentemail=req.body.studentemail

    const replied ='Y'
  
    console.log(studentemail)
  
    dbconnect.query(
      "SELECT *  FROM mentorreplies WHERE studentemail=? and replied=?",
      [studentemail,replied],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        else{
  
          res.send(result)
  
        }
    
      
  }
    )
  }


   
  module.exports = {

    postqueryreply,
    getqueryreply
    
  
  }

  