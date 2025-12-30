import React from 'react';
import styled from 'styled-components';
// Removed unused imports
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;

  .inner {
    display: flex;
    flex-direction: column;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledEducationItem = styled.div`
  background-color: var(--light-navy);
  padding: 25px;
  border-radius: 5px;
  transition: var(--transition);
  border-left: 2px solid var(--green);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: var(--green);
    margin: 0 0 10px;
    font-size: var(--fz-xl);
  }

  .institution {
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    margin-bottom: 10px;
    font-weight: 600;
  }

  .date {
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    margin-bottom: 15px;
    display: block;
  }

  .description {
    color: var(--light-slate);
    font-size: var(--fz-md);
    line-height: 1.5;
  }
`;

const Education = () => {
  const revealContainer = React.useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const education = [
    {
      id: 1,
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'Open University of Kenya',
      date: '2024 - Present',
      description:
        'Ongoing studies in advanced AI concepts, machine learning, deep learning, and natural language processing. Expected graduation in 2026.',
    },
    {
      id: 2,
      degree: 'Bachelor of Education (Technology Education - Computing)',
      institution: 'Moi University',
      date: '2019',
      description:
        'Specialized in computing education with a focus on software development, computer systems, and educational technology.',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Software Engineering',
      issuer: 'ALX (African Leadership Group)',
      date: '2023',
    },
    {
      id: 2,
      title: 'Data Science Professional',
      issuer: 'ALX (African Leadership Group)',
      date: '2023',
    },
    {
      id: 3,
      title: 'AI Agents & Automated Workflows',
      issuer: 'Udemy',
      date: '2023',
    },
    {
      id: 4,
      title: 'AI for Business Leaders',
      issuer: 'Udemy',
      date: '2023',
    },
    {
      id: 5,
      title: 'Machine Learning Specialization',
      issuer: 'Part of MSc AI Coursework',
      date: '2024',
    },
    {
      id: 6,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'In Progress',
    },
  ];

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Education & Certifications</h2>

      <div className="inner">
        <h3>Education</h3>
        <StyledGrid>
          {education.map(edu => (
            <StyledEducationItem key={edu.id}>
              <h3>{edu.degree}</h3>
              <div className="institution">{edu.institution}</div>
              <span className="date">{edu.date}</span>
              <p className="description">{edu.description}</p>
            </StyledEducationItem>
          ))}
        </StyledGrid>

        <h3 style={{ marginTop: '50px' }}>Certifications</h3>
        <StyledGrid>
          {certifications.map(cert => (
            <StyledEducationItem key={cert.id}>
              <h3>{cert.title}</h3>
              <div className="institution">{cert.issuer}</div>
              <span className="date">{cert.date}</span>
            </StyledEducationItem>
          ))}
        </StyledGrid>
      </div>
    </StyledEducationSection>
  );
};

export default Education;
