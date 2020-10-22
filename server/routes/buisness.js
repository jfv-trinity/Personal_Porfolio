let express = require('express');
let router = express.Router();

let buisnessController = require('../controllers/buisness');

/* GET Component-list page. READ */
router.get('/', buisnessController.DisplayBuisnessList);
  
/* GET Display Add page. CREATE  */
router.get('/add', buisnessController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add', buisnessController.ProcessAddPage);

/* GET Display Edit page. UPDATE */
router.get('/edit/:id', buisnessController.DisplayEditPage);

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', buisnessController.ProcessEditPage);

/* GET process the Delete page. DELETE */
router.get('/delete/:id', buisnessController.ProcessDeletePage);


module.exports = router;