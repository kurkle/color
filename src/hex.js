var map = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
var hex = '0123456789ABCDEF';

function h2(v) {
	return hex[(v & 0xF0) >> 4] + hex[v & 0xF];
}

export function hexParse(str) {
	var len = str.length;
	var ret;
	if (str[0] === '#') {
		if (len === 4 || len === 5) {
			ret = {
				r: 255 & map[str[1]] * 17,
				g: 255 & map[str[2]] * 17,
				b: 255 & map[str[3]] * 17,
				a: len === 5 ? map[str[4]] * 17 : 255
			};
		} else if (len === 7 || len === 9) {
			ret = {
				r: map[str[1]] << 4 | map[str[2]],
				g: map[str[3]] << 4 | map[str[4]],
				b: map[str[5]] << 4 | map[str[6]],
				a: len === 9 ? (map[str[7]] << 4 | map[str[8]]) : 255
			};
		}
	}
	return ret;
}

export function hexString(v) {
	return v
		? '#' + h2(v.r) + h2(v.g) + h2(v.b) + (v.a < 255 ? h2(v.a) : '')
		: v;
}
