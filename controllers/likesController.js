const asyncHandler = require('../middleware/async');

exports.getLikes = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: 'Get all likes' });
});

exports.createLike = asyncHandler(async (req, res, next) => {
    res.status(201).json({ success: true, data: 'Like added' });
});

exports.deleteLike = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: `Like ${req.params.id} removed` });
});
