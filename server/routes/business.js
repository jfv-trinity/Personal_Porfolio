let express = require('express');
let router = express.Router();

let businessController = require('../controllers/business');

/* GET Component-list page. READ */
router.get('/', businessController.DisplayBusinessList);
  
/* GET Display Add page. CREATE  */
router.get('/add', businessController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add', businessController.ProcessAddPage);

/* GET Display Edit page. UPDATE */
router.get('/edit/:id', businessController.DisplayEditPage);

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', businessController.ProcessEditPage);

/* GET process the Delete page. DELETE */
router.get('/delete/:id', businessController.ProcessDeletePage);


module.exports = router;