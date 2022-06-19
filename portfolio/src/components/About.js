import profile_image from "../img/profile.png"

const About = () => {
    return (
        <div>
            <section id="main_about">
                <h1 className="text-center">About Me</h1>
                <div className="text-center">
                <img className="rounded-circle pt-5" alt="100x100" src={profile_image}/><br/>
                <div className="container pt-5">
                  Hi I have recently finished my two years schooling as a Front End Developer at Noroff school of Technology. I have a Degree in Nursing and 
                  has a wide experience in clinical settings. However, Informative Technology has cathed my attention as the modern digital world arises. 
                </div>
                <div className="container pt-5">
                Front End Web Developement is an initial step towards a bigger world of IT. This makes me feel alived and motivated to face another chapter of my career.
                </div>
                <div className="container pt-5">
                To begin with, I want to combine my clinical skills with my knowledge on frontend developement. I want to improve the on-going clinical platforms that are used in many clinical settings to gather health data's inorder to analyze pasient care outcomes and train health propffesionals in new pasient care technology.
                </div>
                <div className="container pt-5">
                I'm an innovative thinker. I like to find alternative solutions to problems and have a broad  understanding about what will work best. 
                I'm efficient and highly organized to my timeline. This enables me to be as effective as possible at work.
                I enjoy solving problems, detailing issues, and coming up with solutions in a timely manner.
                My objectives are to succeed in an environment of growth and excellence and earn a job which provides me with job satisfaction, self development, career advancement and help me achieve personal as well as organization goals.
                </div>
                </div>
                
            </section>
        </div>
    )
}

export default About;
