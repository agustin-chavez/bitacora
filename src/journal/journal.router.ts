import express, { Router } from 'express';
import JournalController from './journal.controller';
import JournalService from './journal.service';

const router: Router = express.Router();
const service: JournalService = new JournalService();
const controller: JournalController = new JournalController(service);

router.get('/', controller.list);

export default router;
