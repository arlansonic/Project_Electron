const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')

ipcMain.on('process-subtitle', (event, paths) => {
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
        .then(() => {
            event.reply('process-subtitle', [
                { name: "i", amount: 1200 },
                { name: "you", amount: 900 },
                { name: "he", amount: 800 },
                { name: "she", amount: 1200 },
                { name: "our", amount: 900 },
                { name: "house", amount: 800 },
            ])
        })
})