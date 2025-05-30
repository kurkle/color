import util from 'util';

/**
 * Main function to pack color names
 * @param {Object} colorNames - The color names to pack
 * @returns {Object} - The packed data and mapping
 */
export function packColorNames(colorNames) {
  let s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let nums = '0123456789';
  let i, j, k, t;
  let tokens = {};
  let keys = Object.keys(colorNames);
  let startWithLetter = {};

  function addToken(tok, letter) {
    if (tok.length < 2) {
      return;
    }
    tokens[tok] = (tokens[tok] || 0) + 1;
    if (letter) {
      startWithLetter[tok] = true;
    }
  }

  function getKey(tok) {
    let key;
    if (!s.length) {
      return null;
    }
    if (startWithLetter[tok]) {
      key = s[s.length - 1];
      if (nums.indexOf(key) === -1) {
        s = s.substring(0, s.length - 1);
        return key;
      }
      return null;
    }
    key = s[0];
    s = s.substring(1);
    return key;
  }

  function tokenize() {
    // lets loop those keys, and add count every possible substring
    for (i = 0; i < keys.length; i++) {
      const key = keys[i];
      for (j = 0; j < key.length; j++) {
        if (s.indexOf(key[j]) >= 0) {
          s = s.replace(key[j], '');
        }
        if (j > 1 && j < key.length) {
          for (k = 0; k < key.length - j; k++) {
            addToken(key.substring(k, k + j), k === 0);
          }
        }
      }
    }
  }

  function calcSavings() {
    // now calculate possible saved bytes per substring
    const tkeys = Object.keys(tokens);
    const ar = [];
    for (i = 0; i < tkeys.length; i++) {
      k = tkeys[i];
      t = tokens[k];
      j = k.length * (t - 1) - 6; // substring length * (count - 1) - 4 [x:substring,]
      if (j > 0) {
        ar.push([k, j]);
      }
    }
    // sort by most savings
    return ar.sort(function(a, b) {
      return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    });
  }

  function createMap(sorted) {
    // build final map, starting from greatest savings
    const final = {};
    for (i = 0; i < sorted.length; i++) {
      const x = sorted[i][0];
      let add = true;
      const fk = Object.keys(final);
      for (j = 0; j < fk.length; j++) {
        if (final[fk[j]].indexOf(x) >= 0 || x.indexOf(final[fk[j]]) >= 0) {
          // if substring of this key already exists, do not add
          add = false;
          break;
        }
      }
      if (add) {
        k = x.length * (tokens[x] - 1) - 6;
        if (k > 0) {
          const ix = getKey(x);
          if (ix) {
            // we have suitable keys left for this substring, add it to final map
            final[ix] = x;
          }
        }
      }
    }
    return final;
  }

  function mangle(map) {
    const tkeys = Object.keys(map);
    const result = {};
    let nk, key;
    for (i = 0; i < keys.length; i++) {
      nk = key = keys[i];
      for (j = 0; j < tkeys.length; j++) {
        k = tkeys[j];
        nk = nk.replace(map[k], k);
      }
      result[nk] = key;
    }
    return result;
  }

  function compress(map) {
    const packed = {};
    let v, nk, key;
    const mapKeys = Object.keys(map);
    for (i = 0; i < mapKeys.length; i++) {
      nk = mapKeys[i];
      key = map[nk];
      v = colorNames[key];
      packed[nk] = (0xFFFFFF & v[0] << 16 | v[1] << 8 | v[2]).toString(16);
    }
    return packed;
  }

  tokenize();
  const sorted = calcSavings();
  const mapped = createMap(sorted);
  const mangled = mangle(mapped);
  const packed = compress(mangled);

  return {
    mapped,
    mangled,
    packed
  };
}

/**
 * Generate the TypeScript code for the packed.ts file
 * @param {Object} mapped - The mapping of single characters to substrings
 * @param {Object} packed - The packed color data
 * @returns {string} - The TypeScript code
 */
export function generateTypeScriptCode(mapped, packed) {
  return `/**
 * @packageDocumentation
 * @module utils
 */

const map: Record<string, string> = ${util.inspect(mapped)};
const names: Record<string, string> = ${util.inspect(packed)};

/**
 * Unpack color names
 * @returns Record of color names to RGB arrays
 */
export default function unpack(): Record<string, number[]> {
  const unpacked: Record<string, number[]> = {};
  const keys = Object.keys(names);
  const tkeys = Object.keys(map);
  let i: number, j: number, k: string | number, ok: string, nk: string;

  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map[k]);
    }
    k = parseInt(names[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }

  return unpacked;
}
`;
}

/**
 * Unpack the color names from the packed data
 * @param {Object} mapped - The mapping of single characters to substrings
 * @param {Object} packed - The packed color data
 * @returns {Object} - The unpacked color names
 */
export function unpackColorNames(mapped, packed) {
  const unpacked = {};
  const keys = Object.keys(packed);
  const tkeys = Object.keys(mapped);
  let i, j, k, ok, nk;

  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, mapped[k]);
    }
    k = parseInt(packed[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }

  return unpacked;
}
