import Middle from "../components/Middle/Middle"
import Testimonials from "../components/Middle/Testimonials"

function About(){
    return(
        <>
        <section>
  <div className="container py-5">
    <div className="row align-items-center" style={{height:"80vh"}}>
      
   
      <div className="col-md-6" style={{height:"100%"}}>
        <img
          src="https://cdn.pixabay.com/photo/2023/08/29/14/50/family-8221565_640.png"
          style={{height:"100%", width:"100%", objectFit:"cover"}}
        />
      </div>

       
      <div className="col-md-6" style={{height:"100%",  overflow:"auto", textAlign:"center",paddingTop:"120px"}}>
        <h1>We Put People First.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi nulla omnis odio officia praesentium inventore impedit repudiandae adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde, consequuntur alias quae nulla.</p>
      </div>

    </div>
  </div>
</section>

{/* numbers */}
        <section className="container">
        <div className="d-flex align-items-center justify-content-between gap-3">
        <p><span className="nums">305</span> Area Population</p>
                <p><span className="nums">1080</span>Total Properties</p>
                <p><span className="nums">209</span> Average House</p>
                <p><span className="nums">67</span>Total Branches</p>
            </div>

        </section>
        <Testimonials/>
        </>
    )
}
export default About