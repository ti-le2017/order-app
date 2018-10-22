import React from 'react';
import './css/breadcrumb.css';

const Breadcrumb = () => {

  return(
    <div className='position'>
      <ul className="breadCrumbs">
          <li><a href="/" title="Home" className="animation">Home</a></li>
          <li><a href="/" title="Portfolio" className="animation">Collections</a></li>
          <li><a href="/" title="Websites" className="animation">Game Of Thrones</a></li>
          <li className= "activePage"><p href="" title="John Snow Collections"  className="animation">John Snow Collections</p></li>
          <div className="clear"></div>
        </ul>
    </div>
  )
}

export default Breadcrumb;
