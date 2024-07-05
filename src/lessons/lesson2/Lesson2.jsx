import LoginForm from "../../components/loginForm/LoginForm";
import MyButton from "../../components/myButton/myButton";

export default function Lesson2(){
    const handleClick = () => {console.log("click");}
    const handleSubmit= () => {console.log("submit");}
    const handleEmoji = () => {console.log('🤩');}

    return(
        <div className="lesson_container">
            <h4>lesson 02</h4>
            <p>React Props: methods trading information from component into component</p>
            <span>We want to use our component button with different data...</span>
            <div className="lesson2Buttons">
            <MyButton name={'click'} onClick={handleClick}/>
            <MyButton name={'submit'} onClick={handleSubmit}/>
            <MyButton name={'🤩'} onClick={handleEmoji}/> 
            <LoginForm />     
            </div>

        </div>
    )
}