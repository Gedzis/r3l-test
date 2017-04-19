'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('tasks', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING,
                len: 500,
                allowNull: false
            },
            dueDate: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },

            priority: {
                type: Sequelize.INTEGER
            }


        }, {
            charset: 'utf8'
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('tasks')

    }
};
