import Sequelize from 'sequelize'

/** * Request Schema */
module.exports = function(sequelize, DataTypes) {
    const messages = sequelize.define('Message', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        data: {
            type: Sequelize.TEXT
        },
        sender: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false, 
            defaultValue: 'text'
        },
        url: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        },
        clientGeneratedId: {
            type: Sequelize.STRING
        },
        peer_conversation_id: {
            type: DataTypes.UUID
        }
    }, {
        timestamps: true
    });

    messages.sync({ force: false }).then(() => {
        // Table created       
        return true;
    });
    return messages;
};