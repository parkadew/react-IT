
import config from '../config/config.json' assert{type: "json"}
import { Sequelize } from 'sequelize'
import Users from './user.model'

const detabase = config['development']
const db = {}

const sequelize = new Sequelize(
  detabase.database,
  detabase.username,
  detabase.password,
  detabase
)

db.Users = Users

Object.keys(db).foreach((model) => {
  db[model].init(sequelize)
})

db.sequelize.init(sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;