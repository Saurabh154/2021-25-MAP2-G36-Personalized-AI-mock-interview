// In _components/QuestionSection.jsx

import { Lightbulb, LightbulbIcon, Volume2, Volume2Icon } from 'lucide-react';
import React from 'react';

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex = 0 }) => {
  // Check if mockInterviewQuestion is available and is an array
  if (!mockInterviewQuestion || !Array.isArray(mockInterviewQuestion)) {
    return <p>Loading questions...</p>;
  }

  const textToSpeach = (text) => {
    if('speechSynthesis' in Window){
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert('Sorry, Your browser does not support text to speech')
    }
  }
  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index}
            className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer
            ${activeQuestionIndex === index && 'bg-blue-500 text-white'}`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div> 

      <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.Question}</h2>

      <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.Question)}/>

      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center text-primary'>
          <LightbulbIcon/>
          <strong>Note</strong>
          </h2>
          <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
      </div>
    </div>
  );
};

export default QuestionSection;
