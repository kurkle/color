window.BENCHMARK_DATA = {
  "lastUpdate": 1581069044224,
  "repoUrl": "https://github.com/kurkle/color",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "ff03e02e115f666b663f4c65c769d90e5f0800d0",
          "message": "Bench: add git reset",
          "timestamp": "2020-02-07T09:04:20+02:00",
          "tree_id": "c2586fc89803bce25170d932ed78aa22f8729889",
          "url": "https://github.com/kurkle/color/commit/ff03e02e115f666b663f4c65c769d90e5f0800d0"
        },
        "date": 1581059249409,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4072323,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3255731,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map",
            "value": 12483549,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map obj",
            "value": 12637464,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10479892,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "89 samples"
          }
        ]
      }
    ],
    "HEX parsing": [
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "feb3b2c2740eafab82ff9cd948a08385338ce17a",
          "message": "Benchmark comparison",
          "timestamp": "2020-02-07T11:41:57+02:00",
          "tree_id": "4fe73ed45f36bbbd8993251712b8095fa7a57571",
          "url": "https://github.com/kurkle/color/commit/feb3b2c2740eafab82ff9cd948a08385338ce17a"
        },
        "date": 1581068700633,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4127538,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3305683,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 12797277,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map obj",
            "value": 12956488,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10862848,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "90 samples"
          }
        ]
      }
    ],
    "Comparison": [
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "feb3b2c2740eafab82ff9cd948a08385338ce17a",
          "message": "Benchmark comparison",
          "timestamp": "2020-02-07T11:41:57+02:00",
          "tree_id": "4fe73ed45f36bbbd8993251712b8095fa7a57571",
          "url": "https://github.com/kurkle/color/commit/feb3b2c2740eafab82ff9cd948a08385338ce17a"
        },
        "date": 1581069043969,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 31033754,
            "range": "±5.10%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 809755,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 631314,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 612076,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2735523,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2524369,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1835699,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8251615,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 476015,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 544715,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 515094,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1888701,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1504550,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6910381,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 497976,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 713686,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 704358,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2444966,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3160436,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2135204,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4897860,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 465340,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 627561,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 629398,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1904980,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1733143,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2833098,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 467621,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 790116,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 104118,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 970425,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1238210,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2084881,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1798658,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 448365,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 682626,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 101341,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 712083,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 894492,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1623111,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4628847,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1599671,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 468412,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 631214,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14686779,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 852351,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 667404,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 681424,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8343753,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14816510,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3140181,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 590191872,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 799098,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 52052427,
            "range": "±6.73%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 73980364,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 758046,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4683082,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 929879,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4654682,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 393955,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 942441,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4897589,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 283837,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 866627,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4664660,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 280562,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 878417,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 12318214,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12731499,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21298105,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 60397552,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2424575,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 331681,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 629654,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3041795,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2133494,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      }
    ]
  }
}