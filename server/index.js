const express = require('express')
const app = express()
const mysql=require('mysql')



const cors=require('cors')
const bodyParser=require("body-parser")
const db=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'',
    database:'reporting_db'
})
//required for every app
app.use(cors())
app.use(express.json()) // to return json form the front to get success resut otherwise undefined
app.use(bodyParser.urlencoded({extended:true}))//required to avoid read property param of undefined



// app.put("/update", (req, res) => {
//     const id = req.body.id;
//     const wage = req.body.wage;
//     db.query(
//       "UPDATE employees SET wage = ? WHERE id = ?",
//       [wage, id],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send(result);
//         }
//       }
//     );
//   });
app.get("/api/get",(req,res)=>{
    const sqlSelect="SELECT * FROM authors"
   db.query(sqlSelect,(err,result)=>{
       res.send(result);
});

});
app.delete("api/delete/:id",(req,res)=>{
    const id=req.params.id;
    const sqlDelete="DELETE FROM authors WHERE id=?";
    db.query(sqlDelete,id,(err,result)=>{
        if (err){
            console.log("----------------------",err)

        } else{
            res.send(result)
        }

})
});
app.post("/api/insert", function(req, res) {

    const id=req.body.id;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const birthDate=req.body.birthDate;
    const added=req.body.added;


    const sqlInsert="INSERT INTO  authors values(?,?,?,?,?,?)"
   db.query(sqlInsert,[id,firstName,lastName,email,birthDate,added],(err,result)=>{
        console.log(err);
    })
})

app.listen(3001, () => {
})