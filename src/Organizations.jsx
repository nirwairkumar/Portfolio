import React from 'react';
import './Organizations.css';

// Replace these placeholders with your actual logo paths later
// Example: import googleLogo from './assets/google.png';
const organizations = [
    { id: 1, name: 'Org 1', logo: '/src/assets/org1.png' },
    { id: 2, name: 'Org 2', logo: '/src/assets/org2.png' },
    { id: 3, name: 'Org 3', logo: '/src/assets/org3.png' },
    { id: 4, name: 'Org 4', logo: '/src/assets/org4.png' },
    { id: 5, name: 'Org 5', logo: '/src/assets/org5.png' },
    { id: 6, name: 'Org 6', logo: '/src/assets/org6.png' },
];

const Organizations = () => {
    return (
        <section className="organizations-section">
            <div className="organizations-content">
                <h2 className="organizations-title">Affiliations</h2>

                <div className="organizations-grid">
                    {organizations.map((org) => (
                        <div key={org.id} className="org-card">
                            {/* If you don't have images yet, this displays the name */}
                            {org.logo.includes('path/to') ? (
                                <span className="org-placeholder">{org.name}</span>
                            ) : (
                                <img src={org.logo} alt={org.name} className="org-logo" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Organizations;