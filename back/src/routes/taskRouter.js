const { Router } = require('express');
const router = Router();

// const { storeTask } = require('../controller/taskController');
const { storeForm } = require('../controller/formController');
const { storeProfissional } = require('../controller/profissionalController');
const { selectProf } = require('../controller/selectProfController');



/**
 * @swagger
 * /store/form:
 *  post:
 *     summary: Cadastro telegram
 *     responses:
 *       201:
 *          description: Sucesso!
 *          content:
 *             application/json:
 *               schema:
 *                  type: array
 *                  items:
 *                    type: object
 */
router.post('/store/form', storeForm);

/**
 * @swagger
 * /store/profissional:
 *  post:
 *     summary: Cadastro profissional
 *     responses:
 *       201:
 *          description: Sucesso!
 *          content:
 *             application/json:
 *               schema:
 *                  type: array
 *                  items:
 *                    type: object
 */
router.post('/store/profissional', storeProfissional);

/**
 * @swagger
 * /store/selectProf:
 *  get:
 *     summary: Busca do catálogo
 *     responses:
 *       200:
 *          description: Sucesso!
 *          content:
 *             application/json:
 *               schema:
 *                  type: array
 *                  items:
 *                    type: object
 */
router.get('/store/selectProf', selectProf);

module.exports = router;
