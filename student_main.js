const { ipcRenderer } = require('electron');
const drivelist = require('drivelist');

// Function to check for USB devices every 5 seconds
function checkForUSB() {
    drivelist.list().then((drives) => {
        drives.forEach((drive) => {
            if (drive.isUSB) {
                // Notify the admin that a USB device has been inserted
                ipcRenderer.send('usb-detected', { drive });
            }
        });
    });
}

// Set an interval to keep checking for USB devices
setInterval(checkForUSB, 5000);
