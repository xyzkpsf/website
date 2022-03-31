import React, { useState, useEffect } from 'react';

export default function Home() {
    const hellos = [
        'Hello',
        'Bonjour',
        'Hola',
        'Ciao',
        'G\x27day',
        `Ko\x27nichiwa`,
        '你好',
        'Anyeong Haseyo',
    ];
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const hello = hellos[Math.floor(Math.random() * 8)];
    console.log(Math.random());
    console.log(hello);

    return (
        <div className="home" id="home">
            <div className="homeTextWrapper">
                <div id="cName">{hello}</div>
                <div id="eName">I'm Xiaoyi Zhu</div>
            </div>
            <div></div>
            {/* <div className="learnMore">
        <a href="#about">
          <div id="learnMore">Learn More</div>
          <div className="expandLogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          </div>
        </a>
      </div> */}
        </div>
    );
}
