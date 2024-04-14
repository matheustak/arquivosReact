import React, { useState } from 'react';

const BlockEditor = ({ isVisible, onClose, blockType }) => {
  const [textareaContent, setTextareaContent] = useState('');

  const formatContent = (content, type) => {
    switch (type) {
      case 'paragraph':
        return `<p>${content}</p>`;
      case 'heading':
        return `<h1>${content}</h1>`;
      case 'code':
        return `<code>${content}</code>`;
      case 'list':
        return `<ul><li>${content}</li></ul>`;
      case 'image':
        return `<img src="${content}" alt="Imagem" />`;
      case 'gallery':
        // Aqui você pode definir o formato para galeria
        return `<div class="gallery">${content}</div>`;
      default:
        return content;
    }
  };

  const handleBlur = () => {
    const formattedContent = formatContent(textareaContent, blockType);
    onClose(formattedContent, blockType);
    setTextareaContent('');
  };

  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <div>
        <p>{blockType.charAt(0).toUpperCase() + blockType.slice(1)}</p>
        <textarea
          value={textareaContent}
          onChange={(e) => setTextareaContent(e.target.value)}
        ></textarea>
        <button onClick={handleBlur}>Adicionar {blockType.charAt(0).toUpperCase() + blockType.slice(1)}</button>
      </div>
    </div>
  );
};

export default BlockEditor;





