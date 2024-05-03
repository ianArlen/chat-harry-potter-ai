const { NlpManager } = require('node-nlp');
const dialogues = require('./dialogues');

const manager = new NlpManager({ languages: ['es'] });

async function trainAndSave() {
    dialogues.forEach(dialogue => {
        manager.addDocument('es', dialogue.query, dialogue.intent);
        manager.addAnswer('es', dialogue.intent, dialogue.answer);
    });

    await manager.train();
    await manager.save();
    console.log('Entrenamiento completado y modelo guardado');
}

function setUserMessage(message) {
  messageHarry = message;
}

async function getMessageHarry() {
  let response = await manager.process('es', messageHarry);
  return response.answer ? response.answer : "No tengo una respuesta para eso.";
}

module.exports = {
  trainAndSave,
  setUserMessage,
  getMessageHarry
};
