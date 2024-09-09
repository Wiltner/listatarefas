import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App(){
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  },[tarefas]);

  const addTarefa = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('')
  },[input, tarefas]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return(
    <div>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
            </li>
          ))}
        </ul>
        <input type='text' value={input} onChange={e=> setInput(e.target.value)}></input>
        <button type='button' onClick={addTarefa}>Adicionar</button>
    </div>
  )
}

export default App;
