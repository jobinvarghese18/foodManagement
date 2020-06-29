import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux'
import {startGetPgs} from '../actions/pgActions'
import image from '../logo/waste.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

function PgCards(props) {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    props.dispatch(startGetPgs())
    setCount(100)
  },[]);
    // componentDidMount(){
    //     this.props.dispatch(startGetPgs())
    // }
        const classes = useStyles();
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
                
                props.pgs.map((pg)=>{
                    return(
                        
                        <div className='col-md-3 mt-4'>
                           <Card className={classes.root}>
                           <CardActionArea>
                          {/* <CardMedia
                            className={classes.media}
                            image={`"/${pg.avatar}"`}
          
                            title="Contemplative Reptile"
                          /> */}
                          <img src={`/${pg.avatar}`} className="card-img-top" alt="..."/>
                          <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                          {pg.pgName}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                                  contact:<br/>
                                  Address :{pg.address}<br/>
                                  Phone :{pg.phone}
                          </Typography>
                          </CardContent>
                          </CardActionArea>
                          <CardActions>
                          <Button size="small" color="primary">
                             Share
                          </Button>
                          <Button size="small" color="primary">
                             Learn More
                          </Button>
                          </CardActions>
                          </Card>
                        {/* <div class="card" styles="width: 18rem;">
                        <img src={`/${pg.avatar}`} className="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Name :{pg.pgName}</h5>
                          <p class="card-text">address :{pg.address}<br/>
                          contact : <br/>
                          {pg.email}<br/>
                          {pg.phone}<br/>
                          </p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div> */}
                      </div>
                    
                    )
                })
                
            }
        </div>

               
</div>
        
        )
    
}
const mapStateToProps = (state)=>{
    return {
         pgs:state.pgs
    }
}
export default connect(mapStateToProps) (PgCards)