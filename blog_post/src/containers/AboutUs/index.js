import React,{useState,useEffect} from 'react';
import Sidebar from '../../components/Sidebar';
import {posts} from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

import './style.css';

/**
* @author
* @function AboutUs
**/


const AboutUs = (props) => {



  const[posts,setPosts]=useState([]);


  useEffect(() =>{
    const posts= blogPost.data;
    setPosts(posts);
  },[posts]);

  return(

    <div>
      <section className="aboutUscontainer">
      <Card style={{width:'70%',height:'70%',marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <h1 className="headerAbout"> About </h1>
        <div className="paraText">
        <p >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  </p>
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  <p>
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  </p>
  <p>
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
  </p>
  </div>
        </Card>
        <Sidebar/>
        </section>
        <section>
        <Card style={{width:'70%',marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>

        </Card>

        </section>
        <section >
          <Card style={{height:'100%',marginBottom:'50px',padding:'20px',boxSizing:'border-box'}}>
            <ul class="aboutUsFooter" style={{listStyleType:'none'}}>
            <li>
              MOST-VIEWED-POSTS
              <div className="recentPosts">
                      {
                          posts.slice(0,2).map(post =>{
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
            </li>
            <li>
              POPULAR-POSTS
              <div className="recentPosts">
                      {
                          posts.slice(3,5).map(post =>{
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
            </li>
            <li>
              ALL-POSTS
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
            </li>
            </ul>
            
          </Card>
        </section>
      </div>
    

   )
}

export default AboutUs