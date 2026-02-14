import React from 'react';
import './LogicCore.css';

const LogicCore: React.FC = () => {
    return (
        <div className="logic-core">
            <div className="up">
                <div className="loaders">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="loader"></div>
                    ))}
                </div>
                <div className="loadersB">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="loaderA">
                            <div className={`ball-node`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogicCore;
