import "./Header.css"

const Header = () =>{
    return (
        <div className="Header">
            <ul>
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/about">
                    <li>About</li>
                </a>
                <a href="/contact">
                 <li>Contact</li>
                </a>
            </ul>
        </div>
    )
}
export default Header