export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="greeting">Hello!</div>
      <div className="contactText">
        Thank you for visiting! If you have any questions, comments, ideas,
        opportunities, or just want to say hello, please don't hesitate to send
        me an email. I will get back to you as soon as possible!
      </div>
      <div className="linkContainter">
        <div className="linkBtn">
          <a href="https://github.com/xyzkpsf" target="_blank">
            <img src="image/GitHub-Mark-64px.png" alt="" />
          </a>
        </div>

        <div className="linkBtn">
          <a
            href="https://drive.google.com/file/d/19XiW3MTMTG9kQ8HCOWpi0iv_rewckouy/view?usp=sharing"
            target="_blank"
          >
            <img src="image/resume.png" alt="" />
          </a>
        </div>
        <div className="linkBtn">
          <a href="https://www.linkedin.com/in/xiaoyi-zhu/" target="_blank">
            <img src="image/LinkedIn.png" alt="" />
          </a>
        </div>
      </div>
      <div className="emailBtn">
        <a href="mailto:xiaoyizhu@berkeley.edu" target="_blank">
          Say Hello
        </a>
      </div>
    </div>
  );
}
