
import RatingStarGenerator from '../RatingStars/RatingStars'

function RightTab(props) {
    const items = props.items;
    let itemList = items.map((item) => {
        return  <div className="col-12 col-lg-6 col-xl-12">
                    <div className="row pb-2">
                        <a href={item.link} className="col-5 d-flex erase-underline">
                            <img src={item.img} className="img-fluid"/>
                        </a>
                        <div className="col-7">
                            <a href={item.link} className="erase-underline"><p className="me-title text-lightblue">{item.name}</p></a>
                            <RatingStarGenerator full_stars={item.fstar} half_stars={item.hstar} null_stars={item.nstar}/>
                            <p className="review-count">{item.rvcount}</p>
                            <p className="sm-title">1 offer from <span className="rtab-money">{item.price}.000VNĐ</span></p>
                            <div className="text-center">
                                <a href={item.link}><button className="btn btn-outline-dark rtab-detail-button">See more detail</button></a>
                            </div>
                        </div>
                    </div>
                </div>
    });

    return (
            <div className="bg-white rtab-recommend">
                <p className="sm-title">Recommend for you</p>
                <div className="row">
                    {itemList}
                </div>
            </div>
    );
}

export default RightTab;