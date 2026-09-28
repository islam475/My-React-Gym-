import "./hero.css"
import Button from '../Button/Button'
import gymimage from'../../assets/images/gymim.jpg.jpg'
function Hero() {
  return (
    <>
    <div className="containerr">
        <section className="lt">
            <h1>Boshkash</h1>
            <p>the cheapest  in Egypt -even cheaper than Ezz eldekhela</p>
            <Button className="hero-btn" text="Get Start" />

        </section>

        <section className="rt"> 
            <div className="imgg">
                <img src={gymimage} alt="" />
            </div>
        </section>
    </div>
    </>
  )
}

export default Hero