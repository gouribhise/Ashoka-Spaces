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
        <img alt="" />
        <h4>Text</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
      <div className="text-center">
        <img alt="" />
        <h4>two</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
    
      <div className="text-center">
        <img alt="" />
        <h4>three</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
    
      <div className="text-center">
        <img alt="" />
        <h4>four</h4>
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
            <h1 className="text-center">Exclusive Offers For You</h1>
            <div className="d-flex align-items-center justify-content-between gap-3">
     
      <div className="text-center">
        <img alt="" />
        <h4>two</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
    
      <div className="text-center">
        <img alt="" />
        <h4>three</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
    
      <div className="text-center">
        <img alt="" />
        <h4>four</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis sequi omnis sed porro nisi    
        </p>
      </div>
       
     
    
     
    </div>
    
            </div>
    </section>
        
        {/* Work Flow */}
        <section>
        <div class="container py-5">
  <div class="row align-items-center">

 
    <div class="col-md-6">
      <div class="row g-4">

       
        <div class="col-6 d-flex">
          <i class="bi bi-gear fs-1 me-3"></i>
          <div>
            <h5 class="mb-1">Evaluate Property</h5>
            <p class="small text-muted">Short description here.</p>
          </div>
        </div>
 
        <div class="col-6 d-flex">
          <i class="bi bi-star fs-1 me-3"></i>
          <div>
            <h5 class="mb-1">Meet Your Agent</h5>
            <p class="small text-muted">Short description here.</p>
          </div>
        </div>

    
        <div class="col-6 d-flex">
          <i class="bi bi-lightning fs-1 me-3"></i>
          <div>
            <h5 class="mb-1">Close The Deal</h5>
            <p class="small text-muted">Short description here.</p>
          </div>
        </div>

      
        <div class="col-6 d-flex">
          <i class="bi bi-heart fs-1 me-3"></i>
          <div>
            <h5 class="mb-1">Have Your Property</h5>
            <p class="small text-muted">Short description here.</p>
          </div>
        </div>

      </div>
    </div>

  
    <div class="col-md-6">
      <img
        src="https://via.placeholder.com/600x500"
        alt="Service Image"
        class="img-fluid rounded"
      />
    </div>

  </div>
</div>

        </section>

        {/* People */}
        <section>
        <div class="container py-5">
        <div class="row align-items-center">
        <div class="col-md-6">
            left
            </div>
            <div class="col-md-6">
                right
            </div>
            </div>
            </div>
        </section>
{/* numbers */}
        <section className="container">
        <div className="d-flex align-items-center justify-content-between gap-3">
        <p>305 Area</p>
                <p>1080 Properties</p>
                <p>209 Average House</p>
                <p>67 Branches</p>
            </div>

        </section>
        </>
    //   testimonials
     )

}

export default Middle