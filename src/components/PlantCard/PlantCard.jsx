import React, { useState } from 'react'
import './PlantCard.css'
import Button from '../Button/Button';

function PlantCard({ plant }) {
    const [isActive, setIsActive] = useState(false)

    console.log(isActive);

    return (
        <div
            className="plant-card"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            <img src={plant.img} alt="image plant" />
            <div></div>
            <div className="plant-card-info" >
                <h3>{plant.name}</h3>
                {isActive &&
                    <div>
                        <div className="plant-card-info-1">
                            <div>Kingdom</div>
                            <div>{plant.kingdom}</div>
                        </div>
                        <div className="plant-card-info-2">
                            <div>Family</div>
                            <div>{plant.family}</div>
                        </div>
                        <Button text={'See more'}/>
                    </div>
                }
            </div>

        </div>
    )
}

export default PlantCard
