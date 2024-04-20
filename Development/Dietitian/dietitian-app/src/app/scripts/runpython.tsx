const {spawn} = require('child_process');

export const getPythonScriptStdout = (pythonScriptPath: string) => {
	const python = spawn('python', [pythonScriptPath]);
	return new Promise((resolve, reject) => {
		let result = ""
		python.stdout.on('data', (data: string) => { // Explicitly type 'data' as string
			result += data
		});
		python.on('close', () => {
			resolve(result)
		});
		python.on('error', (err: Error) => { // Explicitly type 'err' as Error
			reject(err)
		});
	})
}