const cliente = (sequelize, type)=>{
    return sequelize.define('clientes', {
        idClientes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: type.STRING,
        Nombre: type.STRING,
        Apellido: type.STRING,
        Direccion: type.STRING,
        username: type.STRING(99),
        password: type.STRING,
        cedula: type.INTEGER(10),
        Celular: type.INTEGER(10), 
        Edad: type.INTEGER(10), 
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

module.exports = cliente