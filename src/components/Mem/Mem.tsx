import s from './Mem.module.scss'
import mem from './../../assets/img/mem.png'
import mem2 from './../../assets/img/mem2.png'
import mem21 from './../../assets/img/mem21.png'
import mem4 from './../../assets/img/mem4.png'
const Mem = () => {
    return (
        <section className={s.white} id='mems'>
                <div className={s.container}>
                    <img src={mem} className={s.mems_img}  alt="" />
                    <div className={s.mems}>
                        <img src={mem21} className={s.mems_img}  alt="" />
                        <img src={mem2} className={s.mems_img} alt="" />
                    </div>
                    <img src={mem4} className={s.mems_img}  alt="" />

               </div>
        </section>
    )
}
export default Mem