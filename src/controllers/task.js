import { response } from 'express';
import Task from '../models/Task';

export const addTask = async (req, res = response) => {

    const { title, description } = req.body;

    const task = new Task({ title, description });

    try {

        const newTask = await task.save();

        res.status(200).json({
            ok: true,
            newTask
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Error, llame al administrador'
        })

    }

}

export const getTasks = async (req, res = response) => {

    const tasks = await Task.find().sort({ date: -1 });

    res.status(200).json({
        ok: true,
        tasks
    })

}

export const deleteTask = async (req, res = response) => {

    const id = req.params.id;
    try {

        const task = await Task.findOne({ _id: id });

        if (task) {

            try {

                const taskDeleted = await Task.findByIdAndDelete(task._id);

                res.status(201).json({
                    ok: true
                })

            } catch (error) {

                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Error, llame al administrador'
                })

            }

        } else {
            res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, llame al administrador'
        })
    }

}

export const changeStatus = async (req, res = response) => {

    const id = req.params.id;

    try {

        const task = await Task.findOne({ _id: id });

        if (task) {

            try {

                const newTask = await Task.findByIdAndUpdate(id, { status: !task.status });

                res.status(200).json({
                    ok: true,
                    newTask
                })

            } catch (error) {

                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Error, llame al administrador'
                })

            }

        } else {

            res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            })

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, llame al administrador'
        })
    }

}

export const getTaskId = async (req, res = response) => {

    const id = req.params.id;
    try {
        const task = await Task.findById({ _id: id });
        if (task) {
            res.status(200).json({
                ok: true,
                task
            })
        } else {
            res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, llame al administrador'
        })
    }

}