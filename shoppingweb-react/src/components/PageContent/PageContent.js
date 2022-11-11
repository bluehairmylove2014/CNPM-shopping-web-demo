import ThumnailHorizontalMenu from "../ThumnailHorizontalMenu/ThumnailHorizontalMenu";

import comgaBentoDelichi from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comgachienmamtoi from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comgahoian from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comgathachlam from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comgaxidau from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comgaxoimo from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comheoquay from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comsuonnuongchatrung from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comtamgiatruyen from "../../assets/images/foods/comgaBentoDelichi.jpg"
import comtamsuonbicha from "../../assets/images/foods/comgaBentoDelichi.jpg"

function PageContent() {
    let food_img = {
        "COM000001": comgaBentoDelichi,
        "COM000002": comgachienmamtoi,
        "COM000003": comgahoian,
        "COM000004": comgathachlam,
        "COM000005": comgaxidau,
        "COM000006": comgaxoimo,
        "COM000007": comheoquay,
        "COM000008": comsuonnuongchatrung,
        "COM000009": comtamgiatruyen,
        "COM000010": comtamsuonbicha
    }
    return(
        <div>
            <ThumnailHorizontalMenu imgs={food_img}/>
        </div>
    );
}

export default PageContent;