
// eslint-disable-next-line no-useless-escape
var HUE_RE = /^(hsla?|hwb)\(\s*([+-]?\d+)(?:deg)?[\s,]+([+-]?[\d\.]+)%[\s,]+([+-]?[\d\.]+)%\s*(?:[\s,]+([+-]?[\d\.]+)\s*)?\)/;

// convert 0..1 to 0..255
function n2r(v) {
	return 0xFF & v * 255 + 0.5;
}

// https://jsfiddle.net/Lamik/reuk63ay/91
function hsl2rgbn(h, s, l) {
	let a = s * Math.min(l, 1 - l);
	let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [f(0), f(8), f(4)];
}

function hwb2rgbn(h, w, b) {
	var rgb = hsl2rgbn(h, 1, 0.5);
	var i;
	if (w + b > 1) {
		i = 1 / (w + b);
		w *= i;
		b *= i;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] *= 1 - w - b;
		rgb[i] += w;
	}
	return rgb;
}

export function hsl2rgb(h, s, l) {
	return Array.isArray(h)
		? hsl2rgbn(h[0], h[1], h[2])
		: hsl2rgbn(h, s, l).map(n2r);
}

export function hwb2rgb(h, w, b) {
	return Array.isArray(h)
		? hwb2rgbn(h[0], h[1], h[2])
		: hwb2rgbn(h, w, b).map(n2r);
}

export function hueParse(str) {
	var m = HUE_RE.exec(str);
	var a = 1;
	var v;
	if (!m) {
		// v is undefined
		return v;
	}
	// v is undefined
	if (m[5] !== v) {
		a = +m[5];
	}
	if (m[1] === 'hwb') {
		v = hwb2rgb((m[2] % 360 + 360) % 360, m[3] / 100, m[4] / 100);
	} else {
		v = hsl2rgb((m[2] % 360 + 360) % 360, m[3] / 100, m[4] / 100);
	}
	return {
		r: v[0],
		g: v[1],
		b: v[2],
		a: a
	};
}

