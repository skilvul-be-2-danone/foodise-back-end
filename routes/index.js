const express = require('express');
const router = express.Router()

const authRoute = require('./auth.router')
const foodAdminRoute = require('./food.admin.router')
const foodMemberRoute = require('./food.member.router')

router.use("/api", authRoute)
router.use("/api", foodAdminRoute)
router.use("/api", foodMemberRoute)


module.exports = router;