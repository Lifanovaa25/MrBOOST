import s from './Header.module.scss'
import youtube from './../../assets/img/youtube.png'
import tg from './../../assets/img/td.svg'
import x from './../../assets/img/x.svg'
import x3 from './../../assets/img/x3.svg'
import mr from './../../assets/img/mr.png'
const Header = () => {
    return (
        <section className={s.blue}>
            <header className={s.header}>
                <div className={s.container}>
                    <a href="#" className={s.logo}>mistaboost</a>
                    <nav className={s.nav}>
                        <div className={s.link_group}>
                            <a href="#about" className={s.nav_link}>about</a>
                            <a href="#howtobuy" className={s.nav_link}>how to buy</a>
                            <a href="#" className={s.nav_link}>wall of memes</a></div>
                        <a href="#" className={s.buy_btn}>buy $MrBoost</a>
                    </nav>
                    <nav className={s.nav_m}>

                        <a href="#about" className={s.nav_link}>about</a>
                        <a href="#howtobuy" className={s.nav_link}>how to buy</a>
                        <a href="#mems" className={s.nav_link}>wall of memes</a>
                        <a href="#" className={s.buy_btn}>buy $MrBoost</a>
                    </nav>
                </div>

            </header>
            <main className={s.main}>
                <a href='#' className={s.youtube_btn}>
                    <img src={youtube} className={s.img} alt="youtube" />
                </a>

                <div className={s.title_center}>
                    <h1 className={s.h1}>$MrBOOST</h1>
                    <h2 className={s.h2}>subscribe for mems</h2>
                    <div className={s.desc}>
                        <div className={s.btnsitems}>
                            <a href="#" className={s.soc_btn}><img src={tg} alt="" /> </a>
                            <a href="#" className={s.soc_btn}><img src={x} alt="" /> </a>
                            <a href="#" className={s.soc_btn}><img src={x3} alt="" /> </a>
                        </div>
                        <div className={s.line}></div>
                    </div>
                </div>
                <div className={[s.title_img,s.mob].join(' ')}>
                    <img src={mr} className={s.mr} alt="$MrBOOST" />
                </div>

            </main>
            <div className={s.mob}>
                <div className={s.btnsitems}>
                    <a href="#" className={s.soc_btn}><img src={tg} alt="" /> </a>
                    <a href="#" className={s.soc_btn}><img src={x} alt="" /> </a>
                    <a href="#" className={s.soc_btn}><img src={x3} alt="" /> </a>
                </div>
                <div className={s.line}></div>
            </div>
            <div className={[s.title_img,s.desc].join(' ')}>
                    <img src={mr} className={s.mr} alt="$MrBOOST" />
                </div>
        </section>
    )
}
export default Header