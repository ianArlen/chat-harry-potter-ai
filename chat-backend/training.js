// training.js
const { NlpManager } = require('node-nlp');
const dialogues = require('./dialogues'); // Asegúrate de que la ruta al archivo es correcta

const manager = new NlpManager({ languages: ['es'] });

async function trainAndSave() {
    // Añadir diálogos al NlpManager
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
