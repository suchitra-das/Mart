import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/team" className="text-light text-decoration-none">Our Team</a></li>
              <li><a href="/careers" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="/press" className="text-light text-decoration-none">Press</a></li>
              <li><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@example.com" className="text-light text-decoration-none">Email Us</a></li>
              <li><a href="/support" className="text-light text-decoration-none">Customer Support</a></li>
              <li><a href="/locations" className="text-light text-decoration-none">Locations</a></li>
              <li><a href="/faq" className="text-light text-decoration-none">FAQs</a></li>
              <li><a href="/feedback" className="text-light text-decoration-none">Give Feedback</a></li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>Address</h5>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>Suite 400</li>
              <li>Cityville, CA 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li><a href="/map" className="text-light text-decoration-none">View on Map</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
