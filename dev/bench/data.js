window.BENCHMARK_DATA = {
  "lastUpdate": 1582442398002,
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
      }
    ]
  }
}