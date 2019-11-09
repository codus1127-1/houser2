module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const houses = await db.get_houses()
        res.status(200).send(houses)
    },

    addHouse: async (req, res) => {
        const db = req.app.get('db')
        const { name, address, city, state, zip, img, mortgage, rent } = req.body
        const addHouse = await db.add_house([name, address, city, state, zip, img, mortgage, rent])
        res.status(200).send(addHouse)
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_house(id).then(remove => {
            res.status(200).send(remove)
        })
    }
}