import React, { useState } from 'react';
import "../Css/PRresult.css";

const PRResultDemo = ({ selectedPR, onBack }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [showDetails, setShowDetails] = useState(false);
  
  // Sample data
  const resultData = [
    { id: 1, heading: "Augmentin 625 Duo Tablet", mergePercentage: "22%", recommendation: "Code review needed", details: "Some people hate the idea of big government which means a federal government that plays a significant role in the day-to-day lives of its people. You might talk big at your reunion, but you really haven't traveled the world. (You went to Hoboken and Walla Walla big canalso pertain to age, as in Will you be a big girl and get dressed all by yourself?" },
    { id: 2, heading: "Azithral 500 Tablet", mergePercentage: "08%", recommendation: "Major issues detected", details: "Significant code quality issues found. Tests failing." },
    { id: 3, heading: "RxJS Pipeline Update", mergePercentage: "76%", recommendation: "Ready for review", details: "Minor issues found, generally good quality." },
  ];
shu/lak
  return (
    <div className="pr-result-demo">
      <div className="result-header">
        <div className="navigation-path">
          <span className="path-item inactive" onClick={onBack}>SELECT PR TO EVALUATE</span>
          <span className="path-separator">›</span>
          <span className="path-item active">PR EVALUATE RESULT</span>
        </div>
        <p className="result-subtitle">Detailed view of Result</p>
      </div>

      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'basic' ? 'active' : ''}`}
          onClick={() => setActiveTab('basic')}
        >
          Basic Results
        </button>
        <button 
          className={`tab-button ${activeTab === 'detailed' ? 'active' : ''}`}
          onClick={() => setActiveTab('detailed')}
        >
          Detailed Analysis
        </button>
      </div>

      <div className="result-container">
        <table className="result-table">
          <thead>
            <tr>
              <th>heading PR</th>
              <th>MERGE percentage</th>
              <th>RECOMMENDATION</th>
              {activeTab === 'detailed' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {resultData.map((item) => (
              <tr key={item.id}>
                <td>{item.heading}</td>
                <td>{item.mergePercentage}</td>
                <td>{item.recommendation}</td>
                {activeTab === 'detailed' && (
                  <td>
                    <button 
                      className="details-button"
                      onClick={() => setShowDetails(item.id)}
                    >
                      View Details
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        
        {showDetails && (
          <div className="details-panel">
            <div className="details-header">
              <h3>Detailed Analysis</h3>
              <button 
                className="close-button"
                onClick={() => setShowDetails(false)}
              >
                Close
              </button>
            </div>
            <p className="details-text">
              {resultData.find(item => item.id === showDetails)?.details || 'No details available'}
            </p>
            <div className="metrics-panel">
              <h4>Code Quality Metrics</h4>
              <div className="metrics-grid">
                <div className="metric-item">
                  <p className="metric-label">Code Coverage</p>
                  <p className="metric-value">76%</p>
                </div>
                <div className="metric-item">
                  <p className="metric-label">Complexity Score</p>
                  <p className="metric-value">Medium</p>
                </div>
                <div className="metric-item">
                  <p className="metric-label">Linting Issues</p>
                  <p className="metric-value">4 warnings</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="action-buttons">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <button className="approve-button">
          Approve PR
        </button>
      </div>
    </div>
  );
};

export default PRResultDemo;