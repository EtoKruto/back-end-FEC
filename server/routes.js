const router = require('express').Router();
const controllers = require('./controllers/index.js');

// -- Compression -- //
router.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

// -- Overview -- //
router.get('/reviews', controllers.overview.overview);
router.get('/products/:product_id', controllers.overview.products);
router.get('/products/:product_id/styles', controllers.overview.styles);

// -- Related Items -- //
router.get('/products/:product_id/related', controllers.relatedItems.related);

// -- Questions and Answers -- //
router.get('/qa/questions', controllers.qanda.questions);
router.put('/qa/questions/:question_id/helpful', controllers.qanda.setQHelpful);
router.put('/qa/answers/:answer_id/helpful', controllers.qanda.setAHelpful);
router.post('/qa/questions', controllers.qanda.addQuestions);
router.post('/qa/questions/:question_id/answers', controllers.qanda.addAnswers);

// -- Ratings and Reviews -- //
router.get('/reviews/meta/', controllers.reviews.meta);
router.post('/reviews', controllers.reviews.addReview);
router.put('/reviews/:review_id/helpful', controllers.reviews.updateHelpful);


module.exports = router;




