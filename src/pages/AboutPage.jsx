// This is a static page mocking an "About Us" section for our fake user data
import me from "../assets/Frame-7.png";

export default function AboutPage() {
  return (
    <div className="about-container pt-4">
      <div>
        <h2>
          Hello World! <br />
          My name is Marjan,
        </h2>
        <p className="about-text">
          A passionate full stack developer with a keen interest in exploring
          new technologies and learning new skills. With my expertise in both
          front-end and back-end development, I strive to create dynamic and
          user-friendly web applications that meet the needs of modern
          businesses. I also have some experience in UX/UI design, which helps
          me to create intuitive interfaces that enhance the user experience. In
          my free time, I enjoy indulging in my love for photography, capturing
          beautiful moments, and creating visually appealing images.
        </p>
      </div>
      <div>
      <img src={me} alt="me" className="me" />
      </div>
    </div>
  );
}
