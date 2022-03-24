import express from "express";

const congifViewEngine = (app) => {
    // cho phép người dùng truy cập vào file
    app.use(express.static('./src/public'))
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default congifViewEngine;