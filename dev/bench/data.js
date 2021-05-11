window.BENCHMARK_DATA = {
  "lastUpdate": 1620755156527,
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
          "id": "92823e79b4c6995671d10c19cca4be4686e99bc0",
          "message": "Update readme",
          "timestamp": "2020-02-07T15:50:45+02:00",
          "tree_id": "23651a50a644713a4d023f0059324d0f50c341ed",
          "url": "https://github.com/kurkle/color/commit/92823e79b4c6995671d10c19cca4be4686e99bc0"
        },
        "date": 1581083641239,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3865086,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3083602,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map",
            "value": 11794473,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map obj",
            "value": 11855134,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10181373,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "93 samples"
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
          "id": "6e7a64f9350c182bd467c179360c35a8a56cd318",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:09:41+02:00",
          "tree_id": "36443677295334ab91ae8049a4904125941ed94a",
          "url": "https://github.com/kurkle/color/commit/6e7a64f9350c182bd467c179360c35a8a56cd318"
        },
        "date": 1581084773495,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4204040,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3377171,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "map",
            "value": 12388354,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map obj",
            "value": 12767561,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10812402,
            "range": "±2.10%",
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
          "id": "e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:14:49+02:00",
          "tree_id": "56eb45faab1c5a42980f5ab1b3242d40863e8206",
          "url": "https://github.com/kurkle/color/commit/e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba"
        },
        "date": 1581085073020,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4144997,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3332026,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 12659961,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "map obj",
            "value": 12685793,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10806331,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "93 samples"
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
          "id": "0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:18:06+02:00",
          "tree_id": "75d863ebe35f50fe12be1a86679d479a433659cb",
          "url": "https://github.com/kurkle/color/commit/0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93"
        },
        "date": 1581085269399,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3818807,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3059243,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map",
            "value": 11859041,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map obj",
            "value": 11944117,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9909908,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "92 samples"
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
          "id": "7f4b7524c3cc40566865b11e06cf7dea473c0f72",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:23:16+02:00",
          "tree_id": "7032babc13e1d0cb8a4c39732728308370b76609",
          "url": "https://github.com/kurkle/color/commit/7f4b7524c3cc40566865b11e06cf7dea473c0f72"
        },
        "date": 1581085579689,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3736881,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3026895,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map",
            "value": 11448940,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map obj",
            "value": 11634739,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9911209,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "7c3adaf100d714d67e774dd0c2b6139522fe04e8",
          "message": "Change from min to minzip shield",
          "timestamp": "2020-02-07T16:29:24+02:00",
          "tree_id": "35bc6bc5e92c1003ed4909d4cef891ddb34efa3c",
          "url": "https://github.com/kurkle/color/commit/7c3adaf100d714d67e774dd0c2b6139522fe04e8"
        },
        "date": 1581085944638,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4111793,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3282424,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map",
            "value": 12631227,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map obj",
            "value": 12804542,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10918675,
            "range": "±1.02%",
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
          "id": "d841584e61cd49e86b99ee84e05b910f166eff0c",
          "message": "Add size visualizations",
          "timestamp": "2020-02-07T17:11:03+02:00",
          "tree_id": "55450e2ac0008ab48e514f67dffacd8d825db971",
          "url": "https://github.com/kurkle/color/commit/d841584e61cd49e86b99ee84e05b910f166eff0c"
        },
        "date": 1581088443762,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4347878,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3487358,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map",
            "value": 13389633,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map obj",
            "value": 13302034,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 11127932,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "0d418486d20e9059695d5b4fd2fd55042c8a19c5",
          "message": "Allow decimal for hue, add couple of tests",
          "timestamp": "2020-02-09T19:27:57+02:00",
          "tree_id": "551dda40cdbf04ca173cceae848cf74fc707e87b",
          "url": "https://github.com/kurkle/color/commit/0d418486d20e9059695d5b4fd2fd55042c8a19c5"
        },
        "date": 1581269372320,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4190914,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3376838,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "map",
            "value": 12943930,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map obj",
            "value": 13070140,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 11002039,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "92 samples"
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
          "id": "62efdf8e2ebc0a3c1541eb24014b78c9336279b3",
          "message": "Update regexps to handle scientific notation",
          "timestamp": "2020-02-09T21:46:27+02:00",
          "tree_id": "6c0603535c30e6be908daf0c7e4653fb4e69ca51",
          "url": "https://github.com/kurkle/color/commit/62efdf8e2ebc0a3c1541eb24014b78c9336279b3"
        },
        "date": 1581277676234,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3766588,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3065066,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map",
            "value": 11686321,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map obj",
            "value": 11910498,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9985853,
            "range": "±0.93%",
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
          "id": "89f6db6922ededabe15f1c8307835d9aa8c5e100",
          "message": "Update publish script, prepare for v0.1.3",
          "timestamp": "2020-02-09T22:16:07+02:00",
          "tree_id": "f134317798ebd1dacbef9d04e0f362982b24bc64",
          "url": "https://github.com/kurkle/color/commit/89f6db6922ededabe15f1c8307835d9aa8c5e100"
        },
        "date": 1581279447737,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4454729,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3517472,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "map",
            "value": 13112227,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map obj",
            "value": 13406864,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 12090680,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "7b2da6333fae194862cb6194bb52088f56a21c1e",
          "message": "Update publish script, prepare for v0.1.3",
          "timestamp": "2020-02-09T22:26:41+02:00",
          "tree_id": "65271008750d5a415d84f6d5b312382ae24aa201",
          "url": "https://github.com/kurkle/color/commit/7b2da6333fae194862cb6194bb52088f56a21c1e"
        },
        "date": 1581280078680,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3910395,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3147269,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "map",
            "value": 12054620,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "map obj",
            "value": 12080997,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10215142,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "95 samples"
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
          "id": "cdbc5a747daf3b9da1aa2795e39ecb751c4d3631",
          "message": "Add types",
          "timestamp": "2020-02-21T16:10:57+02:00",
          "tree_id": "db799d6479413865875826575ca781bccfec05a2",
          "url": "https://github.com/kurkle/color/commit/cdbc5a747daf3b9da1aa2795e39ecb751c4d3631"
        },
        "date": 1582294338961,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4039954,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3227870,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "map",
            "value": 12491451,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map obj",
            "value": 12445715,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10411707,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "92 samples"
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
          "id": "6875a586573bb758b07c56f07be3b99de20c5c06",
          "message": "Add types",
          "timestamp": "2020-02-21T18:19:10+02:00",
          "tree_id": "237732c422eb3fd0935e0bb05020c0a4f673a733",
          "url": "https://github.com/kurkle/color/commit/6875a586573bb758b07c56f07be3b99de20c5c06"
        },
        "date": 1582302033532,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3985356,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3150293,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 12146269,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map obj",
            "value": 12460118,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10460168,
            "range": "±1.08%",
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
          "id": "67cb8a82dd504bc8072e180c77c47b415659586b",
          "message": "Include the types in the package too. doh.",
          "timestamp": "2020-02-21T18:32:28+02:00",
          "tree_id": "5270fc935e9ca4bca465b084169f1ff5b02a4f0b",
          "url": "https://github.com/kurkle/color/commit/67cb8a82dd504bc8072e180c77c47b415659586b"
        },
        "date": 1582302832871,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3863185,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3126053,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 11974654,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map obj",
            "value": 11969129,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10176067,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "92 samples"
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
          "id": "5bc913d721689ad02409252135dd934b45eb5000",
          "message": "Fix types",
          "timestamp": "2020-02-21T19:03:20+02:00",
          "tree_id": "a0ec234f46e99f5e769140b4e0ab22978b4257b7",
          "url": "https://github.com/kurkle/color/commit/5bc913d721689ad02409252135dd934b45eb5000"
        },
        "date": 1582304694762,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4203025,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3386303,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map",
            "value": 12547480,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map obj",
            "value": 12463031,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10802191,
            "range": "±1.32%",
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
          "id": "03bc23283dc7201559a0fc96a5c4c42bfc861391",
          "message": "Docs, export utils from ESM package",
          "timestamp": "2020-02-23T09:12:20+02:00",
          "tree_id": "ce69a4841e0d6a040526998c43c68cba98f2bac7",
          "url": "https://github.com/kurkle/color/commit/03bc23283dc7201559a0fc96a5c4c42bfc861391"
        },
        "date": 1582442027569,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3791923,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3058047,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 11702480,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "map obj",
            "value": 11881873,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9999925,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "94 samples"
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
          "id": "f63d853c05ed51f7f258b28bc7b0593b8784dbd8",
          "message": "Docs, export utils from ESM package",
          "timestamp": "2020-02-23T09:18:26+02:00",
          "tree_id": "1875c3f81f53fb547f0e3509bb6adfddefaa33e0",
          "url": "https://github.com/kurkle/color/commit/f63d853c05ed51f7f258b28bc7b0593b8784dbd8"
        },
        "date": 1582442407411,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4240423,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3400337,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map",
            "value": 12993734,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map obj",
            "value": 13078979,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 11131893,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34d6c9538ee2d0171b6b28082668f0e6a7c331f1",
          "message": "Merge pull request #1 from kurkle/dependabot/npm_and_yarn/acorn-7.1.1\n\nBump acorn from 7.1.0 to 7.1.1",
          "timestamp": "2020-03-14T07:31:28+02:00",
          "tree_id": "f4f11eb3c15165f67e91035dfe7efb3b95dd4297",
          "url": "https://github.com/kurkle/color/commit/34d6c9538ee2d0171b6b28082668f0e6a7c331f1"
        },
        "date": 1584163960879,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4006229,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3266249,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map",
            "value": 12527153,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "map obj",
            "value": 12550806,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10499904,
            "range": "±0.76%",
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
          "id": "97a385ec1b21ac3ef0567c4dc32fa62cb54d10ee",
          "message": "Update deps",
          "timestamp": "2020-03-14T08:24:10+02:00",
          "tree_id": "a4f6db35eb881e03978acba1cca13f0618f6c636",
          "url": "https://github.com/kurkle/color/commit/97a385ec1b21ac3ef0567c4dc32fa62cb54d10ee"
        },
        "date": 1584167129207,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3999582,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3239383,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map",
            "value": 12382022,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "map obj",
            "value": 12491467,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10508185,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "92 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "e550e48c9c7f9ad29b88dc7bb89928c04938ad90",
          "message": "Update copy_dist.js",
          "timestamp": "2020-04-30T10:38:32+03:00",
          "tree_id": "48aa8e09a13908737e142c9d54724e1df11404de",
          "url": "https://github.com/kurkle/color/commit/e550e48c9c7f9ad29b88dc7bb89928c04938ad90"
        },
        "date": 1588232376314,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4333940,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3506013,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map",
            "value": 13253050,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map obj",
            "value": 13248962,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 11625479,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "92 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "0f439c6386f1dbaefe0a6515f71e5f33e22aada3",
          "message": "Bump version",
          "timestamp": "2020-06-04T23:17:54+03:00",
          "tree_id": "48124e6094bda7d9afe81de01de05b3e7dd6825b",
          "url": "https://github.com/kurkle/color/commit/0f439c6386f1dbaefe0a6515f71e5f33e22aada3"
        },
        "date": 1591301943477,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4758840,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "parseInt slice",
            "value": 4007211,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map",
            "value": 13850227,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "map obj",
            "value": 14174105,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 12111911,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "143587139f6f578347c551fa2e43cff9bb876833",
          "message": "Update packages, move typedoc to devDependencies",
          "timestamp": "2020-06-04T23:27:47+03:00",
          "tree_id": "3c7dbb80e6977c71b1320a8c8dc272daee432b4f",
          "url": "https://github.com/kurkle/color/commit/143587139f6f578347c551fa2e43cff9bb876833"
        },
        "date": 1591302545394,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4162678,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3456577,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map",
            "value": 12801446,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map obj",
            "value": 12726098,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 11195355,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "556e92b87ae3015cb551875a96a14ce55ca8c876",
          "message": "Pump version",
          "timestamp": "2020-06-09T05:48:32+03:00",
          "tree_id": "1655cb98e64fcb11a9ba9f9c4b4d544f34c94f4d",
          "url": "https://github.com/kurkle/color/commit/556e92b87ae3015cb551875a96a14ce55ca8c876"
        },
        "date": 1591670975679,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4122487,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3371697,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map",
            "value": 12462800,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map obj",
            "value": 12804815,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 11152845,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "93 samples"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e310597f693f6f1ca4a2ff00c6a0eb7c4cf4c919",
          "message": "Merge pull request #3 from kurkle/dependabot/npm_and_yarn/lodash-4.17.19\n\nBump lodash from 4.17.15 to 4.17.19",
          "timestamp": "2020-07-26T08:30:01+03:00",
          "tree_id": "2fb3f327dc923cdd4e571bf7711f7431b27a806a",
          "url": "https://github.com/kurkle/color/commit/e310597f693f6f1ca4a2ff00c6a0eb7c4cf4c919"
        },
        "date": 1595741463043,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3587950,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3079600,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 10375230,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map obj",
            "value": 10575705,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9511730,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79dae17067dc5430dc8fa802b6a350e282810048",
          "message": "Merge pull request #4 from kurkle/dependabot/npm_and_yarn/highlight.js-10.4.0\n\nBump highlight.js from 10.0.3 to 10.4.0",
          "timestamp": "2020-12-02T16:05:22+02:00",
          "tree_id": "62d5671798fc547fcfb02d58f05811f21a85c25e",
          "url": "https://github.com/kurkle/color/commit/79dae17067dc5430dc8fa802b6a350e282810048"
        },
        "date": 1606917988602,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3942188,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3348154,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 11509082,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "map obj",
            "value": 12433872,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10931757,
            "range": "±0.74%",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b22515a665e99ea6afa1dbe3f0e5b7217f4e730",
          "message": "Merge pull request #5 from kurkle/dependabot/npm_and_yarn/highlight.js-10.4.1\n\nBump highlight.js from 10.4.0 to 10.4.1",
          "timestamp": "2021-03-13T13:23:21+02:00",
          "tree_id": "889d6e9d60e277d489faa3fcc9328330df6f08f0",
          "url": "https://github.com/kurkle/color/commit/6b22515a665e99ea6afa1dbe3f0e5b7217f4e730"
        },
        "date": 1615634657720,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3777613,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3182116,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "map",
            "value": 10836174,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "map obj",
            "value": 10756108,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9992933,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "92 samples"
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
          "id": "6a20cdf38faba872af1670bc1e10427a054d4b89",
          "message": "Update deps, tabs->spaces",
          "timestamp": "2021-03-13T13:39:29+02:00",
          "tree_id": "bfb0ff51981e60309048d44284654e7f1dd13423",
          "url": "https://github.com/kurkle/color/commit/6a20cdf38faba872af1670bc1e10427a054d4b89"
        },
        "date": 1615635643352,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3997791,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3286895,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "map",
            "value": 11610377,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "map obj",
            "value": 11903687,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10716493,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "0dbb1551f0b33ce6279653fa48b6e0622cc05faa",
          "message": "Update license",
          "timestamp": "2021-03-13T13:42:40+02:00",
          "tree_id": "a15dfc2a61235ed2fe75c4dcbae26c1450301b6f",
          "url": "https://github.com/kurkle/color/commit/0dbb1551f0b33ce6279653fa48b6e0622cc05faa"
        },
        "date": 1615635830913,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3751589,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3055564,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map",
            "value": 11338347,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map obj",
            "value": 11227990,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9993593,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "900ce8279500f77531dc467623f20106a63d4875",
          "message": "Add rollup-plugin-size-snapshot",
          "timestamp": "2021-03-21T18:47:42+02:00",
          "tree_id": "487406d268a6e48df8ede21e54fac9a7e2218d81",
          "url": "https://github.com/kurkle/color/commit/900ce8279500f77531dc467623f20106a63d4875"
        },
        "date": 1616345352019,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3991449,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3196712,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "map",
            "value": 11654033,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "map obj",
            "value": 11873560,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10486976,
            "range": "±0.83%",
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
          "id": "01f78b999b7c01404c5ca5f08a9b46ffc9b14c49",
          "message": "Chore",
          "timestamp": "2021-03-21T19:34:04+02:00",
          "tree_id": "6cd2a330d5d491f70b8a378bf668c047a22c3a6e",
          "url": "https://github.com/kurkle/color/commit/01f78b999b7c01404c5ca5f08a9b46ffc9b14c49"
        },
        "date": 1616348128169,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3659995,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3008041,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map",
            "value": 10732505,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map obj",
            "value": 11222919,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10034879,
            "range": "±1.31%",
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
          "id": "6f6fb379a007f7af0595e9f3f362db59ea095381",
          "message": "Update typedoc and assert configs",
          "timestamp": "2021-03-21T20:12:01+02:00",
          "tree_id": "65a832f5051d7a46f20c77b66a80e0f7bd5c1d6d",
          "url": "https://github.com/kurkle/color/commit/6f6fb379a007f7af0595e9f3f362db59ea095381"
        },
        "date": 1616350397275,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4033313,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3216561,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "map",
            "value": 11304447,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map obj",
            "value": 11505847,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10410722,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
          "id": "ee4c97f5dbf06faf702b7134d4b7a5e9f01e0f39",
          "message": "Remove vulnerable rollup-plugin-size-snapshot",
          "timestamp": "2021-03-23T09:45:06+02:00",
          "tree_id": "78b89820f0133966581d96f129b240d1d27f5442",
          "url": "https://github.com/kurkle/color/commit/ee4c97f5dbf06faf702b7134d4b7a5e9f01e0f39"
        },
        "date": 1616485572706,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4856115,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt slice",
            "value": 4220431,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 13996395,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "map obj",
            "value": 14053580,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 13466161,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "92 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edd19eb5cdd5d236c16240eb18365891157e9e66",
          "message": "Bump lodash from 4.17.19 to 4.17.21 (#6)\n\nBumps [lodash](https://github.com/lodash/lodash) from 4.17.19 to 4.17.21.\r\n- [Release notes](https://github.com/lodash/lodash/releases)\r\n- [Commits](https://github.com/lodash/lodash/compare/4.17.19...4.17.21)\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2021-05-11T20:38:31+03:00",
          "tree_id": "0a48efe77e4e7b8a8492a914e8b629b5b0d5ff14",
          "url": "https://github.com/kurkle/color/commit/edd19eb5cdd5d236c16240eb18365891157e9e66"
        },
        "date": 1620754769352,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3829478,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3176742,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 11560670,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "map obj",
            "value": 11772131,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10424334,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a393111baeed971c5c41abaa7896567664263f5",
          "message": "Bump hosted-git-info from 2.8.8 to 2.8.9 (#7)\n\nBumps [hosted-git-info](https://github.com/npm/hosted-git-info) from 2.8.8 to 2.8.9.\r\n- [Release notes](https://github.com/npm/hosted-git-info/releases)\r\n- [Changelog](https://github.com/npm/hosted-git-info/blob/v2.8.9/CHANGELOG.md)\r\n- [Commits](https://github.com/npm/hosted-git-info/compare/v2.8.8...v2.8.9)\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2021-05-11T20:38:52+03:00",
          "tree_id": "675a5a3de6da6d171af07ceb6ddcb99a0bdfba71",
          "url": "https://github.com/kurkle/color/commit/4a393111baeed971c5c41abaa7896567664263f5"
        },
        "date": 1620754788203,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3709116,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3249287,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map",
            "value": 11049605,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map obj",
            "value": 11232328,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10311711,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "92823e79b4c6995671d10c19cca4be4686e99bc0",
          "message": "Update readme",
          "timestamp": "2020-02-07T15:50:45+02:00",
          "tree_id": "23651a50a644713a4d023f0059324d0f50c341ed",
          "url": "https://github.com/kurkle/color/commit/92823e79b4c6995671d10c19cca4be4686e99bc0"
        },
        "date": 1581084011595,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28073285,
            "range": "±6.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 748382,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 591670,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 553419,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2530395,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2358943,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1680505,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7341831,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 425868,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 518588,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 495238,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1832766,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1398112,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6499204,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 463540,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 659019,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 664693,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2243090,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2985833,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2014345,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4491710,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 425144,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 609141,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 601375,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1799557,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1671805,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2663487,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 435152,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 754095,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 98644,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 931869,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1209855,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2025116,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1661661,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 423583,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 645060,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 94807,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 649228,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 850980,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1570280,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4463967,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1503679,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 439597,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 574372,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 13486784,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 801794,
            "range": "±3.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 625863,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 637539,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7916526,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14423561,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2998302,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 554860833,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 771833,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 60396946,
            "range": "±6.47%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 71351411,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 724902,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4397528,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 796663,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4271001,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 396658,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 804958,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4478927,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 258390,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 820872,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4260046,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 260095,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 822688,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 85351937,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11564325,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20301759,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 46797411,
            "range": "±5.23%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2177872,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 291236,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 585031,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2941016,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2055696,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9286114,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1605297,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8216997,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11920651,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12747840,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11121824,
            "range": "±1.10%",
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
          "id": "6e7a64f9350c182bd467c179360c35a8a56cd318",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:09:41+02:00",
          "tree_id": "36443677295334ab91ae8049a4904125941ed94a",
          "url": "https://github.com/kurkle/color/commit/6e7a64f9350c182bd467c179360c35a8a56cd318"
        },
        "date": 1581085142147,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26570627,
            "range": "±5.62%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 832429,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 662926,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 680123,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2838016,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2701650,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1894105,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8138430,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 496075,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 588690,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 580031,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1997799,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1605361,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6137014,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 513996,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 755933,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 775318,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2590366,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3289790,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2190423,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4956773,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 491337,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 705964,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 687887,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2079864,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1845034,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2956128,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 473837,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 840590,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 101765,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 995470,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1220572,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2266928,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1896082,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 484050,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 739614,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 103106,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 697658,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 900550,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1794593,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5061146,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1596812,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 467233,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 616364,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16106484,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 893976,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 689809,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 692051,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7817552,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15055692,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2872697,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 700409459,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 902707,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 73536910,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 313919532,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 773496,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4999152,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 942019,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 5086122,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 445734,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 945635,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 5570294,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 303130,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 862684,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 5137207,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 304927,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 852709,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 114050129,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 13871403,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22118708,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 54084460,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2568325,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 348672,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 647019,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3439541,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2187326,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8764577,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1832422,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 9651230,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12555894,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12844513,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12156474,
            "range": "±1.00%",
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
          "id": "e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:14:49+02:00",
          "tree_id": "56eb45faab1c5a42980f5ab1b3242d40863e8206",
          "url": "https://github.com/kurkle/color/commit/e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba"
        },
        "date": 1581085443124,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29829294,
            "range": "±6.52%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 767527,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 597625,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 588180,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2699427,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2524830,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1776479,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8169039,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 455545,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 512979,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 490681,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1861615,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1445002,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6758710,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 479162,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 679563,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 689790,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2419602,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3167379,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2156877,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4922273,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 444042,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 629855,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 620002,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1932924,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1755243,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2851895,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 418506,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 808457,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 101050,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 945356,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1259661,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2181843,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1780292,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 413884,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 686641,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 101233,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 700875,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 912681,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1634579,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4542869,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1546475,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 479612,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 610395,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16656296,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 857892,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 635236,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 643029,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7704946,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14341139,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3160828,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 587879201,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 817924,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 75825109,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 283954175,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 774685,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4440253,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 911007,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4606908,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 395077,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 931595,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4773265,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 271880,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 864798,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4501079,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 269050,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 857496,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 90790148,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12532263,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22089597,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 59680089,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2521396,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 322465,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 629422,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3181675,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2132612,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9706134,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1837891,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8866728,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12601798,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13294608,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12753991,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
          "id": "0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:18:06+02:00",
          "tree_id": "75d863ebe35f50fe12be1a86679d479a433659cb",
          "url": "https://github.com/kurkle/color/commit/0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93"
        },
        "date": 1581085639887,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26298036,
            "range": "±8.67%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 716970,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 569087,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 548003,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2464252,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2289390,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1647622,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7273684,
            "range": "±4.31%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 422863,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 500061,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 484332,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1710009,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1334203,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6499614,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 448679,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 664283,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 644300,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2252453,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2962933,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1990688,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4674273,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 417942,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 598463,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 585272,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1731678,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1598577,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2612947,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 417948,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 751265,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 98746,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 923924,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1148999,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2045673,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1705287,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 420132,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 649849,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 85365,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 652036,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 825027,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1511432,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4502610,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1457543,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 445663,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 552351,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14899533,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 817922,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 609186,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 623229,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7832122,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13211699,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2908804,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 551503828,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 709272,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 49460325,
            "range": "±6.68%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 69451169,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 720382,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4253946,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 880403,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4239698,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 395952,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 885433,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4378874,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 257296,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 805746,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4200151,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 237771,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 787118,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 85761637,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11794055,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19883462,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 55260363,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2330272,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 281864,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 588632,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3062457,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1932968,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9093265,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1658811,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8168140,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11792853,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12548348,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11654683,
            "range": "±1.65%",
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
          "id": "7f4b7524c3cc40566865b11e06cf7dea473c0f72",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:23:16+02:00",
          "tree_id": "7032babc13e1d0cb8a4c39732728308370b76609",
          "url": "https://github.com/kurkle/color/commit/7f4b7524c3cc40566865b11e06cf7dea473c0f72"
        },
        "date": 1581085948790,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28462372,
            "range": "±4.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 722791,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 560001,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 547629,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2437365,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2307286,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1652832,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7393239,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 436786,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 484385,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 465682,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1698935,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1341974,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6124381,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 435268,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 621449,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 648946,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2170649,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2791604,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1941517,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4583857,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 430186,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 590425,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 573072,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1742795,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1653164,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2616542,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 428519,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 739176,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 95631,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 892551,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1137302,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2045283,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1694397,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 418492,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 633236,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 74780,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 623701,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 846607,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1538193,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4331365,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1439922,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 456428,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 551835,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 15578150,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 815553,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 585567,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 630220,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7545953,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13978495,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2888995,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 550012564,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 721131,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 50253056,
            "range": "±7.07%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 69089093,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 688086,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4284323,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 881187,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4194213,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 387184,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 863692,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4301816,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 259951,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 777262,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4169313,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 260499,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 792328,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 54780335,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11499058,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20174721,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 54789319,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2342927,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 304473,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 574079,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2951201,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1859419,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8211646,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1687373,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8330074,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11797361,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12226658,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11787477,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "74 samples"
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
          "id": "7c3adaf100d714d67e774dd0c2b6139522fe04e8",
          "message": "Change from min to minzip shield",
          "timestamp": "2020-02-07T16:29:24+02:00",
          "tree_id": "35bc6bc5e92c1003ed4909d4cef891ddb34efa3c",
          "url": "https://github.com/kurkle/color/commit/7c3adaf100d714d67e774dd0c2b6139522fe04e8"
        },
        "date": 1581086313803,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 30595810,
            "range": "±6.84%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 793021,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 613550,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 614443,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2676921,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2498496,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1781496,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8168387,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 481997,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 529531,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 515838,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1888556,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1478788,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6818981,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 492373,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 693361,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 694786,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2395690,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3101866,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2100873,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4802164,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 455714,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 639470,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 620362,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1907090,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1750879,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2866693,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 476664,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 788388,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 103524,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 971795,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1249687,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2229821,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1790064,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 462666,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 697016,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 83072,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 708533,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 915214,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1716378,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4489202,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1554804,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 481477,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 610650,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 17146439,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 895408,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 660026,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 697861,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8341103,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 16038788,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3046142,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 595970523,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 813344,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 76173590,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 281096717,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 745053,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4808376,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 928739,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4513540,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 386101,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 913783,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4504405,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 277251,
            "range": "±5.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 862734,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4575714,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 288229,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 876173,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 92446148,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12748410,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20911905,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 38420387,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2440405,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 326278,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 630497,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3344505,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2177371,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9848050,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1868267,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8979263,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 13069873,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13811953,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12891279,
            "range": "±1.23%",
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
          "id": "d841584e61cd49e86b99ee84e05b910f166eff0c",
          "message": "Add size visualizations",
          "timestamp": "2020-02-07T17:11:03+02:00",
          "tree_id": "55450e2ac0008ab48e514f67dffacd8d825db971",
          "url": "https://github.com/kurkle/color/commit/d841584e61cd49e86b99ee84e05b910f166eff0c"
        },
        "date": 1581088811754,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 30827513,
            "range": "±6.92%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 846148,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 651504,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 641661,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2886357,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2639039,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1917392,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8443260,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 488203,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 566676,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 538341,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 2002430,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1637498,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 7043382,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 517731,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 747590,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 750714,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2490203,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3454044,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2284312,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5430847,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 491250,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 681268,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 654332,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1996966,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1849402,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 3006231,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 500136,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 850991,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 109640,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1000374,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1297526,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2309169,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1893296,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 506381,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 706319,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 89444,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 686412,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 929948,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1744554,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4975585,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1669879,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 502218,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 630364,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14409228,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 922376,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 698271,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 715298,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8488824,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 17280904,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3264390,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 628337320,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 884814,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 80014676,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 301004556,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 788744,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4874576,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 968847,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4677537,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 415997,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 986404,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4964838,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 293155,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 895359,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4499397,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 284859,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 872468,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 93011597,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12302312,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 16365781,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 38377934,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2593604,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 334702,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 625633,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3387796,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2007099,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9897619,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1863425,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 9118284,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12895952,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13414664,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12501376,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "69 samples"
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
          "id": "0d418486d20e9059695d5b4fd2fd55042c8a19c5",
          "message": "Allow decimal for hue, add couple of tests",
          "timestamp": "2020-02-09T19:27:57+02:00",
          "tree_id": "551dda40cdbf04ca173cceae848cf74fc707e87b",
          "url": "https://github.com/kurkle/color/commit/0d418486d20e9059695d5b4fd2fd55042c8a19c5"
        },
        "date": 1581269740714,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29452555,
            "range": "±7.26%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 791990,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 621917,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 598412,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2769355,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2580931,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1822742,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8158990,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 478905,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 530701,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 508115,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1868273,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1482064,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6974859,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 497802,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 701706,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 719367,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2447145,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3260372,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2165178,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4949277,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 462852,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 625340,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 637749,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1902405,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1765089,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2802025,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 463050,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 800008,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 107143,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 949891,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1219885,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2191809,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1831886,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 435421,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 664240,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 99931,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 669733,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 894255,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1679409,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 2516635,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1547298,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 474209,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 596392,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16953153,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 875963,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 669172,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 682302,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8009930,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14124960,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3085779,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 352624382,
            "range": "±30.14%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 809865,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 76795000,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 284208041,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 781390,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4744058,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 910847,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4670345,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 389775,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 883670,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4664342,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 283659,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 864021,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4645211,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 283102,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 851202,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 92038881,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11216109,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 14208588,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 38106941,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2612422,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 338303,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 626962,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3408897,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2090864,
            "range": "±4.16%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9704075,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1833752,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8721694,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11244094,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12358561,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11858193,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
          "id": "62efdf8e2ebc0a3c1541eb24014b78c9336279b3",
          "message": "Update regexps to handle scientific notation",
          "timestamp": "2020-02-09T21:46:27+02:00",
          "tree_id": "6c0603535c30e6be908daf0c7e4653fb4e69ca51",
          "url": "https://github.com/kurkle/color/commit/62efdf8e2ebc0a3c1541eb24014b78c9336279b3"
        },
        "date": 1581278045956,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28562661,
            "range": "±4.42%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 734370,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 566556,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 562245,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2534664,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2359054,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1671950,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7449163,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 443458,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 506350,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 472409,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1811866,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1387984,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6297321,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 453265,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 642804,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 650441,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2257166,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2986144,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2002829,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4660228,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 414240,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 590485,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 581954,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1734201,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1625520,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2639638,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 424185,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 738215,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 91399,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 899318,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1131549,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2002654,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1635186,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 414538,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 625275,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 79962,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 629987,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 833832,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1551806,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5314006,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1478403,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 433175,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 551034,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 15779158,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 826166,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 610670,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 631451,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7684976,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14924126,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2973332,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 330028627,
            "range": "±30.51%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 766377,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 72434086,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 264953687,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 710872,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4180606,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 850006,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4171038,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 387436,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 855497,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4182392,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 263759,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 787631,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4091881,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 250292,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 816154,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 85082866,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11739983,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19447974,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 56674618,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2375058,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 295959,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 577862,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2473614,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2030505,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9363662,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1729860,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8230894,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11893380,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12797416,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12051323,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
          "id": "89f6db6922ededabe15f1c8307835d9aa8c5e100",
          "message": "Update publish script, prepare for v0.1.3",
          "timestamp": "2020-02-09T22:16:07+02:00",
          "tree_id": "f134317798ebd1dacbef9d04e0f362982b24bc64",
          "url": "https://github.com/kurkle/color/commit/89f6db6922ededabe15f1c8307835d9aa8c5e100"
        },
        "date": 1581279816053,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29599152,
            "range": "±8.05%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 891074,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 713514,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 698395,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 3050441,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2876450,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1969636,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8602310,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 544509,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 596341,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 595242,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 2264199,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1704636,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6809064,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 550621,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 781097,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 821073,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2724836,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3392610,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2341023,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5199925,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 496659,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 738218,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 725381,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2199537,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1971210,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 3073504,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 532537,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 892792,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 115783,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1048405,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1289690,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2473980,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 2006876,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 507746,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 769162,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 99965,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 747783,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 931258,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1878620,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 6163526,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1755799,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 497550,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 671781,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14339235,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 994759,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 740231,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 708538,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8786844,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 16461634,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3272842,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 775575377,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 972466,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 46465464,
            "range": "±4.23%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 74473343,
            "range": "±3.17%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 829272,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 5588949,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 967599,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 5510263,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 473107,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 960291,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 5676244,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 329431,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 883138,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 5100261,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 321897,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 891603,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 118489202,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 14933022,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 24115946,
            "range": "±3.52%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 58746719,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2739400,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 371079,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 644508,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3274351,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2280693,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9708449,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1981996,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 9216286,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 13340437,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13946956,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12931738,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "68 samples"
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
          "id": "7b2da6333fae194862cb6194bb52088f56a21c1e",
          "message": "Update publish script, prepare for v0.1.3",
          "timestamp": "2020-02-09T22:26:41+02:00",
          "tree_id": "65271008750d5a415d84f6d5b312382ae24aa201",
          "url": "https://github.com/kurkle/color/commit/7b2da6333fae194862cb6194bb52088f56a21c1e"
        },
        "date": 1581280448886,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29166440,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 764306,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 594707,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 548369,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2574424,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2384660,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1721920,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7825646,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 439975,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 521803,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 458536,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1790611,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1423077,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6542367,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 462321,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 674019,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 671380,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2266945,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3004559,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2079050,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4655858,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 427745,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 635152,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 584485,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1767680,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1696241,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2710764,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 437774,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 763863,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 100518,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 939753,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1235678,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2049408,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1699443,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 433721,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 652419,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 96179,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 667902,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 872350,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1582488,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5459297,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1487159,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 466945,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 569281,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 13474808,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 829004,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 622477,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 644643,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8035365,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14622912,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2972082,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 559182753,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 767491,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 41290457,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 267116898,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 733537,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4312341,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 894402,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 3931258,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 408539,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 898669,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4422345,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 266884,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 827038,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 3998576,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 271884,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 832712,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 86603381,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11855608,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22077053,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 56504094,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2437872,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 311302,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 590927,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2739367,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2044316,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9210103,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1736288,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8431589,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12392388,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12963650,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11783556,
            "range": "±3.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
          "id": "cdbc5a747daf3b9da1aa2795e39ecb751c4d3631",
          "message": "Add types",
          "timestamp": "2020-02-21T16:10:57+02:00",
          "tree_id": "db799d6479413865875826575ca781bccfec05a2",
          "url": "https://github.com/kurkle/color/commit/cdbc5a747daf3b9da1aa2795e39ecb751c4d3631"
        },
        "date": 1582294707813,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28990534,
            "range": "±6.59%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 745405,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 599157,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 577668,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2719083,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2457844,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1771513,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7745864,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 465254,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 540382,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 504849,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1820136,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1445187,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6741193,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 479020,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 696447,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 700202,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2366193,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3131943,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2090886,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4765440,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 448377,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 644558,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 625978,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1917860,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1714937,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2798506,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 468979,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 773337,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 101719,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 935065,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1225803,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2140818,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1782847,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 443921,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 676097,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 87795,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 676792,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 886093,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1625292,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5744630,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1532186,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 469898,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 609020,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16072236,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 853330,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 646367,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 670333,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7791207,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13832962,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3200247,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 507106766,
            "range": "±18.72%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 784192,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 74297312,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 281430202,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 739931,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4457016,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 913262,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4395338,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 389010,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 922886,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4575415,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 262948,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 841788,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4362766,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 271769,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 851667,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 89773471,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12494026,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19089250,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 59033177,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2466241,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 324036,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 584392,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2875814,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2063154,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9684701,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1772547,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8511873,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12388066,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13011608,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12308950,
            "range": "±0.91%",
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
          "id": "6875a586573bb758b07c56f07be3b99de20c5c06",
          "message": "Add types",
          "timestamp": "2020-02-21T18:19:10+02:00",
          "tree_id": "237732c422eb3fd0935e0bb05020c0a4f673a733",
          "url": "https://github.com/kurkle/color/commit/6875a586573bb758b07c56f07be3b99de20c5c06"
        },
        "date": 1582302403752,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 27897692,
            "range": "±6.16%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 752092,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 604552,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 590187,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2649744,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2483867,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1775408,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7972456,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 460743,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 538910,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 481925,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1821121,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1459902,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6753738,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 472812,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 703060,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 685850,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2383915,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3104952,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2100916,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4989376,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 456548,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 641473,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 604844,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1893147,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1750144,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2774336,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 458814,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 788180,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 105447,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 983532,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1190210,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2176573,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1800513,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 443544,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 678039,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 82723,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 687119,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 906787,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1671432,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5897325,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1569802,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 470113,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 604065,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16363821,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 856448,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 624314,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 654667,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7982704,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15140525,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3019919,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 575611304,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 797541,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 75342037,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 109063648,
            "range": "±17.85%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 736584,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4386060,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 912440,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4252940,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 384314,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 919218,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4404385,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 268693,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 835412,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4268522,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 272381,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 836113,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 57102522,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12368903,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21467313,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 58689929,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2432446,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 321344,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 550469,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2724897,
            "range": "±3.75%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1968522,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9544114,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1781188,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8478698,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12130899,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12736931,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12382571,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
          "id": "67cb8a82dd504bc8072e180c77c47b415659586b",
          "message": "Include the types in the package too. doh.",
          "timestamp": "2020-02-21T18:32:28+02:00",
          "tree_id": "5270fc935e9ca4bca465b084169f1ff5b02a4f0b",
          "url": "https://github.com/kurkle/color/commit/67cb8a82dd504bc8072e180c77c47b415659586b"
        },
        "date": 1582303202203,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 27038403,
            "range": "±7.48%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 725452,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 585999,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 553640,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2517465,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2349326,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1693277,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7451068,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 422847,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 501469,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 441446,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1761384,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1405156,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6411482,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 448885,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 651607,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 657285,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2242253,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2932533,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2011980,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4596074,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 422869,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 607418,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 589600,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1750992,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1615063,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2662960,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 423668,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 759717,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 100395,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 922588,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1201112,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2042689,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1686098,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 419882,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 649933,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 95418,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 665191,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 860352,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1565335,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5556491,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1473841,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 451951,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 585698,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 15187208,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 803312,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 621495,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 644878,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7761702,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14835542,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2912568,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 80303602,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 741243,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 72488655,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 265923508,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 698754,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4269246,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 856844,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4128752,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 389264,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 842900,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4331776,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 262726,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 816233,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4073958,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 259121,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 803626,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 86212347,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11289562,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21238258,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 46660170,
            "range": "±5.42%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2249514,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 305186,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 588745,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2629315,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2022886,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9191611,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1699270,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8206473,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11571209,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11014958,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11806492,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
          "id": "5bc913d721689ad02409252135dd934b45eb5000",
          "message": "Fix types",
          "timestamp": "2020-02-21T19:03:20+02:00",
          "tree_id": "a0ec234f46e99f5e769140b4e0ab22978b4257b7",
          "url": "https://github.com/kurkle/color/commit/5bc913d721689ad02409252135dd934b45eb5000"
        },
        "date": 1582305065127,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28062020,
            "range": "±6.83%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 828571,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 650728,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 578849,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2826671,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2572946,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1832886,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7880124,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 450079,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 545168,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 523870,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 2012712,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1633080,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6149593,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 484137,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 754487,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 727665,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2510409,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3245875,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2214539,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4694590,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 456017,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 681145,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 652739,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2021710,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1828987,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2757623,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 427038,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 838393,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 103623,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 895631,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1255681,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2170378,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1914551,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 431360,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 685694,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 95429,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 678476,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 866626,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1719437,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5952602,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1539621,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 451980,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 547953,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 15423346,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 790938,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 696585,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 688031,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 6766936,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14566739,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2869353,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 711538830,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 870844,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 71751251,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 300811989,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 754881,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 5035249,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 869118,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4682527,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 420071,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 849396,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 5045938,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 302883,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 814244,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4828203,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 298924,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 813459,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 109174195,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 13845716,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19323662,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 34074025,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2525026,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 328747,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 602320,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2949389,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1933964,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9191461,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1829326,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 9238540,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11865980,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12595602,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10383903,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "66 samples"
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
          "id": "03bc23283dc7201559a0fc96a5c4c42bfc861391",
          "message": "Docs, export utils from ESM package",
          "timestamp": "2020-02-23T09:12:20+02:00",
          "tree_id": "ce69a4841e0d6a040526998c43c68cba98f2bac7",
          "url": "https://github.com/kurkle/color/commit/03bc23283dc7201559a0fc96a5c4c42bfc861391"
        },
        "date": 1582442397586,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 27822302,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 717475,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 583752,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 556949,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2540572,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2332182,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1671827,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7307413,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 431120,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 513565,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 467641,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1720724,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1424139,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6299558,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 451383,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 657086,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 649100,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2242219,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2876868,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1990686,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4261888,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 438602,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 619460,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 567213,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1803510,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1667809,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2662812,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 431078,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 746738,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 99616,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 929204,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1183669,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2074887,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1681307,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 421503,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 643236,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 96415,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 617732,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 839437,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1590088,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5669489,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1509520,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 449537,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 565309,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 15467898,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 823530,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 607843,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 606941,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7700325,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14421941,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2976072,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 549014530,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 742437,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 70568661,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 259655811,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 697327,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4221181,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 870448,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4055319,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 398328,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 886380,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4281664,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 260297,
            "range": "±5.21%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 820385,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 3922973,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 260442,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 821088,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 85188701,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11750675,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19946592,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 55336561,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2392358,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 309127,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 588318,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2658870,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1910083,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9143193,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1380890,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8280180,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12087044,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12607701,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11919676,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
          "id": "f63d853c05ed51f7f258b28bc7b0593b8784dbd8",
          "message": "Docs, export utils from ESM package",
          "timestamp": "2020-02-23T09:18:26+02:00",
          "tree_id": "1875c3f81f53fb547f0e3509bb6adfddefaa33e0",
          "url": "https://github.com/kurkle/color/commit/f63d853c05ed51f7f258b28bc7b0593b8784dbd8"
        },
        "date": 1582442776998,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29917421,
            "range": "±8.32%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 805929,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 610871,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 544204,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2828255,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2655708,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1864611,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8329279,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 481745,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 543877,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 513737,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 2011106,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1626384,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 7555817,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 528832,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 722259,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 725435,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2568317,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3238936,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2035579,
            "range": "±4.22%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5342275,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 459700,
            "range": "±2.48%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 700113,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 641052,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2009350,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1959032,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 3158920,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 524479,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 898866,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 121153,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1087153,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1401104,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2428655,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 2043712,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 472140,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 703960,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 103866,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 739766,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 951338,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1810947,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 6566648,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1687650,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 512086,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 672032,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 18274122,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 976629,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 698476,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 717886,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 9419174,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 17395852,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3258231,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 639535296,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 888343,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 83694191,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 308010077,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 841823,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4838508,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 976690,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4862859,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 411935,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 957955,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4777102,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 293643,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 937440,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4972229,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 299870,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 934264,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 98371973,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 13642854,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22468920,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 61655320,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2432227,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 341479,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 655219,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3037797,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2310147,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 10198117,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1944512,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8997154,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12321330,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 14118117,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 13157615,
            "range": "±0.85%",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34d6c9538ee2d0171b6b28082668f0e6a7c331f1",
          "message": "Merge pull request #1 from kurkle/dependabot/npm_and_yarn/acorn-7.1.1\n\nBump acorn from 7.1.0 to 7.1.1",
          "timestamp": "2020-03-14T07:31:28+02:00",
          "tree_id": "f4f11eb3c15165f67e91035dfe7efb3b95dd4297",
          "url": "https://github.com/kurkle/color/commit/34d6c9538ee2d0171b6b28082668f0e6a7c331f1"
        },
        "date": 1584164330653,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29217226,
            "range": "±7.04%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 774712,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 608851,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 572690,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2660228,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2425750,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1740187,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7704523,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 462027,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 536114,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 486970,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1808231,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1441541,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6902515,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 483879,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 684204,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 673785,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2369347,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3030690,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2081088,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4781890,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 443580,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 637636,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 603598,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1842460,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1690481,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2824492,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 455080,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 795457,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 105744,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 943697,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1228445,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2185057,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1793914,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 441434,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 669399,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 100509,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 667624,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 880060,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1659786,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5753621,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1576054,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 475949,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 628305,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16239981,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 857000,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 638337,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 648670,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7489724,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 12309786,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3090293,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 577090467,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 760794,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 74174359,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 272079058,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 760425,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4487297,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 877995,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4384041,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 390116,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 884521,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4575498,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 272908,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 849746,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4383224,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 267277,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 844286,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 81949301,
            "range": "±3.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 10850171,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 15460185,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 59313683,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2449791,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 313562,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 620789,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2770854,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2078846,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9669460,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1825421,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8662982,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12128912,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11880258,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12704626,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
          "id": "97a385ec1b21ac3ef0567c4dc32fa62cb54d10ee",
          "message": "Update deps",
          "timestamp": "2020-03-14T08:24:10+02:00",
          "tree_id": "a4f6db35eb881e03978acba1cca13f0618f6c636",
          "url": "https://github.com/kurkle/color/commit/97a385ec1b21ac3ef0567c4dc32fa62cb54d10ee"
        },
        "date": 1584167497868,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 30215939,
            "range": "±4.56%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 791245,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 604451,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 591265,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2691188,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2357957,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1776355,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8102314,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 456730,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 536314,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 473826,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1858101,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1481906,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6860538,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 479717,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 679310,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 709227,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2367811,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3150669,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2142636,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4886294,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 453527,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 651564,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 618190,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1919995,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1782690,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2851408,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 460994,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 808089,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 106082,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 978675,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1245287,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2230226,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1794046,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 450571,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 694997,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 90446,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 688060,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 886707,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1643341,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5916811,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1611139,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 469737,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 618098,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16586453,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 886278,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 647944,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 688233,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8436097,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 16093889,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3116273,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 587165455,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 816368,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 75881519,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 282977420,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 780604,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4566600,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 948795,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4323833,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 377629,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 953442,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4649396,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 280990,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 879984,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4401507,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 277050,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 877367,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 89266128,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 10810010,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21672543,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 59957016,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2548543,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 327479,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 635716,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2842090,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2194945,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9402087,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1764270,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8880662,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12878658,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13656844,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12951110,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "e550e48c9c7f9ad29b88dc7bb89928c04938ad90",
          "message": "Update copy_dist.js",
          "timestamp": "2020-04-30T10:38:32+03:00",
          "tree_id": "48aa8e09a13908737e142c9d54724e1df11404de",
          "url": "https://github.com/kurkle/color/commit/e550e48c9c7f9ad29b88dc7bb89928c04938ad90"
        },
        "date": 1588232745939,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 30815598,
            "range": "±6.88%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 798941,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 647600,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 599223,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2832330,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2682261,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1886530,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8308806,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 470977,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 551598,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 519396,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1939864,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1574160,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 7096835,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 494608,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 721477,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 743091,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2551164,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3388409,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2244417,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5093609,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 464900,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 671582,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 648894,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2043986,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1824541,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2904727,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 454900,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 794307,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 109160,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 999956,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1352236,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2340255,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1836249,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 506936,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 760501,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 113968,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 802508,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 958274,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1969664,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 6372996,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1713404,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 514065,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 663919,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 18426537,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 995533,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 790203,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 730813,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8875930,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 17128787,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3267050,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 98114452,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 905266,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 84118539,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 317082938,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 830740,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 5161046,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 1008878,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 5033258,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 449540,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 993637,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4471704,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 292053,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 904544,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4668882,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 289431,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 901148,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 97216208,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 14101322,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22982140,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 61206053,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2624981,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 372047,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 722669,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3580021,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2467053,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 11713650,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 2140559,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 10387217,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 14622139,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 15530088,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 15197967,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "0f439c6386f1dbaefe0a6515f71e5f33e22aada3",
          "message": "Bump version",
          "timestamp": "2020-06-04T23:17:54+03:00",
          "tree_id": "48124e6094bda7d9afe81de01de05b3e7dd6825b",
          "url": "https://github.com/kurkle/color/commit/0f439c6386f1dbaefe0a6515f71e5f33e22aada3"
        },
        "date": 1591302316151,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 32484927,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 961397,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 733247,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 668242,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 3221381,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2909233,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 2145268,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8959422,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 548222,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 636116,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 589203,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 2265444,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1786216,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6802990,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 559039,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 831184,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 808669,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2797876,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3515061,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2452588,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5645416,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 532770,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 759520,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 751902,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2282951,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 2041350,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2896268,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 534110,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 922156,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 111894,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1069414,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1329222,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2439423,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1989512,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 523154,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 792063,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 109180,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 766675,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 883166,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1938591,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5135947,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1788473,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 520439,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 505784,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 13965726,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 907135,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 795929,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 820491,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 9128699,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14059890,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3438529,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 786913123,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 996509,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 79213785,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 123309014,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 817576,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 5752796,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 979302,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 5201127,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 488594,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 1022501,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 5818024,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 334465,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 929995,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 5322078,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 330796,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 934746,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 116453674,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 14067193,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 18791086,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 37103777,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2777311,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 360769,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 702311,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3208118,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2406415,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 10032255,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1995254,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 10354655,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 13648529,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12616575,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 13705174,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "67 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "143587139f6f578347c551fa2e43cff9bb876833",
          "message": "Update packages, move typedoc to devDependencies",
          "timestamp": "2020-06-04T23:27:47+03:00",
          "tree_id": "3c7dbb80e6977c71b1320a8c8dc272daee432b4f",
          "url": "https://github.com/kurkle/color/commit/143587139f6f578347c551fa2e43cff9bb876833"
        },
        "date": 1591302916825,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29970546,
            "range": "±6.07%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 784621,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 613396,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 563024,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2711955,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2545533,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1824055,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8009774,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 435674,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 543525,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 481582,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1889415,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1522786,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6876877,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 443508,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 672804,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 668875,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2482397,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3337063,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2165983,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4850038,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 430959,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 667974,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 598626,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1967301,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1807571,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2587799,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 431795,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 802971,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 102998,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 976062,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1202507,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2099430,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1712817,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 431408,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 678144,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 98017,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 701667,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 866108,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1690957,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4486519,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1538324,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 485931,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 594638,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 13229592,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 852425,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 657926,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 686070,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8455672,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15626245,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3059459,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 89961633,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 825119,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 76153435,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 284876713,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 773390,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4612160,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 938851,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4501074,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 390625,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 945464,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4723739,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 278855,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 860598,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4306110,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 280790,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 872745,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 93952828,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12612315,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20636661,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 58899519,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2532766,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 316380,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 631531,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3002336,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2176857,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9125821,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1800671,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8543488,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 13008815,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13547305,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 13278480,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "kurkle",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "556e92b87ae3015cb551875a96a14ce55ca8c876",
          "message": "Pump version",
          "timestamp": "2020-06-09T05:48:32+03:00",
          "tree_id": "1655cb98e64fcb11a9ba9f9c4b4d544f34c94f4d",
          "url": "https://github.com/kurkle/color/commit/556e92b87ae3015cb551875a96a14ce55ca8c876"
        },
        "date": 1591671345327,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 31339296,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 770904,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 618343,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 586694,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2767180,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2599180,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1805199,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7949147,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 455944,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 530539,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 491602,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1879886,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1512052,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6709796,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 470538,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 697674,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 708348,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2427661,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3206914,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2184902,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5006218,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 444446,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 638112,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 625389,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1949741,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1743236,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2581152,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 431366,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 780536,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 99534,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 967778,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1169870,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2191263,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1681358,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 427497,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 690201,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 89427,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 686678,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 856948,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1652824,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4582582,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1639554,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 477540,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 581644,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 12133412,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 879725,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 667954,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 653460,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8619561,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15963134,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3138342,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 418573211,
            "range": "±27.72%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 779035,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 74912595,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 278269986,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 766936,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4621751,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 941511,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4390317,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 390589,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 952874,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4629222,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 276801,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 880332,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4471561,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 268040,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 862759,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 59829567,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12577946,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21754807,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 60291747,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2497499,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 322108,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 621379,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2526559,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2144684,
            "range": "±3.96%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 10071531,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1824841,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8258266,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11613595,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11779959,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 13248398,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e310597f693f6f1ca4a2ff00c6a0eb7c4cf4c919",
          "message": "Merge pull request #3 from kurkle/dependabot/npm_and_yarn/lodash-4.17.19\n\nBump lodash from 4.17.15 to 4.17.19",
          "timestamp": "2020-07-26T08:30:01+03:00",
          "tree_id": "2fb3f327dc923cdd4e571bf7711f7431b27a806a",
          "url": "https://github.com/kurkle/color/commit/e310597f693f6f1ca4a2ff00c6a0eb7c4cf4c919"
        },
        "date": 1595741836824,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26580901,
            "range": "±5.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 771246,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 591308,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 594771,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2610426,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2512857,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1747916,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 6986027,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 449223,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 511951,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 484783,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1763773,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1439835,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 5898811,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 458385,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 683293,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 677018,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2289066,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2974416,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2054125,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4515506,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 427794,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 623456,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 596956,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1750859,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1681295,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2521464,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 447347,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 776570,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 96445,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 874109,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1171200,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2094477,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1551125,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 416595,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 640941,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 74549,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 547765,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 698616,
            "range": "±2.77%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1606870,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4158524,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1502312,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 437238,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 521940,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 10685707,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 837341,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 591491,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 638076,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7235628,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13466515,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3047714,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 550268473,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 766110,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 59251424,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 251361498,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 714896,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 3912640,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 832097,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 3880038,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 394873,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 874802,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4412906,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 268986,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 791997,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4004571,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 261227,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 777960,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 87297447,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11834576,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 18804870,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 50781200,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2293525,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 299145,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 612289,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2266681,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1779929,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 7954368,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1669944,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 7820105,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10784476,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11167906,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10770426,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79dae17067dc5430dc8fa802b6a350e282810048",
          "message": "Merge pull request #4 from kurkle/dependabot/npm_and_yarn/highlight.js-10.4.0\n\nBump highlight.js from 10.0.3 to 10.4.0",
          "timestamp": "2020-12-02T16:05:22+02:00",
          "tree_id": "62d5671798fc547fcfb02d58f05811f21a85c25e",
          "url": "https://github.com/kurkle/color/commit/79dae17067dc5430dc8fa802b6a350e282810048"
        },
        "date": 1606918357829,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28318212,
            "range": "±6.05%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 860113,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 649238,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 646210,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2895855,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2755670,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1970778,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8099265,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 492437,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 563320,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 527917,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1972497,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1614297,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6769000,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 524897,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 753244,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 731209,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2498765,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3198017,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2332016,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5183575,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 499121,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 705908,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 659580,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1893757,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1835578,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2812228,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 506860,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 855659,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 108193,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1016825,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1314917,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2398887,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1777427,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 490406,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 740610,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 110217,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 732662,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 907517,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1727359,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4736055,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1747089,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 514933,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 648421,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 11640986,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 941136,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 714465,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 750156,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8401375,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15130263,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3355732,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 644210178,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 849030,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 64816250,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 286385799,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 797359,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4756718,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 961256,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4730406,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 430073,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 977926,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 5110397,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 299557,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 919226,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4587484,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 296723,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 904768,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 100523138,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 13716402,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20746072,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 56835286,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2610885,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 331391,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 669044,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2804244,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2182493,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9332276,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 2005175,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 9292092,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12330541,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12771622,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12372114,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b22515a665e99ea6afa1dbe3f0e5b7217f4e730",
          "message": "Merge pull request #5 from kurkle/dependabot/npm_and_yarn/highlight.js-10.4.1\n\nBump highlight.js from 10.4.0 to 10.4.1",
          "timestamp": "2021-03-13T13:23:21+02:00",
          "tree_id": "889d6e9d60e277d489faa3fcc9328330df6f08f0",
          "url": "https://github.com/kurkle/color/commit/6b22515a665e99ea6afa1dbe3f0e5b7217f4e730"
        },
        "date": 1615635026716,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 27585178,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 761244,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 599270,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 552254,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2648552,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2458738,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1754419,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7254780,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 423685,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 494948,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 466363,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1862245,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1463818,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6242813,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 468822,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 686184,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 693861,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2279841,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2992300,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2048295,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4552552,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 434302,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 624149,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 615983,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1748237,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1673772,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2478973,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 440677,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 780793,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 95948,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 927405,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1150936,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2146358,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1449154,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 413878,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 649680,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 95880,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 667359,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 815369,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1616725,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4193798,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1542272,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 442891,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 568100,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 10531993,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 835750,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 632075,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 674931,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7252664,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13265678,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3052397,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 572469473,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 773443,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 42342889,
            "range": "±6.13%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 265533181,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 738054,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4183188,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 868718,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4143801,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 371801,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 867008,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4437971,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 271408,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 822137,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4138268,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 272262,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 834856,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 88590786,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12201683,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 16995799,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 41592256,
            "range": "±5.93%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2264160,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 312595,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 605355,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2300079,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1909049,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8247757,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1775099,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8378381,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10773166,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 10707661,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 9984427,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
          "id": "6a20cdf38faba872af1670bc1e10427a054d4b89",
          "message": "Update deps, tabs->spaces",
          "timestamp": "2021-03-13T13:39:29+02:00",
          "tree_id": "bfb0ff51981e60309048d44284654e7f1dd13423",
          "url": "https://github.com/kurkle/color/commit/6a20cdf38faba872af1670bc1e10427a054d4b89"
        },
        "date": 1615636011805,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 27986073,
            "range": "±5.82%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 798552,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 662321,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 558896,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2938202,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2546707,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1775560,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7926069,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 474306,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 542667,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 449259,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1962456,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1524372,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 5998015,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 489051,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 714465,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 643486,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2486890,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3111150,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2030298,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4694718,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 465218,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 652286,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 590102,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1998878,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1729547,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2471222,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 469245,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 803041,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 94033,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 916679,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1158864,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2206247,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1646217,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 446505,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 706530,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 92786,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 659550,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 829844,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1709868,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4543871,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1443094,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 440088,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 577276,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 12120268,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 816063,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 697038,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 647324,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7600171,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15144867,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2815643,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 695581722,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 823067,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 68804351,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 268563875,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 749167,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4764814,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 876644,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4443752,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 404394,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 933230,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 5342028,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 261217,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 855554,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4590503,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 248998,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 817529,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 107106993,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11087408,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22972195,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 51659833,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2458340,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 315456,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 604570,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2487609,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2006677,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9109615,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1728462,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 7932040,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10555765,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12304463,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11829460,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
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
          "id": "0dbb1551f0b33ce6279653fa48b6e0622cc05faa",
          "message": "Update license",
          "timestamp": "2021-03-13T13:42:40+02:00",
          "tree_id": "a15dfc2a61235ed2fe75c4dcbae26c1450301b6f",
          "url": "https://github.com/kurkle/color/commit/0dbb1551f0b33ce6279653fa48b6e0622cc05faa"
        },
        "date": 1615636199836,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 25006674,
            "range": "±7.48%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 667279,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 505363,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 565019,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2576914,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2382462,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1664720,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7036801,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 380299,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 445466,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 459822,
            "range": "±2.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1826309,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1433323,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 5822469,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 377410,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 635327,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 621415,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2229728,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2745037,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1906165,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4389727,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 342492,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 601237,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 558133,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1760702,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1549240,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2209066,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 338242,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 741601,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 86599,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 847366,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 941271,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 1965753,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1510732,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 331606,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 642522,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 83221,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 598520,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 686830,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1512567,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4199952,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1315213,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 437913,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 508633,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 10042495,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 760349,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 588649,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 635674,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 6318021,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13455551,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2569555,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 638907671,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 755566,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 59014965,
            "range": "±5.61%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 64517257,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 697668,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4413365,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 820306,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4199214,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 377780,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 830417,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4609213,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 265436,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 784593,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4237873,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 249653,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 762494,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 100088575,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12314068,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19789681,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 48370711,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2318858,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 287243,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 550973,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2338084,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1756067,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8208330,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1534169,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 7763383,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10358643,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 10948492,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10167862,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "69 samples"
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
          "id": "900ce8279500f77531dc467623f20106a63d4875",
          "message": "Add rollup-plugin-size-snapshot",
          "timestamp": "2021-03-21T18:47:42+02:00",
          "tree_id": "487406d268a6e48df8ede21e54fac9a7e2218d81",
          "url": "https://github.com/kurkle/color/commit/900ce8279500f77531dc467623f20106a63d4875"
        },
        "date": 1616345723774,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 25987223,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 726323,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 575002,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 556805,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2553402,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2426543,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1680872,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7197281,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 441598,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 516934,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 483245,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1840518,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1415927,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6120208,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 458045,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 659368,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 669340,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2288515,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2881477,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1948510,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4336813,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 433372,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 613422,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 603961,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1883251,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1607180,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2304658,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 454662,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 785374,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 96581,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 912825,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1072174,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2067087,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1563028,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 400744,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 657517,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 83774,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 588060,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 759947,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1531532,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4149453,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1330320,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 414702,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 512997,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 11020165,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 817991,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 637615,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 667155,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 6920018,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14527603,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2833275,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 681632588,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 772994,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 56427175,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 66919492,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 703707,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4606508,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 838064,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4444364,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 393629,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 829792,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4661218,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 275174,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 784732,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4402932,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 266446,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 768084,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 50445066,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 10587991,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19258443,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 48017661,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2183967,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 268133,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 570399,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2374692,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1868041,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8313250,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1594582,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 7746168,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 9470056,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11556947,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10766497,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
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
          "id": "01f78b999b7c01404c5ca5f08a9b46ffc9b14c49",
          "message": "Chore",
          "timestamp": "2021-03-21T19:34:04+02:00",
          "tree_id": "6cd2a330d5d491f70b8a378bf668c047a22c3a6e",
          "url": "https://github.com/kurkle/color/commit/01f78b999b7c01404c5ca5f08a9b46ffc9b14c49"
        },
        "date": 1616348499490,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26374948,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 679057,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 556481,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 515021,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2377815,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2299965,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1521977,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 6771195,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 411379,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 499475,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 437575,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1711570,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1358734,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 5656380,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 403683,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 649985,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 608041,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2176030,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2703228,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1792140,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4227769,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 385827,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 593549,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 583794,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1848806,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1618200,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2036693,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 385389,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 766700,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 91539,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 794406,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1106163,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 1884298,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1397591,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 400678,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 650332,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 85517,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 571206,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 739915,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1452155,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4076225,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1329723,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 421155,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 541416,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 10362876,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 709770,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 563543,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 572170,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 6431903,
            "range": "±3.17%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 12669989,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2467713,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 576524693,
            "range": "±16.60%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 719280,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 35598893,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 60286573,
            "range": "±4.77%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 697505,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4420370,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 799636,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4156895,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 368194,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 821097,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4416462,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 252353,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 763852,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4339371,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 269185,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 787955,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 98189811,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12601561,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 18042033,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 49651722,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2273632,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 300583,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 526100,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2265014,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1752051,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8351170,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1566211,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8066459,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10275772,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 10914408,
            "range": "±2.66%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10199904,
            "range": "±2.40%",
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
          "id": "6f6fb379a007f7af0595e9f3f362db59ea095381",
          "message": "Update typedoc and assert configs",
          "timestamp": "2021-03-21T20:12:01+02:00",
          "tree_id": "65a832f5051d7a46f20c77b66a80e0f7bd5c1d6d",
          "url": "https://github.com/kurkle/color/commit/6f6fb379a007f7af0595e9f3f362db59ea095381"
        },
        "date": 1616350769531,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 27412316,
            "range": "±5.52%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 663144,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 597137,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 569720,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2617034,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2461860,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1720240,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7834183,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 419046,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 522172,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 496339,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1807223,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1415267,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 5650449,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 428621,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 680551,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 680095,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2379412,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2947105,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1991219,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4699089,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 410839,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 624680,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 578717,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1889690,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1569040,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2303432,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 437354,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 777240,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 89929,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 869431,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1067429,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 1924346,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1504804,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 431454,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 621779,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 88014,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 615712,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 776482,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1615404,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4315299,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1406379,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 424643,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 531570,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 11329431,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 748734,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 648244,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 672617,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7071229,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14189152,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2689252,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 624162799,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 788743,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 63728665,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 106598682,
            "range": "±23.27%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 704265,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4234810,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 839529,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4446439,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 388574,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 881849,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4850544,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 280008,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 829026,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4442502,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 280970,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 811569,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 97870935,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11304700,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 16680142,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 32421524,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2382224,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 318658,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 585397,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2418467,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1768204,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8726138,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1623112,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8349652,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10766633,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 10461354,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 9529104,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
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
          "id": "ee4c97f5dbf06faf702b7134d4b7a5e9f01e0f39",
          "message": "Remove vulnerable rollup-plugin-size-snapshot",
          "timestamp": "2021-03-23T09:45:06+02:00",
          "tree_id": "78b89820f0133966581d96f129b240d1d27f5442",
          "url": "https://github.com/kurkle/color/commit/ee4c97f5dbf06faf702b7134d4b7a5e9f01e0f39"
        },
        "date": 1616485941722,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 34975336,
            "range": "±3.96%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 1052329,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 799535,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 778208,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 3579889,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 3342889,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 2368531,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 9286113,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 604717,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 681913,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 628886,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 2391699,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1911590,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 8181660,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 613755,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 896747,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 895467,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 3125043,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3665547,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2357849,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 5310643,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 517955,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 710032,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 702115,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2075818,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 2010102,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 3161072,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 588955,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 1020235,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 129347,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1251312,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1531285,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2877639,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 2102263,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 606152,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 886155,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 110554,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 893743,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 1069904,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 2185566,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5771078,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1971847,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 604200,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 767678,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14286115,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 1148047,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 860967,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 868126,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 9122519,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 18302648,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 4153599,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 750172975,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 1065775,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 80317685,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 337425729,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 974756,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 5732652,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 1142735,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 5695780,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 513533,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 1155100,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 6220626,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 363410,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 1091420,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 5749078,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 353693,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 1041081,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 74733368,
            "range": "±5.81%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 13576067,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 24190313,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 71567714,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 3143868,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 360729,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 691105,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2829213,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2304729,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9681309,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 2010944,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 9569188,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12985879,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 14437662,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 14658154,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edd19eb5cdd5d236c16240eb18365891157e9e66",
          "message": "Bump lodash from 4.17.19 to 4.17.21 (#6)\n\nBumps [lodash](https://github.com/lodash/lodash) from 4.17.19 to 4.17.21.\r\n- [Release notes](https://github.com/lodash/lodash/releases)\r\n- [Commits](https://github.com/lodash/lodash/compare/4.17.19...4.17.21)\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2021-05-11T20:38:31+03:00",
          "tree_id": "0a48efe77e4e7b8a8492a914e8b629b5b0d5ff14",
          "url": "https://github.com/kurkle/color/commit/edd19eb5cdd5d236c16240eb18365891157e9e66"
        },
        "date": 1620755137739,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26270198,
            "range": "±6.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 720071,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 594969,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 542196,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2560686,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2406769,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1684338,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7139950,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 410040,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 517311,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 460283,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1756367,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1372559,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6253743,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 449806,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 661826,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 667840,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2253333,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2867553,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1908136,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4633479,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 431192,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 599401,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 607743,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1871500,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1612362,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2366952,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 445313,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 774064,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 87089,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 887376,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1101075,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 1984451,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1562362,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 407140,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 636631,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 72460,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 662358,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 803644,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1572978,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4208502,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1405228,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 442117,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 566873,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 11000618,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 793760,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 625703,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 618438,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7129827,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13289491,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2665273,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 627128381,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 725249,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 66251229,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 278601829,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 730021,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4414403,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 867684,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4229143,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 371851,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 889468,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4320759,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 249820,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 820893,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4034299,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 253579,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 803033,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 66944956,
            "range": "±6.77%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 10702574,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21130240,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 49779892,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2317519,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 297791,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 607040,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2733656,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1915041,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9044407,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1568380,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 7439931,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11060941,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11557825,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10993619,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a393111baeed971c5c41abaa7896567664263f5",
          "message": "Bump hosted-git-info from 2.8.8 to 2.8.9 (#7)\n\nBumps [hosted-git-info](https://github.com/npm/hosted-git-info) from 2.8.8 to 2.8.9.\r\n- [Release notes](https://github.com/npm/hosted-git-info/releases)\r\n- [Changelog](https://github.com/npm/hosted-git-info/blob/v2.8.9/CHANGELOG.md)\r\n- [Commits](https://github.com/npm/hosted-git-info/compare/v2.8.8...v2.8.9)\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2021-05-11T20:38:52+03:00",
          "tree_id": "675a5a3de6da6d171af07ceb6ddcb99a0bdfba71",
          "url": "https://github.com/kurkle/color/commit/4a393111baeed971c5c41abaa7896567664263f5"
        },
        "date": 1620755156087,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26200822,
            "range": "±6.46%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 789307,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 639355,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 566647,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2706785,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2577930,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1793347,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7335795,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 465353,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 525812,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 494577,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1767883,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1473193,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6193744,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 475114,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 713706,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 671799,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2388793,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3067135,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2173368,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4767980,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 475762,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 656092,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 619476,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1988738,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1815107,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2512470,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 490454,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 822960,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 98965,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 959129,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1153111,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2248169,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1576812,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 444722,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 706292,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 86840,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 678593,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 863660,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1747747,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4365017,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1612215,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 484678,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 584398,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 11174080,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 903732,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 652435,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 665802,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7810141,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14051464,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3091828,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 620938813,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 808512,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 62416158,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 176449396,
            "range": "±21.60%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 785272,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4365006,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 900117,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4375474,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 389846,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 907698,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4581719,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 281025,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 868154,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4395235,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 284763,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 841286,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 53548176,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12908339,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 17901390,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 56331328,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2335711,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 309732,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 639844,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2840568,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1919461,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8130214,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1742783,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 7749753,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 9905879,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 10953020,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11211712,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      }
    ]
  }
}