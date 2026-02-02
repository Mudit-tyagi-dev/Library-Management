import * as userService from './user.service.js'
export const getUsers = async (req, res) => {
  try {
      const users = await userService.getusers()
          res.status(200).json({users});
    }
     catch (err) {
      console.log(err);
    }
}
export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const newUser = await userService.createuser(userData);

    res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (err) {
    console.log(err); 
  }
};
// export const deleteUser = async (req, res) => {
//   try {
//     const userId = parseInt(req.params.id, 10);
//     await userService.deleteuser(userId);

//     res.status(200).json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (err) {
//     console.log(err); 
//   }
// };
export const getuserById = async (req, res) => {
  try {
    const user = await userService.getuserById(Number(req.params.id))
    res.status(200).json(user);

  } catch (err) {
    console.log(err);
  }
}