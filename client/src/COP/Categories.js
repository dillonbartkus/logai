import React from 'react'

export default function Categories({ products, setSearchTerm }) {

    const filterCategories = () => {
        let categoryArray = []
        products.forEach( item => {
            if (categoryArray.includes(item.type)){
                return
            } else {
                categoryArray.push(item.type)
            }
        })
        return categoryArray.map( (category, id) => {
            return <span
            onClick = { () => setSearchTerm(category)}
            key = {id} >{category}</span>
        })
    }

    return(

        <div className="categorylist">

            <h4>Categories:</h4>

            {
                products &&
                <>
                <span
                onClick = {() => setSearchTerm('all')}
                >All Products</span>
                {filterCategories()}
                </>
            }
            
        </div>
    )
}