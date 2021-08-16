const passengers = require("../models/passengers.json")
const travels = require("../models/travels.json")
const utils = require("../utils/travelsUtils")

const fs = require('fs')

const getAllPassagers = (req, res) => {
    res.status(200).send(passengers)
}

const getPassagersById = (req, res) =>{
    let idRequerido = req.params.id // tras oid vindo da requisição
    //achar item com mesmo id requerido
    let filteredPassengers = utils.findById(travels,idRequerido)
    res.status(200).send(filteredPassengers) // enviar resposta

}

const createPassagers = (req, res) =>{
    //trazer dados da requisição
    let {nome, email, documentNumber, travelId} = req.body

    let newPassagers = {
        id: Math.random().toString(32).substr(2),
        nome,
        email,
        documentNumber,
        travelId : requeridoId
    }

    //id do passageiro atraves do path params
    let passengerRequiredId = req.params.id

    //verificar cada item na lista de passageiros e achar o igual qe é igual ao item requerido
    let passangersRequired = utils.findById(passengers, passengerRequiredId)

    passengers.forEach(passenge)
        let samePassenger = passenge === passangersRequired

        if (samePassenger) {
            
            // adicionando um passageiro à viagem solicitada
            passenge.passengengrInfos.push(newPassagers)
        }
    
    }
    // usar módulo fs para escrever as alterações no nosso arquivo
    fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), 'utf8', function(err) {
        if (err) {
            res.status(500).send({
                "message": err
            })
        } else {
            //enviar pro postman
            res.status(201).send({"message": "Passageiro adcionado com sucesso!", passangersReqired })
        }
})

//deletando um passageiro do sistema
const deletePassengers =(req, res) => {
    //id requerido
    const requeridoId = req.params.id
    //item da lista que corresponde o Id requerido
    const filtroId = utils.findById(passengers, requeridoId)
    console.log(filtroId)

    const deletando = passengers.indexOf(filtroId)

    if (deletando >= 0){
        passengers.splice(deletando, 1)
        
        //escrendo no modulo fs para escrever alteração no arquivo
        fs.writeFile("./src/models.passengers.json", JSON.stringify(passengers), "utf8", (err) =>{
            if(err) {
                res.status(500).send({
                    "menssagem": err
                })
            } 
            else{
                res.status(200).send({
                    "menssagem": "Passageiro excluido!", passengers
                })
            }
        })
    }
}

// substituir todo passageiro APESAR do método PUT ser usado para substituir apenas uma parte
const putPassagenrs = (req,res) =>{
    //trazer o Id passageiro
    const idRequered = req.params.id
    //trazer dados da atualização
    const{name, email, documentNumber} = req.body

    //filtro para achar o passageiro
    let filtroPassageiro = utils.findById(passengers,idRequered)

    //criando novo objeto do passageiro
    const putPassagenrs = {
        id: filtroPassageiro.id,
        name, 
        email,
        documentNumber
    }
    // achar o index do pasageiro
    const index = passengers.indexOf(filtroPassageiro)

    //verificar se o index existe e caso exista usar o metodo splice
    if (index >= 0){ // verifico se o passageiro existe
         // passageiro encontrado!
        passengers.splice(index, 1 , putPassagenrs) // busco no array o passageiro, excluo o registro antigo e subtituo pelo novo
        //usar fs e enviar resposta
        fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), "utf8", (err) =>{
            if(err){
                res.status(500).send({
                    "message": err
                })
            }
            else {
                res.status(200).send({
                    "message": "Passageiro atualiado com sucesso", filtroPassageiro
                })
            }
        })
    }
}

//editar o nome do passageiro no sistema
const patchPassengers = (req, res) =>{
    // armazenando em uma variável o id do passageiro que chega via path params
    const idRequerido = req.params.id 

    // armazenando o nome do passageiro a ser atualizado
    let novoNome = req.body.name
    
    let filteredPassengers = utils.findById(passengers, idRequerido)

    if(filteredPassengers){
        filteredPassengers.name = novoNome
        fs.writeFile(".src/models/passengers.json",  JSON.stringify(passengers), 'utf8', (err) => {
            if(err) {
                res.status(500).send({message: err})
            }
            else{
                res.status(200).JSON([{
                    "mensagem" : "Nome do pasageiro adicionado com sucesso", filteredPassengers
                }])
            }
        })
    }
    else{ //passageiro não encontrado
        res.status(500).send({"mensagem" : "Passageiro não encontrado!"})
    }

}


module.exports = {getAllPassagers, getPassagersById, createPassagers, deletePassengers, putPassagenrs, patchPassengers }

