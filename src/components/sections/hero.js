import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin: 20px 0;
    color: var(--slate);
    line-height: 1.2;
    font-size: clamp(24px, 5vw, 28px);
    font-weight: 500;
  }

  p {
    margin: 20px 0 0;
    max-width: 600px;
    line-height: 1.6;
  }

  .social-links {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 15px;

    a {
      color: var(--green);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--green);

      &:hover {
        background: rgba(100, 255, 218, 0.1);
        transform: translateY(-3px);
      }

      &.cv-download {
        width: auto;
        padding: 0.75rem 1.5rem;
        border-radius: var(--border-radius);
        text-decoration: none;

        &:hover {
          background: rgba(100, 255, 218, 0.1);
        }
      }
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
  }

  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Evance Odhiambo.</h2>;
  const three = (
    <h3 className="big-heading">
      Full-Stack Software Engineer | AI-Integrated Systems | Machine Learning | Knowledge Graphs &
      Semantics
    </h3>
  );
  const four = (
    <>
      <p>
        I'm a Full-Stack Software Engineer with 5+ years of experience designing, building, and
        deploying scalable web applications and data-driven systems. I specialize in backend APIs,
        frontend interfaces, relational databases, and cloud deployment, with hands-on experience
        integrating machine learning models and knowledge graph–based systems into production
        applications.
      </p>
    </>
  );

  const socialLinks = (
    <div className="social-links">
      <a
        href="https://linkedin.com/in/evance-o"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/evancedev" target="_blank" rel="noreferrer" aria-label="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="/resume.pdf" download="Evance_Odhiambo_Resume.pdf" className="cv-download">
        Download CV
      </a>
    </div>
  );

  const five = (
    <div className="cta-buttons">
      <a
        className="email-link"
        href="mailto:evansodhams@gmail.com"
        target="_blank"
        rel="noreferrer">
        Get In Touch
      </a>
      {socialLinks}
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
