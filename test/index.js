const Color = require('../src/index.js');
const assert = require('assert');

assert.deepEqual(new Color("#fef").value, {r: 255, g: 238, b: 255, a: 1});
assert.deepEqual(new Color("#fffFEF").value, {r: 255, g: 255, b: 239, a: 1});
assert.deepEqual(new Color("#feg").value, {r: 255, g: 238, b: 0, a: 1});
assert.deepEqual(new Color("rgb(244, 233, 100)").value, {r: 244, g: 233, b: 100, a: 1});
assert.deepEqual(new Color("rgb(100%, 30%, 90%)").value, {r: 255, g: 77, b: 229, a: 1});
assert.deepEqual(new Color("rgb(255, 0, 0)").value, {r: 255, g: 0, b: 0, a: 1});
assert.deepEqual(new Color("hsl(240, 100%, 50.5%)").value, {r: 3, g: 3, b: 255, a: 1});
assert.deepEqual(new Color("hsl(240deg, 100%, 50.5%)").value, {r: 3, g: 3, b: 255, a: 1});
assert.deepEqual(new Color("hwb(240, 100%, 50.5%)").value, {r: 169, g: 169, b: 169, a: 1});
assert.deepEqual(new Color("hsl(0deg 100% 50%)").value, {r: 255, g: 0, b: 0, a: 1});
assert.deepEqual(new Color("moccasin").value, {r: 255, g: 228, b: 181, a: 1});
assert.deepEqual(new Color("rgb(0 255 0)").value, {r: 0, g: 255, b: 0, a: 1});
assert.deepEqual(new Color("rgb(0 0 100% / 80%)").value, {r: 0, g: 0, b: 255, a: 0.8});

assert.deepEqual(new Color("#feff").value, {r: 255, g: 238, b: 255, a: 1});
assert.deepEqual(new Color("#fef0").value, {r: 255, g: 238, b: 255, a: 0});
assert.deepEqual(new Color("#fefa").value, {r: 255, g: 238, b: 255, a: 0.67});
assert.deepEqual(new Color("#c814e933").value, {r: 200, g: 20, b: 233, a: 0.2});
assert.deepEqual(new Color("#c814e900").value, {r: 200, g: 20, b: 233, a: 0});
assert.deepEqual(new Color("#c814e9ff").value, {r: 200, g: 20, b: 233, a: 1});
assert.deepEqual(new Color("rgba(200, 20, 233, 0.2)").value, {r: 200, g: 20, b: 233, a: 0.2});
assert.deepEqual(new Color("rgba(200, 20, 233, 0)").value, {r: 200, g: 20, b: 233, a: 0});
assert.deepEqual(new Color("rgba(100%, 30%, 90%, 0.2)").value, {r: 255, g: 77, b: 229, a: 0.2});
assert.deepEqual(new Color("rgba(255, 0, 0, .5)").value, {r: 255, g: 0, b: 0, a: 0.5});
assert.deepEqual(new Color("hsla(12, 10%, 50%, .3)").value, {r: 140, g: 120, b: 115, a: 0.3});
assert.deepEqual(new Color("hwb(244, 100%, 100%, 0.6)").value, {r: 128, g: 128, b: 128, a: 0.6});

assert.deepEqual(new Color("blue").value, {r: 0, g: 0, b: 255, a: 1});
assert.deepEqual(new Color("blue").value, {r: 0, g: 0, b: 255, a: 1});
assert.deepEqual(new Color("transparent").value, {r: 0, g: 0, b: 0, a: 0});

assert.strictEqual(new Color("yellowblue").value, undefined);
assert.strictEqual(new Color("#1").value, undefined);
assert.strictEqual(new Color("#f").value, undefined);
assert.strictEqual(new Color("#4f").value, undefined);
assert.strictEqual(new Color("#45ab4").value, undefined);
assert.strictEqual(new Color("#45ab45e").value, undefined);

assert.strictEqual(new Color("#45ab45ed").hexString(), "#45AB45ED");