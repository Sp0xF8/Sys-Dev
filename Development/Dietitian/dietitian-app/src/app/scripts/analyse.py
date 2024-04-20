import sys
import json

test = {
	1: {1: 1, 2: 2},
	2: {3: 1, 4: 2},
	3: {5: 1, 6: 2},
}

sys.argv.append(json.dumps(test))  # Serialize test dictionary to JSON


sys.stdout.write(json.dumps(test))  # Serialize test dictionary to JSON