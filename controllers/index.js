const Blagues = require("../models/blagues");


const getRandomBlague = () =>{
    const random = Math.floor(Math.random()*data.blagues.length)
    return data.blagues[random];
}

const controllerBlague = {
    random: async(req, res)=> {
        const data = await Blagues.findAll();
        console.log(data);
        const RandomBlague = getRandomBlague(data);
        res.status(200).json({ blagues : RandomBlague });    
    },
    findAll :  async (req, res) =>{
        const data = await Blagues.findAll();
        res.status(200).json({allBlagues : data});
    },
    findById: (req, res) => {
        const id = req.params.id;
        if (isNaN(id)) {
            return res.status(400).json({ error: "Don't use text for id" });
        }
        if (id > data.length) {
            return res.status(404).json({ error: "ID not found ..." });
        }

        return res.status(200).json({ result: data[id - 1] });
    },
    create: async (req, res) => {
        console.log(req.body);
        const data = await Blagues.create(req.body);
        console.log(data);
        res.status(201).json({ message: "l'etudiant à été ajoutée", data: req.body });

    },
}

module.exports = controllerBlague;