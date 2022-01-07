
const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "WPTProject1",

}

async function connectionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("CONNECTION SUCCESS!!!");
    await connection.endAsync();

}
//connectionCheck();

async function adduser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `insert into message(username,password) values(?,?);`
    await connection.queryAsync(sql, [user.username, user.password]);
    await connection.endAsync();
    console.log("Record added!!!");
}

const user = { username: "santhosh ", password: " pass" };
//adduser(user);

async function selectAllUsers(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `select * from message;`
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log(list);
    return list;
}

//selectAllUsers();

module.exports = { selectAllUsers, adduser }


