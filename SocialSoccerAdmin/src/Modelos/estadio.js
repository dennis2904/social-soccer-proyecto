const Estadio = (sequelize, type)=>{
    return sequelize.define('Estadio', {
        idEstadio: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: type.STRING,
        NombreEstadio: type.STRING,
        Direccion: type.STRING,
        Estado: type.STRING(99),
        Capacidad: type.STRING,
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

module.exports = Estadio