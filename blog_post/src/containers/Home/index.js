import React from 'react';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';
import './style.css';
import blogData from '../../data/blog.json';


const SideImage = props => {
    return(
        <div style={{height:`${props.height}px`}}>
            <img src={props.src} alt="" ></img>
        </div>
    )
}

const ImageGallery = props => (            
<div className="galleryPost" style={props.galleryStyle}>
               
<section style={{width:'70%'}}>
    <div className="mainImageWrapper">
        <img src={require('../../blogPostImages/'+props.imagesArray[0])} alt="" style={props.galleryStyle}></img>
    </div>
</section>
<section className="sideImageWrapper" style={{width:'30%'}}>

  <SideImage
    height={props.sideImageHeight}
    src={require('../../blogPostImages/'+props.imagesArray[1])} 
  />
  <SideImage
    height={props.sideImageHeight}
    src={require('../../blogPostImages/'+props.imagesArray[2])} 
  />
  <SideImage
    height={props.sideImageHeight}
    src={require('../../blogPostImages/'+props.imagesArray[3])} 
  />
</section>
</div>)


const Home = props =>{



    const galleryHeight = 450;
    const galleryStyle ={
        height: galleryHeight+'px',
        overflow:'hidden'
    }
    const sideImageHeight = galleryHeight / 3;

    const imgAr = blogData.data.map(post => post.blogImage)

    return (
        <div>
        <Card>
                <ImageGallery
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleryStyle}
                    imagesArray={imgAr}
                />

        </Card>
        <section className="HomeContainer">

            <RecentPosts style={{width:'70%'}}/>
            <Sidebar/>
        </section>

        </div>
    );
}
 
export default Home;
