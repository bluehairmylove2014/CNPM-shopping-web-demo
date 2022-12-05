

import RatingStarGenerator from '../RatingStars/RatingStars'


function FoodList(props) {
    const foods = props.foods;
    const foodlist = foods.map((food) => {
        return <div class="col-6 col-lg-4 pb-3">
                    <div class="card card-hover">
                        <a href={food.link}><img src={food.img} class="card-img-top p-3"/></a>
                        <div class="card-body">
                            <a href={food.link} class="erase-underline"><p class="me-title text-lightblue">{food.name}</p></a>
                            <RatingStarGenerator full_stars={food.fstar} half_stars={food.hstar} null_stars={food.nstar}/>
                            <p class="review-count">{food.rvcount}</p>
                            <p class="sm-title">1 offer from <span class="rtab-money">{food.price}.000 VNĐ</span></p>
                            <div class="text-center">
                                <a href="/item"><button class="btn btn-outline-dark rtab-detail-button" onclick="changepage()">See more detail</button></a>
                            </div>
                        </div>
                    </div>
                </div>
    });

    return (
        <>
            {foodlist}
        </>
    );
}

export default FoodList;