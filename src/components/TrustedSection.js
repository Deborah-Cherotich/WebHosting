import React, { useState } from 'react';
import hostImg from '../assets/host.png';
import buildImg from '../assets/build.png';
import marketImg from '../assets/market.png';
import performanceImg from '../assets/performance.png';
import secureImg from '../assets/secure.png';
import enhanceImg from '../assets/enhance.png';
import './TrustedSection.css';

function TrustedSection() {
  const [selectedItem, setSelectedItem] = useState('host');

  const content = {
    host: {
      image: hostImg,
      list: [
        'Launch your platform.',
        'Managed Cloud Hosting',
        'Scalable Plans',
        'WordPress Plugins & Solutions',
        'WooCommerce',
        'Domains',
        'Email',
        'Migration',
        'Automatic WP Installation',
      ],
    },
    build: {
      image: buildImg,
      list: [
        'Create your website.',
        'AI-Powered Tools',
        'Free Domain the First Year',
        'WonderThemes',
        'WonderBlocks',
        'eCommerce Stores',
        'WordPress Design Services',
        'Powerful Plugins',
        'WordPress Plugins & Solutions',
      ],
    },
    market: {
      image: marketImg,
      list: [
        'Make your presence known.',
        'WordPress Plugins & Solutions',
        'Yoast SEO',
        'Professional Pay-Per-Click',
        'Professional SEO Services',
        'WordPress Design Services',
      ],
    },
    performance: {
      image: performanceImg,
      list: [
        'Make it work for you.',
        'Cloudflare CDN',
        'Object Caching Built-in',
        'Dynamic Caching Built-in',
        'NVMe Drives',
        'Updated PHP',
        'Updated MySQL',
        'Rapid TTFB',
      ],
    },
    secure: {
      image: secureImg,
      list: [
        'Maximize your protection.',
        'Free SSLs',
        'Automated Malware Protection',
        'Real-Time WordPress Backups',
        'DDoS Protection',
        'Two-Factor Authentication',
        'Advanced User Permissions',
      ],
    },
    enhance: {
      image: enhanceImg,
      list: [
        'Get expert support.',
        'Design Services',
        'Marketing Services',
        'AI-Powered Assistance',
        'Wordpress Academy',
        'Extensive Knowledge Base',
        '24/7 Expert Support',
        '24/7 Priority Support Available',
      ],
    },
  };

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="trusted-section">
      <div className="text-content">
        <h1>TRUSTED BY MILLIONS OF WORDPRESS USERS</h1>
        <h2>One platform, every capability.</h2>
        <p>Bluehost helps you every step of the way, from building your site to getting support.</p>
      </div>
      <div className="main-content">
        <div className="links">
          {Object.keys(content).map((key) => (
            <div
              key={key}
              className={`link ${selectedItem === key ? 'active' : ''}`}
              onClick={() => handleClick(key)}
            >
              {key.toUpperCase()} <span className="arrow">→</span>
            </div>
          ))}
        </div>
        <div className="display-content">
          <div className="image-frame">
            <img src={content[selectedItem].image} alt={selectedItem} />
          </div>
          <div className="list-display">
            <ul>
              {content[selectedItem].list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedSection;
