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

const Demo = () => {
  const navigate = useNavigate();
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [selectedPR, setSelectedPR] = useState('');
  const [isRepoDropdownOpen, setIsRepoDropdownOpen] = useState(false);
  const [isPrDropdownOpen, setIsPrDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [repos, setRepos] = useState([]);
  const [prs, setPrs] = useState([]);
  const [stats, setStats] = useState({
    prCount: 0,
    prOpen: 0,
    prClosed: 0
  });
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Verify authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const user = localStorage.getItem('user') || sessionStorage.getItem('user');
      
      if (!token) {
        navigate('/login');
        return;
      }
      
      if (user) {
        try {
          const userData = JSON.parse(user);
          setUserEmail(userData.email || 'User');
          // Load API key if stored
          if (userData.apiKey) {
            setApiKey(userData.apiKey);
          }
        } catch (e) {
          console.error('Error parsing user data:', e);
        }
      }
    };
    
    checkAuth();
  }, [navigate]);

  // Fetch repositories when repo owner changes
  useEffect(() => {
    if (repoOwner && apiKey) {
      fetchRepositories();
    }
  }, [repoOwner, apiKey]);

  // Fetch PRs and stats when repo name changes
  useEffect(() => {
    if (repoName && apiKey && repoOwner) {
      fetchPRs();
      fetchStats();
    }
  }, [repoName, apiKey, repoOwner]);

  const fetchRepositories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/repos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          apiKey,
          owner: repoOwner
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      setRepos(data.repositories || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching repositories:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPRs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/prs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          apiKey,
          owner: repoOwner,
          repo: repoName
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch PRs');
      }

      const data = await response.json();
      setPrs(data.pullRequests || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching PRs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStats = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          apiKey,
          owner: repoOwner,
          repo: repoName
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }

      const data = await response.json();
      setStats({
        prCount: data.total || 0,
        prOpen: data.open || 0,
        prClosed: data.closed || 0
      });
    } catch (err) {
      setError(err.message);
      console.error('Error fetching stats:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  const handleEvaluate = async () => {
    if (!selectedPR) {
      setError('Please select a PR to evaluate');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          apiKey,
          owner: repoOwner,
          repo: repoName,
          pr: selectedPR
        })
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate PR');
      }

      const data = await response.json();
      // Handle evaluation results - you might want to navigate to a results page
      console.log('Evaluation results:', data);
      alert('PR evaluated successfully!');
    } catch (err) {
      setError(err.message);
      console.error('Error evaluating PR:', err);
    } finally {
      setIsLoading(false);
    }
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
            <input 
              type="text" 
              placeholder="Enter GitHub API Key" 
              className="search-input" 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
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
                  placeholder="Enter GitHub username or organization"
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
                  placeholder={isLoading ? "Loading..." : "Select a repository"}
                />
                <FiChevronDown 
                  className="dropdown-icon" 
                  size={16}
                  onClick={() => setIsRepoDropdownOpen(!isRepoDropdownOpen)}
                />
                
                {isRepoDropdownOpen && (
                  <div className="dropdown-list">
                    {isLoading ? (
                      <div className="dropdown-item">Loading...</div>
                    ) : repos.length > 0 ? (
                      repos.map((repo, index) => (
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
                      ))
                    ) : (
                      <div className="dropdown-item">No repositories found</div>
                    )}
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
            <div className="stat-value">{stats.prCount}</div>
            <button className="view-button">View</button>
          </div>
          <div className="stat-card">
            <h4>PR OPEN</h4>
            <div className="stat-value">{stats.prOpen}</div>
            <button className="view-button">View</button>
          </div>
          <div className="stat-card">
            <h4>PR CLOSED</h4>
            <div className="stat-value">{stats.prClosed}</div>
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
                placeholder={isLoading ? "Loading..." : "Select a PR"}
              />
              <FiChevronDown 
                className="dropdown-icon" 
                size={16}
                onClick={() => setIsPrDropdownOpen(!isPrDropdownOpen)}
              />
              
              {isPrDropdownOpen && (
                <div className="dropdown-list">
                  {isLoading ? (
                    <div className="dropdown-item">Loading...</div>
                  ) : prs.length > 0 ? (
                    prs.map((pr, index) => (
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
                    ))
                  ) : (
                    <div className="dropdown-item">No PRs found</div>
                  )}
                </div>
              )}
            </div>
          </div>
          <button 
            className="evaluate-button"
            onClick={handleEvaluate}
            disabled={!selectedPR || isLoading}
          >
            {isLoading ? 'Evaluating...' : 'Evaluate'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Demo;