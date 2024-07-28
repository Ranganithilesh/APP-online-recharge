import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/press">Press</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/bug-bounty">Bug Bounty</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Help & Support</h4>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/mobile-apps">Mobile Apps</a></li>
          <li><a href="/payment-options">Payment Options</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/become-a-partner">Become a Partner</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Policies</h4>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-conditions">Terms & Conditions</a></li>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/grievance-policy">Grievance Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Verified By</h4>
        <div className="verified-by">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Verified by Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard SecureCode" />
          <img src="https://cdn0.iconfinder.com/data/icons/payment-method/480/rupay_payment_card_bank-512.png" alt="RuPay Logo" />






        </div>
      </div>
      <div className="footer-section">
        <h4>Connect Us</h4>
        <div className="social-links">
          <a href="https://facebook.com"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://linkedin.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtR00fEKrwQ7rN5uKRFZ1wGtTG3jQ7AtzhFQ&s" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com"><img src="data:image/png;base64,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" alt="Twitter" /></a>
          
          <a href="https://instagram.com"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
        </div>
      </div>           
      <div className="footer-section">
        <h4>Powered By</h4>
        <img src="https://w7.pngwing.com/pngs/515/914/png-transparent-india-mobikwik-payment-android-wallets-text-rectangle-logo.png" alt="Zaakpay" className="zaakpay-logo" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfeFY33tSC2zjMTp6bpXgvBhpHrRm7ZqK1w&s" alt="Zaakpay" className="zaakpay-logo" />
      </div>
    </footer>
  );
}

export default Footer;