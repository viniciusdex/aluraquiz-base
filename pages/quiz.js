import React from "react";
import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground";

function QuizPage() {
  return <QuizBackground backgroundImage={db.bg} />;
}

export default QuizPage;
