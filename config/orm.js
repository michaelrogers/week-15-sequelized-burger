const connection = require('./connection.js');

module.exports = {
    selectAll: (tableName, callback) => {
        connection.query(
            `SELECT * FROM ${tableName};`,
            (err, res) => {
                err ? console.log(err) : callback(res);
            }
        );
    },
    insertOne: (tableName, columns, values, callback) => {
        console.log(columns.toString(), values.toString())
        console.log(`INSERT INTO ${tableName} (${columns.toString()})
             VALUES (${values.toString()})`)
        connection.query(
            `INSERT INTO ${tableName} (${columns.toString()})` + 
             `VALUES ('${values.toString()}')`,
            (err, res) => {
                err ? console.log(err) : callback(res);
            }
        );

    },
    updateOne: (tableName, columns, values, whereColumn, whereValue, callback) => {
        //Create an array of strings of column names set equal to values
        //Later call toString method to transform array into one concatenated statement
        let columnValueArray = [];
        columns.map((column, i) => {
            columnValueArray.push(`${column}='${values[i]}'`);
        });
        connection.query(
            `UPDATE ${tableName}
             SET ${columnValueArray.toString()}
             WHERE ${whereColumn}=${whereValue}`,
            (err, res) => {
                err ? console.log(err) : callback(res);
            }
        );
    },
    deleteOne: (tableName, whereColumn, whereValue, callback) => {
        connection.query(
            `DELETE FROM ${tableName}
             WHERE ${whereColumn}=${whereValue}`,
             (err, res) => {
                 err ? console.log(err) : callback(res);
             }
        )
    }
}