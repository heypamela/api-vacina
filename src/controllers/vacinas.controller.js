const Vaccine = require("../models/vacinas.models");
const db = require("../models/vacinas.models");


const msgError = error => {
    res.status(500).send({message: error.message})
}



const createVaccines = async (req, res) =>{
    const {name, expected_date, vaccinated} = req.body

    try{
        const vaccines = await Vaccine.create({name, expected_date, vaccinated});
        console.log(`Vacina ${vaccines.name} criada com sucesso`)
        res.status(201).send(vaccines)
    } catch(error) {
        msgError(error);
    }
}


const findAllVaccines = async (req, res) => {
    const allvaccine = req.query;

    try{
        const vaccines = await Vaccine.findAll()
        if(vaccines && vaccines.length > 0){
            res.status(200).send(vaccines)
        } else{
            res.status(204).send()
        }
    } catch(error) {
        msgError(error);
    }
}

const findVaccine = async (req, res) => {
    const idVaccine = req.params.id;

    try{
        const id = await Vaccine.findOne({where: { id: idVaccine}});

        id ? res.status(200).send(id) : res.status(404).send({message: `Não foi possível encontrar vacina com o id ${idVaccine}`})
        /*if(id){
            res.status(200).send(id);
        } else{
            res.status(404).send({message: `Não foi possível encontrar vacina com o id ${idVaccine}`})
        }*/
    } catch (error){
        msgError(error);
    }
}
    
const updateVaccine = async (req, res) => {
    const idVaccine = req.params.id
    const vaccinated = req.body.vaccinated

    try{
        const updated = await Vaccine.update({ vaccinated }, {where: { id: idVaccine} });
        
        updated ? res.status(200).send({message: `${updated} foi atualizada`}) 
            : res.status(404).send({message: `Não foi encontrada ${idVaccine}`})
        /*
        if(updated && updated[0] > 0){
            res.status(200).send({message: `${updated} foi tomada`});
        } else {
            res.status(404).send({message: `Não foi encontrada ${idVaccine}`})
        } */
    } catch (error){
        msgError(error);
    }
}


module.exports = { createVaccines, findAllVaccines, findVaccine, updateVaccine }