import React from 'react';

const ProfileInfo = ({ profileName }) => {
  return (
    <div className="container mt-4">
      {/* Cover and Profile Section */}
      <div className="sticky-top">
        {/* Cover Image */}
        <div
          style={{
            height: '200px',
            backgroundImage: `url('/fbcover.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Profile and Info */}
        <div className="d-flex align-items-end" style={{ position: 'relative', top: '-50px' }}>
          {/* Profile Image */}
          <div className="text-center" style={{ marginLeft: '20px' }}>
            <img
              src="/fbprofile.jpg"
              alt="Profile"
              className="rounded-circle"
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                border: '3px solid white',
              }}
            />
          </div>

          {/* Profile Info */}
          <div className="ms-3">
            <h3>{profileName}</h3>
            <p className="text-muted">Online Shopping Platform for all your needs</p>
          </div>
        </div>
      </div>

      {/* Menu and Posts Section (2 Equal Halves) */}
      <div className="row mt-4">
        {/* Left Side: Menu (50% of the page) */}
        <div className="col-md-6">
          {/* Menu (Tabs) */}
          <div className="d-flex justify-content-start mb-3">
            <a href="#posts" className="me-3 text-decoration-none text-dark">
              Posts
            </a>
            <span className="me-3">|</span>
            <a href="#about" className="me-3 text-decoration-none text-dark">
              About
            </a>
            <span className="me-3">|</span>
            <a href="#reels" className="me-3 text-decoration-none text-dark">
              Reels
            </a>
            <span className="me-3">|</span>
            <a href="#photos" className="me-3 text-decoration-none text-dark">
              Photos
            </a>
            <span className="me-3">|</span>
            <a href="#videos" className="me-3 text-decoration-none text-dark">
              Videos
            </a>
          </div>

          {/* Information Under Menu (Intro Text) */}
          <div id="posts" className="tab-content">
            <div className="tab-pane active">
              <div className="card">
                <div className="card-header">Intro</div>
                <div className="card-body">
                  <p>
                    Daraz is the leading online marketplace in South Asia, empowering tens of thousands of sellers.
                    <br />
                    Page · Shopping & retail
                    <br />
                    <strong>ShopDarazSriLanka</strong>
                    <br />
                    <a href="https://www.daraz.lk" target="_blank" rel="noopener noreferrer">daraz.lk</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Posts Section (50% of the page) */}
        <div className="col-md-6">
          {/* Content for the right side (Posts Section) */}
          <div
            id="posts"
            className="tab-content"
            style={{
              maxHeight: '500px', // You can adjust this height as per your requirement
              overflowY: 'auto', // Enable vertical scrolling for the posts section
            }}
          >
            <div className="tab-pane active">
              <div className="card">
                <div className="card-header">Posts</div>
                <div className="card-body">
                  {/* Post 1 */}
                  <div className="post mb-4">
                    <img src="/posts/post1.jpeg" alt="Post 1" className="img-fluid" />
                    <h5 className="mt-2">Exclusive Deals on Electronics!</h5>
                    <p>Grab the latest gadgets at unbeatable prices. Don't miss out!</p>
                    {/* Like, Comment, Share Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-light btn-sm">Like</button>
                      <button className="btn btn-light btn-sm">Comment</button>
                      <button className="btn btn-light btn-sm">Share</button>
                    </div>
                  </div>
                  <hr />
                  {/* Post 2 */}
                  <div className="post mb-4">
                    <img src="/posts/post2.jpeg" alt="Post 2" className="img-fluid" />
                    <h5 className="mt-2">Fashion Sale – Up to 50% Off!</h5>
                    <p>Refresh your wardrobe with trendy styles for every season.</p>
                    {/* Like, Comment, Share Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-light btn-sm">Like</button>
                      <button className="btn btn-light btn-sm">Comment</button>
                      <button className="btn btn-light btn-sm">Share</button>
                    </div>
                  </div>
                  <hr />
                  {/* Post 3 */}
                  <div className="post mb-4">
                    <img src="/posts/post3.jpeg" alt="Post 3" className="img-fluid" />
                    <h5 className="mt-2">Shop Home Essentials Now!</h5>
                    <p>From furniture to kitchenware, everything you need at the best prices.</p>
                    {/* Like, Comment, Share Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-light btn-sm">Like</button>
                      <button className="btn btn-light btn-sm">Comment</button>
                      <button className="btn btn-light btn-sm">Share</button>
                    </div>
                  </div>
                  <hr />
                  {/* Post 4 */}
                  <div className="post mb-4">
                    <img src="/posts/post4.jpeg" alt="Post 4" className="img-fluid" />
                    <h5 className="mt-2">Top Picks for Baby Products</h5>
                    <p>Get the best deals on baby care products, diapers, and more.</p>
                    {/* Like, Comment, Share Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-light btn-sm">Like</button>
                      <button className="btn btn-light btn-sm">Comment</button>
                      <button className="btn btn-light btn-sm">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileInfo;
