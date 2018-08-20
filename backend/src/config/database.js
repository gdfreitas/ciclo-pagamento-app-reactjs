const mongoose = require('mongoose') // responsavel por fazer conexao com o mongo e mapeamento dos nossos objetos para os documentos do mongo
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useMongoClient: true }) // caso tenha usuario senha //usuario:senha@localhost:port/

// Definir mensagens padrões de erros
mongoose.Error.messages.Number.required = `O atributo '{PATH}' deve ser informado.` // neste caso o required, que por padrão está em inglês
mongoose.Error.messages.Number.min = `'{VALUE}' informado é menor que o limite mínimo de '{MIN}'.`
mongoose.Error.messages.Number.max = `'{VALUE}' informado é maior que o limite máximo de '{MAX}'.`
mongoose.Error.messages.String.enum = `'{VALUE}' não é valido para o atributo '{PATH}'.`
