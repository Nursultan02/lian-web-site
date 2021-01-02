import './style.css';

export default function NavBar() {
    return (
        <div className='navBar'>
            <ul>
                <a href="#"><li className='active'>home</li></a>
                <li><a href="#">about</a></li>
                <li><a href="#">portfolio</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
    );
}