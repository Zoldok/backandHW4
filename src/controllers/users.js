const { request, response } = require("express");

const getUsers = (request, response) => {
  const { user_id } = request.params
  response.status(200), response.send(`User with id: ${user_id}`)
}

const getUser = (request, response) => {
  //Get user
}

const createUser = (request, response) => {
  //Create new user
}

const updateUser = (request, response) => {
  //Update user
}

const deleteUser = (request, response) => {
  //Dekete new user
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
