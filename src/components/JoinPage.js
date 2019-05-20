import React from 'react';
import '../css/joinpage.css';

export default function JoinPage() {
    return (
        <div>
            <div className="text">
                <h1>PicMe</h1>
                <h3>Join this Game using the Pin:</h3>
                <h3>1234</h3>
            </div>
            <div className="user-list-container">
                <ul className="user-list">
                    <li>seil</li>
                    <li>ashish</li>
                    <li>antonio</li>
                    <li>rebecca</li>
                    <li>rebecca</li>
                    <li>chris</li>
                    <li>samson</li>
                </ul>
            </div>
            <div className="button-container">
                <button className="start-button">Start Game</button>
                <button className="cancel-button">Cancel Game</button>
            </div>
        </div>
    )
}