const Router = require('express'); // import router from express
const router = new Router(); // to create a new object from this router 

// import all child routers
const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

// указываем дочерние роутеры:
router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);


module.exports = router; // export to use
