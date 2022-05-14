const { ipcMain } = require('electron')

ipcMain.on('process-subtitle', (event, paths) => {
    console.log(paths)

    event.reply('process-subtitle', [
        { name: "i", amount: 1200 },
        { name: "you", amount: 900 },
        { name: "he", amount: 800 },
        { name: "she", amount: 1200 },
        { name: "our", amount: 900 },
        { name: "house", amount: 800 },
    ])
})