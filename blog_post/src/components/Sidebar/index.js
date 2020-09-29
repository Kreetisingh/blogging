import React,{useState,useEffect} from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import SocialMedia from '../SocialMedia';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const[posts,setPosts]=useState([]);


    useEffect(() =>{
      const posts= blogPost.data;
      setPosts(posts);
    },[posts]);
    


  return(
      
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
          
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About us</span>

                </div>
                <div className="profileImageContainer">
                    <img  src={require('../../blogPostImages/kreeti.jpeg')} alt="profile"></img>
                </div>
                <div className="cardBody">
                    <p className="personalBio">{posts.author}</p>
                </div>

            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
                <SocialMedia style={{justifyContent:'inherit',alignItems: 'center'}}/>
                


            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>

                </div>

                <div className="recentPosts">
                    {
                        posts.map(post =>{
                            return (
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                    </div>

                                </NavLink>

                                
                            )
                        })
                    }

                </div>



            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Subscribe Us</span>
                    <div className="subscribeContainer">
                        <iframe  width="1150" height="647" src="https://www.youtube.com/embed/Nl3CMsJrODs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

            </Card>

            

        </div>
        
   )

 }

export default Sidebar














