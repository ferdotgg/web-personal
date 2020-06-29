import React from 'react';

const MeHeader = () => {
    return ( 
        <section className="profile">
        <div className="profile-container">
          <div className="profile-container-avatar">
            <img className="lazyload" data-src="./assets/images/me.webp" alt="" />
          </div>
          <div className="profile-container-name">
            <h1>Fernando Briceño</h1>
          </div>
        </div>
      </section>
     );
}
 
export default MeHeader;