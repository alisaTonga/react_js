import './ProfileCard.css'

export default function ProfileCard(){
    return(
    <div className='profile'>
        <h4>Name: John </h4>
        <h4>LastName: Wick</h4>
        <img className="john" src="https://www.themoviedb.org/t/p/original/nCzzQKGijVzfGFg42id7uDLOjY5.jpg" alt="JOHNn_WICK" />
        <h4>Occupation: Hitman </h4>
        <h5>Hobbies: </h5>
        <ol>
            <li>Dog care</li>
            <li>Weapons and combat training</li>
            <li>book restoration</li>
            <li>Classic literature</li>
        </ol>
    </div>)
}