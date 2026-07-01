'use client';

import { useState } from 'react';
import { Play, ChevronRight, RotateCcw, ArrowLeft, CheckCircle, XCircle, HelpCircle, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function QuizEngine({ quiz }) {
  const [state, setState] = useState('idle'); // idle | playing | finished
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentIndex];

  const handleStart = () => {
    setState('playing');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
  };

  const handleSelectAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    setAnswers((prev) => [
      ...prev,
      {
        questionIndex: currentIndex,
        selected: index,
        correct: index === currentQuestion.correctAnswer,
      },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setState('finished');
    }
  };

  const correctCount = answers.filter((a) => a.correct).length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  const getScoreClass = () => {
    if (scorePercent >= 80) return 'excellent';
    if (scorePercent >= 60) return 'good';
    if (scorePercent >= 40) return 'average';
    return 'poor';
  };

  const getMotivation = () => {
    if (scorePercent >= 80) return 'Luar biasa! Kamu menguasai materi ini dengan sangat baik! 🎉';
    if (scorePercent >= 60) return 'Bagus! Tinggal sedikit lagi untuk mencapai hasil sempurna. 💪';
    if (scorePercent >= 40) return 'Lumayan! Coba ulangi materi dan kerjakan lagi ya. 📖';
    return 'Jangan menyerah! Pelajari kembali materinya dan coba lagi. Kamu pasti bisa! 🔥';
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  // ===== START SCREEN =====
  if (state === 'idle') {
    return (
      <div className="quiz-start">
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚡</div>
        <h1>{quiz.title}</h1>
        <p>{quiz.description}</p>

        <div className="quiz-info-grid">
          <div className="quiz-info-item">
            <div className="number">{totalQuestions}</div>
            <div className="label">Soal</div>
          </div>
          <div className="quiz-info-item">
            <div className="number">{quiz.difficulty}</div>
            <div className="label">Tingkat</div>
          </div>
          <div className="quiz-info-item">
            <div className="number">{totalQuestions * 2}</div>
            <div className="label">Menit</div>
          </div>
        </div>

        <button className="btn btn-primary btn-lg" onClick={handleStart}>
          <Play size={20} />
          Mulai Kuis
        </button>
      </div>
    );
  }

  // ===== RESULT SCREEN =====
  if (state === 'finished') {
    return (
      <div className="quiz-result">
        <div className={`quiz-result-score ${getScoreClass()}`}>
          {scorePercent}%
          <small>SKOR</small>
        </div>

        <h2>{scorePercent >= 60 ? 'Selamat! 🎉' : 'Tetap Semangat! 💪'}</h2>
        <p>{getMotivation()}</p>

        <div className="quiz-result-stats">
          <div className="quiz-result-stat">
            <div className="number" style={{ color: 'var(--secondary)' }}>{correctCount}</div>
            <div className="label">Benar</div>
          </div>
          <div className="quiz-result-stat">
            <div className="number" style={{ color: 'var(--danger)' }}>{totalQuestions - correctCount}</div>
            <div className="label">Salah</div>
          </div>
          <div className="quiz-result-stat">
            <div className="number" style={{ color: 'var(--primary)' }}>{totalQuestions}</div>
            <div className="label">Total Soal</div>
          </div>
        </div>

        <div className="quiz-result-actions">
          <button className="btn btn-primary" onClick={handleStart}>
            <RotateCcw size={18} />
            Ulangi Kuis
          </button>
          {quiz.relatedMateri && (
            <Link href={`/materi/${quiz.relatedMateri}`} className="btn btn-secondary">
              <ArrowLeft size={18} />
              Kembali ke Materi
            </Link>
          )}
          <Link href="/kuis" className="btn btn-secondary">
            Kuis Lainnya
          </Link>
        </div>
      </div>
    );
  }

  // ===== PLAYING SCREEN =====
  return (
    <div>
      <div className="quiz-progress">
        <div className="quiz-progress-header">
          <span>Soal {currentIndex + 1} dari {totalQuestions}</span>
          <span>{Math.round(((currentIndex + 1) / totalQuestions) * 100)}%</span>
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-question-card">
        <div className="quiz-question-number">
          Soal {currentIndex + 1}
        </div>
        <div className="quiz-question-text">
          {currentQuestion.question}
        </div>

        <div className="quiz-options">
          {currentQuestion.options.map((option, idx) => {
            let optionClass = 'quiz-option';
            if (selectedAnswer !== null) {
              optionClass += ' disabled';
              if (idx === currentQuestion.correctAnswer) {
                optionClass += ' correct';
              } else if (idx === selectedAnswer && idx !== currentQuestion.correctAnswer) {
                optionClass += ' wrong';
              }
            } else if (idx === selectedAnswer) {
              optionClass += ' selected';
            }

            return (
              <button
                key={idx}
                className={optionClass}
                onClick={() => handleSelectAnswer(idx)}
                disabled={selectedAnswer !== null}
              >
                <span className="quiz-option-letter">{optionLetters[idx]}</span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="quiz-explanation">
            <strong>
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <><CheckCircle size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />Benar! </>
              ) : (
                <><XCircle size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />Salah! Jawaban yang benar: {optionLetters[currentQuestion.correctAnswer]}. </>
              )}
            </strong>
            <br />
            {currentQuestion.explanation}
          </div>
        )}

        {selectedAnswer !== null && (
          <div className="quiz-actions">
            <button className="btn btn-primary" onClick={handleNext}>
              {currentIndex < totalQuestions - 1 ? (
                <>Soal Berikutnya <ChevronRight size={18} /></>
              ) : (
                <>Lihat Hasil <Trophy size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
