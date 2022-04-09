const balones = (sequelize, type)=>{
    return sequelize.define('balones', {
        idBalones: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: type.STRING,
        MarcaBalon: type.STRING,
        Color: type.STRING,
        Simbolos: type.STRING,
        Estado: type.STRING,
        
        creacionBalones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionBalones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = balones