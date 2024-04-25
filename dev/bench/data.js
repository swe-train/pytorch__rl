window.BENCHMARK_DATA = {
  "lastUpdate": 1714043255045,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93e9e30dc437d6159eaaa97c1f3fcca1859ef5f5",
          "message": "[Feature] Span slice indices on the left and on the right (#2107)",
          "timestamp": "2024-04-24T17:28:04+01:00",
          "tree_id": "2395e2488a134221823c000c854f898eb462e4f8",
          "url": "https://github.com/pytorch/rl/commit/93e9e30dc437d6159eaaa97c1f3fcca1859ef5f5"
        },
        "date": 1713976383444,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 18.75836291011966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003917479769099834",
            "extra": "mean: 53.30955610526787 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 33.926067944397296,
            "unit": "iter/sec",
            "range": "stddev: 0.0019876117807850384",
            "extra": "mean: 29.475859142855498 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 36.58347424265007,
            "unit": "iter/sec",
            "range": "stddev: 0.014000406365175317",
            "extra": "mean: 27.334746650009834 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 2.9832404665095735,
            "unit": "iter/sec",
            "range": "stddev: 0.0013472383195124186",
            "extra": "mean: 335.2059651999866 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 2.021115267872871,
            "unit": "iter/sec",
            "range": "stddev: 0.03242933465174271",
            "extra": "mean: 494.7763325999972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.832776335739031,
            "unit": "iter/sec",
            "range": "stddev: 0.027936949559728634",
            "extra": "mean: 1.2008026130000076 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 1.0074782507227333,
            "unit": "iter/sec",
            "range": "stddev: 0.035144570895043185",
            "extra": "mean: 992.5772584000015 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 47039.981488864876,
            "unit": "iter/sec",
            "range": "stddev: 0.000001729784745893135",
            "extra": "mean: 21.25851176698945 usec\nrounds: 20226"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 76656.93420401655,
            "unit": "iter/sec",
            "range": "stddev: 7.833766545002965e-7",
            "extra": "mean: 13.045134277592899 usec\nrounds: 38331"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 79704.00822140457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010022935078186654",
            "extra": "mean: 12.546420466360551 usec\nrounds: 35815"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 129636.81917761592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012609359433308332",
            "extra": "mean: 7.713857886546076 usec\nrounds: 51290"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 43659.153355807764,
            "unit": "iter/sec",
            "range": "stddev: 0.000001617161976774049",
            "extra": "mean: 22.90470435489961 usec\nrounds: 23721"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 69215.72875188991,
            "unit": "iter/sec",
            "range": "stddev: 6.094094564408975e-7",
            "extra": "mean: 14.447583201566674 usec\nrounds: 36087"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 72969.77197582404,
            "unit": "iter/sec",
            "range": "stddev: 6.86946605284445e-7",
            "extra": "mean: 13.704304850114026 usec\nrounds: 34020"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 111955.65177134777,
            "unit": "iter/sec",
            "range": "stddev: 4.392972254620387e-7",
            "extra": "mean: 8.932108242666894 usec\nrounds: 49001"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 40730.91485538631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016261791322695787",
            "extra": "mean: 24.551375866475503 usec\nrounds: 24381"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 63071.47174914073,
            "unit": "iter/sec",
            "range": "stddev: 6.444364004948195e-7",
            "extra": "mean: 15.855028783494715 usec\nrounds: 32345"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 72187.57151670766,
            "unit": "iter/sec",
            "range": "stddev: 6.980846412911671e-7",
            "extra": "mean: 13.852800128738949 usec\nrounds: 34217"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 112533.27159656225,
            "unit": "iter/sec",
            "range": "stddev: 4.3214696697635404e-7",
            "extra": "mean: 8.886260799251026 usec\nrounds: 46971"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 39207.081622250815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017568862401649628",
            "extra": "mean: 25.50559640308652 usec\nrounds: 19683"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 58590.28567654593,
            "unit": "iter/sec",
            "range": "stddev: 7.774135728154413e-7",
            "extra": "mean: 17.067675783671874 usec\nrounds: 32833"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 66336.51105721624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013492935595623701",
            "extra": "mean: 15.074654727281105 usec\nrounds: 32693"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 98400.33537049564,
            "unit": "iter/sec",
            "range": "stddev: 8.075380262125266e-7",
            "extra": "mean: 10.16256698958203 usec\nrounds: 43835"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 41297.08131273354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010311917477781435",
            "extra": "mean: 24.214786329019816 usec\nrounds: 23948"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 63384.231890992174,
            "unit": "iter/sec",
            "range": "stddev: 8.616903134197734e-7",
            "extra": "mean: 15.776794482889596 usec\nrounds: 34148"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 62032.242747690245,
            "unit": "iter/sec",
            "range": "stddev: 8.732054905906559e-7",
            "extra": "mean: 16.120648806257048 usec\nrounds: 29152"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 98087.43299898178,
            "unit": "iter/sec",
            "range": "stddev: 8.926382439188884e-7",
            "extra": "mean: 10.194985936785406 usec\nrounds: 41314"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 38323.10131283794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017319029745739829",
            "extra": "mean: 26.09392157061693 usec\nrounds: 306"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 58690.994988868886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011552638230338995",
            "extra": "mean: 17.03838894177303 usec\nrounds: 31488"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 56904.09973820086,
            "unit": "iter/sec",
            "range": "stddev: 0.000001364287847723031",
            "extra": "mean: 17.57342624873617 usec\nrounds: 27369"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 87448.49586830701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012716784443460991",
            "extra": "mean: 11.435302460844486 usec\nrounds: 38643"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 37660.2473233739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019618673716083735",
            "extra": "mean: 26.553197896269474 usec\nrounds: 22436"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 54408.10896957885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011591110993548947",
            "extra": "mean: 18.379613240355937 usec\nrounds: 30921"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 57328.00666701326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011297550597676186",
            "extra": "mean: 17.44348108610243 usec\nrounds: 22285"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 87586.84624463224,
            "unit": "iter/sec",
            "range": "stddev: 6.275409525142686e-7",
            "extra": "mean: 11.417239492868314 usec\nrounds: 38807"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 35904.58076677307,
            "unit": "iter/sec",
            "range": "stddev: 0.000001068646471335676",
            "extra": "mean: 27.851599396069904 usec\nrounds: 22516"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 51295.62088357678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013957030107666086",
            "extra": "mean: 19.494841523989972 usec\nrounds: 30320"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 54142.45723520199,
            "unit": "iter/sec",
            "range": "stddev: 7.757889325199612e-7",
            "extra": "mean: 18.469793412882385 usec\nrounds: 28966"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 80175.76771994299,
            "unit": "iter/sec",
            "range": "stddev: 7.061625614683387e-7",
            "extra": "mean: 12.472596501888678 usec\nrounds: 39735"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 109.86473789659387,
            "unit": "iter/sec",
            "range": "stddev: 0.00006172739664809082",
            "extra": "mean: 9.10210153999742 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 29.464271198393643,
            "unit": "iter/sec",
            "range": "stddev: 0.0015701586632253747",
            "extra": "mean: 33.93941066000366 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 6051.807832506775,
            "unit": "iter/sec",
            "range": "stddev: 0.000010734148777367346",
            "extra": "mean: 165.2398799956245 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 43.85891313947132,
            "unit": "iter/sec",
            "range": "stddev: 0.00043317220484950244",
            "extra": "mean: 22.80038259999742 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 29.892606071722852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002525316322525347",
            "extra": "mean: 33.453088619996834 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 30.460989678785268,
            "unit": "iter/sec",
            "range": "stddev: 0.0010744122908289326",
            "extra": "mean: 32.82887426000002 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 29.43118506378452,
            "unit": "iter/sec",
            "range": "stddev: 0.001178909947608525",
            "extra": "mean: 33.977564879999136 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 124.14859226151745,
            "unit": "iter/sec",
            "range": "stddev: 0.00030317452955546086",
            "extra": "mean: 8.054863786884612 msec\nrounds: 122"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 503.1482882348674,
            "unit": "iter/sec",
            "range": "stddev: 0.00010414300245492913",
            "extra": "mean: 1.987485644655924 msec\nrounds: 318"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2863.431308392137,
            "unit": "iter/sec",
            "range": "stddev: 0.00001480761197291057",
            "extra": "mean: 349.2313564740326 usec\nrounds: 1282"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 21.530523819517104,
            "unit": "iter/sec",
            "range": "stddev: 0.0007699596679978949",
            "extra": "mean: 46.44568838095405 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 324.8566241597652,
            "unit": "iter/sec",
            "range": "stddev: 0.00020397946777736214",
            "extra": "mean: 3.078281080419643 msec\nrounds: 286"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 733.3735394385636,
            "unit": "iter/sec",
            "range": "stddev: 0.00006968370574110547",
            "extra": "mean: 1.3635616043163392 msec\nrounds: 695"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 368.01366022907325,
            "unit": "iter/sec",
            "range": "stddev: 0.00006992653024115684",
            "extra": "mean: 2.717290438016734 msec\nrounds: 363"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 120.23828297507382,
            "unit": "iter/sec",
            "range": "stddev: 0.00031588756646081325",
            "extra": "mean: 8.316818697480125 msec\nrounds: 119"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 75.38987476408425,
            "unit": "iter/sec",
            "range": "stddev: 0.00034341332607094356",
            "extra": "mean: 13.264380702704127 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 75.94813382212718,
            "unit": "iter/sec",
            "range": "stddev: 0.0003954470867199437",
            "extra": "mean: 13.166880470585758 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 122.81164483024169,
            "unit": "iter/sec",
            "range": "stddev: 0.0000632700934034352",
            "extra": "mean: 8.142550336999932 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 27.643151843820185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003456531218261565",
            "extra": "mean: 36.17532492857021 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 132.50831913045695,
            "unit": "iter/sec",
            "range": "stddev: 0.001117021649517044",
            "extra": "mean: 7.54669598529494 msec\nrounds: 136"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 131.25544587051158,
            "unit": "iter/sec",
            "range": "stddev: 0.00012336791273421588",
            "extra": "mean: 7.618731499998389 msec\nrounds: 132"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 152.47175216134,
            "unit": "iter/sec",
            "range": "stddev: 0.00008850241319019503",
            "extra": "mean: 6.558591908498808 msec\nrounds: 153"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 30.64466393635891,
            "unit": "iter/sec",
            "range": "stddev: 0.0002975608302374508",
            "extra": "mean: 32.6321085483836 msec\nrounds: 31"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 464.95246442210237,
            "unit": "iter/sec",
            "range": "stddev: 0.0001420950155386191",
            "extra": "mean: 2.150757500001463 msec\nrounds: 410"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1997.6745693940286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000426783048245284",
            "extra": "mean: 500.58203439178703 usec\nrounds: 1512"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2127.300020777656,
            "unit": "iter/sec",
            "range": "stddev: 0.000012667989330822844",
            "extra": "mean: 470.07943883460314 usec\nrounds: 1545"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 474.5571073412112,
            "unit": "iter/sec",
            "range": "stddev: 0.00017720213622773753",
            "extra": "mean: 2.1072279490295154 msec\nrounds: 412"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 2041.400264202574,
            "unit": "iter/sec",
            "range": "stddev: 0.000044914241652749376",
            "extra": "mean: 489.85983666981986 usec\nrounds: 1249"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2141.337145188606,
            "unit": "iter/sec",
            "range": "stddev: 0.00010018784249551824",
            "extra": "mean: 466.99792335219655 usec\nrounds: 1396"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-sampler6-10000]",
            "value": 820.2406522789055,
            "unit": "iter/sec",
            "range": "stddev: 0.000018001163554561593",
            "extra": "mean: 1.2191543996529095 msec\nrounds: 578"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-sampler7-10000]",
            "value": 860.3129986254356,
            "unit": "iter/sec",
            "range": "stddev: 0.0001262899865909388",
            "extra": "mean: 1.1623676517706336 msec\nrounds: 649"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 446.35615334310296,
            "unit": "iter/sec",
            "range": "stddev: 0.00006401476805147257",
            "extra": "mean: 2.24036342393901 msec\nrounds: 401"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1626.9604478889503,
            "unit": "iter/sec",
            "range": "stddev: 0.000020308800314294527",
            "extra": "mean: 614.6430918450059 usec\nrounds: 1263"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1700.5419366021097,
            "unit": "iter/sec",
            "range": "stddev: 0.000023313455082699496",
            "extra": "mean: 588.047832562202 usec\nrounds: 1296"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 464.63893550869153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000741545015255915",
            "extra": "mean: 2.1522087874645925 msec\nrounds: 367"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 2012.9804637580758,
            "unit": "iter/sec",
            "range": "stddev: 0.000013094672999670077",
            "extra": "mean: 496.775809802485 usec\nrounds: 857"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2110.918774860085,
            "unit": "iter/sec",
            "range": "stddev: 0.00002154680268403294",
            "extra": "mean: 473.72737023776847 usec\nrounds: 840"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 476.0690444196276,
            "unit": "iter/sec",
            "range": "stddev: 0.0001825870643666381",
            "extra": "mean: 2.100535650703971 msec\nrounds: 355"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 2034.2313210510924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004819724559060196",
            "extra": "mean: 491.5861778606857 usec\nrounds: 804"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2147.4575823199693,
            "unit": "iter/sec",
            "range": "stddev: 0.000039148822517916934",
            "extra": "mean: 465.66693946972725 usec\nrounds: 793"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 446.33747454087586,
            "unit": "iter/sec",
            "range": "stddev: 0.00020650353952207735",
            "extra": "mean: 2.240457181034705 msec\nrounds: 348"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1609.3581546333537,
            "unit": "iter/sec",
            "range": "stddev: 0.00002794476720345542",
            "extra": "mean: 621.3657271509097 usec\nrounds: 744"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1690.8494689506315,
            "unit": "iter/sec",
            "range": "stddev: 0.00011384852464090804",
            "extra": "mean: 591.4187030620864 usec\nrounds: 751"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 129.69154696781814,
            "unit": "iter/sec",
            "range": "stddev: 0.020147271837617716",
            "extra": "mean: 7.710602760009806 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 84.15394396768471,
            "unit": "iter/sec",
            "range": "stddev: 0.0007389880778984618",
            "extra": "mean: 11.882984359996271 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 956.048847449623,
            "unit": "iter/sec",
            "range": "stddev: 0.00008020381885098691",
            "extra": "mean: 1.0459716599916646 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 174.40846056822156,
            "unit": "iter/sec",
            "range": "stddev: 0.014697248218280248",
            "extra": "mean: 5.7336668000050395 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 71.45882209172446,
            "unit": "iter/sec",
            "range": "stddev: 0.01445300655365378",
            "extra": "mean: 13.9940733800006 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 965.7114119744901,
            "unit": "iter/sec",
            "range": "stddev: 0.00003129204432043968",
            "extra": "mean: 1.035506040003611 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 166.3344911433348,
            "unit": "iter/sec",
            "range": "stddev: 0.014293856426116277",
            "extra": "mean: 6.011982200001285 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 81.83940518647867,
            "unit": "iter/sec",
            "range": "stddev: 0.0009141562331072053",
            "extra": "mean: 12.219052640001564 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 700.934170013464,
            "unit": "iter/sec",
            "range": "stddev: 0.00019854990104866844",
            "extra": "mean: 1.4266675000033047 msec\nrounds: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36e13099885ff7fcf25a8748a58a4e5b87995ba2",
          "message": "[Versioning] Deprecations for 0.4 (#2109)",
          "timestamp": "2024-04-25T11:20:14+01:00",
          "tree_id": "cdf86d929468c1be31530edb4ad3c2abd6a2cba8",
          "url": "https://github.com/pytorch/rl/commit/36e13099885ff7fcf25a8748a58a4e5b87995ba2"
        },
        "date": 1714040701604,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 18.621168763990088,
            "unit": "iter/sec",
            "range": "stddev: 0.0007164647024498225",
            "extra": "mean: 53.70232194736433 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 34.67300210704421,
            "unit": "iter/sec",
            "range": "stddev: 0.0003705587465846994",
            "extra": "mean: 28.84088308571466 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 36.53225030067928,
            "unit": "iter/sec",
            "range": "stddev: 0.02426767678535843",
            "extra": "mean: 27.373074249997842 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 2.9963577383985087,
            "unit": "iter/sec",
            "range": "stddev: 0.001428859964948874",
            "extra": "mean: 333.73852099999226 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 2.0260136678310077,
            "unit": "iter/sec",
            "range": "stddev: 0.026488796598703266",
            "extra": "mean: 493.5800857999993 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.825170856407681,
            "unit": "iter/sec",
            "range": "stddev: 0.025825222857879637",
            "extra": "mean: 1.211870235400005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 1.0110784932133865,
            "unit": "iter/sec",
            "range": "stddev: 0.02743901273463015",
            "extra": "mean: 989.0428949999944 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 46531.42706913622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014121070237905394",
            "extra": "mean: 21.490851731544875 usec\nrounds: 20011"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 75657.38499236893,
            "unit": "iter/sec",
            "range": "stddev: 6.754566786497275e-7",
            "extra": "mean: 13.217480357018202 usec\nrounds: 39098"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 77608.30507918418,
            "unit": "iter/sec",
            "range": "stddev: 7.093364904016453e-7",
            "extra": "mean: 12.885218907688996 usec\nrounds: 38852"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 129370.50330642732,
            "unit": "iter/sec",
            "range": "stddev: 4.599294585502483e-7",
            "extra": "mean: 7.7297372619119935 usec\nrounds: 54541"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 43842.53348296872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011856732156438628",
            "extra": "mean: 22.808900867657766 usec\nrounds: 26157"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 68898.07134229338,
            "unit": "iter/sec",
            "range": "stddev: 7.260960158916322e-7",
            "extra": "mean: 14.514194381899133 usec\nrounds: 36099"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 71074.61287494842,
            "unit": "iter/sec",
            "range": "stddev: 7.98344324213753e-7",
            "extra": "mean: 14.069721375189772 usec\nrounds: 35345"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 110057.15097253425,
            "unit": "iter/sec",
            "range": "stddev: 5.528885334438114e-7",
            "extra": "mean: 9.086188322733877 usec\nrounds: 49001"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 41178.54829696722,
            "unit": "iter/sec",
            "range": "stddev: 9.339824096408201e-7",
            "extra": "mean: 24.284488923414756 usec\nrounds: 25143"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 62835.3602087089,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013465648352139321",
            "extra": "mean: 15.914605990615476 usec\nrounds: 35022"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 71713.19155697137,
            "unit": "iter/sec",
            "range": "stddev: 6.942963759101232e-7",
            "extra": "mean: 13.944435860249872 usec\nrounds: 35789"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 110051.21215767453,
            "unit": "iter/sec",
            "range": "stddev: 5.579875126600151e-7",
            "extra": "mean: 9.086678650729102 usec\nrounds: 47758"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 39423.51001751904,
            "unit": "iter/sec",
            "range": "stddev: 9.157083523436002e-7",
            "extra": "mean: 25.365574997143064 usec\nrounds: 24501"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 59003.28724764414,
            "unit": "iter/sec",
            "range": "stddev: 7.811579753376928e-7",
            "extra": "mean: 16.94820825495494 usec\nrounds: 33483"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 66492.52437001285,
            "unit": "iter/sec",
            "range": "stddev: 0.000001276706152507824",
            "extra": "mean: 15.039284633491599 usec\nrounds: 35421"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 98904.68090500133,
            "unit": "iter/sec",
            "range": "stddev: 7.090070080932335e-7",
            "extra": "mean: 10.11074491975266 usec\nrounds: 46060"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 41396.65308586442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011453954998339236",
            "extra": "mean: 24.156542267458498 usec\nrounds: 24416"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 62770.000282240864,
            "unit": "iter/sec",
            "range": "stddev: 8.125991270889778e-7",
            "extra": "mean: 15.931177242370094 usec\nrounds: 34670"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 61055.394838869914,
            "unit": "iter/sec",
            "range": "stddev: 8.879322985991412e-7",
            "extra": "mean: 16.37856904601273 usec\nrounds: 30219"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 95521.89776749852,
            "unit": "iter/sec",
            "range": "stddev: 5.755746869138358e-7",
            "extra": "mean: 10.468803733715722 usec\nrounds: 45744"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 37790.02080394883,
            "unit": "iter/sec",
            "range": "stddev: 0.000001967160286878807",
            "extra": "mean: 26.46201242354188 usec\nrounds: 322"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 58631.52499810438,
            "unit": "iter/sec",
            "range": "stddev: 7.926997638587783e-7",
            "extra": "mean: 17.055670989835775 usec\nrounds: 34312"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 56835.382979157075,
            "unit": "iter/sec",
            "range": "stddev: 8.150580898989053e-7",
            "extra": "mean: 17.59467338095926 usec\nrounds: 30283"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 86865.08849646791,
            "unit": "iter/sec",
            "range": "stddev: 6.570422256728963e-7",
            "extra": "mean: 11.512104774297924 usec\nrounds: 42081"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 37458.49230667729,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018691770534475615",
            "extra": "mean: 26.696215955860605 usec\nrounds: 23653"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 54729.210724852004,
            "unit": "iter/sec",
            "range": "stddev: 8.859411097324318e-7",
            "extra": "mean: 18.271778210496095 usec\nrounds: 32355"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 57906.69930473304,
            "unit": "iter/sec",
            "range": "stddev: 8.721712024036878e-7",
            "extra": "mean: 17.26915904388742 usec\nrounds: 30740"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 86865.79337382782,
            "unit": "iter/sec",
            "range": "stddev: 6.3916607949323e-7",
            "extra": "mean: 11.512011358677055 usec\nrounds: 42875"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 36312.747274871435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012961021156119818",
            "extra": "mean: 27.538538806508974 usec\nrounds: 23862"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 51623.39698575344,
            "unit": "iter/sec",
            "range": "stddev: 8.846196839951971e-7",
            "extra": "mean: 19.371061541648857 usec\nrounds: 32157"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 54191.06089531613,
            "unit": "iter/sec",
            "range": "stddev: 8.404475099502573e-7",
            "extra": "mean: 18.45322795823753 usec\nrounds: 30238"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 79434.04856150493,
            "unit": "iter/sec",
            "range": "stddev: 6.778179519455467e-7",
            "extra": "mean: 12.589059957402409 usec\nrounds: 41763"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 105.64840603059147,
            "unit": "iter/sec",
            "range": "stddev: 0.0001610066386540447",
            "extra": "mean: 9.46535814000299 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 28.501472001557065,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041957985809845",
            "extra": "mean: 35.085907140002064 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 5923.511590419922,
            "unit": "iter/sec",
            "range": "stddev: 0.000012504914622904236",
            "extra": "mean: 168.81877999821882 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 42.535585015200674,
            "unit": "iter/sec",
            "range": "stddev: 0.0007407391443626864",
            "extra": "mean: 23.509727200005273 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 28.534464878870303,
            "unit": "iter/sec",
            "range": "stddev: 0.0008512774471087653",
            "extra": "mean: 35.04533918000675 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.980992452533915,
            "unit": "iter/sec",
            "range": "stddev: 0.0001752035916720536",
            "extra": "mean: 33.354466219996084 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 28.64848215109984,
            "unit": "iter/sec",
            "range": "stddev: 0.0003676198401851897",
            "extra": "mean: 34.905863240004464 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 121.5832038911359,
            "unit": "iter/sec",
            "range": "stddev: 0.000047792876603288085",
            "extra": "mean: 8.22482027118966 msec\nrounds: 118"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 513.4901739006605,
            "unit": "iter/sec",
            "range": "stddev: 0.00008221606701522621",
            "extra": "mean: 1.9474569345770179 msec\nrounds: 321"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2881.271238849478,
            "unit": "iter/sec",
            "range": "stddev: 0.000013526941816330212",
            "extra": "mean: 347.0690251290991 usec\nrounds: 1353"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 23.263910261501703,
            "unit": "iter/sec",
            "range": "stddev: 0.00028834159345653837",
            "extra": "mean: 42.9850351363696 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 331.3672649983913,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270186708856668",
            "extra": "mean: 3.017799600708461 msec\nrounds: 283"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 740.4426054304699,
            "unit": "iter/sec",
            "range": "stddev: 0.00002804961730883152",
            "extra": "mean: 1.3505435703806261 msec\nrounds: 682"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 347.8819577133412,
            "unit": "iter/sec",
            "range": "stddev: 0.00007181926055621662",
            "extra": "mean: 2.874538267443038 msec\nrounds: 344"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 118.7122867790056,
            "unit": "iter/sec",
            "range": "stddev: 0.00017873724725635173",
            "extra": "mean: 8.42372788135736 msec\nrounds: 118"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 77.96105574159274,
            "unit": "iter/sec",
            "range": "stddev: 0.00026388015692793465",
            "extra": "mean: 12.82691711249484 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 75.87738797471026,
            "unit": "iter/sec",
            "range": "stddev: 0.00016267972646127887",
            "extra": "mean: 13.179156883119084 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 119.3916654902328,
            "unit": "iter/sec",
            "range": "stddev: 0.00014365287508246328",
            "extra": "mean: 8.375794038000151 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 27.197175682096805,
            "unit": "iter/sec",
            "range": "stddev: 0.0008883402798182835",
            "extra": "mean: 36.76852374999636 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 134.41651201007656,
            "unit": "iter/sec",
            "range": "stddev: 0.00012335830451797971",
            "extra": "mean: 7.439562186564064 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 129.91090748942597,
            "unit": "iter/sec",
            "range": "stddev: 0.00010258768340292106",
            "extra": "mean: 7.697583053843223 msec\nrounds: 130"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 143.41813299186276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006849536488090818",
            "extra": "mean: 6.9726190066686895 msec\nrounds: 150"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 30.035251386296842,
            "unit": "iter/sec",
            "range": "stddev: 0.0013635312689044357",
            "extra": "mean: 33.294211096772635 msec\nrounds: 31"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 474.6135521514063,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666508297987847",
            "extra": "mean: 2.106977340758678 msec\nrounds: 449"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1982.2933586872064,
            "unit": "iter/sec",
            "range": "stddev: 0.00006863853206190245",
            "extra": "mean: 504.46620103810466 usec\nrounds: 1542"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2101.2509063526572,
            "unit": "iter/sec",
            "range": "stddev: 0.00005402491264423875",
            "extra": "mean: 475.9069928187662 usec\nrounds: 1671"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 480.0289536547647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002556155763046573",
            "extra": "mean: 2.0832076740087575 msec\nrounds: 454"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 2033.5760267223961,
            "unit": "iter/sec",
            "range": "stddev: 0.00007145139413176723",
            "extra": "mean: 491.74458533116353 usec\nrounds: 1377"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2092.941473304352,
            "unit": "iter/sec",
            "range": "stddev: 0.0001056561150262965",
            "extra": "mean: 477.79644713198434 usec\nrounds: 1447"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-sampler6-10000]",
            "value": 792.9424348376835,
            "unit": "iter/sec",
            "range": "stddev: 0.00013100250672885068",
            "extra": "mean: 1.2611255950814406 msec\nrounds: 610"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-sampler7-10000]",
            "value": 833.0253031988918,
            "unit": "iter/sec",
            "range": "stddev: 0.00016747425853409057",
            "extra": "mean: 1.2004437274112927 msec\nrounds: 653"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 441.83652098929673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250735246955105",
            "extra": "mean: 2.2632805404155905 msec\nrounds: 433"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1640.6231654241594,
            "unit": "iter/sec",
            "range": "stddev: 0.000044059527495132446",
            "extra": "mean: 609.5244911048567 usec\nrounds: 1293"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1717.3774740704175,
            "unit": "iter/sec",
            "range": "stddev: 0.00002583309821429778",
            "extra": "mean: 582.2831701814887 usec\nrounds: 1375"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 484.471146140037,
            "unit": "iter/sec",
            "range": "stddev: 0.00012572981142508377",
            "extra": "mean: 2.0641064136995038 msec\nrounds: 365"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 2055.012604847047,
            "unit": "iter/sec",
            "range": "stddev: 0.00003518103383530079",
            "extra": "mean: 486.61502009347976 usec\nrounds: 846"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2156.224605015096,
            "unit": "iter/sec",
            "range": "stddev: 0.000012846510793610453",
            "extra": "mean: 463.7735779816866 usec\nrounds: 872"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 498.35909449396235,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639443784270332",
            "extra": "mean: 2.0065852335160206 msec\nrounds: 364"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 2063.192374157757,
            "unit": "iter/sec",
            "range": "stddev: 0.00004273898782452968",
            "extra": "mean: 484.68577749964936 usec\nrounds: 800"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2141.6801095505066,
            "unit": "iter/sec",
            "range": "stddev: 0.00004923759079710315",
            "extra": "mean: 466.9231392403784 usec\nrounds: 790"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 464.8715304742267,
            "unit": "iter/sec",
            "range": "stddev: 0.00002517474617635713",
            "extra": "mean: 2.151131946023616 msec\nrounds: 352"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1628.4989650907626,
            "unit": "iter/sec",
            "range": "stddev: 0.000044051561281008815",
            "extra": "mean: 614.0624104997612 usec\nrounds: 743"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1405.9178996503974,
            "unit": "iter/sec",
            "range": "stddev: 0.0034582410268073414",
            "extra": "mean: 711.2790869571153 usec\nrounds: 782"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 181.11976424881152,
            "unit": "iter/sec",
            "range": "stddev: 0.012575986702992653",
            "extra": "mean: 5.5212085999971805 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 82.1805206045836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005530666579952591",
            "extra": "mean: 12.168333720001101 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 957.1926596050006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007292715003896826",
            "extra": "mean: 1.0447217599983105 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 180.13152714160913,
            "unit": "iter/sec",
            "range": "stddev: 0.012647916546691439",
            "extra": "mean: 5.551499039997907 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 71.03672059853618,
            "unit": "iter/sec",
            "range": "stddev: 0.01286589062207887",
            "extra": "mean: 14.077226420001807 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 954.0329740514366,
            "unit": "iter/sec",
            "range": "stddev: 0.00005291876616769684",
            "extra": "mean: 1.0481817999993837 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 172.08889461101145,
            "unit": "iter/sec",
            "range": "stddev: 0.012549761482016189",
            "extra": "mean: 5.810950220003406 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 78.97560140876307,
            "unit": "iter/sec",
            "range": "stddev: 0.0007785673927855554",
            "extra": "mean: 12.662138460005963 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 693.1864554419061,
            "unit": "iter/sec",
            "range": "stddev: 0.00025494930934239526",
            "extra": "mean: 1.4426132999994934 msec\nrounds: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e0357f0b927ebdc4ada059c1ed41d4f41f334b6",
          "message": "[CI] Remove x86 OSX jobs (#2112)",
          "timestamp": "2024-04-25T11:37:39+01:00",
          "tree_id": "545c390405bca8029fb478d1ca831bec87b4a326",
          "url": "https://github.com/pytorch/rl/commit/8e0357f0b927ebdc4ada059c1ed41d4f41f334b6"
        },
        "date": 1714041751657,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 17.993932194146815,
            "unit": "iter/sec",
            "range": "stddev: 0.00047213224940512085",
            "extra": "mean: 55.57428966667367 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 29.983078308992997,
            "unit": "iter/sec",
            "range": "stddev: 0.0043743422861418",
            "extra": "mean: 33.352145823534876 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 35.400474729219795,
            "unit": "iter/sec",
            "range": "stddev: 0.0197991404920591",
            "extra": "mean: 28.24820874999716 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 2.8812565625483137,
            "unit": "iter/sec",
            "range": "stddev: 0.001276559842740232",
            "extra": "mean: 347.0707929999662 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 1.946160819352867,
            "unit": "iter/sec",
            "range": "stddev: 0.034967315378736104",
            "extra": "mean: 513.8321509999969 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.8079702387084261,
            "unit": "iter/sec",
            "range": "stddev: 0.022734382492704694",
            "extra": "mean: 1.2376693497999895 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.9703015229176278,
            "unit": "iter/sec",
            "range": "stddev: 0.032663563130248784",
            "extra": "mean: 1.0306074723999927 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 47435.1587583671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015802593395846388",
            "extra": "mean: 21.08140936333664 usec\nrounds: 19545"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 76218.71159580257,
            "unit": "iter/sec",
            "range": "stddev: 0.000001094631447800697",
            "extra": "mean: 13.120137812131041 usec\nrounds: 35396"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 80068.61437181648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010550455470116111",
            "extra": "mean: 12.48928819170364 usec\nrounds: 33790"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 132292.92143954494,
            "unit": "iter/sec",
            "range": "stddev: 6.749237428380776e-7",
            "extra": "mean: 7.558983421928428 usec\nrounds: 48196"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 44297.28635569002,
            "unit": "iter/sec",
            "range": "stddev: 0.000001348868523543425",
            "extra": "mean: 22.574746271597498 usec\nrounds: 23403"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 69943.25596253865,
            "unit": "iter/sec",
            "range": "stddev: 7.931580248459771e-7",
            "extra": "mean: 14.297304096560735 usec\nrounds: 33394"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 72457.6943919981,
            "unit": "iter/sec",
            "range": "stddev: 8.054223499545994e-7",
            "extra": "mean: 13.801156776945907 usec\nrounds: 31076"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 110923.20042539052,
            "unit": "iter/sec",
            "range": "stddev: 7.066284127929662e-7",
            "extra": "mean: 9.015246550451119 usec\nrounds: 43703"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 41014.39673613521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010981761512478998",
            "extra": "mean: 24.381682520736984 usec\nrounds: 21803"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 64002.97735448615,
            "unit": "iter/sec",
            "range": "stddev: 8.300775191573993e-7",
            "extra": "mean: 15.624273140629246 usec\nrounds: 31211"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 72308.83287060156,
            "unit": "iter/sec",
            "range": "stddev: 9.985999245523847e-7",
            "extra": "mean: 13.82956908998275 usec\nrounds: 33963"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 111919.91524794085,
            "unit": "iter/sec",
            "range": "stddev: 6.788784752704324e-7",
            "extra": "mean: 8.934960304291316 usec\nrounds: 44942"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 39552.062349927925,
            "unit": "iter/sec",
            "range": "stddev: 0.000001179311415529177",
            "extra": "mean: 25.28313166460768 usec\nrounds: 21851"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 59509.782902321705,
            "unit": "iter/sec",
            "range": "stddev: 0.000001651301177852919",
            "extra": "mean: 16.803959806766258 usec\nrounds: 32095"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 66678.4141466288,
            "unit": "iter/sec",
            "range": "stddev: 8.127971892924912e-7",
            "extra": "mean: 14.997357282687549 usec\nrounds: 30119"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 97919.19819089228,
            "unit": "iter/sec",
            "range": "stddev: 7.165224840378673e-7",
            "extra": "mean: 10.212501924806535 usec\nrounds: 43379"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 41957.918183233385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011393725735053055",
            "extra": "mean: 23.8334036410702 usec\nrounds: 23127"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 63845.56257857892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012543113610646894",
            "extra": "mean: 15.662795652700755 usec\nrounds: 32802"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 62756.407237425956,
            "unit": "iter/sec",
            "range": "stddev: 9.033016290425472e-7",
            "extra": "mean: 15.934627937139643 usec\nrounds: 29194"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 99755.57774397332,
            "unit": "iter/sec",
            "range": "stddev: 9.365281299341591e-7",
            "extra": "mean: 10.024502114223026 usec\nrounds: 35470"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 39085.472277231034,
            "unit": "iter/sec",
            "range": "stddev: 0.000004482173269773909",
            "extra": "mean: 25.584953736955175 usec\nrounds: 281"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 58642.63074698688,
            "unit": "iter/sec",
            "range": "stddev: 8.385863444341413e-7",
            "extra": "mean: 17.052440984690666 usec\nrounds: 34008"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 58464.85915768564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014356530277324392",
            "extra": "mean: 17.10429161050228 usec\nrounds: 27475"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 88655.31189336789,
            "unit": "iter/sec",
            "range": "stddev: 7.042094685042961e-7",
            "extra": "mean: 11.279639974678242 usec\nrounds: 39375"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 38476.70896850457,
            "unit": "iter/sec",
            "range": "stddev: 0.000001428144027541279",
            "extra": "mean: 25.989748780711942 usec\nrounds: 18255"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 55606.72398632947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013262624257495404",
            "extra": "mean: 17.983436683769455 usec\nrounds: 30166"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 58111.83065175831,
            "unit": "iter/sec",
            "range": "stddev: 9.128466433817806e-7",
            "extra": "mean: 17.208199927354084 usec\nrounds: 27520"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 88893.7954135865,
            "unit": "iter/sec",
            "range": "stddev: 6.805012505048712e-7",
            "extra": "mean: 11.249379052243283 usec\nrounds: 37665"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 37165.485189810366,
            "unit": "iter/sec",
            "range": "stddev: 0.000001310467971785053",
            "extra": "mean: 26.906684922659622 usec\nrounds: 22020"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 52358.31089714677,
            "unit": "iter/sec",
            "range": "stddev: 9.115099263294921e-7",
            "extra": "mean: 19.09916463814906 usec\nrounds: 29823"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 54797.02710411829,
            "unit": "iter/sec",
            "range": "stddev: 8.576448638753839e-7",
            "extra": "mean: 18.249165198322313 usec\nrounds: 27131"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 80842.37857011752,
            "unit": "iter/sec",
            "range": "stddev: 7.523988633224066e-7",
            "extra": "mean: 12.369749847632994 usec\nrounds: 37709"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 107.04657616433968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001290705223018254",
            "extra": "mean: 9.341728020004894 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 29.782853098927998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006855657182935328",
            "extra": "mean: 33.57636679999587 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 5500.065395838188,
            "unit": "iter/sec",
            "range": "stddev: 0.00002126302359544468",
            "extra": "mean: 181.81601999799568 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 42.63043289953173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002500184116727371",
            "extra": "mean: 23.457420719998936 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 29.732351565456494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002596191182243366",
            "extra": "mean: 33.63339753999867 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.24021178136174,
            "unit": "iter/sec",
            "range": "stddev: 0.0007691297487264271",
            "extra": "mean: 34.19947869999419 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 29.856947387292344,
            "unit": "iter/sec",
            "range": "stddev: 0.00032615605577229555",
            "extra": "mean: 33.49304223999866 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 122.24040237186975,
            "unit": "iter/sec",
            "range": "stddev: 0.00024092619822462246",
            "extra": "mean: 8.180601344536496 msec\nrounds: 119"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 509.3367264855773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000724140584591261",
            "extra": "mean: 1.9633377056863712 msec\nrounds: 299"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2810.630936420675,
            "unit": "iter/sec",
            "range": "stddev: 0.00001734323895190692",
            "extra": "mean: 355.7919992418127 usec\nrounds: 1321"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 25.749116470565365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005140114408148794",
            "extra": "mean: 38.83628400000178 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 328.4771327993711,
            "unit": "iter/sec",
            "range": "stddev: 0.00007140577174842086",
            "extra": "mean: 3.044351950705759 msec\nrounds: 284"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 717.3044000154438,
            "unit": "iter/sec",
            "range": "stddev: 0.000052996877767177884",
            "extra": "mean: 1.3941082753409428 msec\nrounds: 661"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 337.0881461181303,
            "unit": "iter/sec",
            "range": "stddev: 0.00023912869914704242",
            "extra": "mean: 2.9665831074628084 msec\nrounds: 335"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 111.19920180759655,
            "unit": "iter/sec",
            "range": "stddev: 0.0004584003857753055",
            "extra": "mean: 8.992870306121976 msec\nrounds: 98"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 73.84397406291866,
            "unit": "iter/sec",
            "range": "stddev: 0.0004533183918425078",
            "extra": "mean: 13.542066400001051 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 70.87021515933965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007804847883844821",
            "extra": "mean: 14.110300042855378 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 112.32107481355766,
            "unit": "iter/sec",
            "range": "stddev: 0.00031916903393801457",
            "extra": "mean: 8.903048707999858 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 26.939034786360786,
            "unit": "iter/sec",
            "range": "stddev: 0.0005099256178583182",
            "extra": "mean: 37.1208548461543 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 129.29579703666343,
            "unit": "iter/sec",
            "range": "stddev: 0.0003747332192026789",
            "extra": "mean: 7.734203453778451 msec\nrounds: 119"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 124.10642300496225,
            "unit": "iter/sec",
            "range": "stddev: 0.00028056068790570723",
            "extra": "mean: 8.057600692915114 msec\nrounds: 127"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 145.14503163837279,
            "unit": "iter/sec",
            "range": "stddev: 0.00019289035747823205",
            "extra": "mean: 6.889660560283516 msec\nrounds: 141"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 29.9427922922586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004262901613300088",
            "extra": "mean: 33.397018896548936 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 440.09934280401086,
            "unit": "iter/sec",
            "range": "stddev: 0.00008237536915490156",
            "extra": "mean: 2.2722142542378876 msec\nrounds: 413"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1993.6802385499043,
            "unit": "iter/sec",
            "range": "stddev: 0.00002473558207008779",
            "extra": "mean: 501.5849486110903 usec\nrounds: 1440"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2097.063942433208,
            "unit": "iter/sec",
            "range": "stddev: 0.000031664699417484365",
            "extra": "mean: 476.85718101647734 usec\nrounds: 1475"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 443.91195069508086,
            "unit": "iter/sec",
            "range": "stddev: 0.00019670639075870068",
            "extra": "mean: 2.252698983287546 msec\nrounds: 359"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 2009.2791531439464,
            "unit": "iter/sec",
            "range": "stddev: 0.00005029272791654809",
            "extra": "mean: 497.69092484500544 usec\nrounds: 1304"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2102.8832677641126,
            "unit": "iter/sec",
            "range": "stddev: 0.00004510950858435356",
            "extra": "mean: 475.53757040601135 usec\nrounds: 1257"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-sampler6-10000]",
            "value": 683.22624900629,
            "unit": "iter/sec",
            "range": "stddev: 0.004628015853227062",
            "extra": "mean: 1.4636439999991768 msec\nrounds: 583"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-sampler7-10000]",
            "value": 842.4728688751178,
            "unit": "iter/sec",
            "range": "stddev: 0.00005440183798402799",
            "extra": "mean: 1.1869818446915859 msec\nrounds: 631"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 423.1182235943316,
            "unit": "iter/sec",
            "range": "stddev: 0.00007651576422423612",
            "extra": "mean: 2.3634056493836084 msec\nrounds: 405"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1592.2906186387986,
            "unit": "iter/sec",
            "range": "stddev: 0.00003934998020355176",
            "extra": "mean: 628.0260577399306 usec\nrounds: 1247"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1659.8738760583801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000940608454933461",
            "extra": "mean: 602.4554120790492 usec\nrounds: 1308"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 448.42180508094174,
            "unit": "iter/sec",
            "range": "stddev: 0.00008741451645763687",
            "extra": "mean: 2.2300432063500932 msec\nrounds: 315"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1959.2927314407607,
            "unit": "iter/sec",
            "range": "stddev: 0.00004469718378208642",
            "extra": "mean: 510.3882559012265 usec\nrounds: 805"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2021.4249130802468,
            "unit": "iter/sec",
            "range": "stddev: 0.0001255587800427462",
            "extra": "mean: 494.70054194404895 usec\nrounds: 751"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 423.71873074543583,
            "unit": "iter/sec",
            "range": "stddev: 0.00020340529002312187",
            "extra": "mean: 2.3600561585765387 msec\nrounds: 309"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 2004.6083725471897,
            "unit": "iter/sec",
            "range": "stddev: 0.000048852606093404936",
            "extra": "mean: 498.8505553976775 usec\nrounds: 704"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2082.052718504757,
            "unit": "iter/sec",
            "range": "stddev: 0.000051396795149179146",
            "extra": "mean: 480.29523513610064 usec\nrounds: 740"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 420.9327502760546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001408590407206659",
            "extra": "mean: 2.3756763980568953 msec\nrounds: 309"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1611.4611443863628,
            "unit": "iter/sec",
            "range": "stddev: 0.000023177653921639048",
            "extra": "mean: 620.5548321680418 usec\nrounds: 715"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1618.6102705084502,
            "unit": "iter/sec",
            "range": "stddev: 0.00014247992664997682",
            "extra": "mean: 617.8139470756431 usec\nrounds: 718"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 160.6539969740247,
            "unit": "iter/sec",
            "range": "stddev: 0.017120199886791566",
            "extra": "mean: 6.2245572400024685 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 79.52643167838293,
            "unit": "iter/sec",
            "range": "stddev: 0.0009467014958076574",
            "extra": "mean: 12.574435680003262 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 933.1295826220988,
            "unit": "iter/sec",
            "range": "stddev: 0.00008533094434668692",
            "extra": "mean: 1.0716625200007002 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 173.2892624080824,
            "unit": "iter/sec",
            "range": "stddev: 0.014436855772553086",
            "extra": "mean: 5.770698000001175 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 68.98612696576983,
            "unit": "iter/sec",
            "range": "stddev: 0.015793352484845546",
            "extra": "mean: 14.495668099996237 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 948.6075181577877,
            "unit": "iter/sec",
            "range": "stddev: 0.00002844097709344475",
            "extra": "mean: 1.0541767599966079 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 162.40071810731644,
            "unit": "iter/sec",
            "range": "stddev: 0.014760639792136467",
            "extra": "mean: 6.157608240002901 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 78.47888951617878,
            "unit": "iter/sec",
            "range": "stddev: 0.0008622023487854127",
            "extra": "mean: 12.742280200000096 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 691.5372793492104,
            "unit": "iter/sec",
            "range": "stddev: 0.00018976874497651466",
            "extra": "mean: 1.4460536400019919 msec\nrounds: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45c91cc0c22c2a0e79dcd8eb3053e5fe367c11cd",
          "message": "[Feature] invert transforms appended to a RB (#2111)",
          "timestamp": "2024-04-25T12:02:42+01:00",
          "tree_id": "f2ea6be90fb2cf84d17694cef70ebd2b5d995cae",
          "url": "https://github.com/pytorch/rl/commit/45c91cc0c22c2a0e79dcd8eb3053e5fe367c11cd"
        },
        "date": 1714043253838,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 18.464979379202372,
            "unit": "iter/sec",
            "range": "stddev: 0.00029295413882106196",
            "extra": "mean: 54.15657279998527 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 31.47938594538985,
            "unit": "iter/sec",
            "range": "stddev: 0.0036126912734981715",
            "extra": "mean: 31.766820411770126 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 35.79111488664253,
            "unit": "iter/sec",
            "range": "stddev: 0.01440816371141785",
            "extra": "mean: 27.939895227270675 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 2.9576145040321564,
            "unit": "iter/sec",
            "range": "stddev: 0.0013571614556410988",
            "extra": "mean: 338.1103246000066 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 2.0628631060922173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005252629698367876",
            "extra": "mean: 484.7631416000013 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.8172985386269332,
            "unit": "iter/sec",
            "range": "stddev: 0.030016853558081657",
            "extra": "mean: 1.2235431151999934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.9873633543200367,
            "unit": "iter/sec",
            "range": "stddev: 0.029253556423237615",
            "extra": "mean: 1.0127983742000084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 47286.68731843718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015681943562760073",
            "extra": "mean: 21.147601084123686 usec\nrounds: 19370"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 76754.52356093371,
            "unit": "iter/sec",
            "range": "stddev: 6.508388406747846e-7",
            "extra": "mean: 13.028548072559166 usec\nrounds: 34479"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 80054.49608897256,
            "unit": "iter/sec",
            "range": "stddev: 7.286991732549985e-7",
            "extra": "mean: 12.491490782586405 usec\nrounds: 35802"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 131125.7450279105,
            "unit": "iter/sec",
            "range": "stddev: 5.405306291714797e-7",
            "extra": "mean: 7.626267441127957 usec\nrounds: 44578"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 43948.07298923954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011266838434052973",
            "extra": "mean: 22.75412622175368 usec\nrounds: 23839"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 70026.6242975289,
            "unit": "iter/sec",
            "range": "stddev: 8.352221696506704e-7",
            "extra": "mean: 14.28028282144807 usec\nrounds: 34124"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 72922.05818978432,
            "unit": "iter/sec",
            "range": "stddev: 8.732865512637152e-7",
            "extra": "mean: 13.713271742789212 usec\nrounds: 31758"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 114137.03728638626,
            "unit": "iter/sec",
            "range": "stddev: 5.536447838191607e-7",
            "extra": "mean: 8.761397910573551 usec\nrounds: 44701"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 41501.4569548078,
            "unit": "iter/sec",
            "range": "stddev: 0.000001719742840792868",
            "extra": "mean: 24.095539611752194 usec\nrounds: 23541"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 64458.58441484034,
            "unit": "iter/sec",
            "range": "stddev: 6.817156501863598e-7",
            "extra": "mean: 15.513837436519461 usec\nrounds: 30302"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 73518.94335583781,
            "unit": "iter/sec",
            "range": "stddev: 8.431354154749804e-7",
            "extra": "mean: 13.601936512606239 usec\nrounds: 33361"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 113615.47706183807,
            "unit": "iter/sec",
            "range": "stddev: 5.4253365458425e-7",
            "extra": "mean: 8.801617753677387 usec\nrounds: 43022"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 39754.875302186316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017560338302827334",
            "extra": "mean: 25.154147570549796 usec\nrounds: 21732"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 59683.41928984658,
            "unit": "iter/sec",
            "range": "stddev: 7.127979238354603e-7",
            "extra": "mean: 16.7550722109871 usec\nrounds: 30674"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 67201.35759385357,
            "unit": "iter/sec",
            "range": "stddev: 8.225981708896888e-7",
            "extra": "mean: 14.880651757717809 usec\nrounds: 32598"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 99151.20875446308,
            "unit": "iter/sec",
            "range": "stddev: 8.384235066274876e-7",
            "extra": "mean: 10.085605738568338 usec\nrounds: 42170"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 41709.29412987375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017561133643498024",
            "extra": "mean: 23.975471675119113 usec\nrounds: 23760"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 64240.59198664354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011440106600378258",
            "extra": "mean: 15.566481706892006 usec\nrounds: 32198"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 63237.69530174569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010935419061007827",
            "extra": "mean: 15.813353020352638 usec\nrounds: 27497"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 99555.30003592402,
            "unit": "iter/sec",
            "range": "stddev: 5.833510225082129e-7",
            "extra": "mean: 10.044668637823953 usec\nrounds: 36021"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 39780.27981019431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010474471275096499",
            "extra": "mean: 25.138083612567616 usec\nrounds: 299"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 59516.23518344963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022766950147012616",
            "extra": "mean: 16.802138053888218 usec\nrounds: 34827"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 58695.841605979076,
            "unit": "iter/sec",
            "range": "stddev: 7.479332653051307e-7",
            "extra": "mean: 17.036982052543472 usec\nrounds: 25073"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 88098.73982886913,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010147791169456287",
            "extra": "mean: 11.350900159780824 usec\nrounds: 36969"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 37996.55834673584,
            "unit": "iter/sec",
            "range": "stddev: 9.95571109873834e-7",
            "extra": "mean: 26.318173105957285 usec\nrounds: 21224"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 54902.83004174694,
            "unit": "iter/sec",
            "range": "stddev: 8.842982595051348e-7",
            "extra": "mean: 18.21399733382817 usec\nrounds: 29254"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 57970.6410108042,
            "unit": "iter/sec",
            "range": "stddev: 8.088615775501624e-7",
            "extra": "mean: 17.25011113493857 usec\nrounds: 28101"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 87773.79420464819,
            "unit": "iter/sec",
            "range": "stddev: 9.62637725565631e-7",
            "extra": "mean: 11.392922102335682 usec\nrounds: 36548"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 36621.44663926088,
            "unit": "iter/sec",
            "range": "stddev: 0.000001170950394295013",
            "extra": "mean: 27.306403535897637 usec\nrounds: 21889"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 52509.432039820786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010110763771848013",
            "extra": "mean: 19.044197607044104 usec\nrounds: 29169"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 55529.66310896891,
            "unit": "iter/sec",
            "range": "stddev: 0.000001404586203154409",
            "extra": "mean: 18.008393064399563 usec\nrounds: 25866"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 81876.24773870013,
            "unit": "iter/sec",
            "range": "stddev: 6.667397904410889e-7",
            "extra": "mean: 12.213554328862264 usec\nrounds: 36509"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 103.76494651301627,
            "unit": "iter/sec",
            "range": "stddev: 0.00044585182582617674",
            "extra": "mean: 9.637165860000323 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 28.158968614384563,
            "unit": "iter/sec",
            "range": "stddev: 0.00034614946807438244",
            "extra": "mean: 35.512664319998066 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 6088.862812299506,
            "unit": "iter/sec",
            "range": "stddev: 0.000010658280740139486",
            "extra": "mean: 164.2342800005281 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 41.29556483039949,
            "unit": "iter/sec",
            "range": "stddev: 0.0012747431370085374",
            "extra": "mean: 24.21567556000241 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 27.775288741570673,
            "unit": "iter/sec",
            "range": "stddev: 0.000909244554819852",
            "extra": "mean: 36.003226079998285 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.06729388274793,
            "unit": "iter/sec",
            "range": "stddev: 0.0009170347600505826",
            "extra": "mean: 34.40292736000174 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 27.81638260529052,
            "unit": "iter/sec",
            "range": "stddev: 0.0008838880689162319",
            "extra": "mean: 35.9500375800053 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 116.04088534911615,
            "unit": "iter/sec",
            "range": "stddev: 0.000592334693709824",
            "extra": "mean: 8.61765227825898 msec\nrounds: 115"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 486.3462444926447,
            "unit": "iter/sec",
            "range": "stddev: 0.0001257459916003088",
            "extra": "mean: 2.0561482921353647 msec\nrounds: 267"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2761.283605761155,
            "unit": "iter/sec",
            "range": "stddev: 0.00003694197969865138",
            "extra": "mean: 362.1504136386409 usec\nrounds: 1349"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 20.461130032200472,
            "unit": "iter/sec",
            "range": "stddev: 0.0015201001001482284",
            "extra": "mean: 48.873155999999085 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 330.19309240490156,
            "unit": "iter/sec",
            "range": "stddev: 0.00005750437074140309",
            "extra": "mean: 3.0285309505316453 msec\nrounds: 283"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 711.1813483253434,
            "unit": "iter/sec",
            "range": "stddev: 0.00022969069740694811",
            "extra": "mean: 1.4061111168828504 msec\nrounds: 693"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 344.4722083876516,
            "unit": "iter/sec",
            "range": "stddev: 0.00007191248446791685",
            "extra": "mean: 2.9029918108071304 msec\nrounds: 333"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 114.05174612779855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002468358470392746",
            "extra": "mean: 8.767949934580297 msec\nrounds: 107"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 75.14186619024714,
            "unit": "iter/sec",
            "range": "stddev: 0.00034048207461187714",
            "extra": "mean: 13.308160293333154 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 73.42113631931916,
            "unit": "iter/sec",
            "range": "stddev: 0.0004565635168075849",
            "extra": "mean: 13.620056159998057 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 116.12773466923808,
            "unit": "iter/sec",
            "range": "stddev: 0.0001140102768891249",
            "extra": "mean: 8.611207329999672 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 27.05203062358295,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353104778128112",
            "extra": "mean: 36.96580171428008 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 132.04005210516718,
            "unit": "iter/sec",
            "range": "stddev: 0.00022678938813287296",
            "extra": "mean: 7.573459598482442 msec\nrounds: 132"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 127.19932345880997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002868520635190542",
            "extra": "mean: 7.861677034185035 msec\nrounds: 117"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 148.62165188714246,
            "unit": "iter/sec",
            "range": "stddev: 0.00014911372658951824",
            "extra": "mean: 6.728494719997873 msec\nrounds: 150"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 30.16716182459411,
            "unit": "iter/sec",
            "range": "stddev: 0.0006004874050004352",
            "extra": "mean: 33.148627166667666 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 441.3902544122103,
            "unit": "iter/sec",
            "range": "stddev: 0.0001703827173808237",
            "extra": "mean: 2.2655688248751167 msec\nrounds: 394"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1858.7294829650502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000895830422506339",
            "extra": "mean: 538.0019035393991 usec\nrounds: 1441"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2096.54859044054,
            "unit": "iter/sec",
            "range": "stddev: 0.00008612652315062278",
            "extra": "mean: 476.97439713995556 usec\nrounds: 1609"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 456.94936344305404,
            "unit": "iter/sec",
            "range": "stddev: 0.00019155060891030154",
            "extra": "mean: 2.1884262896552253 msec\nrounds: 435"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 2039.967565907564,
            "unit": "iter/sec",
            "range": "stddev: 0.000043596238155752905",
            "extra": "mean: 490.2038722145607 usec\nrounds: 1346"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2143.2625875006765,
            "unit": "iter/sec",
            "range": "stddev: 0.000046720175147482475",
            "extra": "mean: 466.5783865364487 usec\nrounds: 1322"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-sampler6-10000]",
            "value": 797.6662586283778,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328362705249257",
            "extra": "mean: 1.2536571394151033 msec\nrounds: 581"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-sampler7-10000]",
            "value": 848.1268954412478,
            "unit": "iter/sec",
            "range": "stddev: 0.00005505359413841064",
            "extra": "mean: 1.1790688461538983 msec\nrounds: 637"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 435.0610961219908,
            "unit": "iter/sec",
            "range": "stddev: 0.00006596029049112859",
            "extra": "mean: 2.298527744525336 msec\nrounds: 411"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1614.8175870659118,
            "unit": "iter/sec",
            "range": "stddev: 0.00003034462641043898",
            "extra": "mean: 619.2649919158845 usec\nrounds: 1237"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1647.245592882114,
            "unit": "iter/sec",
            "range": "stddev: 0.00009710015388503377",
            "extra": "mean: 607.0740175727796 usec\nrounds: 1252"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 442.55629330231676,
            "unit": "iter/sec",
            "range": "stddev: 0.00010300706391666334",
            "extra": "mean: 2.2595995472984614 msec\nrounds: 296"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1978.7540690625979,
            "unit": "iter/sec",
            "range": "stddev: 0.000025217411574188843",
            "extra": "mean: 505.36851225465 usec\nrounds: 816"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 2054.780032674644,
            "unit": "iter/sec",
            "range": "stddev: 0.00012099327526578148",
            "extra": "mean: 486.6700980631638 usec\nrounds: 826"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 434.89331398909144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001938838696616595",
            "extra": "mean: 2.299414518074388 msec\nrounds: 332"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 1997.5351146864364,
            "unit": "iter/sec",
            "range": "stddev: 0.00004899220710338276",
            "extra": "mean: 500.61698172298475 usec\nrounds: 766"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 2088.328400890972,
            "unit": "iter/sec",
            "range": "stddev: 0.000042732619962718176",
            "extra": "mean: 478.8518891824468 usec\nrounds: 758"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 422.12375141113137,
            "unit": "iter/sec",
            "range": "stddev: 0.00007988370278556071",
            "extra": "mean: 2.3689735454521736 msec\nrounds: 341"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1560.165565572143,
            "unit": "iter/sec",
            "range": "stddev: 0.000047384969235762076",
            "extra": "mean: 640.9576150549641 usec\nrounds: 704"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1660.811467330208,
            "unit": "iter/sec",
            "range": "stddev: 0.00012364801845083786",
            "extra": "mean: 602.1153030738176 usec\nrounds: 716"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 122.29089679497365,
            "unit": "iter/sec",
            "range": "stddev: 0.022058022197772083",
            "extra": "mean: 8.177223540003524 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 81.89638227629375,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405816422874926",
            "extra": "mean: 12.210551579998992 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 946.3543694767126,
            "unit": "iter/sec",
            "range": "stddev: 0.00009101594888702628",
            "extra": "mean: 1.056686619995162 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 176.93521574054455,
            "unit": "iter/sec",
            "range": "stddev: 0.0135596941541583",
            "extra": "mean: 5.651786139998194 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 70.12307855488831,
            "unit": "iter/sec",
            "range": "stddev: 0.014155188948537045",
            "extra": "mean: 14.260640300001342 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 942.7325249270287,
            "unit": "iter/sec",
            "range": "stddev: 0.00006129341775498048",
            "extra": "mean: 1.0607462600034978 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 165.82560802675619,
            "unit": "iter/sec",
            "range": "stddev: 0.014166550653279908",
            "extra": "mean: 6.030431680001129 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 79.7077485429543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006867605864246836",
            "extra": "mean: 12.545831720000251 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 691.1656123773636,
            "unit": "iter/sec",
            "range": "stddev: 0.00019871775935759276",
            "extra": "mean: 1.4468312399981187 msec\nrounds: 50"
          }
        ]
      }
    ],
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93e9e30dc437d6159eaaa97c1f3fcca1859ef5f5",
          "message": "[Feature] Span slice indices on the left and on the right (#2107)",
          "timestamp": "2024-04-24T17:28:04+01:00",
          "tree_id": "2395e2488a134221823c000c854f898eb462e4f8",
          "url": "https://github.com/pytorch/rl/commit/93e9e30dc437d6159eaaa97c1f3fcca1859ef5f5"
        },
        "date": 1713976729092,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 10.001185940621365,
            "unit": "iter/sec",
            "range": "stddev: 0.0014630072289555426",
            "extra": "mean: 99.98814200007473 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 11.273258680800383,
            "unit": "iter/sec",
            "range": "stddev: 0.0009719607316288063",
            "extra": "mean: 88.7054957501429 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 14.031359471069061,
            "unit": "iter/sec",
            "range": "stddev: 0.08593753682863645",
            "extra": "mean: 71.2689317141277 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single_pixels",
            "value": 9.030636937021306,
            "unit": "iter/sec",
            "range": "stddev: 0.00009330760005583268",
            "extra": "mean: 110.73416049985099 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync_pixels",
            "value": 15.079333296097015,
            "unit": "iter/sec",
            "range": "stddev: 0.0009184248289472807",
            "extra": "mean: 66.31592924992447 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async_pixels",
            "value": 18.147367402789982,
            "unit": "iter/sec",
            "range": "stddev: 0.06215011209289109",
            "extra": "mean: 55.10441144461867 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.4719287771110132,
            "unit": "iter/sec",
            "range": "stddev: 0.033449216532092464",
            "extra": "mean: 679.3806980000227 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 1.105975977643481,
            "unit": "iter/sec",
            "range": "stddev: 0.03158723876984729",
            "extra": "mean: 904.1787707999902 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4804476445242663,
            "unit": "iter/sec",
            "range": "stddev: 0.03213677959167555",
            "extra": "mean: 2.081392242000038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5681816815600327,
            "unit": "iter/sec",
            "range": "stddev: 0.04185535142045154",
            "extra": "mean: 1.7600004231997446 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 29558.323752300348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022143123457798276",
            "extra": "mean: 33.83141778877687 usec\nrounds: 9835"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 50754.70188469627,
            "unit": "iter/sec",
            "range": "stddev: 0.000001153888919726299",
            "extra": "mean: 19.702608090808692 usec\nrounds: 31796"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 52243.89373912137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011222945893824786",
            "extra": "mean: 19.140992916674165 usec\nrounds: 30212"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 86878.295373706,
            "unit": "iter/sec",
            "range": "stddev: 7.881134510171752e-7",
            "extra": "mean: 11.510354751995436 usec\nrounds: 46686"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 28592.63137332878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015243786350200976",
            "extra": "mean: 34.97404582821295 usec\nrounds: 20687"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 45269.60324012431,
            "unit": "iter/sec",
            "range": "stddev: 0.000001153804743112455",
            "extra": "mean: 22.08987771983959 usec\nrounds: 30021"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 47297.78171817461,
            "unit": "iter/sec",
            "range": "stddev: 0.000001082949545512253",
            "extra": "mean: 21.142640599056694 usec\nrounds: 29360"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 74358.50658971719,
            "unit": "iter/sec",
            "range": "stddev: 8.75102288475339e-7",
            "extra": "mean: 13.448360461535774 usec\nrounds: 42390"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 26512.21459926829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016340793768610118",
            "extra": "mean: 37.71846355029123 usec\nrounds: 18505"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 41323.6411421872,
            "unit": "iter/sec",
            "range": "stddev: 0.000001145975205127892",
            "extra": "mean: 24.199222826448917 usec\nrounds: 28336"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 47478.121938785436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011105373587824897",
            "extra": "mean: 21.06233269482145 usec\nrounds: 30797"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 75449.1532812536,
            "unit": "iter/sec",
            "range": "stddev: 8.174779897556057e-7",
            "extra": "mean: 13.253959209751185 usec\nrounds: 40503"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 25656.53207319491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018778985138449872",
            "extra": "mean: 38.97642897127031 usec\nrounds: 19554"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 38877.78436251815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013367663086393975",
            "extra": "mean: 25.721630396306598 usec\nrounds: 25641"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 44388.374156343736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013266295693734955",
            "extra": "mean: 22.52842143931252 usec\nrounds: 29665"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 66259.30763534897,
            "unit": "iter/sec",
            "range": "stddev: 9.387389617998688e-7",
            "extra": "mean: 15.092219277379009 usec\nrounds: 38609"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 26936.485937596095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015489221405089749",
            "extra": "mean: 37.12436738469545 usec\nrounds: 20450"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 41495.60577246413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011445663137791588",
            "extra": "mean: 24.098937258161087 usec\nrounds: 28482"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 40455.44934558359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012719691727698749",
            "extra": "mean: 24.71854882781489 usec\nrounds: 27360"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 65744.07142775018,
            "unit": "iter/sec",
            "range": "stddev: 8.564481966258917e-7",
            "extra": "mean: 15.210496981449586 usec\nrounds: 36969"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 25488.11906068788,
            "unit": "iter/sec",
            "range": "stddev: 0.000002184879054478456",
            "extra": "mean: 39.23396613218001 usec\nrounds: 295"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 38598.26450643731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012077994378028005",
            "extra": "mean: 25.90790059571779 usec\nrounds: 28027"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 38159.41311362086,
            "unit": "iter/sec",
            "range": "stddev: 0.000001308387243088948",
            "extra": "mean: 26.205853769880274 usec\nrounds: 25740"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 58744.69812511592,
            "unit": "iter/sec",
            "range": "stddev: 9.127970381014612e-7",
            "extra": "mean: 17.022812814020682 usec\nrounds: 36819"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 24367.210969553133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016214089190680243",
            "extra": "mean: 41.0387549584358 usec\nrounds: 17446"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 36362.738722901675,
            "unit": "iter/sec",
            "range": "stddev: 0.000001220898972809056",
            "extra": "mean: 27.50067885756329 usec\nrounds: 26904"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 37691.56262476901,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013792207313085254",
            "extra": "mean: 26.531136688476007 usec\nrounds: 26096"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 58598.04136982663,
            "unit": "iter/sec",
            "range": "stddev: 9.03347202227653e-7",
            "extra": "mean: 17.065416806148086 usec\nrounds: 34649"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 23638.40055070711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015612041329228987",
            "extra": "mean: 42.30404666571598 usec\nrounds: 18366"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 33866.900283976924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012429645334955608",
            "extra": "mean: 29.5273553710234 usec\nrounds: 25407"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 35746.45818694117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013735084015700927",
            "extra": "mean: 27.974799482800734 usec\nrounds: 25484"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 52799.7567038548,
            "unit": "iter/sec",
            "range": "stddev: 9.552304432630543e-7",
            "extra": "mean: 18.939481210279745 usec\nrounds: 35843"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 43.337056642244924,
            "unit": "iter/sec",
            "range": "stddev: 0.0001278948742588469",
            "extra": "mean: 23.074940420046914 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 307.2417419276665,
            "unit": "iter/sec",
            "range": "stddev: 0.011813810995620707",
            "extra": "mean: 3.2547660800446465 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 16079.564254319363,
            "unit": "iter/sec",
            "range": "stddev: 0.000004906335548339691",
            "extra": "mean: 62.19074000910041 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 20.0274443921264,
            "unit": "iter/sec",
            "range": "stddev: 0.00012219745527277136",
            "extra": "mean: 49.931483039999875 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 574.2493960188349,
            "unit": "iter/sec",
            "range": "stddev: 0.00003802418590433067",
            "extra": "mean: 1.7414036600348481 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 12.587099461919104,
            "unit": "iter/sec",
            "range": "stddev: 0.00019938523776089865",
            "extra": "mean: 79.4464207600322 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 574.1035264584389,
            "unit": "iter/sec",
            "range": "stddev: 0.000054495113998206016",
            "extra": "mean: 1.7418461199304147 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 45.01757175387472,
            "unit": "iter/sec",
            "range": "stddev: 0.00009849872999969954",
            "extra": "mean: 22.213548199963242 msec\nrounds: 45"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 1483.5151529986013,
            "unit": "iter/sec",
            "range": "stddev: 0.000038282458900663275",
            "extra": "mean: 674.0746786298198 usec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1584.593068975712,
            "unit": "iter/sec",
            "range": "stddev: 0.000016820949638250667",
            "extra": "mean: 631.076848421661 usec\nrounds: 264"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 696.429151565248,
            "unit": "iter/sec",
            "range": "stddev: 0.000015367049187987115",
            "extra": "mean: 1.4358962397717931 msec\nrounds: 538"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 1537.120816253616,
            "unit": "iter/sec",
            "range": "stddev: 0.00003771349466120327",
            "extra": "mean: 650.5669492117565 usec\nrounds: 59"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 625.4305775332696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003020731143752655",
            "extra": "mean: 1.5988984803781925 msec\nrounds: 587"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 332.9716740979204,
            "unit": "iter/sec",
            "range": "stddev: 0.000055221207406428185",
            "extra": "mean: 3.003258468484378 msec\nrounds: 333"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 116.67554437375922,
            "unit": "iter/sec",
            "range": "stddev: 0.0001433134412321957",
            "extra": "mean: 8.570776381351976 msec\nrounds: 118"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 97.28430643426016,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917455517500381",
            "extra": "mean: 10.27915022116902 msec\nrounds: 95"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 85.3817560367682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001819345756654137",
            "extra": "mean: 11.712103924980966 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 117.75509370521827,
            "unit": "iter/sec",
            "range": "stddev: 0.00009399989835770273",
            "extra": "mean: 8.492201641003703 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 37.943129101029676,
            "unit": "iter/sec",
            "range": "stddev: 0.0005798090830690606",
            "extra": "mean: 26.355232783710047 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 175.00280270624185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000764293916738986",
            "extra": "mean: 5.7141941988128675 msec\nrounds: 171"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 166.44510746346933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000662766457500041",
            "extra": "mean: 6.0079867485409615 msec\nrounds: 167"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 213.43551375590613,
            "unit": "iter/sec",
            "range": "stddev: 0.00006966371102348228",
            "extra": "mean: 4.685255899557757 msec\nrounds: 209"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 50.37124481519478,
            "unit": "iter/sec",
            "range": "stddev: 0.0003104402780119343",
            "extra": "mean: 19.852596529406085 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 356.3998443619841,
            "unit": "iter/sec",
            "range": "stddev: 0.0000324649929092439",
            "extra": "mean: 2.805837364463974 msec\nrounds: 332"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1852.9520752250717,
            "unit": "iter/sec",
            "range": "stddev: 0.000029013705976547426",
            "extra": "mean: 539.6793653600207 usec\nrounds: 1322"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 1932.5648571954512,
            "unit": "iter/sec",
            "range": "stddev: 0.000021892880964939968",
            "extra": "mean: 517.447058129374 usec\nrounds: 1514"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 352.6364610616187,
            "unit": "iter/sec",
            "range": "stddev: 0.000220136074856606",
            "extra": "mean: 2.8357816346882596 msec\nrounds: 323"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 1874.3122497912723,
            "unit": "iter/sec",
            "range": "stddev: 0.00003696630370673194",
            "extra": "mean: 533.5290318416061 usec\nrounds: 1068"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 1966.43809780523,
            "unit": "iter/sec",
            "range": "stddev: 0.000027109183221896088",
            "extra": "mean: 508.5336787952361 usec\nrounds: 1124"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-sampler6-10000]",
            "value": 657.5765691799345,
            "unit": "iter/sec",
            "range": "stddev: 0.00014488723065547496",
            "extra": "mean: 1.5207354502413348 msec\nrounds: 382"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-sampler7-10000]",
            "value": 733.6726917026378,
            "unit": "iter/sec",
            "range": "stddev: 0.000037739722061607695",
            "extra": "mean: 1.363005617231432 msec\nrounds: 546"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 339.7365399578018,
            "unit": "iter/sec",
            "range": "stddev: 0.00003466904526060882",
            "extra": "mean: 2.9434573040751184 msec\nrounds: 319"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1498.8329627106655,
            "unit": "iter/sec",
            "range": "stddev: 0.00002485006585934163",
            "extra": "mean: 667.1857537690408 usec\nrounds: 1125"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1548.0153817624252,
            "unit": "iter/sec",
            "range": "stddev: 0.00012330608806975776",
            "extra": "mean: 645.9884131522606 usec\nrounds: 1186"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 355.6934378142519,
            "unit": "iter/sec",
            "range": "stddev: 0.00003425525668667909",
            "extra": "mean: 2.811409752580856 msec\nrounds: 291"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1851.5015107974325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000209837305819509",
            "extra": "mean: 540.1021787820767 usec\nrounds: 839"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 1913.8692200336905,
            "unit": "iter/sec",
            "range": "stddev: 0.00014529669570590648",
            "extra": "mean: 522.5017412539802 usec\nrounds: 858"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 352.1403809594856,
            "unit": "iter/sec",
            "range": "stddev: 0.00022045257784490517",
            "extra": "mean: 2.83977656091379 msec\nrounds: 287"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 1871.9286806348289,
            "unit": "iter/sec",
            "range": "stddev: 0.00004079653404751356",
            "extra": "mean: 534.2083864332209 usec\nrounds: 722"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 1957.813239258836,
            "unit": "iter/sec",
            "range": "stddev: 0.000028691300994257825",
            "extra": "mean: 510.7739491937277 usec\nrounds: 728"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 337.7807732943803,
            "unit": "iter/sec",
            "range": "stddev: 0.00002889476040786472",
            "extra": "mean: 2.9605000611698142 msec\nrounds: 278"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1489.5235558111774,
            "unit": "iter/sec",
            "range": "stddev: 0.000025229374339549584",
            "extra": "mean: 671.3556130741493 usec\nrounds: 765"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1543.96208021931,
            "unit": "iter/sec",
            "range": "stddev: 0.00015853476977588244",
            "extra": "mean: 647.6843005483374 usec\nrounds: 742"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 103.87661264954778,
            "unit": "iter/sec",
            "range": "stddev: 0.023361892770194844",
            "extra": "mean: 9.62680602007822 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 68.07353821548766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006470665960533907",
            "extra": "mean: 14.689995939897926 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 869.4670658467534,
            "unit": "iter/sec",
            "range": "stddev: 0.00016430161026098473",
            "extra": "mean: 1.1501298200710153 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 139.0569403618964,
            "unit": "iter/sec",
            "range": "stddev: 0.015861348891274205",
            "extra": "mean: 7.191298739908234 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 67.91904809114004,
            "unit": "iter/sec",
            "range": "stddev: 0.0007014915622742427",
            "extra": "mean: 14.723410119913751 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 870.2709996167196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001690787742467759",
            "extra": "mean: 1.1490673599837464 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 102.11490694416717,
            "unit": "iter/sec",
            "range": "stddev: 0.022503893367461385",
            "extra": "mean: 9.792889499931334 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 66.74175781836317,
            "unit": "iter/sec",
            "range": "stddev: 0.0006990259403616273",
            "extra": "mean: 14.983123500005604 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 685.9053420953899,
            "unit": "iter/sec",
            "range": "stddev: 0.000047358012490287955",
            "extra": "mean: 1.457927120009117 msec\nrounds: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36e13099885ff7fcf25a8748a58a4e5b87995ba2",
          "message": "[Versioning] Deprecations for 0.4 (#2109)",
          "timestamp": "2024-04-25T11:20:14+01:00",
          "tree_id": "cdf86d929468c1be31530edb4ad3c2abd6a2cba8",
          "url": "https://github.com/pytorch/rl/commit/36e13099885ff7fcf25a8748a58a4e5b87995ba2"
        },
        "date": 1714041150169,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 9.763609072166684,
            "unit": "iter/sec",
            "range": "stddev: 0.0016809231928518699",
            "extra": "mean: 102.42114289998767 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 11.289818292990605,
            "unit": "iter/sec",
            "range": "stddev: 0.0024855188530801867",
            "extra": "mean: 88.57538483332898 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 13.959791528703386,
            "unit": "iter/sec",
            "range": "stddev: 0.08238173308734408",
            "extra": "mean: 71.63430757141701 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single_pixels",
            "value": 9.02106276525026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002408997374617516",
            "extra": "mean: 110.85168411110796 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync_pixels",
            "value": 14.894108344636999,
            "unit": "iter/sec",
            "range": "stddev: 0.0011167938224489365",
            "extra": "mean: 67.14064224999916 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async_pixels",
            "value": 18.000278644313447,
            "unit": "iter/sec",
            "range": "stddev: 0.06289269714139166",
            "extra": "mean: 55.55469555555545 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.4216618045037228,
            "unit": "iter/sec",
            "range": "stddev: 0.03255983115316579",
            "extra": "mean: 703.4021711999799 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 1.0758974471922524,
            "unit": "iter/sec",
            "range": "stddev: 0.030363267215271814",
            "extra": "mean: 929.4566156000087 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4690380861386604,
            "unit": "iter/sec",
            "range": "stddev: 0.040549398878658785",
            "extra": "mean: 2.132023026599961 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5562126920517414,
            "unit": "iter/sec",
            "range": "stddev: 0.03467356782961279",
            "extra": "mean: 1.7978733932000523 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 29977.06408693616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020678744818572653",
            "extra": "mean: 33.35883717964877 usec\nrounds: 15385"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 49739.77242048154,
            "unit": "iter/sec",
            "range": "stddev: 9.579064872333469e-7",
            "extra": "mean: 20.10463561325476 usec\nrounds: 25075"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 52812.1867573863,
            "unit": "iter/sec",
            "range": "stddev: 0.00000143212053196318",
            "extra": "mean: 18.93502355041453 usec\nrounds: 31847"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 87490.5639832615,
            "unit": "iter/sec",
            "range": "stddev: 7.460766009243107e-7",
            "extra": "mean: 11.429804020823523 usec\nrounds: 49189"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 28032.4669591722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019242168285166695",
            "extra": "mean: 35.67292173951179 usec\nrounds: 20534"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 45573.570078896126,
            "unit": "iter/sec",
            "range": "stddev: 0.000001630328711493266",
            "extra": "mean: 21.94254253658027 usec\nrounds: 31467"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 47601.352963892175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010001818763962476",
            "extra": "mean: 21.00780624362812 usec\nrounds: 30048"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 75348.7571698097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012178456231551748",
            "extra": "mean: 13.271619036082445 usec\nrounds: 45104"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 27020.222090499195,
            "unit": "iter/sec",
            "range": "stddev: 0.000001979518259711186",
            "extra": "mean: 37.00931830429396 usec\nrounds: 20072"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 41672.49189556144,
            "unit": "iter/sec",
            "range": "stddev: 0.000001628998243756621",
            "extra": "mean: 23.996645137184863 usec\nrounds: 29231"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 47409.14920068379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010060089021758517",
            "extra": "mean: 21.092975024018713 usec\nrounds: 30229"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 75774.22686778498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011889300221429112",
            "extra": "mean: 13.197099348104928 usec\nrounds: 44983"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 25727.033063664174,
            "unit": "iter/sec",
            "range": "stddev: 0.000002011030722669493",
            "extra": "mean: 38.86962004228773 usec\nrounds: 19589"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 39067.278711591985,
            "unit": "iter/sec",
            "range": "stddev: 0.000001038147372569359",
            "extra": "mean: 25.596868606650133 usec\nrounds: 28761"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 43942.87114400878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015539538528946309",
            "extra": "mean: 22.756819797295858 usec\nrounds: 29378"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 66526.82980085387,
            "unit": "iter/sec",
            "range": "stddev: 7.995652812161737e-7",
            "extra": "mean: 15.031529429456821 usec\nrounds: 42882"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 26865.931974788768,
            "unit": "iter/sec",
            "range": "stddev: 0.000001928985716357699",
            "extra": "mean: 37.22186153595598 usec\nrounds: 20973"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 41467.6544330522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016427062601346789",
            "extra": "mean: 24.11518118572292 usec\nrounds: 30339"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 40290.01043856159,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011659076120289535",
            "extra": "mean: 24.820048173601347 usec\nrounds: 26716"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 65737.82560072925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012863924830143666",
            "extra": "mean: 15.211942148401494 usec\nrounds: 40552"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 24995.817305754386,
            "unit": "iter/sec",
            "range": "stddev: 0.00000419365217577973",
            "extra": "mean: 40.006693430655936 usec\nrounds: 274"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 38313.46465095866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017673227220549083",
            "extra": "mean: 26.100484754123602 usec\nrounds: 27909"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 37543.70044285026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011777752682728097",
            "extra": "mean: 26.63562696815726 usec\nrounds: 24577"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 59289.770750692565,
            "unit": "iter/sec",
            "range": "stddev: 0.000001352117229926673",
            "extra": "mean: 16.866315847381124 usec\nrounds: 38183"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 24171.78089308716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025161805002391603",
            "extra": "mean: 41.37055537707558 usec\nrounds: 19268"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 35782.40623178261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011364268171057131",
            "extra": "mean: 27.94669518652385 usec\nrounds: 27571"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 37217.097684248016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012055562718558495",
            "extra": "mean: 26.869370859706933 usec\nrounds: 26932"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 59062.89645902997,
            "unit": "iter/sec",
            "range": "stddev: 8.829000868233486e-7",
            "extra": "mean: 16.931103280613197 usec\nrounds: 38168"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 23720.518500928247,
            "unit": "iter/sec",
            "range": "stddev: 0.000002090702005813394",
            "extra": "mean: 42.157594487695 usec\nrounds: 18685"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 33786.49215608019,
            "unit": "iter/sec",
            "range": "stddev: 0.00000167963266036848",
            "extra": "mean: 29.597627222749164 usec\nrounds: 26603"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 35148.039818125115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018543534354449887",
            "extra": "mean: 28.451088742773095 usec\nrounds: 24926"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 53502.754897959574,
            "unit": "iter/sec",
            "range": "stddev: 9.169181315569026e-7",
            "extra": "mean: 18.690626340778145 usec\nrounds: 35436"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 40.46713584665002,
            "unit": "iter/sec",
            "range": "stddev: 0.00012575753612653357",
            "extra": "mean: 24.71141035998926 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 300.0300336052742,
            "unit": "iter/sec",
            "range": "stddev: 0.012224212678264257",
            "extra": "mean: 3.3329996600127743 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 15457.751954821108,
            "unit": "iter/sec",
            "range": "stddev: 0.000006422893013575365",
            "extra": "mean: 64.69245999824125 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 18.916037097475705,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209858695604203",
            "extra": "mean: 52.86519554000279 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 566.9442561783238,
            "unit": "iter/sec",
            "range": "stddev: 0.000053222798874799246",
            "extra": "mean: 1.7638418400088085 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 11.884040738534555,
            "unit": "iter/sec",
            "range": "stddev: 0.00022741070292063245",
            "extra": "mean: 84.14646348000588 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 567.3228655775512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818637109511116",
            "extra": "mean: 1.762664719994973 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 42.50389441686191,
            "unit": "iter/sec",
            "range": "stddev: 0.00008956067707171495",
            "extra": "mean: 23.52725588371699 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 1425.4705736469925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004005590701803105",
            "extra": "mean: 701.5227241356178 usec\nrounds: 29"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1538.474078490605,
            "unit": "iter/sec",
            "range": "stddev: 0.00001067917699704745",
            "extra": "mean: 649.9947018809044 usec\nrounds: 265"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 687.2619773106326,
            "unit": "iter/sec",
            "range": "stddev: 0.000014254117222056158",
            "extra": "mean: 1.455049214148529 msec\nrounds: 523"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 1486.1529646564106,
            "unit": "iter/sec",
            "range": "stddev: 0.000040000986905963076",
            "extra": "mean: 672.8782459019579 usec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 685.6955092979886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000975085027256472",
            "extra": "mean: 1.4583732669093818 msec\nrounds: 562"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 336.96382090316916,
            "unit": "iter/sec",
            "range": "stddev: 0.000036891637082354613",
            "extra": "mean: 2.9676776495461294 msec\nrounds: 331"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 116.95535024626443,
            "unit": "iter/sec",
            "range": "stddev: 0.00010452336887480192",
            "extra": "mean: 8.550271517244592 msec\nrounds: 116"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 96.06707941467678,
            "unit": "iter/sec",
            "range": "stddev: 0.0003054394834209669",
            "extra": "mean: 10.40939316665875 msec\nrounds: 96"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 83.20964303436901,
            "unit": "iter/sec",
            "range": "stddev: 0.00017613810776484902",
            "extra": "mean: 12.017837879522675 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 118.84891625198543,
            "unit": "iter/sec",
            "range": "stddev: 0.00002452867652011064",
            "extra": "mean: 8.414043909999009 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 38.28674294193545,
            "unit": "iter/sec",
            "range": "stddev: 0.0002695328399351221",
            "extra": "mean: 26.118701230777727 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 170.59082156277202,
            "unit": "iter/sec",
            "range": "stddev: 0.00006910496093229263",
            "extra": "mean: 5.8619800927099215 msec\nrounds: 151"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 163.27214165577612,
            "unit": "iter/sec",
            "range": "stddev: 0.00007501184510768594",
            "extra": "mean: 6.124743571431084 msec\nrounds: 161"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 204.32423973060492,
            "unit": "iter/sec",
            "range": "stddev: 0.00007235522259498996",
            "extra": "mean: 4.894181920453827 msec\nrounds: 176"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 48.65236918898168,
            "unit": "iter/sec",
            "range": "stddev: 0.000290875708356502",
            "extra": "mean: 20.55398363265052 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 353.4377457371132,
            "unit": "iter/sec",
            "range": "stddev: 0.00003697539697466356",
            "extra": "mean: 2.8293525863075177 msec\nrounds: 336"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1860.959877054817,
            "unit": "iter/sec",
            "range": "stddev: 0.00003161468570774797",
            "extra": "mean: 537.3570985219815 usec\nrounds: 1421"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 1938.3123423166933,
            "unit": "iter/sec",
            "range": "stddev: 0.000022244959181589274",
            "extra": "mean: 515.9127237485308 usec\nrounds: 1495"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 353.17031854735745,
            "unit": "iter/sec",
            "range": "stddev: 0.00021635840524454928",
            "extra": "mean: 2.8314950251571256 msec\nrounds: 318"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 1875.7649483010275,
            "unit": "iter/sec",
            "range": "stddev: 0.00002730050423508711",
            "extra": "mean: 533.1158367714191 usec\nrounds: 1066"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 1941.8287141336111,
            "unit": "iter/sec",
            "range": "stddev: 0.00011496366615880477",
            "extra": "mean: 514.9784801931779 usec\nrounds: 1035"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-sampler6-10000]",
            "value": 682.2977802495267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003992044300951552",
            "extra": "mean: 1.4656357223297498 msec\nrounds: 515"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-sampler7-10000]",
            "value": 722.6191674416359,
            "unit": "iter/sec",
            "range": "stddev: 0.000032225870336610965",
            "extra": "mean: 1.3838547952449203 msec\nrounds: 547"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 338.1344596537158,
            "unit": "iter/sec",
            "range": "stddev: 0.00003376898311953265",
            "extra": "mean: 2.9574033981159507 msec\nrounds: 319"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1513.2435547655482,
            "unit": "iter/sec",
            "range": "stddev: 0.000026851420118811184",
            "extra": "mean: 660.8321554390716 usec\nrounds: 1158"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1567.4575500609337,
            "unit": "iter/sec",
            "range": "stddev: 0.000023005002450600995",
            "extra": "mean: 637.9758099102114 usec\nrounds: 1231"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 362.6810351893225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003204849164811489",
            "extra": "mean: 2.757243701695049 msec\nrounds: 295"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1855.1837066611429,
            "unit": "iter/sec",
            "range": "stddev: 0.000023988556924914946",
            "extra": "mean: 539.0301760464168 usec\nrounds: 835"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 1923.751946256389,
            "unit": "iter/sec",
            "range": "stddev: 0.00013118967938710756",
            "extra": "mean: 519.8175377787114 usec\nrounds: 900"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 353.68357344160506,
            "unit": "iter/sec",
            "range": "stddev: 0.0002172063268611009",
            "extra": "mean: 2.8273860452982134 msec\nrounds: 287"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 1880.468173868543,
            "unit": "iter/sec",
            "range": "stddev: 0.000028502633599769536",
            "extra": "mean: 531.782464545931 usec\nrounds: 691"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 1957.897657634323,
            "unit": "iter/sec",
            "range": "stddev: 0.000027313451269075054",
            "extra": "mean: 510.7519262310545 usec\nrounds: 732"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 340.9457323195791,
            "unit": "iter/sec",
            "range": "stddev: 0.00002921295602191224",
            "extra": "mean: 2.9330180882354284 msec\nrounds: 272"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1502.824370559431,
            "unit": "iter/sec",
            "range": "stddev: 0.00002310335503427683",
            "extra": "mean: 665.4137499964463 usec\nrounds: 760"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1548.9556359734404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001412027726387913",
            "extra": "mean: 645.5962822792859 usec\nrounds: 790"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 103.66439947727908,
            "unit": "iter/sec",
            "range": "stddev: 0.023221270428087755",
            "extra": "mean: 9.646513219990993 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 68.82791893420759,
            "unit": "iter/sec",
            "range": "stddev: 0.0006701809507686467",
            "extra": "mean: 14.528987879989472 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 868.1354209986537,
            "unit": "iter/sec",
            "range": "stddev: 0.00022078839405188954",
            "extra": "mean: 1.1518940200016914 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 138.4131655304793,
            "unit": "iter/sec",
            "range": "stddev: 0.01607702856030052",
            "extra": "mean: 7.224746259992116 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 69.21752497914376,
            "unit": "iter/sec",
            "range": "stddev: 0.0006341331025886431",
            "extra": "mean: 14.447208280002997 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 863.913375893669,
            "unit": "iter/sec",
            "range": "stddev: 0.00020655575874171605",
            "extra": "mean: 1.157523459994536 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 132.1093116726894,
            "unit": "iter/sec",
            "range": "stddev: 0.016005696028160606",
            "extra": "mean: 7.569489140005317 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 57.85253036410036,
            "unit": "iter/sec",
            "range": "stddev: 0.01632483023481113",
            "extra": "mean: 17.28532864001636 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 671.368655229786,
            "unit": "iter/sec",
            "range": "stddev: 0.00016026785673746818",
            "extra": "mean: 1.489494619997913 msec\nrounds: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e0357f0b927ebdc4ada059c1ed41d4f41f334b6",
          "message": "[CI] Remove x86 OSX jobs (#2112)",
          "timestamp": "2024-04-25T11:37:39+01:00",
          "tree_id": "545c390405bca8029fb478d1ca831bec87b4a326",
          "url": "https://github.com/pytorch/rl/commit/8e0357f0b927ebdc4ada059c1ed41d4f41f334b6"
        },
        "date": 1714041914653,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 9.6663098867196,
            "unit": "iter/sec",
            "range": "stddev: 0.0024083058861875417",
            "extra": "mean: 103.45209409993004 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 11.280287854895727,
            "unit": "iter/sec",
            "range": "stddev: 0.000876637581535062",
            "extra": "mean: 88.6502200000147 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 11.769867361523756,
            "unit": "iter/sec",
            "range": "stddev: 0.09050595151716066",
            "extra": "mean: 84.96272466663868 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single_pixels",
            "value": 8.842862779392075,
            "unit": "iter/sec",
            "range": "stddev: 0.0002471606509971415",
            "extra": "mean: 113.08554988894078 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync_pixels",
            "value": 14.811021328250845,
            "unit": "iter/sec",
            "range": "stddev: 0.0011952658831919356",
            "extra": "mean: 67.51728850005634 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async_pixels",
            "value": 15.983558831874106,
            "unit": "iter/sec",
            "range": "stddev: 0.06516456008949877",
            "extra": "mean: 62.564289375018234 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.4244215948019785,
            "unit": "iter/sec",
            "range": "stddev: 0.031136560156515797",
            "extra": "mean: 702.0393425999828 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 1.071308782119069,
            "unit": "iter/sec",
            "range": "stddev: 0.028305154060571165",
            "extra": "mean: 933.4376947997953 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.46385143026312026,
            "unit": "iter/sec",
            "range": "stddev: 0.03509337842807372",
            "extra": "mean: 2.1558627067997804 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.550354877041573,
            "unit": "iter/sec",
            "range": "stddev: 0.05316480250331873",
            "extra": "mean: 1.8170094273998074 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 29231.839964398176,
            "unit": "iter/sec",
            "range": "stddev: 0.000002090908358696859",
            "extra": "mean: 34.209273217762295 usec\nrounds: 15753"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 49434.819422085806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013156206788690217",
            "extra": "mean: 20.228656879714094 usec\nrounds: 32531"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 51090.290589238335,
            "unit": "iter/sec",
            "range": "stddev: 0.00000135159767520478",
            "extra": "mean: 19.573190687833748 usec\nrounds: 32404"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 86600.75310303412,
            "unit": "iter/sec",
            "range": "stddev: 8.074108347599589e-7",
            "extra": "mean: 11.547243692098613 usec\nrounds: 49456"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 28173.41471827894,
            "unit": "iter/sec",
            "range": "stddev: 0.000001657226560042745",
            "extra": "mean: 35.49445496754779 usec\nrounds: 21173"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 45304.06156678966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011411147910932513",
            "extra": "mean: 22.073076130839762 usec\nrounds: 32668"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 46926.95829613479,
            "unit": "iter/sec",
            "range": "stddev: 0.000001338880642066353",
            "extra": "mean: 21.30971271756956 usec\nrounds: 31328"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 73776.41257008724,
            "unit": "iter/sec",
            "range": "stddev: 8.857601292927015e-7",
            "extra": "mean: 13.55446768369233 usec\nrounds: 45640"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 26115.247691638924,
            "unit": "iter/sec",
            "range": "stddev: 0.000001494507809511194",
            "extra": "mean: 38.29180606700356 usec\nrounds: 20636"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 41633.67916670494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011643640284630674",
            "extra": "mean: 24.019015854830204 usec\nrounds: 30022"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 47529.32899144041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011203995025516543",
            "extra": "mean: 21.039640601282017 usec\nrounds: 32123"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 73404.59011170625,
            "unit": "iter/sec",
            "range": "stddev: 8.337824312027583e-7",
            "extra": "mean: 13.623126271507157 usec\nrounds: 45125"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 24801.592803682597,
            "unit": "iter/sec",
            "range": "stddev: 0.000001697765792660056",
            "extra": "mean: 40.31999105523245 usec\nrounds: 19677"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 37880.70413508767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013131716773113433",
            "extra": "mean: 26.39866451357044 usec\nrounds: 28177"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 43704.83971147812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012371933487356778",
            "extra": "mean: 22.880761183466184 usec\nrounds: 30534"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 64358.97696224338,
            "unit": "iter/sec",
            "range": "stddev: 9.415684708390556e-7",
            "extra": "mean: 15.537847977084168 usec\nrounds: 41737"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 25814.573995333656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018113222200064998",
            "extra": "mean: 38.73780757260468 usec\nrounds: 20413"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 41040.85428003312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011721536113769042",
            "extra": "mean: 24.365964538084977 usec\nrounds: 30229"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 38908.63719020644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012533216118769242",
            "extra": "mean: 25.701234281515944 usec\nrounds: 27565"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 65077.58778823001,
            "unit": "iter/sec",
            "range": "stddev: 8.986905576555213e-7",
            "extra": "mean: 15.36627330524474 usec\nrounds: 41408"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 24846.415809029746,
            "unit": "iter/sec",
            "range": "stddev: 0.000002203572354246871",
            "extra": "mean: 40.24725367578278 usec\nrounds: 272"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 38110.1273880933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015021685928936363",
            "extra": "mean: 26.23974435499863 usec\nrounds: 27988"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 36764.06537323596,
            "unit": "iter/sec",
            "range": "stddev: 0.00000135836691748356",
            "extra": "mean: 27.20047388252102 usec\nrounds: 25806"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 57585.50331406485,
            "unit": "iter/sec",
            "range": "stddev: 9.736490241452154e-7",
            "extra": "mean: 17.365481630786704 usec\nrounds: 38490"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 23722.050377677497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017920479349946538",
            "extra": "mean: 42.154872115987175 usec\nrounds: 18986"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 35177.03770255687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014583232150672107",
            "extra": "mean: 28.427635335743876 usec\nrounds: 27159"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 36918.764997965074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013498713988057509",
            "extra": "mean: 27.086496529749006 usec\nrounds: 26947"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 57516.422425143726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012378263427426843",
            "extra": "mean: 17.386338680947627 usec\nrounds: 38083"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 23018.18071517984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027533821475658493",
            "extra": "mean: 43.443919933278146 usec\nrounds: 18997"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 33483.03132711556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013972923502008749",
            "extra": "mean: 29.865874156685756 usec\nrounds: 26096"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 34390.68726090279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017766673447244867",
            "extra": "mean: 29.077639315945124 usec\nrounds: 25582"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 52322.46061567957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016808717003414313",
            "extra": "mean: 19.112250995709633 usec\nrounds: 36391"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 39.54710938239832,
            "unit": "iter/sec",
            "range": "stddev: 0.00017620923642003064",
            "extra": "mean: 25.2862981799899 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 304.4701404828509,
            "unit": "iter/sec",
            "range": "stddev: 0.011874390322222879",
            "extra": "mean: 3.2843943199623027 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 15457.603804472546,
            "unit": "iter/sec",
            "range": "stddev: 0.000004535674180531077",
            "extra": "mean: 64.69308003033802 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 18.50989742411185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003842263428353499",
            "extra": "mean: 54.0251508199799 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 565.2184676710679,
            "unit": "iter/sec",
            "range": "stddev: 0.000025912394727778985",
            "extra": "mean: 1.7692274000182806 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 11.617230015609781,
            "unit": "iter/sec",
            "range": "stddev: 0.0005310323747536218",
            "extra": "mean: 86.07903937998344 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 564.4809782430875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004848706127599245",
            "extra": "mean: 1.771538880038861 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 40.93438173579756,
            "unit": "iter/sec",
            "range": "stddev: 0.000503891306127856",
            "extra": "mean: 24.429341731708366 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 1410.2300201343783,
            "unit": "iter/sec",
            "range": "stddev: 0.000043786566599060825",
            "extra": "mean: 709.1041785542984 usec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1513.4926774488922,
            "unit": "iter/sec",
            "range": "stddev: 0.000015338154230671218",
            "extra": "mean: 660.723381685319 usec\nrounds: 262"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 684.3157538400424,
            "unit": "iter/sec",
            "range": "stddev: 0.000009770972819504727",
            "extra": "mean: 1.461313720148182 msec\nrounds: 536"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 1469.2116817246113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004007447712375771",
            "extra": "mean: 680.6371147458926 usec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 690.6408597757037,
            "unit": "iter/sec",
            "range": "stddev: 0.00004702560851453397",
            "extra": "mean: 1.4479305500760054 msec\nrounds: 629"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 335.37434963392855,
            "unit": "iter/sec",
            "range": "stddev: 0.000035793992602129906",
            "extra": "mean: 2.9817426439783805 msec\nrounds: 323"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 117.27441938603091,
            "unit": "iter/sec",
            "range": "stddev: 0.00011004486410056129",
            "extra": "mean: 8.52700874781832 msec\nrounds: 115"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 97.35875543910208,
            "unit": "iter/sec",
            "range": "stddev: 0.0002525041389658033",
            "extra": "mean: 10.271289885433058 msec\nrounds: 96"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 86.95440029230186,
            "unit": "iter/sec",
            "range": "stddev: 0.0003348838825842832",
            "extra": "mean: 11.500280568188 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 118.20021189702251,
            "unit": "iter/sec",
            "range": "stddev: 0.000036894585127429374",
            "extra": "mean: 8.460221720001755 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 38.2841554532956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004387781089591022",
            "extra": "mean: 26.120466500036567 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 172.36192739592866,
            "unit": "iter/sec",
            "range": "stddev: 0.00010559725819061762",
            "extra": "mean: 5.801745287420248 msec\nrounds: 167"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 163.68154715618047,
            "unit": "iter/sec",
            "range": "stddev: 0.00013992245189219208",
            "extra": "mean: 6.109424167684749 msec\nrounds: 161"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 211.1352711707072,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679105845843761",
            "extra": "mean: 4.736300071774742 msec\nrounds: 209"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 49.94756489665936,
            "unit": "iter/sec",
            "range": "stddev: 0.00019499160983765034",
            "extra": "mean: 20.02099605994772 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 353.3511872812995,
            "unit": "iter/sec",
            "range": "stddev: 0.000029917336709128422",
            "extra": "mean: 2.830045676920026 msec\nrounds: 325"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1844.459554158852,
            "unit": "iter/sec",
            "range": "stddev: 0.000025544955615210835",
            "extra": "mean: 542.1642332818951 usec\nrounds: 1376"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 1900.0854463467233,
            "unit": "iter/sec",
            "range": "stddev: 0.00010265890703153281",
            "extra": "mean: 526.2921211899658 usec\nrounds: 1444"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 351.2489917998605,
            "unit": "iter/sec",
            "range": "stddev: 0.00022020204248735529",
            "extra": "mean: 2.8469832607229058 msec\nrounds: 326"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 1863.8378612443844,
            "unit": "iter/sec",
            "range": "stddev: 0.000029707935368291474",
            "extra": "mean: 536.5273561576616 usec\nrounds: 1022"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 1962.3604360921413,
            "unit": "iter/sec",
            "range": "stddev: 0.000026267230513317535",
            "extra": "mean: 509.5903798343016 usec\nrounds: 1111"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyMemmapStorage-sampler6-10000]",
            "value": 689.0646154679366,
            "unit": "iter/sec",
            "range": "stddev: 0.00003421804133689839",
            "extra": "mean: 1.4512427101207488 msec\nrounds: 514"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictReplayBuffer-LazyTensorStorage-sampler7-10000]",
            "value": 718.6824202311367,
            "unit": "iter/sec",
            "range": "stddev: 0.00017250241293843884",
            "extra": "mean: 1.3914351761636081 msec\nrounds: 562"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 339.4251226867942,
            "unit": "iter/sec",
            "range": "stddev: 0.00003475260680302597",
            "extra": "mean: 2.9461578803722013 msec\nrounds: 326"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1495.8244840398677,
            "unit": "iter/sec",
            "range": "stddev: 0.00003582987453163702",
            "extra": "mean: 668.5276318644262 usec\nrounds: 1274"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_sample[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1553.1200986233644,
            "unit": "iter/sec",
            "range": "stddev: 0.000023961631551137806",
            "extra": "mean: 643.8652109945443 usec\nrounds: 1218"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 356.44606162076053,
            "unit": "iter/sec",
            "range": "stddev: 0.000029753850537184947",
            "extra": "mean: 2.8054735559512123 msec\nrounds: 295"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 1849.9371171065775,
            "unit": "iter/sec",
            "range": "stddev: 0.000024478961100892548",
            "extra": "mean: 540.5589145451956 usec\nrounds: 866"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 1917.5375304400477,
            "unit": "iter/sec",
            "range": "stddev: 0.000023846212040292163",
            "extra": "mean: 521.5021787711838 usec\nrounds: 867"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 351.2964660144381,
            "unit": "iter/sec",
            "range": "stddev: 0.00021342673397150894",
            "extra": "mean: 2.846598519322709 msec\nrounds: 285"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 1881.0198108981772,
            "unit": "iter/sec",
            "range": "stddev: 0.000028573819976834752",
            "extra": "mean: 531.6265114307888 usec\nrounds: 700"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 1911.2876510470865,
            "unit": "iter/sec",
            "range": "stddev: 0.00015951548670948746",
            "extra": "mean: 523.2074823756417 usec\nrounds: 709"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 339.2443517782892,
            "unit": "iter/sec",
            "range": "stddev: 0.00003397825733058782",
            "extra": "mean: 2.947727780162256 msec\nrounds: 282"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 1493.6287181941086,
            "unit": "iter/sec",
            "range": "stddev: 0.000025002672174983316",
            "extra": "mean: 669.5104263990472 usec\nrounds: 788"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_iterate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 1533.7485025334322,
            "unit": "iter/sec",
            "range": "stddev: 0.000025365922489806577",
            "extra": "mean: 651.9973765895835 usec\nrounds: 786"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 103.28764021700867,
            "unit": "iter/sec",
            "range": "stddev: 0.023231699220920894",
            "extra": "mean: 9.681700520013692 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 67.72644814037503,
            "unit": "iter/sec",
            "range": "stddev: 0.0007375728219402815",
            "extra": "mean: 14.765280440033166 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 891.1843103472016,
            "unit": "iter/sec",
            "range": "stddev: 0.000039393628694326275",
            "extra": "mean: 1.122102339986668 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 137.52337006798015,
            "unit": "iter/sec",
            "range": "stddev: 0.01625467646288795",
            "extra": "mean: 7.2714913800155045 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 67.30360700444912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007411533850043947",
            "extra": "mean: 14.85804468004062 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 885.9731786770507,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306146755816523",
            "extra": "mean: 1.1287023400564067 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 101.1818386826955,
            "unit": "iter/sec",
            "range": "stddev: 0.02269640243706727",
            "extra": "mean: 9.883196559967473 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 65.12162375583239,
            "unit": "iter/sec",
            "range": "stddev: 0.0007027857187762894",
            "extra": "mean: 15.355882460016801 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_rb_populate[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 621.5130244727319,
            "unit": "iter/sec",
            "range": "stddev: 0.0003756117555800212",
            "extra": "mean: 1.6089767400262645 msec\nrounds: 50"
          }
        ]
      }
    ]
  }
}