/*const {Ta} = require('../models/taskModels')

module.exports.getTA = async (req, res) =>{
    const text = await Ta.find()
    res.send(text)
}

module.exports.saveTA = async (req, res) => {
    const { task, selectedOptions } = req.body;
    Ta.create({ task, selectedOptions })
    .then((data) => {
      console.log("Added Successfully..");
      console.log(data);
      res.send(data);
    })
}

module.exports.updateTA = async (req,res) =>{
    const{_id,task, selectedOptions} = req.body
    Ta
    .findByIdAndUpdate(_id,task, selectedOptions)
    .then(() => res.send("Updates Successfully..."))
    .catch((err) => console.log(err))
}


module.exports.deleteTA = async (req,res) =>{
    const{_id} = req.body
    Ta
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}
*/
