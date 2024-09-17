const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/taskController');
const { storeForm } = require('../controller/formController');
const { storeProfissional } = require('../controller/profissionalController');
const { selectProf } = require('../controller/selectProfController');

router.post('/store/task', storeTask);
router.post('/store/form', storeForm);
router.post('/store/profissional', storeProfissional);
router.get('/store/selectProf', selectProf);

module.exports = router;
