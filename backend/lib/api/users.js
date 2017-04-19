import express from 'express';
// import models from '../models';
// import logger from '../logger';
// import {
//     listAPIEndpoint,
//     createAPIEndpoint,
//     getAPIEndpoint,
//     updateAPIEndpoint
// } from './common';

const router = express.Router();


// //list
// router.get('/users/', listAPIEndpoint(models.user, null, true));
//
// //delete
// router.delete('/users/:id', function(req, res) {
//     models.user.findById(req.params.id)
//         .then(function(user) {
//             if (user) {
//                 return note.destroy()
//                     .then(function() {
//                         res.status(200).json({});
//                     });
//             }
//
//             res.status(404).json({});
//         })
//         .catch(function(err) {
//             logger.error('error destroying note', err);
//             res.status(500).json({});
//         });
// })
//
// router.post('/users/', createAPIEndpoint(models.user, (values, req) => {
//     return models.user.build(values).save()
//         .then(obj => {
//             return obj.reload({
//                 include: models.user.getDefaultIncludes()
//             });
//         })
// }));
// router.get('/users/:id', getAPIEndpoint(models.user));
// router.put('/users/:id', updateAPIEndpoint(models.user));




export default router;
