import './Hero.css';

const Hero = () => {
    return <main className='hero'>
        <div className='Hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH OUR
                SHOES. YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH
                OUR
                SHOES.
            </p>
            <div className='hero-btn'>
                <button>Shop Now </button>
                <button className='second-btn'>Category</button>
            </div>

            <div className='shopping'>
                <p>Also Available</p>
                <div className='brand-icons'>
                    <img src="/Images/OIP.jpeg" alt="amazon-logo"/>
                    <img src="/Images/Flipkart-Emblem.png" alt="flipkart-logo"/>
                </div>
            </div>
        </div>
        <div className='Hero-image'></div>
        <img src="Images/shoe_image.png" alt="Hero-image"/>
    </main>
};

export default Hero;