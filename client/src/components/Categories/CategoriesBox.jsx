import queryString from 'query-string';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoriesBox = ({label,icon: Icon}) => {
    const [params,setParams] = useSearchParams()
    const category = params.get('category')
    console.log(category)
    const navigate =  useNavigate()
    const handleCategoryRoom =()=>{
    //  query string start 
    let currentQuery = {}
    if(params){
        currentQuery = queryString.parse(params.toString())
    }
    const updateQuery = {
        ...currentQuery,
        category: label,
    }
    const url = queryString.stringifyUrl({
        url: '/',
        query: updateQuery
    },
    {skipNull: true}
    )
   navigate(url)
    }
    console.log(category)
    return (
        <div onClick={handleCategoryRoom} className='flex cursor-pointer  flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800   border-transparent text-neutral-500 '>
            <Icon size={26} />
            <div className='text-sm font-medium '>{label}</div>
        </div>
    );
};

export default CategoriesBox;