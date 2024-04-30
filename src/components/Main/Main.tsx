import s from './Main.module.scss'

import mr from './../../assets/img/nr_2.png'
const Main = () => {
    return (
        <>
        <section className={s.white} id="about">
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.circle_img}>
                        <img src={mr} className={s.img} alt="" />
                    </div>
                    <div className={s.text}>
                        <h3 className={s.title}>Mista BOOST</h3>
                        <p className={s.p}> Mista Boost, is an American  
                        <a href="https://en.wikipedia.org/wiki/YouTuber" className={s.text_link}>YouTuber</a>, 
                        online personality, entrepreneur, and philanthropist. He is known for his fast-paced and high-production videos, which feature elaborate challenges and large giveaways.
                        <a href="https://en.wikipedia.org/wiki/MrBeast#cite_note-15" className={s.text_link}>[13] </a>With over 250 million subscribers, he is the most-subscribed individual on YouTube and the 
                        <a href="https://en.wikipedia.org/wiki/List_of_most-subscribed_YouTube_channels" className={s.text_link}>second-most-subscribed channel overall</a>.</p></div>
                </div>
            </div>
        </section>
       
        </>
    )
}
export default Main