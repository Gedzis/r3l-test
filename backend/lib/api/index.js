import express from 'express';
import task from './task';

const router = express.Router();
router.use(task);


export default router;
