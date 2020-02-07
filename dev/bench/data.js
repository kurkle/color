window.BENCHMARK_DATA = {
  "lastUpdate": 1581075462909,
  "repoUrl": "https://github.com/kurkle/color",
  "entries": {
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
      },
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
          "id": "95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e",
          "message": "Optimize opaquer / clearer",
          "timestamp": "2020-02-07T12:23:00+02:00",
          "tree_id": "264eefd40b4b0ddb3e26113f1aabc601f0f0b0df",
          "url": "https://github.com/kurkle/color/commit/95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e"
        },
        "date": 1581071166709,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3870977,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3199517,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "map",
            "value": 11807806,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "map obj",
            "value": 11960715,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10560991,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "85 samples"
          }
        ]
      },
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
          "id": "7b35c7b5e7f7b689aea2978a8703ebb164214373",
          "message": "Chore",
          "timestamp": "2020-02-07T12:53:54+02:00",
          "tree_id": "5653a36e0e3c1976f75c277f4a50cd15ebc45ec3",
          "url": "https://github.com/kurkle/color/commit/7b35c7b5e7f7b689aea2978a8703ebb164214373"
        },
        "date": 1581073015541,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4166410,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3288593,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 12458351,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map obj",
            "value": 12513468,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10510595,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
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
          "id": "bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb",
          "message": "Add benchmarks for hex/hsl/rgbString",
          "timestamp": "2020-02-07T13:28:25+02:00",
          "tree_id": "6a2415f625f2111c58a2555e0fa91828a0202a32",
          "url": "https://github.com/kurkle/color/commit/bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb"
        },
        "date": 1581075092185,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3782931,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt slice",
            "value": 2950538,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "map",
            "value": 11319599,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map obj",
            "value": 11424966,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10078832,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
      },
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
          "id": "95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e",
          "message": "Optimize opaquer / clearer",
          "timestamp": "2020-02-07T12:23:00+02:00",
          "tree_id": "264eefd40b4b0ddb3e26113f1aabc601f0f0b0df",
          "url": "https://github.com/kurkle/color/commit/95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e"
        },
        "date": 1581071510493,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28203593,
            "range": "±4.66%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 771502,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 611936,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 542503,
            "range": "±3.49%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2550259,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2482493,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1798165,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7865719,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 455954,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 522774,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 494101,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1932714,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1483186,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 5705132,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 477663,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 682325,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 681211,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2341383,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2938834,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2037145,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4826130,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 448900,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 654962,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 619404,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1903634,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1744658,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2612262,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 487812,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 798488,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 99132,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 887656,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1190413,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2074561,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1753520,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 446969,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 638732,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 89248,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 628392,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 814404,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1733427,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4799870,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1502901,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 463648,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 620251,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14427747,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 787108,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 654994,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 659320,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7265761,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14785555,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2789731,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 631296752,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 762190,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 70666602,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 87536470,
            "range": "±19.08%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 702542,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4727069,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 837456,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4238148,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 394326,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 865501,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4600158,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 271368,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 802157,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4330805,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 271024,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 775328,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 97792572,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12610323,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21635395,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 52824346,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2267767,
            "range": "±5.32%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 305893,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 580230,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2752352,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1870762,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "67 samples"
          }
        ]
      },
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
          "id": "7b35c7b5e7f7b689aea2978a8703ebb164214373",
          "message": "Chore",
          "timestamp": "2020-02-07T12:53:54+02:00",
          "tree_id": "5653a36e0e3c1976f75c277f4a50cd15ebc45ec3",
          "url": "https://github.com/kurkle/color/commit/7b35c7b5e7f7b689aea2978a8703ebb164214373"
        },
        "date": 1581073356586,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 30126654,
            "range": "±6.19%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 801083,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 613952,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 607441,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2741168,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2500800,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1827669,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8115271,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 466253,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 530080,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 510455,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1885838,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1541554,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 7232974,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 479863,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 715425,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 708171,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2415301,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3175628,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2126190,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4659488,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 456070,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 650870,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 629857,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1941850,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1795468,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2834833,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 465002,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 803053,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 104236,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1003414,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1192257,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2199021,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1832718,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 455698,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 678063,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 103054,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 707598,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 872065,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1660177,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4537911,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1520856,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 481484,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 617238,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16212515,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 896895,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 656618,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 673932,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8754419,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15187228,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3172359,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 590030287,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 819797,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 76759118,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 285128880,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 738226,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4735830,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 930315,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4340741,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 398292,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 916521,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4773154,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 276006,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 854831,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4460628,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 278612,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 862142,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 60293007,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12452916,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21807873,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 58963706,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2554504,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 326969,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 614379,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3394743,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2167915,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
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
          "id": "bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb",
          "message": "Add benchmarks for hex/hsl/rgbString",
          "timestamp": "2020-02-07T13:28:25+02:00",
          "tree_id": "6a2415f625f2111c58a2555e0fa91828a0202a32",
          "url": "https://github.com/kurkle/color/commit/bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb"
        },
        "date": 1581075462621,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26744106,
            "range": "±5.80%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 749256,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 599654,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 580923,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2546954,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2424381,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1717310,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7156775,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 436222,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 519836,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 485160,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1860643,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1256619,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6037136,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 468027,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 677457,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 584448,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2275157,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2883015,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1986883,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4595932,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 437058,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 617081,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 611946,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1848130,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1647571,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2650181,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 455765,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 777118,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 99884,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 893564,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1140101,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2001428,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1707748,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 430753,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 654363,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 79388,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 617070,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 823687,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1593571,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4504776,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1368823,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 439647,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 557908,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 11631727,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 759990,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 639995,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 620105,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 6717532,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13487525,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2654904,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 647254953,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 767189,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 65120633,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 139629453,
            "range": "±23.82%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 695088,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4596349,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 857119,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4482313,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 378046,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 850563,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4578444,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 271980,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 791078,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4316670,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 271057,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 792645,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 51849804,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12516275,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21516118,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 49972518,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2406064,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 318557,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 591061,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2901561,
            "range": "±5.36%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1811260,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8264800,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1684265,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8320529,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10734825,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11537799,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10547541,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      }
    ]
  }
}