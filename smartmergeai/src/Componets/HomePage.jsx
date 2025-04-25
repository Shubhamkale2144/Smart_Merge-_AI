import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMenu, 
  FiHome, 
  FiEdit, 
  FiBell, 
  FiSettings, 
  FiPower, 
  FiSearch,
  FiGithub,
  FiChevronDown,
  FiUser
} from 'react-icons/fi';
import '../assets/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [selectedPR, setSelectedPR] = useState('');
  const [isRepoDropdownOpen, setIsRepoDropdownOpen] = useState(false);
  const [isPrDropdownOpen, setIsPrDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  
  // Sample data
  const repos = Array.from({length: 10}, (_, i) => `Repo ${i+1}`);
  const prs = Array.from({length: 10}, (_, i) => `PR-${i+1}`);

  // Verify authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      // Check for token in localStorage or sessionStorage
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const user = localStorage.getItem('user') || sessionStorage.getItem('user');
      
      if (!token) {
        // No token found, redirect to login
        navigate('/login');
        return;
      }
      
      // Set user email if available
      if (user) {
        try {
          const userData = JSON.parse(user);
          setUserEmail(userData.email || 'User');
        } catch (e) {
          console.error('Error parsing user data:', e);
        }
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    
    // Redirect to login page
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.input-container')) {
        setIsRepoDropdownOpen(false);
        setIsPrDropdownOpen(false);
      }
    };
    
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="home-page">
      {/* Sidebar/Navbar */}
      <div className="sidebar">
        <div className="menu-icon">
          <FiMenu size={24} />
        </div>
        
        <div className="sidebar-icons">
          <div className="icon active">
            <FiHome size={20} />
          </div>
          <div className="icon">
            <FiEdit size={20} />
          </div>
          <div className="icon">
            <FiBell size={20} />
          </div>
          <div className="icon">
            <FiSettings size={20} />
          </div>
        </div>
        
        <div className="power-icon" onClick={handleLogout}>
          <FiPower size={20} />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <FiSearch size={18} />
          </div>
          
          <div className="user-info">
            <span className="user-email">{userEmail || 'example@gmail.com'}</span>
            <div className="user-avatar">
              <FiUser size={20} />
            </div>
          </div>
        </div>

        <div className="divider horizontal"></div>

        {/* Repo Information with Dropdown */}
        <div className="repo-table compact">
          <div className="repo-info-header">
            <h3>REPO INFORMATION</h3>
          </div>
          
          <div className="repo-form">
            <div className="form-group">
              <label>Repo Owner Name</label>
              <div className="input-container">
                <input 
                  type="text" 
                  value={repoOwner}
                  onChange={(e) => setRepoOwner(e.target.value)}
                  className="small-input"
                />
                <FiGithub className="github-icon" size={16} />
              </div>
            </div>
            
            <div className="form-group">
              <label>Select Repo Name</label>
              <div className="input-container">
                <input
                  type="text"
                  value={repoName}
                  readOnly
                  onClick={() => setIsRepoDropdownOpen(!isRepoDropdownOpen)}
                  className="small-input"
                />
                <FiChevronDown 
                  className="dropdown-icon" 
                  size={16}
                  onClick={() => setIsRepoDropdownOpen(!isRepoDropdownOpen)}
                />
                
                {isRepoDropdownOpen && (
                  <div className="dropdown-list">
                    {repos.map((repo, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                          setRepoName(repo);
                          setIsRepoDropdownOpen(false);
                        }}
                      >
                        {repo}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <h4>PR COUNT</h4>
            <div className="stat-value">31</div>
            <button className="view-button">View</button>
          </div>
          <div className="stat-card">
            <h4>PR OPEN</h4>
            <div className="stat-value">81</div>
            <button className="view-button">View</button>
          </div>
          <div className="stat-card">
            <h4>PR CLOSED</h4>
            <div className="stat-value">56</div>
            <button className="view-button">View</button>
          </div>
        </div>

        {/* Evaluation Section */}
        <div className="evaluation-section">
          <div className="form-group">
            <label>Select PR to evaluate</label>
            <div className="input-container">
              <input
                type="text"
                value={selectedPR}
                readOnly
                onClick={() => setIsPrDropdownOpen(!isPrDropdownOpen)}
                className="pr-input small-input"
              />
              <FiChevronDown 
                className="dropdown-icon" 
                size={16}
                onClick={() => setIsPrDropdownOpen(!isPrDropdownOpen)}
              />
              
              {isPrDropdownOpen && (
                <div className="dropdown-list">
                  {prs.map((pr, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedPR(pr);
                        setIsPrDropdownOpen(false);
                      }}
                    >
                      {pr}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className="evaluate-button">Evaluate</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;