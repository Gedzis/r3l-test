import Sequelize from 'sequelize';

export default function(sequelize, DataTypes) {
    const Task = sequelize.define("task", {

        name: {
            type: DataTypes.STRING,
            len: 500,
            allowNull: false
        },

        dueDate: {
            allowNull: false,
            type: DataTypes.DATEONLY,
            validate: {
                isDate: {
                    msg: 'Invalid date'
                }
            }
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        classMethods: {

        },
        instanceMethods: {

        }
    });

    return Task;
};
