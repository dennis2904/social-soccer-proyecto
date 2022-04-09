const detalleJugador = (sequelize, type) => {
    return sequelize.define('detalleJugador', {
        idDetalleJugador: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: type.INTEGER,
        EnQuePosesionJuega: type.INTEGER,
        Ncionalidad: type.STRING
    }, {
        timestamps: false,
    })
}

module.exports = detalleJugador