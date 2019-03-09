import colorNames from '../packed';

// eslint-disable-next-line dot-notation
colorNames['transparent'] = [0, 0, 0, 0];

export function nameParse(str) {
	var a = colorNames[str];
	if (a) {
		a = {
			r: a[0],
			g: a[1],
			b: a[2],
			a: a.length === 4 ? a[3] : 255
		};
	}
	return a;
}
