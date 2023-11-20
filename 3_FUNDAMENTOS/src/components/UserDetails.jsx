

const UserDetails = ({nome,idade,profissao, newPessoa}) => {
  return (
    <div>
        <h2>Detalhes da Pessoa!</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade  >= 18 ?(
             <p>A pessoa pode tirar carteira de habilitação!</p>
             ):(
        <p>A pessoa não pode tirar carteira de habilitação!</p>
        )}
        
        
        
    </div>
  );
};

export default UserDetails;