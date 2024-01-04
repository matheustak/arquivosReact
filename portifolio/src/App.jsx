import './App.css'

function App() {


  return (

    <header className="site-home-header">
    

<nav className="site-nav">
  <div className="site-nav-left">
  <a className="site-nav-logo" href="matheus" display="block" > Matheus Rocha</a>
 
      <div className="site-nav-content">
        <ul className="nav" role="menu">
          <li className="nav-home" role="menuitem"> <a href='projetos'>PROJETOS</a></li>
          <li className="nav-home" role="menuitem"><a href='contatos'>CONTACT</a></li>
        </ul>

      </div>
      </div>
      </nav>
      <div className='div-background'>
        <img src="src/imagens/Matheus.jpeg" alt="Perfil Matheus rocha" /> 
        
        <h1>Oi, eu sou Matheus</h1>  
       
        <span className='spanfraseLogo'>Escrevo sobre sistemas independentes ou lucrativos, estou cursando analise e desenvolvimento de sistemas.</span>  
        
        <p>Nesse momento estou trabalhando em hum projeto pessoal <br /> desenvolvendo meu portifólio blog do Matheus Rocha. 
        Saiba <br />mais <a className='linkblog' href='blog'>no blog →</a>  </p>

     
        <br />
        <a id="follow-button" className="btn" title="Follow @AlecrimRoc3694 on X" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2FAlecrimRoc3694.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5AlecrimRoc3694&amp;region=follow_link&amp;screen_name=AlecrimRoc3694">
          <i></i>
        <span className="label" id="l">Follow</span>
        
        </a>
       
       
      
      </div>   
    </header>

     

  )
}

export default App
