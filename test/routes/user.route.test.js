const { Router } = require('express');
const { registerUser, loginUser } = require('../controller/user.controller.test');
const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser)

const userRouter = router;
module.exports = { userRouter };
