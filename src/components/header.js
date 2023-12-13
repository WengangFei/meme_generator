export default function Header({ logo }){
    return (
        <header className="header">
            <img src={logo} alt='logo' className="logo"/>
            <h2>Meme Generator</h2>
            <p>React Course - Project 3</p>
        </header>
    );
}