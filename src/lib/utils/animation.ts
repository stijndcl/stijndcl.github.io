export function wantsMotion(): boolean {
	return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function motionSafe(callback: () => void) {
	if (wantsMotion()) {
		callback();
	}
}
