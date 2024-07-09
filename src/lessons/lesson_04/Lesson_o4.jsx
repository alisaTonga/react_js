import './lesson_04.css'

import { forceUsers } from './data'
export default function Lesson_04(){
    return(
        <div className="lesson_container">
            <h5>Lesson 04 </h5>
            {forceUsers.map((hero,index) => (
                <div key={index}>
                    <h4>{hero.name}</h4>
                    <h5>Age: {hero.age}</h5>
                    <img width={200} src={hero.image} alt="" />
                    <h5>Lightsaber colors: {' '}
                        {hero.lightsaberColors.map(color => (
                            <span>{color} </span>
                        ))}</h5>
                </div>
            ))}
        </div>
    )
}