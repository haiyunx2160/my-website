import React from 'react';



const Card = (props) => {

    const renderLaber=(props)=>{
        return props.skills.map(skill=>{
            return <label className='badge badge-light ml-1'>{skill}</label>
        })
    }

    return (
        <div className='card mt-3'>
            <div className='card-body' style={{backgroundColor: '#f9d342'}}>
                <h5>{props.title}</h5>
                <img src={require('../images/' + props.imageName + '.png')} alt="" className='img-fluid'/>
                <div className='card-footer'>
                    {/*<label className='badge badge-secondary'>{props.skills}</label>*/}
                    {renderLaber(props)}
                </div>
                <div className='card-cover'>
                    <a href={props.url} className='btn btn-dark mt-2 float-right'>More...</a>
                </div>
            </div>
        </div>
    )
};

export default Card;
