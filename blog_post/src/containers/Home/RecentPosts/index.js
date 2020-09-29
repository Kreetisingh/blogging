import React from 'react'
import Card from '../../../components/UI/Card';

import './style.css';


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
        <div style={props.style}>

                <Card style={{marginBottom:'20px 0'}}>
                    <div className="postImageWrapper">
                        <img src={require('../../../blogPostImages/image6.jpg')} alt="jd"></img>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <span>FEATURED</span>
                        <h2>Fitness Mantra To Live Fit Life</h2>
                        <span>posted on July 21, 2016 bySora Blogging Tips</span>
                        <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill.
                            Seed give firmament doesn't land, isn't lesser creeping. 
                            Abundantly you called signs waters yielding he cattle greater were evenin...
                        </p>
                        <button>READ MORE</button>
                    </div>
                    


                </Card>
   
        </div>


   )

 }

export default RecentPosts;