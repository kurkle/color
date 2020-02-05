import {names} from '../packed';

names.transparent = [0, 0, 0, 0];

export function nameParse(str) {
	var a = names[str];
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
