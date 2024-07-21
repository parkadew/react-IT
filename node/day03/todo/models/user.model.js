
import Sequelize, { Model } from "sequelize";

class Users extends Model {
    static init() {
        super.init({
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            }
        }, {
            modelName: "Users", // key 
            tableName: "users", // table명
            charset: 'utf8', // 언어지원
            timestamps: true, // createAt, updateAt 컬럼 자동 생성
            sequelize,
        })
    }
}
export default Users


