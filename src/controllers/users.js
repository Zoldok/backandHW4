// const { request, response } = require("express");
const User = require('../models/user')

const getUsers = (request, response) => {
return User.find({}).then((data) => {
  response.status(200).send(data)
})
}

const getUser = (request, response) => {
    const { user_id } = request.params
    return User.findById(user_id).then(
      (user) => {
        response.status(200), response.send(user)
      }
    ).catch(e => response.status(500).send(e.message))
    
}

const createUser = (request, response) => {
  //Create new user
  // response.status(201), 
  // response.send(request.body)
  return User.create({...request.body}).then(
    (user) => {
      response.status(201).send(user)
    }
  ).catch(e => response.status(500).send(e.message))
}

const updateUser = (request, response) => {
  //Update user
  const { user_id } = request.params
  return User.findByIdAndUpdate(user_id, {...request.body}).then(
    (user) => {
      response.status(200), response.send(user)
    }
  ).catch(e => response.status(500).send(e.message))
}

const deleteUser = (request, response) => {
  //Dekete new user
  const { user_id } = request.params
  return User.findByIdAndDelete(user_id).then(
    (user) => {
      response.status(200), response.send("Success")
    }
  ).catch(e => response.status(500).send(e.message))
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
