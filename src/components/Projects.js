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
                A version-control system written by Java that mimics some of the
                basic features of the popular system Git.
              </p>
              <a
                className="pgit"
                href="https://github.com/xyzkpsf/Gitlet"
                target="_blank"
              >
                <img src="image/GitHub-Mark-32px.png" alt="" />
              </a>
            </div>
          </div>
          <div className="proj" id="2">
            <img className="pImage" src="image/Math Practice.JPG" alt="" />
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
                  <img src="image/GitHub-Mark-32px.png" alt="" />
                </a>
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/Math-Arithmetic-Practice"
                  target="_blank"
                >
                  <img src="image/link.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="proj" id="3">
            <img className="pImage" src="image/sorting.jpg" alt="" />
            <div className="pDetail">
              <p className="ptitle">Sorting Slgorithms Visualization</p>
              <p className="description">
                Visualization of different sorting algorithms on different
                images.
              </p>
              <div className="logo">
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/sorting-visualizer"
                  target="_blank"
                >
                  <img src="image/GitHub-Mark-32px.png" alt="" />
                </a>
                <a
                  className="pgit"
                  href="https://github.com/xyzkpsf/Math-Arithmetic-Practice"
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
            box
          </div>
          <div className="proj" id="5">
            box
          </div>
          <div className="proj" id="6">
            box
          </div>
        </div>
      </div>
    </div>
  );
}
