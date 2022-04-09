const Campo = (sequelize, type)=>{
    return sequelize.define('Campos', {
        idClientes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: type.STRING,
        Direccion: type.STRING,
        celular: type.STRING(99),
        fecha: type.STRING,
        hora: type.INTEGER(7),
        Campo: type.INTEGER(10), 
        creacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = Campo