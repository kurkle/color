import assert from 'assert';
import {Color} from '../dist/color.esm.js';

assert.deepStrictEqual(new Color('#fef').rgb, {r: 255, g: 238, b: 255, a: 1});
assert.deepStrictEqual(new Color('#fffFEF').rgb, {r: 255, g: 255, b: 239, a: 1});
assert.deepStrictEqual(new Color('#feg').rgb, {r: 255, g: 238, b: 0, a: 1});
assert.deepStrictEqual(new Color('rgb(244, 233, 100)').rgb, {r: 244, g: 233, b: 100, a: 1});
assert.deepStrictEqual(new Color('rgb(100%, 30%, 90%)').rgb, {r: 255, g: 77, b: 229, a: 1});
assert.deepStrictEqual(new Color('rgb(255, 0, 0)').rgb, {r: 255, g: 0, b: 0, a: 1});
assert.deepStrictEqual(new Color('hsl(240, 100%, 50.5%)').rgb, {r: 3, g: 3, b: 255, a: 1});
assert.deepStrictEqual(new Color('hsl(240deg, 100%, 50.5%)').rgb, {r: 3, g: 3, b: 255, a: 1});
assert.deepStrictEqual(new Color('hwb(240, 100%, 50.5%)').rgb, {r: 169, g: 169, b: 169, a: 1});
assert.deepStrictEqual(new Color('hsl(0deg 100% 50%)').rgb, {r: 255, g: 0, b: 0, a: 1});
assert.deepStrictEqual(new Color('moccasin').rgb, {r: 255, g: 228, b: 181, a: 1});
assert.deepStrictEqual(new Color('rgb(0 255 0)').rgb, {r: 0, g: 255, b: 0, a: 1});
assert.deepStrictEqual(new Color('rgb(0 0 100% / 80%)').rgb, {r: 0, g: 0, b: 255, a: 0.8});
assert.deepStrictEqual(new Color('hsv(240, 100%, 50.5%)').rgb, {r: 0, g: 0, b: 129, a: 1});
assert.deepStrictEqual(new Color('hsv(244, 100%, 100%, 0.6)').rgb, {r: 17, g: 0, b: 255, a: 0.6});
assert.deepStrictEqual(new Color({r: 255, g: 254, b: 253}).rgb, {r: 255, g: 254, b: 253, a: 1});
assert.deepStrictEqual(new Color({r: 255, g: 254, b: 253, a: 0.3}).rgb, {r: 255, g: 254, b: 253, a: 0.3});
assert.deepStrictEqual(new Color([255, 254, 253]).rgb, {r: 255, g: 254, b: 253, a: 1});
assert.deepStrictEqual(new Color([255, 254, 253, 0.5]).rgb, {r: 255, g: 254, b: 253, a: 0.5});

assert.deepStrictEqual(new Color('#feff').rgb, {r: 255, g: 238, b: 255, a: 1});
assert.deepStrictEqual(new Color('#fef0').rgb, {r: 255, g: 238, b: 255, a: 0});
assert.equal(new Color('#fefa').rgbString(), 'rgba(255, 238, 255, 0.67)');
assert.deepStrictEqual(new Color('#c814e933').rgb, {r: 200, g: 20, b: 233, a: 0.2});
assert.deepStrictEqual(new Color('#c814e900').rgb, {r: 200, g: 20, b: 233, a: 0});
assert.deepStrictEqual(new Color('#c814e9ff').rgb, {r: 200, g: 20, b: 233, a: 1});
assert.deepStrictEqual(new Color('rgba(200, 20, 233, 0.2)').rgb, {r: 200, g: 20, b: 233, a: 0.2});
assert.deepStrictEqual(new Color('rgba(200, 20, 233, 0)').rgb, {r: 200, g: 20, b: 233, a: 0});
assert.deepStrictEqual(new Color('rgba(200, 20, 233, 1e-15)').rgb, {r: 200, g: 20, b: 233, a: 0});
assert.deepStrictEqual(new Color('rgba(100%, 30%, 90%, 0.2)').rgb, {r: 255, g: 77, b: 229, a: 0.2});
assert.deepStrictEqual(new Color('rgba(255, 0, 0, .5)').rgb, {r: 255, g: 0, b: 0, a: 0.5});
assert.deepStrictEqual(new Color('hsla(12, 10%, 50%, .3)').rgb, {r: 140, g: 120, b: 115, a: 0.3});
assert.deepStrictEqual(new Color('hsla(12, 10%, 50%, 30%)').rgb, {r: 140, g: 120, b: 115, a: 0.3});
assert.deepStrictEqual(new Color('hwb(244, 100%, 100%, 0.6)').rgb, {r: 128, g: 128, b: 128, a: 0.6});
assert.deepStrictEqual(new Color('hsla(240.0384227364303,4.12843378950259%,48.71943371204973%,0.3)').rgb, {r: 119, g: 119, b: 129, a: 0.3});
assert.deepStrictEqual(new Color('hsla(-10.0, 100%, 50%, -0.2)').hslString(), 'hsla(350, 100%, 50%, 0)');
assert.deepStrictEqual(new Color('hsla(-1e1, 1e2%, 50%, -2e-1)').hslString(), 'hsla(350, 100%, 50%, 0)');

