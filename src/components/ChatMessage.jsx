'use client';

import { Bot, User } from 'lucide-react';

// Simple markdown-to-HTML parser for chat messages
function parseMarkdown(text) {
  if (!text) return '';

  let html = text
    // Code blocks (```...```)
    .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
    // Inline code (`...`)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bold (**...**)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic (*...*)
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
    // Unordered list items
    .replace(/^[-•]\s+(.+)/gm, '<li>$1</li>')
    // Ordered list items
    .replace(/^\d+\.\s+(.+)/gm, '<li>$1</li>')
    // Line breaks
    .replace(/\n/g, '<br />');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/((<li>.*?<\/li>(<br \/>)?)+)/g, '<ul>$1</ul>');
  // Clean up <br> inside <ul>
  html = html.replace(/<ul>(.*?)<\/ul>/gs, (match) =>
    match.replace(/<br \/>/g, '')
  );

  return html;
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  const renderContent = () => {
    if (message.parts && message.parts.length > 0) {
      return message.parts.map((part, idx) => {
        if (part.type === 'text') {
          return <span key={idx} dangerouslySetInnerHTML={{ __html: parseMarkdown(part.text) }} />;
        }
        if (part.type === 'file') {
          if (part.mediaType.startsWith('image/')) {
            return (
              <div key={idx} style={{ marginTop: '8px', maxWidth: '100%' }}>
                <img
                  src={part.url}
                  alt={part.filename || 'Uploaded image'}
                  style={{ borderRadius: 'var(--radius-sm)', maxHeight: '200px', maxWidth: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
            );
          }
          if (part.mediaType.startsWith('audio/')) {
            return (
              <div key={idx} style={{ marginTop: '8px' }}>
                <audio src={part.url} controls style={{ maxWidth: '100%' }} />
              </div>
            );
          }
          return (
            <div key={idx} style={{ marginTop: '8px', fontSize: '12px', opacity: 0.8 }}>
              📎 {part.filename || 'File'} ({part.mediaType})
            </div>
          );
        }
        return null;
      });
    }

    return <span dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }} />;
  };

  return (
    <div className={`chat-message ${isUser ? 'user' : 'assistant'}`}>
      <div className="chat-message-avatar">
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>
      <div className="chat-message-bubble">
        {renderContent()}
      </div>
    </div>
  );
}
