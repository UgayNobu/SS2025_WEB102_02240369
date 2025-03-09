const asyncHandler = require('../middleware/async');

exports.getComments = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: 'Get all comments' });
});

exports.createComment = asyncHandler(async (req, res, next) => {
    res.status(201).json({ success: true, data: 'Comment created' });
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: `Comment ${req.params.id} deleted` });
});
