const mongoose = require('mongoose');

const url =
  "mongodb+srv://Kaushal:Kaushal31@cluster0.0okhro7.mongodb.net/myapp?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log('db is connected !!!');
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Student = new mongoose.model("Student",studentSchema)

// addOne :-
const addStudent =()=>{
    const std = new Student({name:"Kaushal",email:"kaushal@gmail.com",password:"kaushal123"})

    std.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

addStudent()

// addMany :-

const addManyStudent = () =>{
  const std1 = new Student({name:"Jay",email:"Jay@gmail.com",password:"Jay123"})
  const std2 = new Student({name:"Ayushi",email:"Ayushi@gmail.com",password:"Ayushi123"})
  const std3 = new Student({name:"Ram",email:"Ram@gmail.com",password:"Ram123"})
  
  Student.insertMany([std1,std2,std3]).then(result =>{
    console.log(result);
  }).catch(err =>{
    console.log(err);
  })

}

addManyStudent()

//  View :-

const viewStudents = async () =>{

        // Student.find().then(result=>{
        //     console.log(result);
        // }).catch(err=>{
        //     console.log(err);
        // })

      try {
        const result = await Student.find();
        console.log(result);
      } catch (error) {
        console.log(error);
      }

}

viewStudents()

