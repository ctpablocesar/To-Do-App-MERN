import { Router } from 'express';
import { check } from 'express-validator';

import { addTask, changeStatus, deleteTask, getTaskId, getTasks } from '../controllers/task.js';
import { validarCampos } from '../middelwares/validarCampos.js';

const taskRouter = Router();

taskRouter.post(
    '/',
    [
        check('title', 'El titulo de la tarea es obligatorio').not().isEmpty(),
        check('description', 'La descripcion de la tarea es obligatoria').not().isEmpty(),
        validarCampos
    ],
    addTask
);

taskRouter.get('/', getTasks);

taskRouter.get('/:id', getTaskId);

taskRouter.delete('/:id', deleteTask);

taskRouter.put('/:id', changeStatus);

export default taskRouter;