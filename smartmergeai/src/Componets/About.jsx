import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="content-page">
      <h1>About SmartMergeAI</h1>
      
      <p>
        SmartMergeAI is a cutting-edge solution designed to revolutionize how developers merge GitHub repositories. 
        Our platform leverages advanced AI techniques to streamline the merging process while maintaining the integrity 
        of your code history.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        We believe that merging repositories should be simple, efficient, and reliable. Our mission is to eliminate 
        the complexity and potential errors that often arise during repository merges, allowing development teams 
        to focus on what matters most: creating great software.
      </p>
      
      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Intelligent History Preservation</strong> - Our AI analyzes commit patterns to ensure 
          that your repository's history remains intact and coherent after merging.
        </li>
        <li>
          <strong>Branch Structure Maintenance</strong> - SmartMergeAI automatically detects and preserves 
          important branch structures, keeping your development workflow uninterrupted.
        </li>
        <li>
          <strong>Conflict Resolution</strong> - Our advanced conflict detection and resolution algorithms 
          minimize manual intervention during merges.
        </li>
        <li>
          <strong>Seamless GitHub Integration</strong> - Works directly with your GitHub repositories without 
          requiring complex setup or configuration.
        </li>
      </ul>
      
      <h2>Our Team</h2>
      <p>
        SmartMergeAI was founded by a team of experienced developers who faced the challenges of repository 
        merging firsthand. After years of dealing with complex merge conflicts and lost commit histories, 
        we decided to create a solution that would make repository merging painless and reliable.
      </p>
      <p>
        Our development team consists of experts in version control systems, machine learning, and software 
        engineering who are passionate about creating tools that make developers' lives easier.
      </p>
      
      <h2>Technology</h2>
      <p>
        SmartMergeAI utilizes a combination of machine learning algorithms, graph theory, and git internals 
        to analyze repository structures and determine the optimal merge strategy. Our platform is built on 
        modern cloud infrastructure to ensure reliability and scalability for repositories of any size.
      </p>
      
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="/signup" className="btn btn-primary">Start using SmartMergeAI today</a>
      </div>
    </div>
  );
};

export default About;