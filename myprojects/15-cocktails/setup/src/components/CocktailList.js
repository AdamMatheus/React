import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails,loading}=useGlobalContext();
  console.log(cocktails);

  if(loading){
    return ( <Loading/>)
  }
  if (cocktails.length<1) {
    return (<h2 className='section-title'>

      no cocktails matched your search criteria
    
      </h2>
    )
  
  }


  return (
    <sectıon className='section'>
      <h2 className='section-title'> Cocktail List </h2>

      <div className="cocktails-center">
        {cocktails.map((item)=>{
          return (
            <Cocktail key={item.id} {...item}/>
          )

        })}
      </div>
    </sectıon>
  )
}

export default CocktailList
