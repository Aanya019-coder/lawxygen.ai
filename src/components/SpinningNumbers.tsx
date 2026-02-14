import React from 'react';

const SpinningNumbers: React.FC = () => {
    // Data extracted from the user's provided HTML
    const wheels = [
        { color: 'rgba(255, 255, 255, 0.15)', l: '3em', m: 22, t: '22s', r1: 'normal', s: 1, angles: [0, 16, 32, 49, 65, 81, 98, 114, 130, 147, 163, 180, 196, 212, 229, 245, 261, 278, 294, 310, 327, 343] },
        { color: 'rgba(255, 255, 255, 0.1)', l: '4em', m: 29, t: '29s', r1: 'reverse', s: 0.99, angles: [0, 12, 24, 37, 49, 62, 74, 86, 99, 111, 124, 136, 148, 161, 173, 186, 198, 211, 223, 235, 248, 260, 273, 285, 297, 310, 322, 335, 347] },
        { color: 'rgba(255, 255, 255, 0.08)', l: '5em', m: 36, t: '36s', r1: 'reverse', s: 0.99, angles: [0, 10, 20, 29, 40, 50, 59, 70, 80, 90, 100, 110, 119, 130, 140, 150, 160, 170, 180, 190, 200, 209, 220, 229, 239, 249, 260, 270, 280, 290, 300, 310, 320, 329, 340, 350] },
        { color: 'rgba(255, 255, 255, 0.06)', l: '6em', m: 44, t: '44s', r1: 'reverse', s: 0.98, angles: [0, 8, 24, 49, 57, 65, 73, 81, 90, 98, 106, 114, 122, 130, 139, 147, 155, 163, 171, 180, 188, 196, 204, 212, 220, 229, 237, 245, 253, 261, 270, 278, 286, 294, 302, 310, 319, 327, 335, 343, 351] },
    ];

    return (
        <div className="spinning-number absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none scale-[3] md:scale-[5]">
            {wheels.map((wheel, wheelIdx) => (
                <div
                    key={wheelIdx}
                    className="wheel"
                    style={{
                        color: wheel.color,
                        '--l': wheel.l,
                        '--m': wheel.m,
                        '--t': wheel.t,
                        '--r1': wheel.r1,
                        '--s': wheel.s,
                    } as React.CSSProperties}
                >
                    {wheel.angles.map((angle, i) => (
                        <div
                            key={i}
                            className="number"
                            style={{
                                '--a': `${angle}deg`,
                                '--i': i,
                            } as React.CSSProperties}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SpinningNumbers;
