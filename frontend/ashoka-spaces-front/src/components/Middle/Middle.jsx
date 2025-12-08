import Testimonials from "./Testimonials"

function Middle(){
    return(
        <>
    <section>
    <div className="container">
            
            <h3 className="text-center">Our Services</h3>
            <h1 className="text-center">The Smartest Way To Buy A Home</h1>
            <div className="d-flex align-items-center justify-content-between gap-3">
      <div className="text-center">
      <i class="bi bi-piggy-bank"></i>

         <h4>No Downpayment  </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
      <div className="text-center">
      <i class="bi bi-wallet2"></i>
      <h4>All Cash Offer</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
    
      <div className="text-center">
      <i class="bi bi-journal-text"></i>
      <h4>Experts in Your Corner</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
    
      <div className="text-center">
      <i class="bi bi-lock-fill"></i>
      <h4>Lokced in Pricing</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
       
     
    
     
    </div>
    
            </div>
    </section>

    {/* offers */}
    <section>
  <div className="container">

    <h3 className="text-center">What We Offer</h3>
    <h1 className="text-center mb-4">Exclusive Offers For You</h1>

    <div className="row justify-content-center">

      <div className="col-md-4 text-center mb-4">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_640.jpg"
          alt=""
          className="img-fluid mb-3"
        />
        <h4>two</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi.
        </p>
      </div>

      <div className="col-md-4 text-center mb-4">
        <img
          src="https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_640.jpg"
          alt=""
          className="img-fluid mb-3"
        />
        <h4>three</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi.
        </p>
      </div>

      <div className="col-md-4 text-center mb-4">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_640.jpg"
          alt=""
          className="img-fluid mb-3"
        />
        <h4>four</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi.
        </p>
      </div>

    </div>
  </div>
</section>

        
        {/* Work Flow */}
        <section className="evaluate">
  <div className="container py-5">
    <div className="row align-items-center">

      <div className="col-md-6 left">
        <div className="row g-4">

          <div className="col-6 d-flex">
            <i className="bi bi-gear fs-1 me-3" style={{ marginLeft: "-100px" }}></i>
            <div>
              <h5 className="mb-1">Evaluate Property</h5>
              <p className="small">Short description here.</p>
            </div>
          </div>

          <div className="col-6 d-flex">
            <i className="bi bi-star fs-1 me-3"></i>
            <div>
              <h5 className="mb-1">Meet Your Agent</h5>
              <p className="small">Short description here.</p>
            </div>
          </div>

          <div className="col-6 d-flex">
            <i className="bi bi-lightning fs-1 me-3" style={{ marginLeft: "-100px" }}></i>
            <div>
              <h5 className="mb-1">Close The Deal</h5>
              <p className="small">Short description here.</p>
            </div>
          </div>

          <div className="col-6 d-flex right">
            <i className="bi bi-heart fs-1 me-3"></i>
            <div>
              <h5 className="mb-1">Have Your Property</h5>
              <p className="small">Short description here.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="col-md-6 evaluate-right">
  <img
    src="https://cdn.pixabay.com/photo/2020/09/14/09/47/living-room-5570508_640.jpg"
    alt="Service Image"
    className="img-fluid rounded evaluate-img"
  />
</div>


    </div>
  </div>
</section>


        {/* People */}
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
        </>
    //   testimonials
     )

}

export default Middle