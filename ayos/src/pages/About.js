export default function About() {
    return (
        <div>
                     <h1 className="about-header">About</h1>
        <div className="about-container" style={{ width: '50%', float: 'left' }}>
              <div className="about-content" style={{ padding: '20px' }}>

            {/* History */}
            <p>In 2018, I earned a BA in Music Composition from Holy Names University where I was on a 
                golf scholarship. With my degree, I becaue a music teacher but realized that it wasn't the career for me.
               Awhile still continuing to teach music on the side, I went back to school and earned a BS in Computer Science 
               from the University of Arizona in 2023. Going back to school felt like a dream but
               with the support of my family and my now husband, I was able to make it a reality. I can now say that I have found 
               another love besides music and that is software development </p>
               

     {/* Now and the Future */}
<p> My interest lies specifically in UI/UX design and front-end developement. I am currently employed as a Front End Developer 
    at the University of Arizona and I feel so blessed to have found a job I love. I want to continue to improve my skills and 
    learn all that I can about User Experience and have goals of getting my Masters in User Experience from Arizona State University.</p>
     
        </div>
        </div>
        <div className="about-container" style={{ width: '50%', float: 'right'}}>
        <img src="../aboutme_img.jpg" alt="Sitting in Snow" style={{ width: '400px'}}/>
        </div>
        </div>
    );
}