const userService = require("../service/user.js");

async function getAllUser(req, res) {
  try {
    const rows = await userService.getAllUser();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting users",
      body: error.message,
    });
  }
}

async function createUser(req, res){
  console.log(req.body);
  const { name, email, password } = req.body;

  try{
    await userService.createUser(name, email, password);

    res.status(201).json({ message: "Sucess" })
  } catch(error) {
    res.status(500).send({
      message: 'Error adding user',
      error: error.message
    })
  }
}

async function updateUser(req, res){

  try{
    const { id } = req.params;

    const { name, email, password } = req.params;

    await userService.updateUser(name, email, password);

    res.status(204).json('Sucess');

  } catch {
    res.status(500).send({
      message: "Error updating user",
      body: error.message
    })

  }
}

async function deleteUser(req, res){

}

module.exports = {
  getAllUser,
  createUser,
};
