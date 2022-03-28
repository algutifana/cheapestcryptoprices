import Head from '../../../erc20deals/node_modules/next/head'
import Image from '../../../erc20deals/node_modules/next/image'
import styles from '../styles/Home.module.css'


export default function Home() {


  const getPrice = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const res = await fetch(`https://api.0x.org/swap/v1/quote?buyToken=${name}&sellToken=WETH&sellAmount=100000000000000000`);
    const result = await res.json();
    
    if(result.price !== undefined){
      document.getElementById("tokenamt").innerHTML = `<h2>Amount of Tokens for one ETH</h2> <p>${result.price} ${name}</p>`
    }
    else{
      document.getElementById("tokenamt").innerHTML = `<h2>Amount of Tokens for one ETH</h2> <p style = "color: red;">Invalid Ticker!</p>`
    }
    
    
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>ERC20PriceCalculator</title>
        <meta name="description" content="cryptocurrency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ERC20PriceCalculator! 
        </h1>

        <p className={styles.description}>
          We provide you with the amount of ERC20 tokens you can buy for one Ethereum.
        </p>

        <div className = {styles.grid}>
          <div className={styles.card}>
            <h2>Enter Token Ticker (Example: DAI)</h2>
            <form onSubmit={getPrice}>
            <input
            name = "name"
            type = "text"
            required
            />
            <button type ="submit" className={styles.button}>Calculate!</button>
            </form>
        </div>

        <div id = "tokenamt" className = {styles.card}>
        <h2>Amount of Tokens for one ETH</h2>
        </div>
        </div>
        
        
      </main>

      <footer className={styles.footer}>
       <a href="https://github.com/algutifana/cheapestcryptoprices" target="_blank" rel="noopener noreferrer">Github</a>
      </footer>
    </div>
  )
}
