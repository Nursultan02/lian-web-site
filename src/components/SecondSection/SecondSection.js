import './style.css';
import NavBar from "./NavBar/NavBar";
import ImagesContent from "./NavBar/ImagesContent/ImagesContent";

export default function SecondSection() {
    return (
        <div className='secondSection'>
            <NavBar />
            <div className="secondSection-container">
                <ImagesContent />
            </div>
        </div>
    );
}

