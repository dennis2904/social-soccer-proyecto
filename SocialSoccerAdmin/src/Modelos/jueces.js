const Jueces = (sequelize, type)=>{
    return sequelize.define('Jueces', {
        idJueces: {
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
        creacionJueces:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionJueces:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = Jueces