'user strict';

module.exports = (sequelize, DataTypes) => {
   return sequelize.define('Burger', {
        burger_name: {
            type: DataTypes.STRING, 
            // allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            validate: {
                isIn: [[true, false]]
            }
        },
        // date: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // }
    });
};
