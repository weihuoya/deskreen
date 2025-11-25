import os from 'os';

export default function isWifiConnected(): boolean {
	const networkInterfaces = os.networkInterfaces();
	let hasValidInterface = false;
	Object.entries(networkInterfaces).some(([, networks]) => {
		if (!networks) return false;
		const hasValidNetwork = networks.some((network) => {
			if (!network.internal && network.family === 'IPv4') {
				hasValidInterface = true;
				return true;
			}
			return false;
		});

		return hasValidNetwork;
	});

	return hasValidInterface;
}
