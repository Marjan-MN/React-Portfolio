import { FaGithub } from "react-icons/fa";
export default function Project() {
  return (
    <>
      <a
        href="https://marjannazari.com/playlistapp/"
        className="projectContainer"
      >
        <div className="playlistPro">
          <div className="projectOverlay">
            PlaylistPro
            <a href="https://github.com/Marjan-MN/PlaylistPro">
              <FaGithub className="git" />
            </a>
          </div>
        </div>
      </a>
      <a href="#" className="projectContainer">
        <div className="lifeManager">
          <div className="projectOverlay">Life Manager <a href="https://github.com/Marjan-MN/Life-Manager">
              <FaGithub className="git" />
            </a></div>
        </div>
      </a>
    </>
  );
}
