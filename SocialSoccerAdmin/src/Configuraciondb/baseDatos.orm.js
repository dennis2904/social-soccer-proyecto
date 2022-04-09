const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "socialsoccer";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})
const CamposModelos=require('../Modelos/Campos')
const clienteModelos=require('../Modelos/cliente')
const DetalleJugadorModelos=require('../Modelos/Detallejugador')
const DetalleRolModelos=require('../Modelos/Detallerol')
const jugadorModelos=require('../Modelos/jugador')
const rolModelos=require('../Modelos/rol')
const usuarioModelos=require('../Modelos/usuario')
const juecesModelos=require('../Modelos/jueces')
const BalonesModelos=require('../Modelos/balones')
const EstadioModelos=require('../Modelos/estadio')





const sequelize = new Sequelize(
  'socialsoccer',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

  const Campos=CamposModelos(sequelize, Sequelize)
  const cliente=clienteModelos(sequelize,Sequelize)
  const DetalleJugador=DetalleJugadorModelos(sequelize,Sequelize)
  const DetalleRol=DetalleRolModelos(sequelize,Sequelize)
  const jugador=jugadorModelos(sequelize,Sequelize)
  const rol=rolModelos(sequelize,Sequelize)
  const usuario=usuarioModelos(sequelize,Sequelize)
  const jueces=juecesModelos(sequelize,Sequelize)
  const balones=BalonesModelos(sequelize,Sequelize)
  const Estadio=EstadioModelos(sequelize,Sequelize)

  usuario.hasMany(jugador)
  jugador.belongsTo(usuario)
  cliente.hasMany(DetalleJugador)
  DetalleJugador.belongsTo(cliente)
  jugador.hasMany(Campos)
  Campos.belongsTo(jugador)
  DetalleJugador.hasMany(rol)
  rol.belongsTo(DetalleJugador)
  Campos.hasMany(DetalleRol)
  DetalleRol.belongsTo(Campos)
  rol.hasMany(jueces)
  jueces.belongsTo(rol)
  DetalleRol.hasMany(balones)
  balones.belongsTo(DetalleRol)
  jueces.hasMany(Estadio)
  Estadio.belongsTo(jueces)


module.exports = {
 usuario,
 cliente,
 jugador,
 DetalleJugador,
 Campos,
 rol,
 DetalleRol,
 jueces,
 balones,
 Estadio
}