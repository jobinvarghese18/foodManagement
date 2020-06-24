import React from 'react'
import {connect} from 'react-redux'
import {startGetPgs} from '../actions/pgActions'
import image from '../logo/waste.jpg'

class PgCards extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.dispatch(startGetPgs())
    }
    render(){
        console.log(this.props.pgs)
        return(
            <div>
                <h2>PGs</h2>
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image}  height ="400"class="d-block  w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image}  height ="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image}  height ="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
            {/* --------cards-------- */}
            <div className='row'>
            {
                
                this.props.pgs.map((pg)=>{
                    return(
                        
                        <div className='col-lg-3 mt-4'>
                        <div class="card" styles="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                      </div>
                    
                    )
                })
                
            }
        </div>

               
</div>
        
        )
    }
}
const mapStateToProps = (state)=>{
    return {
         pgs:state.pgs
    }
}
export default connect(mapStateToProps) (PgCards)