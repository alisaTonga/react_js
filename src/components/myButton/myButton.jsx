import './myButton.css'
export default function MyButton(props){
    return <button type={props.type} onClick={props.onClick} className='myButton'>{props.name}</button>
}