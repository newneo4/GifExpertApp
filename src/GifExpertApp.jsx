import   { useState } from 'react'
//import AddCategory from './components/AddCategory'
//import GifGrid from './components/GifGrid'
import { AddCategory, GifGrid } from './components/index';


const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One punch']) 

  const onAddCategory = ( newCategory) => {

    if ( categories.includes(newCategory) ) return; 
    
    console.log("aqui", newCategory)
    setCategories([ newCategory, ...categories ]) 
  }

  return (
    <div>
      {/*titulo*/}
      <h1>GifExpertApp</h1>

      {/*input*/}
      <AddCategory 
        //setCategories = { setCategories }
        onNewCategory = { event => onAddCategory(event) }
      />

      {/*Listado de Gif*/}
      <ol>
        {categories.map( category =>{
          return (
            <GifGrid
              key={category}
              category={ category }
            />
          )
        })}
      </ol>
        {/*Gif team*/}

    </div>
  )
}

export default GifExpertApp
