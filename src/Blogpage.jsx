import React from 'react'
import './Blogpage.css'
import blogheadimg from "./assets/bloghead.png";
import blogimg from "./assets/blog1.png";
import bloggimg from "./assets/blog2.png";
import blggimg from "./assets/blog3.png";
import blogcimg from "./assets/blog4.png";
import bloggcimg from "./assets/blog5.png";
import blogccimg from "./assets/blog6.png";
import bloggccimg from "./assets/blog7.png";
import blggcimg from "./assets/blog8.png";
import blogimgg from "./assets/blog9.png";
import bloggimgg from "./assets/blog10.png";
import blooggimgg from "./assets/blog11.png";

  const Blogpage = () => {
  return (
  <>

  <div className='blogpage'>
  <img src={blogheadimg} alt="blogpage" width="1450px" padding="25px"/>
     
  </div>

  <div className='cat-con'>  
  <div className='container'>
 
  <div className='content'>
  <img src={blogimg} alt="blog" width="300"/>  
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas sunt aspernatur excepturi? Iusto, vero.</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <h3>Read more</h3>
  </div>

  <div className='content' >
  <img src={bloggimg} alt="blog" width="300"/>  
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Read more</h3>
  </div>

  <div  className='content'>
  <img src={blggimg} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Read more</h3>
  </div>

  </div>
  </div>

  <div className='cat-con'>
  <div className='categories'>
  <h1>Categories</h1>
  <button className='view-all'>viewall</button>
  </div>
    
  <div className='container'>
  <div className='content'>
  <img src={blogcimg} alt="blog" width="300"/>
  <h3 className='card-title'>career</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <h3>Readmore</h3>
  </div>

  <div className='content'>
  <img src={bloggcimg} alt="blog" width="300"/> 
  <h3 className='card-title'>Onboarding</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Readmore</h3>
  </div>

  <div className='content' >
  <img src={blogccimg} alt="blog" width="300"/>
  <h3 className='card-title'>tasks</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Readmore</h3>
  </div>

  <div className='content'>
  <img src={bloggccimg} alt="blog" width="300"/> 
  <h3 className='card-title'>Worktype</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <h3>Readmore</h3>
  </div>

  <div className='content'>
  <img src={blggcimg} alt="blog" width="300"/>
  <h3 className='card-title'>Meetings</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Readmore</h3>
  </div>

  <div className='content'>
  <img src={blogimgg} alt="blog" width="300"/>
  <h3 className='card-title'>Environment</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Readmore</h3>
  </div>
  </div>
  </div>

  <div className='cat-con'>
  <div className='categories'>
  <h1>Technology Blogs</h1>
  <button className='view-all'>viewall</button>
  </div>
   

      
  <div className='container'>
  <div className='content'>
  <img src={bloggimgg} alt="blog" width="300"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas sunt aspernatur excepturi? Iusto, vero.</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <h3>Read more</h3>
  </div>

  <div className='content'>
  <img src={blooggimgg} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Read more</h3>
  </div>

  <div className='content'>
  <img src={blggimg} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Read more</h3>
  </div>
    
     

  <div className='content'>
  <img src={blogimg} alt="blog" width="300"/> 
  <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minima, non rem!</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <h3>Readmore</h3>
  </div>

  <div className='content'>
  <img src={bloggimg} alt="blog" width="300"/>
  <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum cupiditate incidunt laborum amet molestiae.</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Readmore</h3>
  </div>

  <div className='content'>
  <img src={blggimg} alt="blog" width="300"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum eligendi et velit nihil. Error.</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <h3>Readmore</h3>
  </div>
  
  </div>
  </div>
     
    
    
  

  </>
  )
  }


  export default Blogpage