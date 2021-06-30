export default function Projects() {
  const imgWidth = 20;
  const imgHeight = 20;

  return (
    <div className="projects" id="projects">
      <div className="title">Projects</div>
      <div className="projectBox">
        <div className="firstRow">
          <div className="proj" id="1">
            <img className="pImage" src="image/gitlet flow.png" alt="" />
            <div className="pDetail">
              <p className="ptitle">Gitlet</p>
              <p className="description">
                A version-control system mimics some of the basic features of
                the popular system Git.
              </p>
              <a
                className="pgit"
                href="https://github.com/xyzkpsf/Gitlet"
                target="_blank"
              >
                <img src="image/GitHub-Mark-64px.png" alt="" />
              </a>
            </div>
          </div>
          <div className="proj" id="2">
            <img className="pImage" src="image/Math Practice.png" alt="" />
            <div className="pDetail">
              <p className="ptitle">Math Arithmetic Practice</p>
              <p className="description">
                A highly customized math practice website for kids.
              </p>
              <div className="logo">
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/Math-Arithmetic-Practice"
                  target="_blank"
                >
                  <img src="image/GitHub-Mark-64px.png" alt="" />
                </a>
                <a
                  className="pgit"
                  href="https://xyzkpsf.github.io/Math-Arithmetic-Practice/"
                  target="_blank"
                >
                  <img src="image/link.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="proj" id="3">
            <img className="pImage" src="image/sorting.png" alt="" />
            <div className="pDetail">
              <p className="ptitle">Sorting Visualization</p>
              <p className="description">
                A website illustrates sorting algorithms animations on images.
              </p>
              <div className="logo">
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/sorting-visualizer"
                  target="_blank"
                >
                  <img src="image/GitHub-Mark-64px.png" alt="" />
                </a>
                <a
                  className="pgit"
                  href="https://xyzkpsf.github.io/sorting-visualizer/"
                  target="_blank"
                >
                  <img src="image/link.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="secondRow">
          <div className="proj" id="4">
            <img className="pImage" src="image/sayoutloud.jpg" alt="" />
            <div className="pDetail">
              <p className="ptitle">Pronunciation Practice</p>
              <p className="description">
                A speech recognition application for kids to practice
                pronunciation.
              </p>
              <div className="logo">
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/Pronunciation-Practice"
                  target="_blank"
                >
                  <img src="image/GitHub-Mark-64px.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="proj" id="5">
            <img className="pImage" src="image/CV.png" alt="" />
            <div className="pDetail">
              <p className="ptitle">Robust Image Classifier</p>
              <p className="description">
                An adversarial robust classifier based on low-resolution
                specific neural network architecture.
              </p>
              <div className="logo">
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/robust-computer-vision-classifiers-for-low-resolution-images"
                  target="_blank"
                >
                  <img src="image/GitHub-Mark-64px.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="proj" id="6">
            <img className="pImage" src="image/weather.png" alt="" />
            <div className="pDetail">
              <p className="ptitle">Weather Search Web.</p>
              <p className="description">A weather search web app.</p>
              <div className="logo">
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/Weather-web-app"
                  target="_blank"
                >
                  <img src="image/GitHub-Mark-64px.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
