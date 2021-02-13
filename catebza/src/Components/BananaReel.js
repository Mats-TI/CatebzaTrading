import Carousel from "./carouselCards";
import DB from "./imgDatabase";

function bananaReel(){
    return(<div className="bananaReel">
        <Carousel name={DB.img1}/>
        <Carousel name={DB.img2}/>
        <Carousel name={DB.img3}/>
    </div>)
}
export default bananaReel;