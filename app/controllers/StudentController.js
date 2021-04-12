// const getTableData = (req, res, db) => {
//     db.select('*').from('testtable1')
//       .then(items => {
//         if(items.length){
//           res.json(items)
//         } else {
//           res.json({dataExists: 'false'})
//         }
//       })
//       .catch(err => res.status(400).json({dbError: 'db error'}))
//   }
  
//   const postTableData = (req, res, db) => {
//     const { first, last, email, phone, location, hobby } = req.body
//     const added = new Date()
//     db('testtable1').insert({first, last, email, phone, location, hobby, added})
//       .returning('*')
//       .then(item => {
//         res.json(item)
//       })
//       .catch(err => res.status(400).json({dbError: 'db error'}))
//   }
  
//   const putTableData = (req, res, db) => {
//     const { id, first, last, email, phone, location, hobby } = req.body
//     db('testtable1').where({id}).update({first, last, email, phone, location, hobby})
//       .returning('*')
//       .then(item => {
//         res.json(item)
//       })
//       .catch(err => res.status(400).json({dbError: 'db error'}))
//   }
  
//   const deleteTableData = (req, res, db) => {
//     const { id } = req.body
//     db('testtable1').where({id}).del()
//       .then(() => {
//         res.json({delete: 'true'})
//       })
//       .catch(err => res.status(400).json({dbError: 'db error'}))
//   }




const getqueryreply =(req, res, dbconnect)=>{

  const mentoremail=req.body.mentoremail

  console.log(mentoremail)

  dbconnect.query(
    "SELECT *  FROM mentorreplies WHERE mentoremail=?",
    [mentoremail],
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
  








  const poststudentMessage = (req, res, dbconnect) => {  
    // const { email,subject,message } = req.body


    

console.log(req.body.values)


const data = req.body.values

const email = data.email
const messagesubject=data.subject
const messagetext=data.messagetext
const messageid = data.messageid

const createdAt= new Date()
const updatedAt = ''

dbconnect.query(
    "INSERT INTO studentqueries (messageid,email,messagesubject,messagetext, createdAt,updatedAt) VALUES (?,?,?,?,?,?)",
    [messageid,email,messagesubject,messagetext, createdAt,updatedAt],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // res.send("Values Inserted");
        dbconnect.query(
          "SELECT *  FROM personaldata WHERE interest1 = ?  or interest2 = ? or interest3 = ? or interest4 = ? or interest5 = ?",
          [messagesubject,messagesubject,messagesubject,messagesubject,messagesubject],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
               res.send("Values Inserted");
              // res.send(result);


              const replytext=''

              const replied='N'
            result.map((item => {
              console.log(item.email)

      
  const mentoremail=item.email
              dbconnect.query(
                "INSERT INTO mentorreplies (messageid,studentemail,messagesubject,messagetext,mentoremail, replytext,replied,createdAt,updatedAt) VALUES (?,?,?,?,?,?,?,?,?)",
                [messageid,email,messagesubject,messagetext,mentoremail,replytext,replied, createdAt,updatedAt],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  }else{

                      console.log(result);


                  }
                }
              )
              



            }))









              // console.log(result)
              
            }
          }
        );
        
      }
    }
  );



  }

 



  
  module.exports = {
    // getTableData,
    // postTableData,
    poststudentMessage,
    // deleteTableData

    getqueryreply 
  }