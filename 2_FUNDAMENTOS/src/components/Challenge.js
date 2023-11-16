const Challenge =() =>{
    const handleMyEvent = (e) => {
  
       if(e){
        return <h1>{4+6}</h1>
       }
   
    };

    return(

        <div>
            <h1>numero 4 e numero 6</h1>
           
            <button onClick={handleMyEvent}>soma</button>

        <div>
        {handleMyEvent(true)}
        </div>    
        </div>

     

    );


};


export default Challenge;