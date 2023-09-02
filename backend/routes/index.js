const router = require('express').Router();
const { auth } = require('../middlewares/auth');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));

router.use(auth);
router.use('/users', require('./users'));
router.use('/cards', require('./cards'));

module.exports = router;
