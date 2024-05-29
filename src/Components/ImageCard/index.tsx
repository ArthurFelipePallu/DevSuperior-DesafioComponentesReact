import "./styles.css"
import CarImg from "../../assets/carimg.png"

export default function ImageCard()
{
    return (
        <>
            <div className="dpr-card-container">
                <img src={CarImg} alt="Red Car Img" className="dpr-card-image"/>
                <p className="dpr-card-text"> Lorem ipsum dolor</p>
            </div>
        </>
    );
}