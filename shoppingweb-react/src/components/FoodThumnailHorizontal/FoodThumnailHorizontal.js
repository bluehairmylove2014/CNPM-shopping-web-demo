import './FoodThumnailHorizontal.css'

function FoodThumnailHorizontal(props) {
    const thumnails = props.thumnails;
    const thumnailTags = Object.keys(thumnails).map((k) => {
        return  <div className='col food-thumnail'>
                    <a href={thumnails[k].link} className='thumnail-ref-container'>
                        <img src={thumnails[k].img} className="w-100" keys={k} alt='thumnail'/>
                        <p className='thumnail-text-font'>{thumnails[k].name}</p>
                    </a>
                </div>
    });
    return (
        <div className='row d-flex m-0'>
            {thumnailTags}
        </div>
    );
}

export default FoodThumnailHorizontal;