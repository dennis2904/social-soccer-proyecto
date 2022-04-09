const jugador = (sequelize, type)=>{
    return sequelize.define('jugador', {
        idClientes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: type.STRING,
        Nombre: type.STRING,
        Apellido: type.STRING,
        email: type.STRING,
        Direccion: type.STRING,
        Celular: type.STRING(99),
        Edad: type.STRING,
        Fecha: type.INTEGER(10),
        creacionJugador:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionJugador:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = jugador