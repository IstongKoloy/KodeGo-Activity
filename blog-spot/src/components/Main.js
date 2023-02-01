
function Main() {
    const img1 = "https://dailytravelpill.com/wp-content/uploads/2020/07/philippines-travel-guide-fb-cover.jpg";
    const img2 = "https://i.ytimg.com/vi/JzOspjFU8Rc/maxresdefault.jpg"
    const img3 = "https://gttp.imgix.net/224800/x/0/caramoan.jpg?ar=1.91%3A1&w=1200&fit=crop"
    return(
        <div className="mt-5">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 carouImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 carouImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 carouImg" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Main;