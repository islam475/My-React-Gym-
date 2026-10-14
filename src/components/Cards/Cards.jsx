import './cards.css'
import Button from '../Button/Button'

function Cards() {
    const card = [
        {plan : "Basic" , 
         price :300 , 
         feature : [
            "✔ Tailored workout tprograms",
            "✔ Guidance from certified coaches",
            "✔ Progress tracking to stay motivated",
            "✔ Nutritional advice for better results"
         ]
        } , 
         {plan : "Pro" , 
         price :500 , 
         type : "most popular" ,
         feature : [
             "✔ follow in whatsapp" ,
            "✔ Tailored workout tprograms",
            "✔ Guidance from certified coaches",
            "✔ Progress tracking to stay motivated",
            "✔ Nutritional advice for better results"
         ]
        } ,
         {plan : "Premier" , 
         price :800 , 
         feature : [
            "✔ come with you to gym" , 
            "✔ follow in whatsapp",
            "✔ Tailored workout tprograms",
            "✔ Guidance from certified coaches",
            "✔ Progress tracking to stay motivated",
            "✔ Nutritional advice for better results"
         ]
        }
    ]


  return (
    <>
    <section className='plans'>
        {
            card.map((plans)=>(
            <div className='plan-cards'>
                <h3>{plans.plan}</h3>
                <h4>{plans.price} <small>EGP/month</small></h4>
                <ul>{plans.feature.map((e)=>(<li>{e}</li>))}</ul>
                 <Button text="Select"/>
            </div>
            
            ))

        }

    </section>
    </>
  )
}

export default Cards