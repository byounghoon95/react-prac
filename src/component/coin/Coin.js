const { useState, useEffect } = require("react")

const Coin = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    /* 
      [] 를 사용하면 로딩 시 한번만 실행
      특정 변수가 들어가면 해당 변수가 변경될 때만 실행
    */
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
          .then(response => response.json())
          .then(json => {
            setCoins(json.slice(0,10)); // 10개 짜르기
            setLoading(false);
        });
    },[]);

    /*
      map(() => {}) : 내부에 return 이 존재해야함
      map(() => ()) : 암시적으로 반환을 의미하므로 함수의 본문이 한줄이면 return 생략 가능
    */
    return (
        <div>
            <h1>The Coins!</h1>
            <ul>
              {coins.map((coin) => (
                <li>
                  {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                </li>
              ))}
            </ul>
        </div>
    )
}

export default Coin;
