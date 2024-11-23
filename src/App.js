import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import './App.css'; // Ensure this file exists
import Header from './components/Header'; // Header component
import ProfileInfo from './components/ProfileInfo'; // Profile Info component
import Posts from './components/Posts'; // Posts component
import Sidebar from './components/Sidebar'; // Sidebar component
import ContactUs from './components/ContactUs'; // Contact Us component (imported from the components folder)

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Define Routes */}
        <Routes>
          {/* Route for the main page */}
          <Route path="/" element={
            <div className="container mt-4">
              <div className="row">
                {/* Profile Section */}
                <div className="col-md-9">
                  {/* Pass the profile name */}
                  <ProfileInfo profileName="Daraz Online Shopping" />
                  <Posts />
                </div>

                {/* Sidebar */}
                <div className="col-md-3">
                  <Sidebar />
                </div>
              </div>

              {/* Contact Us Button */}
              <div className="text-center mt-4">
                <a href="/contact-us" className="btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          } />
          
          {/* Route for the Contact Us page */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
