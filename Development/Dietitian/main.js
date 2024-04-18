const {app, BrowserWindow} = require('electron')

const url = require('url')
const path = require('path')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Dietian App',
		webPreferences: {
			nodeIntegration: true
		}
	})


	const startURL = url.
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})



})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})