assert.deepStrictEqual(new Color('blue').rgb, {r: 0, g: 0, b: 255, a: 1});
assert.deepStrictEqual(new Color('BluE').rgb, {r: 0, g: 0, b: 255, a: 1});
assert.deepStrictEqual(new Color('transparent').rgb, {r: 0, g: 0, b: 0, a: 0});

assert.strictEqual(new Color('yellowblue').rgb, undefined);
assert.strictEqual(new Color('#1').rgb, undefined);
assert.strictEqual(new Color('#f').rgb, undefined);
assert.strictEqual(new Color('#4f').rgb, undefined);
assert.strictEqual(new Color('#45ab4').rgb, undefined);
assert.strictEqual(new Color('#45ab45e').rgb, undefined);

assert.strictEqual(new Color('yellowblue').hexString(), undefined);

assert.strictEqual(new Color('#45ab45ed').hexString(), '#45AB45ED');
assert.deepStrictEqual(new Color('hsl(100, 50%, 50%)').rgb, {r: 106, g: 191, b: 64, a: 1});
assert.strictEqual(new Color('hsl(100, 50%, 50%)').hexString(), '#6ABF40');
assert.strictEqual(new Color('hsl(100, 50%, 50%)').hslString(), 'hsl(100, 50%, 50%)');
assert.strictEqual(new Color('hsl(100, 50%, 75%)').hexString(), '#B5DF9F');
assert.strictEqual(new Color('rgb(54, 162, 235)').hslString(), 'hsl(204, 82%, 57%)');
assert.strictEqual(new Color('#123').hexString(), '#123');
assert.strictEqual(new Color('#123F').hexString(), '#123');
assert.strictEqual(new Color('#1234').hexString(), '#1234');
assert.strictEqual(new Color('#112233').hexString(), '#123');
assert.strictEqual(new Color('#112233FF').hexString(), '#123');

// manipulation
assert.strictEqual(new Color('#7743CE').alpha(0.5).lighten(0.5).hslString(), 'hsla(262, 58%, 80%, 0.5)');

assert.strictEqual(new Color('rgb(0, 100, 255)').negate().rgbString(), 'rgb(255, 155, 0)');

assert.strictEqual(new Color('hsl(100, 50%, 50%)').lighten(0.5).hslString(), 'hsl(100, 50%, 75%)');
assert.strictEqual(new Color('hsl(100, 50%, 50%)').darken(0.5).hslString(), 'hsl(100, 50%, 25%)');

assert.strictEqual(new Color('hsl(100, 50%, 50%)').saturate(0.5).hslString(), 'hsl(100, 75%, 50%)');
assert.strictEqual(new Color('hsl(204, 82%, 57%)').saturate(0.5).hslString(), 'hsl(204, 100%, 57%)');
assert.strictEqual(new Color('rgb(54, 162, 235)').saturate(0.5).hslString(), 'hsl(204, 100%, 57%)');
assert.strictEqual(new Color('rgb(54, 162, 235)').saturate(0.5).rgbString(), 'rgb(34, 167, 255)');
assert.strictEqual(new Color('hsl(100, 50%, 50%)').desaturate(0.5).hslString(), 'hsl(100, 25%, 50%)');
assert.strictEqual(new Color('#5CBF54').greyscale().hexString(), '#969696');

assert.strictEqual(new Color('rgba(10, 10, 10, 0.8)').clearer(0.5).rgbString(), 'rgba(10, 10, 10, 0.4)');
assert.strictEqual(new Color('rgba(10, 10, 10, 0.8)').opaquer(0.5).rgbString(), 'rgb(10, 10, 10)');

assert.strictEqual(new Color('hsl(60, 20%, 20%)').rotate(180).hslString(), 'hsl(240, 20%, 20%)');
assert.strictEqual(new Color('hsl(60, 20%, 20%)').rotate(-90).hslString(), 'hsl(330, 20%, 20%)');

assert.strictEqual(new Color('cyan').mix(new Color('yellow')).rgbString(), 'rgb(128, 255, 128)');
assert.strictEqual(new Color('cyan').mix(new Color('yellow'), 0.3).rgbString(), 'rgb(179, 255, 77)');

assert.strictEqual(new Color('rgba(10, 10, 10, 0.8)').clone().rgbString(), 'rgba(10, 10, 10, 0.8)');

assert.strictEqual(new Color('invalid-color-value').lighten(0.1).hslString(), undefined);
assert.strictEqual(new Color('invalid-color-value').mix(undefined, 0.5).rgbString(), undefined);

assert.strictEqual(new Color('red').interpolate(new Color('green'), 0).rgbString(), 'rgb(255, 0, 0)');
assert.strictEqual(new Color('red').interpolate(new Color('green'), 0.25).rgbString(), 'rgb(225, 65, 0)');
assert.strictEqual(new Color('red').interpolate(new Color('green'), 0.5).rgbString(), 'rgb(188, 92, 0)');
assert.strictEqual(new Color('red').interpolate(new Color('green'), 0.75).rgbString(), 'rgb(137, 112, 0)');
assert.strictEqual(new Color('red').interpolate(new Color('green'), 1).rgbString(), 'rgb(0, 128, 0)');

assert.strictEqual(new Color('#fefa').interpolate(new Color('#ced5'), 0.6).hexString(), '#E2EDEC77');

// invalid values
assert.strictEqual(new Color('rgba(267,292,60,0.2)').rgbString(), 'rgba(255, 255, 60, 0.2)');
