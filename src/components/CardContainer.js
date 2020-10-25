
import React from 'react';
import './CardContainer.css';
import { useAppContext } from '../context/store';

export default function CardContainer() {
    const { state, dispatch } = useAppContext();
    return (
        <div className="card-container">
            <div className="unrevealed">
                {state.cards.considered.map((card, i) => (
                    <div
                        className={`card flip-card ${card.revealed ? 'flipped': ''}`}
                        key={i}
                        style={{
                            transform: `translate3d(-50%, -50%, ${1 * i}px)`,
                            zIndex: `-(arr.length - i - 1)`
                        }}
                        onClick={() => dispatch({type: card.revealed ? 'POP_CARD': 'REVEAL_TOP'})}
                        >
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back">
                                {card.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="revealed">
                {state.cards.unconsidered.map((card, i) => (
                    <div
                        className="card flip-card flipped"
                        key={i}
                        style={{
                            transform: `translate3d(-50%, -50%, ${1 * i}px)`,
                            zIndex: `-(arr.length - i - 1)`
                        }}
                        >
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back">
                                {card.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};