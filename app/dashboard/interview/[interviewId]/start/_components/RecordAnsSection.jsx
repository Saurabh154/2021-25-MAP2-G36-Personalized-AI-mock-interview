"use client";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModal";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";

function RecordAnsSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((results) =>
      setUserAnswer((prevAns) => prevAns + results?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 5) {
      UpdateUserAnswer();
    }
    
  }, [userAnswer]);
  const StartStopUserRecording = async () => {
    if (isRecording) {
      stopSpeechToText();     
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
   
    setLoading(true);
    const feedbackPrompt =
      "Question: " +
      mockInterviewQuestion[activeQuestionIndex]?.Question +
      ", User Answer:" +
      userAnswer +
      ",Depend on question and user answer for given interview question " +
      "please give us rating for answer and feedback as area of improvement if any" +
      "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field ";

      
    const result = await chatSession.sendMessage(feedbackPrompt);

    const mockJsonResp = result.response
      .text()
      .replace("```json", "") 
      .replace("```", "");

    // console.log(mockJsonResp);
    // console.log(userAnswer);
    const JsonFeedbackResp = JSON.parse(mockJsonResp);
   
    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question:  mockInterviewQuestion[activeQuestionIndex]?.Question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.Answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp?.feedback,
      rating: JsonFeedbackResp?.rating,
      userEmail: user.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY"),
    });

    if (resp) {
      toast("User answer recorded successfully");
      setUserAnswer('');
      setResults([]);
    } 
    setResults([]);
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col my-16 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-3"
        onClick={StartStopUserRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2 items-center justify-center">
            <StopCircle />
            Stop Recording
          </h2>
        ) : (
          <h2 className="text-primary flex gap-2 items-center">
            <Mic />
            Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
}

export default RecordAnsSection;


