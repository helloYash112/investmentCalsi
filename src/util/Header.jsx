import logo from '../assets/logo.png';
export default function Header(){
    return(
        <div id='header'>
             <h1>Calculete your interest !</h1>
             <img src={logo} alt='app.logo'></img>
        </div>
    )
}