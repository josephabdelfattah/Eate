const connection = require("../config/connection.js");

// Creates object 
const orm = {
    // Action SelectAll
    selectAll: function (tableName, cb) {
        const queryString = " SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // Action InsertOne 
    insertOne: function (tableName, column, value, cb) {
        const queryString = `INSERT INTO ${tableName} (${column}, devoured) VALUES ("${value}", 0);`
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    // Action UpdateOne
    updateOne: function (tableName, column, condition, value, cb) {
        const queryString = `UPDATE ${tableName} SET ${column}=${condition} WHERE id=${value};`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;