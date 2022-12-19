

function RatingStars(props) {
    const fstars = props.full_stars;
    const hstars = props.half_stars;
    const nstars = props.null_stars;
    let rating_class = "ratings";

    let stars = [];
    for (let i = 0; i < fstars; i++)
        stars.push(<i className="bi bi-star-fill rating-color"></i>);
    for (let i = 0; i < hstars; i++)
        stars.push(<i className="bi bi-star-half rating-color"></i>)
    for (let i = 0; i < nstars; i++)    
        stars.push(<i className="bi bi-star"></i>)

    if(props.optionClass != undefined)
        rating_class += " " + props.optionClass;
        
    return (
        <span className={rating_class}>
            {stars}
        </span>
    );
}

export default RatingStars;