window.BENCHMARK_DATA = {
  "lastUpdate": 1713976730998,
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
      }
    ]
  }
}