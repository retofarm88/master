$data_version = '2.0';
%repos = (
  'gitolite-admin' => {
    'R' => {
      'id_rsa' => 1
    },
    'W' => {
      'id_rsa' => 1
    },
    'id_rsa' => [
      [
        0,
        'refs/.*',
        'RW+'
      ]
    ]
  },
  'retofarm88_retofarm88' => {
    'R' => {
      'pk1' => 1
    },
    'W' => {
      'pk1' => 1
    },
    'pk1' => [
      [
        1,
        'refs/.*',
        'RW+'
      ]
    ]
  }
);
