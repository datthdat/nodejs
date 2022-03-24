import pool from '../configs/connectDB'
import multer from 'multer'
import path from 'path'
let getHomePage = async (req, res) => {
    //logic here
    const [data, field] = await pool.execute('SELECT * FROM `users`');
    // console.log("field", field);
    return res.render("index.ejs", { dataApi: data })
}

let getDetailUser = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('SELECT * FROM `users` WHERE `id` = ?', [id])
    // return res.send()
    return res.render("detail.ejs", { dataUser: JSON.stringify(user) })
}

let createUser = async (req, res) => {
    let { firstName, lastName, email, sex, address } = req.body
    await pool.execute('insert into users (firstName, lastName, email, sex, address) values (?, ?, ?, ?, ?)', [firstName, lastName, email, sex, address])
    return res.redirect("/")
}

let deteteUser = async (req, res) => {
    let id = req.body.id
    await pool.execute('delete from users where `id` = ?', [id])
    return res.redirect("/")
}
let getDataUserEdit = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute("select * from users where id = ?", [id])
    res.render('update.ejs', { dataUser: user[0] })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body
    await pool.execute('update users set firstName= ?, lastName = ? , email = ? , address= ? where id = ?',
        [firstName, lastName, email, address, id])
    return res.redirect('/')
}

// let getUploadFile = async (req, res) => {
//     return res.render("uploadFile.ejs")
// }

// let handleUploadFile = async (req, res) => {
//     let profile_pic = req.body.profile_pic
//     console.log("data", req.body);
//     return res.send("upload")
// }

module.exports = {
    getHomePage, getDetailUser, createUser, deteteUser, getDataUserEdit, updateUser,
    // getUploadFile, handleUploadFile
}