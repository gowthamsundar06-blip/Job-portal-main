import React from 'react'
import './Blogpage.css'
import blogheadimg from "./assets/bloghead.png";
import conblog1 from "./assets/blog1.png";
import conblog2 from "./assets/blog2.png";
import conblog3 from "./assets/blog3.png";
import techblog1 from "./assets/blog4.png";
import techblog2 from "./assets/blog5.png";
import techblog3 from "./assets/blog6.png";
import techblog4 from "./assets/blog7.png";
import techblog5 from "./assets/blog8.png";
import techblog6 from "./assets/blog9.png";
import techblog7 from "./assets/blog10.png";
import techblog8 from "./assets/blog11.png";



  const Blogpage = () => {
  return (
  <>

  <div className='blogpage'>
  <img src={blogheadimg} alt="blogpage" width="1450px" padding="25px"/>
     
  </div>

  <div className='cat-con'>  
  <div className='container'>
 
  <div className="content">
  <img src={conblog1} alt="blog" width="300" />

  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3> 

  <input type="checkbox" id="read1" className="toggle" />

  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read1" className="read-more">Read more</label>
</div>


  <div className="content">
  <img src={conblog2} alt="blog" width="300" />

  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

  <input type="checkbox" id="read2" className="toggle" />

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, aliquam.
    <span className="more-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, neque mollitia, rem libero ipsum ducimus earum reprehenderit architecto facilis ipsa at quasi!
    </span>
  </p>

  <label htmlFor="read2" className="read-more">Read more</label>
</div>

<div className="content">
  <img src={conblog3} alt="blog" width="300" />

  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

  <input type="checkbox" id="read3" className="toggle" />

  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, accusamus!
    <span className="more-text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam placeat necessitatibus similique numquam rerum, tempore ipsa. Obcaecati omnis vitae at voluptatibus nulla!
    </span>
  </p>

  <label htmlFor="read3" className="read-more">Read more</label>
</div>


  </div>
  </div>

  
  <div className='cat-con'>
  <div className='categories'>
  <h1>Categories</h1>
  <button className='view-all'>viewall</button>
  </div>
    
  <div className='container'>
     <div className="content">
  <img src={techblog1} alt="blog" width="300" />

  <h3 className='card-title'>career</h3> 

  <input type="checkbox" id="read4" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read4" className="read-more">Read more</label>
</div>
 

  <div className='content'>
  <img src={techblog2} alt="blog" width="300"/> 
  <h3 className='card-title'>Onboarding</h3>
  <input type="checkbox" id="read5" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read5" className="read-more">Read more</label>
  
  </div>

  <div className='content' >
  <img src={techblog3} alt="blog" width="300"/>
  <h3 className='card-title'>tasks</h3>
 <input type="checkbox" id="read6" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read6" className="read-more">Read more</label>
  
  </div>

  <div className='content'>
  <img src={techblog4} alt="blog" width="300"/> 
  <h3 className='card-title'>Worktype</h3>
  <input type="checkbox" id="read7" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read7" className="read-more">Read more</label>
  
  </div>

  <div className='content'>
  <img src={techblog5} alt="blog" width="300"/>
  <h3 className='card-title'>Meetings</h3>
  <input type="checkbox" id="read8" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read8" className="read-more">Read more</label>
  </div>

  <div className='content'>
  <img src={techblog6} alt="blog" width="300"/>
  <h3 className='card-title'>Environment</h3>
  <input type="checkbox" id="read9" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read9" className="read-more">Read more</label>
  
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
  <img src={techblog7} alt="blog" width="300"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas sunt aspernatur excepturi? Iusto, vero.</h3>
 <input type="checkbox" id="read10" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read10" className="read-more">Read more</label>
  </div>

  <div className='content'>
  <img src={techblog8} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
   <input type="checkbox" id="read11" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read11" className="read-more">Read more</label>
  </div>

  <div className='content'>
  <img src={conblog3} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <input type="checkbox" id="read12" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read12" className="read-more">Read more</label>
  </div>
    
     

  <div className='content'>
  <img src={conblog1} alt="blog" width="300"/> 
  <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minima, non rem!</h3>
  <input type="checkbox" id="read13" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read13" className="read-more">Read more</label>
  </div>

  <div className='content'>
  <img src={conblog2} alt="blog" width="300"/>
  <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum cupiditate incidunt laborum amet molestiae.</h3>
  <input type="checkbox" id="read14" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read14" className="read-more">Read more</label>
  </div>

  <div className='content'>
  <img src={conblog3} alt="blog" width="300"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum eligendi et velit nihil. Error.</h3>
  <input type="checkbox" id="read15" className="toggle" />
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsum.
    <span className="more-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, natus nulla, atque sed modi eveniet dignissimos quaerat aliquam aut labore impedit. Optio!
    </span>
  </p>

  <label htmlFor="read15" className="read-more">Read more</label>
  </div>
  
  </div>
  </div>
     
    
    
  

  </>
  )
  }


  export default Blogpage