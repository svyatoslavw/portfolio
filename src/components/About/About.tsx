import { GithubIcon } from "../icons/GithubIcon"

import "./about.css"

const About = () => {
  return (
    <div className="about center section">
      <h1>
        Hi, I am <span className="about__name ">Sviatoslav.</span>
      </h1>

      <h2 className="about__role heading-text">A Frontend Developer.</h2>
      <p className="about__desc">
        I am a student of computer science in Computer Engineering and Management at the Kharkov
        University of Radio Electronics. Here you'll find a combination of my creative endeavors and
        understanding of the world of technology. Join me as I move through the future one key at a
        time.
      </p>

      <div className="about__contact center">
        <a>
          <button type="button" className="btn btn--outline">
            Resume
          </button>
        </a>
        <a href="https://github.com/svyatoslavw" aria-label="github" className="link link--icon">
          <GithubIcon width={30} height={30} />
        </a>
      </div>
    </div>
  )
}

export default About
