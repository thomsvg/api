const data = require('./../models/data.json')

const controllerMusic =
{
    find: (req, res) => {
        if (req.query.search) {
            console.log("TUVAFERKWA")
            const query = req.query.search;
            const result = data.filter(song => song.title.toLowerCase().includes(query.toLowerCase()))
            if (result.length === 0) {
                return res.status(404).json({ error: "No matching songs found" })
            }
            res.status(200).json({ result })
            console.log(result)
        }
        else {
            res.status(200).json({ result: data })
        }
    },

    create: (req, res) => {
        console.log(req.body)
        res.status(201).json({ message: "Musique Ajoutée", data: req.body });
    },

    findById: (req, res) => {
        const id = req.params.id
        if (isNaN(id)) {
            return res.status(400).json({ error: "Don't use text for id" })
        }
        if (id > data.length) {
            return res.status(404).json({ error: "ID not found" })
        }

        return res.status(200).json({ result: data[id - 1] })
    },

    random: (req, res) => {
        const randomIndex = Math.floor(Math.random() * data.length)
        const music = data[randomIndex]
        res.status(200).json({ result: music });
    }
}

module.exports = controllerMusic