const { default: pool } = require("../configs/connectDB")

let getAllUsers = async (req, res) => {
    let [row] = await pool.execute('select * from users')
    return res.status(200).json({
        message: "ok",
        data: row
    })
}

let createUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    if (!firstName || !lastName || !email || !address) {
        return res.status(404).json({
            message: "invalid"
        })
    }
    await pool.execute('insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address])
    return res.status(200).json({
        message: "ok"
    })

}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(404).json({
            message: "invalid data"
        })
    }
    await pool.execute('update users set firstName= ?, lastName= ?, email= ?, address= ? where id= ?', [firstName, lastName, email, address, id])
    return res.status(200).json({
        message: "update"
    })
}


let deleteUser = async (req, res) => {
    // let { id } = req.body
    let id = req.params.id
    if (!id) {
        return res.status(404).json({
            message: "invalid data"
        })
    }
    await pool.execute('delete from users where id = ?', [id])
    return res.status(200).json({
        message: "deleted"
    })
}


module.exports = {
    getAllUsers, createUser, updateUser, deleteUser
}