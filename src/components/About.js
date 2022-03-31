export default function About() {
    return (
        <div className="about" id="about">
            <div className="aboutme">About Me</div>
            <div className="aboutBox">
                <div className="avatar">
                    <img src="image/avatar.png" alt="" />
                </div>
                <div className="intro">
                    <p>
                        Hello! my name is Xiaoyi, a softwar developer living in
                        San Francisco. I enjoy using technology to make life
                        easier. I'm currently working as a Applications
                        developer at FreeAgent CRM, after graduated from UC
                        Berkeley EECS in May 2021. The current tech stack I use
                        are Node.js, React, Redux, GraphQL, Postgres, and so on.
                        I'm also comfortable with Python and Java.
                    </p>
                    <br />
                    <p>
                        In addition to wrok, in my free time, I enjoying playing
                        funny scientific experiments with my sons, listening
                        folk music, cooking spicy food, and waiting for the new
                        season of Rick and Morty, "Oooh - Weee!!".
                    </p>
                </div>
            </div>
        </div>
    );
}
