const connectDatabase = require('../config/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const registerUser = async (user) => {
    const pool = await connectDatabase();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userId= uuidv4();
    const [result] = await pool.query(
        'INSERT INTO users (id, email, password, name, isAdmin) VALUES (?, ?, ?, ?, ?)',
        [userId, user.email, hashedPassword, user.name, user.isAdmin || false]
    );

    return userId;
};

const findUserByEmail = async (email) => {
    const pool = await connectDatabase();
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};

const findUserById = async (id) => {
    const pool = await connectDatabase();
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const updateUser = async (id, updates) => {
    const pool = await connectDatabase();

    const fields = [];
    const values = [];

    if (updates.email) {
        fields.push('email = ?');
        values.push(updates.email);
    }
    if (updates.name) {
        fields.push('name = ?');
        values.push(updates.name);
    }
    if (updates.isAdmin !== undefined) {
        fields.push('isAdmin = ?');
        values.push(updates.isAdmin);
    }

    values.push(id);

    if (fields.length === 0) {
        throw new Error('No fields to update');
    }

    const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
    await pool.query(query, values);
};

const toggleAdminStatus = async(id)=>{
    const pool = await connectDatabase();

    // Retrieve the current isAdmin status
    const [rows] = await pool.query('SELECT isAdmin FROM users WHERE id = ?', [id]);

    if (rows.length === 0) {
        throw new Error('User not found');
    }

    const currentStatus = rows[0].isAdmin;
    const newStatus = !currentStatus;

    await pool.query('UPDATE users SET isAdmin = ? WHERE id = ?', [newStatus, id]);

    return newStatus;
}

const deleteUser = async (id) => {
    const pool = await connectDatabase();
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
};

module.exports = {
    registerUser,
    findUserByEmail,
    findUserById,
    updateUser,
    deleteUser,
    toggleAdminStatus
};
