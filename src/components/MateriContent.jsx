'use client';

export default function MateriContent({ chapter }) {
  return (
    <div
      className="materi-content"
      dangerouslySetInnerHTML={{ __html: chapter.content }}
    />
  );
}
