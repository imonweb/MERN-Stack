const asyncHandler = require('express-async-handler')
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals'})
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req,res) => {
 if( !req.body ){
   res.status(400)
   throw new Error('Please add a text fields')
   }
  res.status(200).json({ message: 'Set goals'})
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal =  asyncHandler(async (req,res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async  (req,res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}