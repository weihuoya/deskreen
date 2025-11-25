import os from 'os';

export default function getMyLocalIpV4(): string | undefined {
	// Get network interfaces
	const networkInterfaces = os.networkInterfaces();
	let localIp: string | undefined;
	Object.entries(networkInterfaces).some(([, networks]) => {
		if (!networks) return false;
		return networks.some((network) => {
			if (!network.internal && network.family === 'IPv4') {
				localIp = network.address;
				return true;
			}
			return false;
		});
	});

	return localIp;
}
