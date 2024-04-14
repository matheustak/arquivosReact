import React, { useState , useRef} from 'react';
import style from'./styles.module.css';

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [codes, setCodes] = useState([]); // Novo estado para blocos de código
  const [selectedType, setSelectedType] = useState('');
  const [textareaContent, setTextareaContent] = useState('');
  const textAreaRef = useRef(null);
  const handleAddBlock = () => {
    const newBlock = { id: Date.now(), content: textareaContent };

    if (selectedType === 'paragraph') {
      setParagraphs([...paragraphs, newBlock]);
    } else if (selectedType === 'heading') {
      setHeadings([...headings, newBlock]);
    } else if (selectedType === 'code') { // Adicionado bloco de código
      setCodes([...codes, newBlock]);
    }

    setSelectedType('');
    setTextareaContent('');
  };

  const handleInputChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaContent(e.target.value);
  };

  const handleDeleteBlock = (id, type) => {
    if (type === 'paragraph') {
      const updatedBlocks = paragraphs.filter((block) => block.id !== id);
      setParagraphs(updatedBlocks);
    } else if (type === 'heading') {
      const updatedBlocks = headings.filter((block) => block.id !== id);
      setHeadings(updatedBlocks);
    } else if (type === 'code') { // Removido bloco de código
      const updatedBlocks = codes.filter((block) => block.id !== id);
      setCodes(updatedBlocks);
    }
  };
  const adjustTextareaHeight = () => {
    const textArea = textAreaRef.current;
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  const handleCopyCode = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      alert('Código copiado com sucesso!');
    } catch (error) {
      console.error('Falha ao copiar o código:', error);
      alert('Erro ao copiar o código. Por favor, tente novamente.');
    }
  };
  return (
    <div className={style.container}>
      <select value={selectedType} onChange={handleInputChange}>
        <option value="">Selecione um tipo de bloco</option>
        <option value="paragraph">Parágrafo</option>
        <option value="heading">Título</option>
        <option value="code">Código</option> {/* Nova opção para bloco de código */}
      </select>
      {selectedType && (
        <div>
         <textarea
  ref={textAreaRef}
  className={style.textbutton}
  placeholder={`Digite seu ${selectedType}`}
  value={textareaContent}
  onChange={handleTextareaChange}
  onInput={adjustTextareaHeight}
  rows={1}
/>
          <button className={style.textbutton} onClick={handleAddBlock}>
            Adicionar {selectedType}
          </button>
        </div>
      )}
      <div>
        <h3>Conteúdo do Editor</h3>
        {headings.map((block) => (
          <div className={style.block} key={block.id}>
            <h1>{block.content}</h1>
            <button onClick={() => handleDeleteBlock(block.id, 'heading')}>Excluir</button>
          </div>
        ))}
        {paragraphs.map((block) => (
          <div className={style.block} key={block.id}>
            <p>{block.content}</p>
            <button onClick={() => handleDeleteBlock(block.id, 'paragraph')}>Excluir</button>
          </div>
        ))}
        
        {codes.map((block) => ( // Novo mapeamento para blocos de código
          <div className={style.block} key={block.id}>
            <button className={style.copyButton} onClick={() => handleCopyCode(block.content)}>Copiar</button>
            <pre>{block.content}</pre>
            
            <button onClick={() => handleDeleteBlock(block.id, 'code')}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
