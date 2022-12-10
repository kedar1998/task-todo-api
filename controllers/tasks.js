const Task = require("../models/Task")

const getAllTasks = async (req,res) =>{
    try{
        const task = await Task.find({});
        res.status(200).json({
            status: "Success",
            result: task.length,
            data: task
        });
    } catch (err){
        res.status(500).json({
            error: err
        })
    }
}

const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body);
    
        res.status(201).json({
            status: "Success",
            data: task
        });
    } catch (err){
        res.status(500).json({
            error: err
        })
    }

}


const getTask = async (req,res) =>{
    try{
        const task = await Task.findById(req.params.id);

        res.status(200).json({
            status: "Success",
            data: task
        })
    } catch (err){
        res.ststus(400).json({
            error: err,
        })
    }
    res.json({
        status: "Success",
        message: req.params.id
    });
}

const updateTask = async (req,res) =>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: "Success",
            data: task
        })
    } catch(err){
        res.json({
            error: err,
        })
    }
}


const deleteTask = async (req,res) =>{
   try{
        const task = await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "Success",
            data: task,
        })

   } catch (err){
    res.status(400).json({
        error: err
    })
   }
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}