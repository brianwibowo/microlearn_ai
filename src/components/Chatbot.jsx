'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { MessageCircle, X, Send, Bot, Paperclip } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { canSendMessage, recordMessage, getRemainingMessages, isWarning, isLimitReached } from '@/lib/chatLimit';
import { DAILY_MESSAGE_LIMIT } from '@/lib/constants';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [remaining, setRemaining] = useState(DAILY_MESSAGE_LIMIT);
  const [showSneakPeek, setShowSneakPeek] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const hasMounted = useRef(false);


  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    messages: [
      {
        id: 'welcome',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: 'Halo! 👋 Saya **MicroLearn AI Assistant**, asisten belajar Instalasi Penerangan Listrik kamu.\n\nSaya bisa bantu:\n- Menjelaskan materi kelistrikan\n- Memberikan contoh soal & pembahasan\n- Menjawab pertanyaan seputar instalasi listrik\n\nAda yang bisa saya bantu? ⚡',
          },
        ],
      },
    ],
    onFinish: () => {
      updateRemaining();
    },
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const updateRemaining = () => {
    setRemaining(getRemainingMessages());
  };

  // Show sneak peek after mount (avoids double animation from Strict Mode)
  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;
    const timer = setTimeout(() => setShowSneakPeek(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    updateRemaining();
  }, [isOpen]);

  // Update remaining on finish
  useEffect(() => {
    if (!isLoading) {
      updateRemaining();
    }
  }, [isLoading]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFiles((prev) => [...prev, ...Array.from(e.target.files)]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ((!input.trim() && selectedFiles.length === 0) || isLoading) return;

    if (!canSendMessage()) {
      return;
    }

    recordMessage();
    
    // Convert File array to FileList
    let files = undefined;
    if (selectedFiles.length > 0) {
      const dataTransfer = new DataTransfer();
      selectedFiles.forEach((file) => dataTransfer.items.add(file));
      files = dataTransfer.files;
    }

    sendMessage({ text: input, files });
    setInput('');
    setSelectedFiles([]);
  };

  const quotaClass = isLimitReached() ? 'limit' : isWarning() ? 'warning' : '';

  return (
    <>
      {/* Floating trigger button + Sneak Peek */}
      {!isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 'var(--space-lg)',
            right: 'var(--space-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 'var(--z-chatbot)',
          }}
        >
          {/* Sneak peek bubble */}
          {showSneakPeek && (
            <div
              className="animate-fade-in"
              style={{
                background: 'var(--white)',
                border: '1px solid var(--neutral-200)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 16px',
                boxShadow: 'var(--shadow-lg)',
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--neutral-800)',
                whiteSpace: 'nowrap',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>⚡ Tanya AI:</span>
              <span>Ayo konsultasi & belajar listrik!</span>
              
              {/* Close sneak peek button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSneakPeek(false);
                }}
                style={{
                  color: 'var(--neutral-400)',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '4px'
                }}
                aria-label="Tutup sneak peek"
              >
                <X size={12} />
              </button>

              {/* Arrow indicator */}
              <div
                style={{
                  position: 'absolute',
                  right: '-6px',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(45deg)',
                  width: '10px',
                  height: '10px',
                  background: 'var(--white)',
                  borderRight: '1px solid var(--neutral-200)',
                  borderTop: '1px solid var(--neutral-200)',
                }}
              />
            </div>
          )}

          <button
            className="chatbot-trigger"
            onClick={() => {
              setIsOpen(true);
              setShowSneakPeek(false);
            }}
            aria-label="Buka chatbot"
            style={{ position: 'static' }}
          >
            <MessageCircle size={26} />
            <span className="chatbot-trigger-pulse" />
          </button>
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="chatbot-panel">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <Bot size={18} />
              </div>
              <div className="chatbot-header-text">
                <h3>MicroLearn AI</h3>
                <p>Asisten Belajar Listrik</p>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chatbot"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="chat-message assistant">
                <div className="chat-message-avatar">
                  <Bot size={14} />
                </div>
                <div className="chat-message-bubble">
                  <div className="typing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="chat-message assistant">
                <div className="chat-message-avatar">
                  <Bot size={14} />
                </div>
                <div className="chat-message-bubble" style={{ color: 'var(--danger)' }}>
                  Maaf, terjadi kesalahan. Silakan coba lagi nanti.
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quota indicator */}
          <div className={`chatbot-quota ${quotaClass}`}>
            {isLimitReached()
              ? '⚠️ Kuota harian habis. Coba lagi besok!'
              : `Sisa ${remaining} dari ${DAILY_MESSAGE_LIMIT} pesan hari ini`}
          </div>

          {/* Selected files preview */}
          {selectedFiles.length > 0 && (
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                padding: '8px 12px',
                background: 'var(--neutral-100)',
                borderTop: '1px solid var(--neutral-200)',
                flexShrink: 0,
              }}
            >
              {selectedFiles.map((file, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'var(--white)',
                    border: '1px solid var(--neutral-200)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '11px',
                    color: 'var(--neutral-700)',
                  }}
                >
                  <span style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedFiles((prev) => prev.filter((_, i) => i !== idx))}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--neutral-400)',
                    }}
                    aria-label="Hapus file"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Input */}
          <form className="chatbot-input" onSubmit={onSubmit}>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              multiple
              accept="image/*,audio/*"
              onChange={handleFileChange}
            />
            
            {/* Attachment Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              style={{
                color: 'var(--neutral-500)',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background var(--transition-fast)',
              }}
              disabled={isLimitReached()}
              aria-label="Lampirkan file"
            >
              <Paperclip size={20} />
            </button>

            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isLimitReached()
                  ? 'Kuota habis untuk hari ini...'
                  : 'Tanyakan sesuatu...'
              }
              disabled={isLimitReached()}
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={(!input.trim() && selectedFiles.length === 0) || isLoading || isLimitReached()}
              aria-label="Kirim pesan"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
