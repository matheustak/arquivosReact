import './Myform.css'

import {useState} from 'react'

const MyForm = () => {

// 3- gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    };

    console.log(name);
    console.log(email);

  return (

    <div>
    {/* 1 - criacao de form */}
    <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
            <span>E-mail</span>
            <input type="email"
             name="email" 
             placeholder="Digite o seu e-mail"
            onChange ={(e) => setEmail(e.target.value)} />
        </label>

        <input type="submit"  value="Enviar"/> 
    </form>

    </div>
  )
}

export default MyForm