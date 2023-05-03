const {Activity} = require('../models/taskModels')

module.exports.getActivity = async (req, res) =>{
    const text = await Activity.find()
    res.send(text)
}

module.exports.saveActivity = async (req, res) => {
    const {text} = req.body
     Activity
     .create({text})
     .then((data) => { 
        console.log("Added Successfully..");
        console.log(data);
        res.send(data)
     })
}

module.exports.updateActivity = async (req,res) =>{
    const{_id, text} = req.body
    Activity
    .findByIdAndUpdate(_id,{text})
    .then(() => res.send("Updates Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteActivity = async (req,res) =>{
    const{_id} = req.body
    Activity
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}

