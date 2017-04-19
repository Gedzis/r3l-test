import express from 'express';
import promise from 'bluebird';
import models from '../models';
import {
    handleError,
    NotFoundError
} from './common';
import logger from '../logger';
const router = express.Router();

router.get('/task/', (req, res) => {
    let order = null;
    if (req.query.sort_field && req.query.sort_order) {
        order = [
            [req.query.sort_field, req.query.sort_order]
        ]
    }
    promise.try(() => {
        return models.task.findAll({
            order
        })
    }).then((result) => {
        return res.json(result);
    }).catch(function(error) {
        logger.error(`list tasks error`, error);
        res.status(500).send({});
    });

});


//Application type JSON
//{"name":"Jonas", "dueDate":"2014-08-15", "priority":4}
router.post('/task/create', (req, res) => {
    promise.try(() => {
        return models.task.build(req.body).save()
    }).then((result) => {
        return res.json(result);
    }).catch(function(error) {
        logger.error(`create task error`, error);
        return handleError(req, res, error);
    });

});


//Update
router.put('/task/update/:id', (req, res) => {
    promise.try(() => {
        const id = req.params.id;
        return models.task.findById(id).then(instance => {
            if (!instance) {
                throw new NotFoundError();
            }
            let values = req.body;
            //Prevent from ID update
            delete values.id;

            return instance.update(values);
        })
    }).then((result) => {
        return res.json(result);
    }).catch(function(error) {
        logger.error(`create task error`, error);
        return handleError(req, res, error);
    });

});

//Delete
router.delete('/task/destroy/:id', (req, res) => {
    promise.try(() => {
        const id = req.params.id;
        return models.task.findById(id).then(instance => {
            if (!instance) {
                throw new NotFoundError();
            }
            return instance.destroy();
        })
    }).then((result) => {
        return res.json(result);
    }).catch(function(error) {
        logger.error(`create task error`, error);
        return handleError(req, res, error);
    });

});


export default router;
