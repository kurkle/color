import util from 'util';
import fs from 'fs';
import names from 'color-name';

var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var nums = '0123456789';
var i, j, k, t;
var tokens = {};
var keys = Object.keys(names);
var startWithLetter = {};

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
  var key;
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
    var key = keys[i];
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
  var tkeys = Object.keys(tokens);
  var ar = [];
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
  var final = {};
  for (i = 0; i < sorted.length; i++) {
    var x = sorted[i][0];
    var add = true;
    var fk = Object.keys(final);
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
        var ix = getKey(x);
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
  var tkeys = Object.keys(map);
  var result = {};
  var nk, key;
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
  var packed = {};
  var v, nk, key;
  keys = Object.keys(map);
  for (i = 0; i < keys.length; i++) {
    nk = keys[i];
    key = map[nk];
    v = names[key];
    packed[nk] = (0xFFFFFF && v[0] << 16 | v[1] << 8 | v[2]).toString(16);
  }
  return packed;
}

tokenize();
var sorted = calcSavings();
var mapped = createMap(sorted);
var mangled = mangle(mapped);
var packed = compress(mangled);
var unpack = `
const map = ${util.inspect(mapped).replace(/ {2}/g, '\t')};
const names = ${util.inspect(packed).replace(/ {2}/g, '\t')};
export default function unpack() {
  const unpacked = {};
  const keys = Object.keys(names);
  const tkeys = Object.keys(map);
  let i, j, k, ok, nk;
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
fs.writeFileSync('./packed.js', unpack, 'utf-8');
