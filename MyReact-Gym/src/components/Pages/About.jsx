import Button from '../Button/Button'
import './about.css'
import gymvidei from '../../assets/images/gym.mp4.mp4'
function About() {
  return (
    <>
    <div className="containerr">
      <div className='gym1'>
        <video className='gymvidei' src={gymvidei} autoPlay loop></video>
          <div className="text-over"></div>
          <div className='video-text'>
            <h1>Who us </h1>
            <p>Former goalkeeper – former recruitment manager – currently looking for his lucky charm.</p>
            <Button text={'Join Now'}/>
          </div>
      </div>
    </div>
    </>


)
}

export default About