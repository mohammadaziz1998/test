import styled from 'styled-components';
import Heading from '../Heading';
import { useState } from 'react';
import Button from '../Button';

const questions = [
  {
    id: 1,
    question: 'Is Firebee Safe?',
    answer:
      'Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. ',
  },
  {
    id: 2,
    question: 'How Does Firebee work?',
    answer: `Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.
Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.
Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize.
Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake.
Firebee signal is 3000 times less powerful than a smartphone and completely safe to use.`,
  },
  {
    id: 3,
    question: 'Will Firebee Fit on My Head? ',
    answer: `Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.
`,
  },
  {
    id: 4,
    question: 'What If I want the signal to stop? ',
    answer: `Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.`,
  },
  {
    id: 5,
    question: 'How do you charge Firebee?',
    answer: `Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. `,
  },
];

const StyledQuestions = styled.div`
  text-align: center;
  margin: 2rem 0 6rem 0;
`;
const StyledAskedQuestions = styled.div`
  div:last-child {
    border-bottom: 3px solid var(--color-black-primary);
  }
  @media (max-width: 850px) {
    margin-inline: 1rem;
  }
`;

const StyledFullQuestion = styled.div`
  margin-inline: auto;
  max-width: 780px;
  text-align: start;
`;

const StyledQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
  border-top: 3px solid var(--color-black-primary);
`;

const StyledAnswer = styled.span``;
function Questions() {
  const [isOpen, setIsopen] = useState(null);

  function toggle(i) {
    if (isOpen === i) return setIsopen(null);
    setIsopen(i);
  }
  return (
    <StyledQuestions>
      <Heading size="headParagraph">Frequently Asked Questions</Heading>
      <StyledAskedQuestions>
        {questions.map((question) => (
          <StyledFullQuestion key={question.id}>
            <StyledQuestion>
              <Heading size="question">{question.question}</Heading>
              <Button onClick={() => toggle(question.id)} size="icon">
                {isOpen === question.id ? '-' : '+'}
              </Button>
            </StyledQuestion>
            <StyledAnswer>
              {isOpen === question.id ? (
                <Heading size="answer">{question.answer.slice('.')}</Heading>
              ) : null}
            </StyledAnswer>
          </StyledFullQuestion>
        ))}
      </StyledAskedQuestions>
    </StyledQuestions>
  );
}

export default Questions;
