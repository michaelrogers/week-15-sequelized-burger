const orm = require('../config/orm.js');
const tableName = 'burgers';

module.exports = {
    selectAll: (callback) => {
        orm.selectAll(tableName, 
            (res) => callback(res)
        );
    },
    insertOne: (columns, values, callback) => {
        orm.insertOne(tableName, columns, values, 
            (res) => callback(res)
        );
    },
    updateOne: 
    (columns, values, whereColumn, whereValue, callback) => {
        orm.updateOne(
            tableName, columns, values, whereColumn, whereValue, callback,
            (res) => callback(res)
        );
    },
    deleteOne:
        (whereColumn, whereValue, callback) => {
            orm.deleteOne(
                tableName, whereColumn, whereValue, callback,
                (res) => callback(res)
            )
        }
};
