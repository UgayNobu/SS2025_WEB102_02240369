const asyncHandler = require('../middleware/async');

exports.getFollowers = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: 'Get all followers' });
});

exports.addFollower = asyncHandler(async (req, res, next) => {
    res.status(201).json({ success: true, data: 'Follower added' });
});

exports.removeFollower = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: `Follower ${req.params.id} removed` });
});
