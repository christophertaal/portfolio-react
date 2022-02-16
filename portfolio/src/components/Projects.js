import space from '../img/space.png'
import strapi from '../img/strapi.png'
import texas from '../img/texas.png'
import hotel from '../img/hotel.png'

const Projects = () => {
    return (
        <div>
            <section id="main_projects">
                <h1 className="text-center">Projects</h1>
                    
                <div className="container mx-auto mt-4 pb-5 pt-5">
                    <div className="row">
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={space}className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-title pt-3">Project exam 2020</h5>
                            <p className="card-text pb-5">Project exam 2020</p>
                            <a href="#" className="btn pb-3"><i className="fab fa-github"></i> Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={strapi} className="card-img-top" alt="..."/>
                        <div className="card-body  text-center">
                            <h5 className="card-title pt-4">Project exam 2021</h5>
                            <p className="card-text pb-5">Project exam 2021</p>
                            <a href="#" className="btn pb-3"><i className="fab fa-github"></i> Github</a>
                        </div>
                        </div>
                    </div>    
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={texas} className="card-img-top" alt="..."/>
                        <div className="card-body  text-center">
                            <h5 className="card-title pt-3">First Official Website</h5>
                            <p className="card-text pb-5">First Official Website</p>
                            <a href="#" className="btn pb-5"><i className="fab fa-github"></i> Github</a>
                        </div>
                        </div>
                    </div>    
                    <div className="col-md-3 d-flex justify-content-center pb-5">
                        <div className="card">
                        <img src={hotel} className="card-img-top" alt="..."/>
                        <div className="card-body  text-center">
                            <h5 className="card-title pt-3">Hotel Booking Website</h5>
                            <p className="card-text pb-5">Hotel Booking Website</p>
                            <a href="#" className="btn pb-3"><i className="fab fa-github"></i> Github</a>
                        </div>
                        </div>
                    </div>         
                    </div>
                </div>
                    
                </section>

        </div>
    )
}

export default Projects;