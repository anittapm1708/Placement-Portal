const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const studentSchema=new Schema({
    fullname:{
        type:String
    },
    
    studentid:{
        type:String
    },

    applied_jobs:[{heading:String,
        role:String,
        database_id:String}],

    class:{
        type:String
    },
    semester:{
        type:Number
    },
    branch:{
        type:String
    },
    emailid:{
        type:String
    },
    mobno:{
        type:Number
    },
    address:{
        type:String
    },
    dob:{
        type:Date
    },
    street:{
        type:String
    },
    city:{
        type:String
    },
    district:{
        type:String
    },
    pincode:{
        type:Number
    },
    cgpa:{
        type:Number
    },
    noofbacklogs:{
        type:Number
    },
    historyofbacklogs:{
        type:Boolean
    },
    cocubesscore:{
        type:Number
    },
    amcatscore:{
        type:Number
    },
    tenth:{
        type:Number
    },
    twelth:{
        type:Number
    },
    resumelink:{
        type:String
    }

    
    
})
module.exports=mongoose.model('Students',studentSchema);