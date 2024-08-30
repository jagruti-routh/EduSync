const { ipcMain } = require('electron');

// This listens for the USB detection notification from the student's PC
ipcMain.on('usb-detected', (event, arg) => {
    const { drive } = arg;
    // Notify the admin dashboard that a USB was detected
    mainWindow.webContents.send('usb-notification', {
        pcName: 'PC3', // Replace with actual PC identification
        driveDescription: drive.description,
    });
});

// Handle abort task request from the admin
ipcMain.on('abort-usb-task', (event, arg) => {
    const { pcName } = arg;
    // Logic to send a signal to the specific student's PC to abort the task
    sendAbortSignalToPC(pcName);
});

function sendAbortSignalToPC(pcName) {
    // Logic to send the abort command to the respective student's PC
    console.log(`Abort signal sent to ${pcName}`);
}
