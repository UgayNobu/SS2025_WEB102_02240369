const express = require('express');
const { getComments, getComment, createComment, updateComment, deleteComment } = require('../controllers/commentController');
const asyncHandler = require('../middleware/async');

const router = express.Router();

router.route('/')
    .get(asyncHandler(getComments))
    .post(asyncHandler(createComment));

router.route('/:id')
    .get(asyncHandler(getComment))
    .put(asyncHandler(updateComment))
    .delete(asyncHandler(deleteComment));

module.exports = router;

