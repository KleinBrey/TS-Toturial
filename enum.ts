export default function () {
  enum CornerStyle {
    SquareCapAndJoin,
    SquareCapRoundJoin,
    RoundCapSquareJoin,
    RoundCapAndJoin,
  }
  const keys = Object.keys(CornerStyle);
  const values = Object.values(CornerStyle);
  console.log(keys, values, CornerStyle[1], CornerStyle['RoundCapAndJoin']);

  enum CornerStyle2 {
    SquareCapAndJoin = 1,
    SquareCapRoundJoin,
    RoundCapSquareJoin,
    RoundCapAndJoin,
  }
  const keys2 = Object.keys(CornerStyle2);
  const values2 = Object.values(CornerStyle2);
  console.log(keys2, values2, CornerStyle2[1], CornerStyle2['RoundCapAndJoin']);

  enum CornerStyle3 {
    SquareCapAndJoin = 'SquareCapAndJoin',
    SquareCapRoundJoin = 'SquareCapRoundJoin',
    RoundCapSquareJoin = 'RoundCapSquareJoin',
    RoundCapAndJoin = 'RoundCapAndJoin',
  }
  const keys3 = Object.keys(CornerStyle3);
  const values3 = Object.values(CornerStyle3);
  console.log(keys3, values3, CornerStyle3[1], CornerStyle3['RoundCapAndJoin']);
}
