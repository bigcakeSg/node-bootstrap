import User from '../models/user.model.js';

export const getUserList = async (_, res) => {
  try {
    const users = await User.find()
      // .select('firstName surName')
      // .skip(0) // first item
      // .limit(300) // number of items
      .sort('surName');

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.userId
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const setUser = async (req, res) => {
  try {
    const user = req.body;

    const userExists = await User.exists({
      email: user.email
    });

    if (!userExists) {
      const newUser = new User(user);
      await newUser.save();

      res.status(200).json(newUser);
    } else {
      res.status(409).json('User already exists!');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.body._id
    });

    if (!user) res.status(404).json('User does not exist!');
    else {
      const patchedUser = await User.findByIdAndUpdate(user, req.body, {
        new: true
      });

      res.status(200).json(patchedUser);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.userId });

    res.status(200).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
};
