import s from './HowToBuy.module.scss'

import dollar from './../../assets/img/dollar.png'
const HowToBuy = () => {
    return (
        <>
            <section className={s.blue} id="howtobuy">
                <img src={dollar} className={s.dollar} alt="" />
                <div className={s.container}>
                    <h3 className={s.h3}>HOW TO BUY</h3>
                    <div className={s.items}>

                        <div className={s.col}>
                            <h4 className={s.h4}>GO TO DEDUST OR STON.FI</h4>
                            <p className={s.p}>
                                Go to DeDust or STON.fi in Google Chrome, or on the browser inside your
                                <a href="https://tonkeeper.com" className={s.text_link}>TonKeeper app</a>
                                . Connect your wallet. Type the name (don’t buy DUREVOLD) or paste $MRBOOST token address, and confirm. When Tonkeeper prompts you for a wallet signature, sign.
                            </p>
                        </div>

                        <div className={s.col}>
                            <h4 className={s.h4}>BUY $MRBOOST</h4>
                            <p className={s.p}>
                                Swap TON for $MRBOOST. We have zero taxes so you don’t need to worry about buying with a specific slippage, although you may increase it if your transaction fails.
                            </p>
                        </div>

                        <div className={s.col}>
                            <h4 className={s.h4}>WHERE TO BUY TON?</h4>
                            <p className={s.p}>Buy TON with a card in wallets Tonkee
                                <a href="https://tonkeeper.com" className={s.text_link}>Tonkeeper </a> app per or TonSpace. Alternatively, use CEXes such as OKX, Bybit, HTX, KuCoin, etc. Or you can use Uniswap (ETH) or PancakeSwap (BSC). Full list of exchanges is available
                                on <a href="https://coinmarketcap.com/currencies/toncoin/" className={s.text_link}>CoinMarketCap</a>.</p>
                        </div>
                    </div>
                    <div className={s.center}>
                        <div className={s.col}>
                            <h4 className={s.h4}>HOW TO BRIDGE TON?</h4>
                            <p className={s.p}>
                                Bridge from any chain to TON using <a href="https://bridge.ton.org" className={s.text_link}>
                                    bridge.ton.org, </a>
                                <a href="https://app.rocketx.exchange/swap" className={s.text_link}>rocketx </a> or
                                <a href="https://changenow.io" className={s.text_link}> changenow </a>or a CEX.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default HowToBuy