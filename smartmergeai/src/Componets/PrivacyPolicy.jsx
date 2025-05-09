import React from 'react';
import '../css/Privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className="content-page">
      <h1>Privacy Policy</h1>
      
      <p>Last Updated: April 29, 2025</p>
      
      <p>
        At SmartMergeAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
        disclose, and safeguard your information when you use our service. Please read this privacy policy 
        carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
      </p>
      
      <h2>Information We Collect</h2>
      <p>
        <strong>Personal Information:</strong> When you create an account, we collect your name, email address, 
        and password. We also collect your phone number if you choose to provide it.
      </p>
      <p>
        <strong>GitHub Repository Data:</strong> To provide our services, we access and analyze the repositories 
        you choose to merge. This includes commit histories, branch structures, and file contents.
      </p>
      <p>
        <strong>Usage Information:</strong> We collect information about how you interact with our service, 
        including actions taken, features used, and time spent on our platform.
      </p>
      <p>
        <strong>Device Information:</strong> We collect information about the device you use to access our service, 
        including IP address, browser type, and operating system.
      </p>
      
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To analyze repository structures and perform merges</li>
        <li>To communicate with you about your account and provide customer support</li>
        <li>To improve our services and develop new features</li>
        <li>To detect and prevent fraudulent or unauthorized activity</li>
        <li>To comply with legal obligations</li>
      </ul>
      
      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information 
        from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission 
        over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
      </p>
      
      <h2>Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to provide our services and fulfill 
        the purposes outlined in this Privacy Policy. We will retain and use your information as necessary 
        to comply with legal obligations, resolve disputes, and enforce our agreements.
      </p>
      
      <h2>Repository Data</h2>
      <p>
        We do not store complete copies of your repositories unless absolutely necessary for the merge process. 
        Any repository data we store is encrypted and deleted after the merge is completed or after 30 days, 
        whichever comes first.
      </p>
      
      <h2>Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information to third parties. We may share your information with:
      </p>
      <ul>
        <li>
          <strong>Service Providers:</strong> We may share your information with third-party vendors who provide 
          services on our behalf, such as hosting, analytics, and customer support.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in 
          response to valid requests by public authorities.
        </li>
        <li>
          <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a 
          portion of our assets, your information may be transferred as part of that transaction.
        </li>
      </ul>
      
      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have certain rights regarding your personal information, including:
      </p>
      <ul>
        <li>The right to access and receive a copy of your personal information</li>
        <li>The right to request correction or deletion of your personal information</li>
        <li>The right to restrict or object to our processing of your personal information</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent at any time (where processing is based on consent)</li>
      </ul>
      <p>
        To exercise these rights, please contact us at privacy@smartmergeai.com.
      </p>
      
      <h2>Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on our service and hold certain 
        information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
      </p>
      
      <h2>Children's Privacy</h2>
      <p>
        Our service is not intended for individuals under the age of 16. We do not knowingly collect personal 
        information from children under 16. If we learn that we have collected personal information from a child 
        under 16, we will take steps to delete that information.
      </p>
      
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
        Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy 
        Policy periodically for any changes.
      </p>
      
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
      </p>
      <p>
        Email: privacy@smartmergeai.com<br />
        Address: 123 Tech Park, San Francisco, CA 94103
      </p>
    </div>
  );
};

export default PrivacyPolicy;