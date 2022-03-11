enum CoinResult {
  heads,
  tails,
}
function flipCoin(): CoinResult {
  return Math.random() > 0.5 ? CoinResult.heads : CoinResult.tails;
}

function main() {
  const f = flipCoin();
  if (f === CoinResult.heads) {
    console.log("heads");
  } else if (f === CoinResult.tails) {
    console.log("tails");
  } else {
    f; // ?
  }
}
