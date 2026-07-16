'use client';

import { useState, useEffect } from 'react';
import { Play, ChevronRight, RotateCcw, ArrowLeft, CheckCircle, XCircle, Trophy, Clock, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function QuizEngine({ quiz }) {
  const [state, setState] = useState('idle'); // idle | playing | finished
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentIndex];

  const handleStart = () => {
    setState('playing');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setTimeLeft(totalQuestions * 60); // 1 menit per soal
  };

  // 1. Timer Countdown Effect
  useEffect(() => {
    if (state !== 'playing') return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setState('finished'); // Auto-submit ketika waktu habis
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state]);

  // 2. Tab close/reload blocker (beforeunload)
  useEffect(() => {
    if (state !== 'playing') return;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = 'Kuis sedang berlangsung! Apakah Anda yakin ingin keluar? Semua kemajuan kuis Anda akan hilang.';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [state]);

  // 3. Client-side navigation blocker (intercepts clicks on anchor links)
  useEffect(() => {
    if (state !== 'playing') return;

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        // Abaikan link jika tujuannya tidak memicu perpindahan halaman keluar (misal '#' kosong)
        const href = target.getAttribute('href');
        if (href && href !== '#' && !href.startsWith('javascript:')) {
          const confirmLeave = window.confirm(
            'Kuis sedang berlangsung! Jika Anda keluar halaman sekarang, seluruh jawaban Anda akan hilang. Apakah Anda yakin ingin keluar dan membatalkan kuis?'
          );
          if (!confirmLeave) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, true); // Gunakan capture phase
    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
    };
  }, [state]);

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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
            <div className="number">{totalQuestions} Menit</div>
            <div className="label">Batas Waktu</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--danger)',
          fontSize: 'var(--fs-small)',
          fontWeight: 500,
          marginBottom: '24px',
          textAlign: 'left'
        }}>
          <AlertTriangle size={20} style={{ flexShrink: 0 }} />
          <span>Aturan Ketat: Kuis menggunakan timer berjalan. Selama kuis berlangsung, Anda tidak diizinkan meninggalkan halaman atau menutup tab tanpa menyelesaikan kuis.</span>
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

        {/* Zeus Mascot Reaksi */}
        <div style={{ margin: '16px 0' }}>
          <img 
            src={scorePercent >= 60 ? '/mascot/zeus-pass.png' : '/mascot/zeus-fail.png'} 
            alt={scorePercent >= 60 ? 'Zeus merayakan keberhasilan' : 'Zeus memberi semangat'}
            width={140}
            height={140}
            style={{ 
              filter: scorePercent >= 60 
                ? 'drop-shadow(0 6px 16px rgba(56, 189, 248, 0.3))' 
                : 'drop-shadow(0 6px 16px rgba(100, 116, 139, 0.3))',
              animation: 'floatMascot 3s ease-in-out infinite',
            }}
          />
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
  const timeWarning = timeLeft < 30; // Warn if less than 30s

  return (
    <div>
      {/* Strict Countdown Timer Banner */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: timeWarning ? 'var(--danger)' : 'var(--primary-dark)',
        color: '#FFFFFF',
        padding: '12px 20px',
        borderRadius: 'var(--radius-md)',
        marginBottom: '16px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'background-color 0.3s ease',
        fontWeight: 600
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--fs-small)' }}>
          <Clock size={16} />
          <span>SISA WAKTU MENGERJAKAN:</span>
        </div>
        <span style={{
          fontSize: '1.1rem',
          fontFamily: 'monospace',
          background: 'rgba(0,0,0,0.25)',
          padding: '4px 10px',
          borderRadius: '4px',
          letterSpacing: '1px',
          animation: timeWarning ? 'pulse 1s infinite' : 'none'
        }}>
          {formatTime(timeLeft)}
        </span>
      </div>

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
