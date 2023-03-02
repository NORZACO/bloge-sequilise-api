class TutorialService {
    constructor(db) {
        this.client = db.sequelize;
        this.tutorial = db.tutorial;
    }

    // async getAll() {
    //     return this.tutorial.findAll({
    //         where: {}
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    // }


    async getAll(condition, order) {
        return this.tutorial.findAll({
            where: condition,
            order: order
        }).catch(function (err) {
            console.log(err);
        });
    }
    
}
module.exports = TutorialService;