import React, { useState ,useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function Sidebar({filters,tempFilterJob,setTempFilterJob,
    handleApplyFilter
}) {

    const { t } = useTranslation();
    const [check,setCheck] = useState(tempFilterJob)
    const handleClearAll =() => {
        setCheck({
            company: [],
            area: [],
            date: [],
            salary: [],
            skills: [],
            experience: [],
            education: []
        })
        handleApplyFilter({})
    }
    const [filtersApplied, setFiltersApplied] = useState(0)

    useEffect(()=>{
        let count = 0
         Object.keys(check).forEach((key)=>{
            if(check[key].length)
            count = count+ 1 
        })
        setFiltersApplied(count)
    },[check])
    const applyFilter = async()=>{
        await setTempFilterJob(check)
      

        handleApplyFilter(check)
    }
    //   console.log(":::::::::::::::::::::::tempFilterJobs",tempFilterJob)
    const handleCheckBoxChange= (category,option) => {

        let previous = check?.[category]?.includes(option) ? true : false
        // console.log("~~~~~~~~~~~~~~~~~~~~~~category and option",category,option)
        const obj = check?.[category]
        // console.log("---------------->check",check)
        // console.log("+++++++++++++++++obj",obj)
        previous = !previous
        if(previous)
        {
            setCheck({
                ...check,
                [category]: [...obj,option]
            })
        }
        else if(!previous && obj?.includes(option))
        {
            setCheck({
                ...check,
                [category]: obj?.filter(item => item!== option)
            })            
        }
    }

  const filterSpace = filters?.map((t,index)=>(
    <div key={index} className=''>

         <div className='pt-3'>
            <div className='h-px bg-gray-800'>
            </div>
        </div>

        <p className='text-white capitalize text-base  pt-10  px-4'>{t.filter}</p>
        {
            t?.options?.map((option,subindex)=>(

                <div key={subindex} className='p-1 px-4'>
                    <input 
                        key={index}
                        className='form-checkbox h-4 w-4 text-pink-500 rounded focus:ring-pink-500 border-gray-300 bg-transparent'
                        type='checkbox'
                        name={option}
                        onChange={()=>handleCheckBoxChange(t.filter,option)}
                        checked={check?.[t.filter]?.includes(option)}
                    />
                    <label htmlFor={option} className="ml-4 text-xs text-white">
                        {option}
                    </label>
                </div>

               
            ))
        }
    </div>

  ))



  return (
    <div className=' rounded-lg w-full '>

        <div className=' flex flex-col border-2 border-gray-950  rounded-lg w-fit h-full '>
        
            <div className='flex items-center justify-between p-4'>
                <p className=' text-sm text-white'>FILTER  BY</p>
                <div className='ml-16'>
                <label className=" text-sm text-white  lowercase dark:text-gray-400">{filtersApplied} filters applied</label>
                <button onClick={ handleClearAll} className="text-sm ml-3 text-white border-b border-gray-500 dark:text-gray-400">Clear All</button>
                </div>
                
            </div>
            <div className='flex items-center justify-center '>
             <button onClick={applyFilter} className='flex appearance-none rounded-full justify-center p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 w-fit text-white hover:bg-slate-500'>Apply Filters</button>
            </div>
            
            <div className='w-full overflow-scroll'>
                {filterSpace}
            </div>

            

        </div>
       






    </div>
  )
}

export default Sidebar