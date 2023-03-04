export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutme">About Me</div>
      <div className="aboutBox">
        <div className="avatar">
          <img src="image/avatar.png" alt="" />
        </div>
        <div className="intro">
          <p>Ahoy-hoy!</p>
          <br />
          <p>
            My name is Xiaoyi Zhu and i'm a softwar developer based in San Francisco. I'm currently working at the core platform team at freeAgent CRM, after graduated from UC Berkeley with a degree
            in EECS in May 2021.
          </p>
          <br />
          <span>
            In my free time, I enjoying watching tv shows, my favorite ones are Rick and Morty, Peacemaker, The Mandalorian, The Last of Us, and also The Boys, which I made an
            <a class="apiLink" href="https://www.theboysapi.com" target="_blank">
              {' '}
              API{' '}
            </a>
            for it.
          </span>
        </div>
      </div>
    </div>
  );
}
