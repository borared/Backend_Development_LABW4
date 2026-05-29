import * as UserModel from '../models/userModel.js';

export const getUsers = (req, res) => {
    const users = UserModel.getAllUsers();
    res.json(users);
};

export const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = UserModel.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = UserModel.addUser(name, email);
    res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const updated = UserModel.updateUser(id, { name, email });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
};

export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const success = UserModel.deleteUser(id);
    if (!success) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
};
