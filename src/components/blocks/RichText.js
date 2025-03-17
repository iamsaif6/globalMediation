import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function RichText({ content }) {
  return (
    <div className="md:prose-xl leading-[160%] prose max-w-full">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
