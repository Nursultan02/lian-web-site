import './style.css';

export default function ImagesContent() {
    return (
        <div className='imagesContent'>
            <div className="imageBox">
                <img src="./img/Layer-1.png" alt="L1"/>
                <img src="./img/Layer-2.png" alt="L2"/>
                <img src="./img/Layer-3.png" alt="L3"/>
            </div>
            <div className="imageBox">
                <img src="./img/Layer-4.png" alt="L4"/>
                <img src="./img/Layer-5.png" alt="L5"/>
                <img src="./img/Layer-6.png" alt="L6"/>
                <img className='not-imp' src="./img/Layer-7.png" alt="L7"/>
                <button>
                    load more
                </button>
            </div>
            <div className="imageBox">
                <img src="./img/Layer-8.png" alt="L8"/>
                <img src="./img/Layer-9.png" alt="L9"/>
                <img src="./img/Layer-10.png" alt="L10"/>
            </div>
        </div>
    );
}