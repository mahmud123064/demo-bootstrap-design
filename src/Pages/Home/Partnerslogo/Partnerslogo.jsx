import "./Partnerslogo.css"

const Partnerslogo = () => {
    return (
        <div className="container  " >
            <h2 className="text-center font-weight-bold">Our Trasted Partners</h2>

            <div className="logos mx-auto">

                <div className="logos-slider">
                    <img  className='img-details' src="../../../../public/img1.jpg" alt="" />
                    <img  className='img-details' src="../../../../public/img2.png" alt="" />
                    <img  className='img-details' src="../../../../public/img3.jpg" alt="" />
                    <img  className='img-details' src="../../../../public/img1.jpg" alt="" />
                    <img  className='img-details' src="../../../../public/img2.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Partnerslogo;