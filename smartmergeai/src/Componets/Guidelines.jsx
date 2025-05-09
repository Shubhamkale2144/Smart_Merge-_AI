import React from 'react';
import '../css/Guidelines.css';

const Guidelines = () => {
  return (
    <div className="content-page">
      <h1>SmartMergeAI Guidelines</h1>
      
      <p>
        Welcome to the SmartMergeAI guidelines! This document provides best practices and recommendations 
        for using SmartMergeAI effectively. Following these guidelines will help you get the most out of 
        our platform and ensure successful repository merges.
      </p>
      
      <h2>Before Merging</h2>
      <ol>
        <li>
          <strong>Prepare your repositories</strong> - Ensure both repositories have a clean working directory 
          with no uncommitted changes. Run git status to verify.
        </li>
        <li>
          <strong>Backup your repositories</strong> - While SmartMergeAI is designed to be non-destructive, 
          we recommend creating backups of your repositories before performing any merges.
        </li>
        <li>
          <strong>Understand your repository structures</strong> - Take time to understand the branch structures 
          and commit histories of both repositories to anticipate potential conflicts.
        </li>
        <li>
          <strong>Check for naming conflicts</strong> - Look for files or directories with the same names in both 
          repositories that might cause conflicts.
        </li>
      </ol>
      
      <h2>During the Merge Process</h2>
      <ul>
        <li>
          <strong>Be patient</strong> - For large repositories, the analysis and merge process may take some time 
          as SmartMergeAI carefully examines commit histories and branch structures.
        </li>
        <li>
          <strong>Review conflict resolutions</strong> - When conflicts are detected, carefully review the suggested 
          resolutions provided by SmartMergeAI before confirming.
        </li>
        <li>
          <strong>Keep browser tab active</strong> - Avoid closing your browser tab during the merge process to 
          prevent interruptions.
        </li>
      </ul>
      
      <h2>After Merging</h2>
      <ol>
        <li>
          <strong>Verify the merged repository</strong> - Check that all branches, commits, and files have been 
          properly merged as expected.
        </li>
        <li>
          <strong>Run tests</strong> - If your project includes tests, run them to ensure the merged code functions 
          correctly.
        </li>
        <li>
          <strong>Review commit history</strong> - Examine the commit history to verify that important commits 
          have been preserved and are correctly ordered.
        </li>
        <li>
          <strong>Push changes</strong> - Once you've verified everything is correct, push the merged repository 
          to your remote repository.
        </li>
      </ol>
      
      <h2>Best Practices for Repository Organization</h2>
      <ul>
        <li>
          <strong>Use consistent naming conventions</strong> - Adopt clear and consistent naming for branches, 
          files, and directories to make merges more predictable.
        </li>
        <li>
          <strong>Avoid long-lived feature branches</strong> - Merge feature branches back to main regularly 
          to reduce the complexity of future merges.
        </li>
        <li>
          <strong>Write clear commit messages</strong> - Descriptive commit messages help SmartMergeAI 
          understand the purpose of changes and make better merge decisions.
        </li>
        <li>
          <strong>Structure repositories logically</strong> - Organize code into logical modules or components 
          to minimize cross-repository dependencies.
        </li>
      </ul>
      
      <h2>Troubleshooting Common Issues</h2>
      <p>
        If you encounter any issues during the merge process, please refer to our <a href="#">FAQ section</a> or 
        contact our support team. Most common issues can be resolved by ensuring both repositories are in a clean 
        state before merging and following the guidelines above.
      </p>
      
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="/signup" className="btn btn-primary">Start merging with confidence</a>
      </div>
    </div>
  );
};

export default Guidelines;