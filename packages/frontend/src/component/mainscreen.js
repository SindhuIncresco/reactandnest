import React, { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import Module from "./module";
import { useTranslation } from 'react-i18next'; 
import ReactPaginate from 'react-paginate';


function Screen (){
    const [alljob, setAllJob] = useState([]);
    const { t ,i18n } = useTranslation();
    const [lang, setLang] = useState(null);
    const [sort, setSort] = useState();
    const [filteredJobs, setFilteredJobs] = useState([]);

  
    const [tempFilterJob,setTempFilterJob] = useState({
        company: [],
        location: [],
        date: [],
        skill: [],
        education: []})
   
    // console.log("tempFilterJob in mainscreen",tempFilterJob)





    //pagenation
 
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(5);
  
    const offset = currentPage * perPage;
    const pageCount = Math.ceil(alljob.length / perPage);
    console.log(alljob.length )
    const handlePageChange = (selectedPage) => {
      const newPage = selectedPage.selected;
      setCurrentPage(newPage);
    };
  
    
    //pagenation







    const filters = [  {
        filter:"company",
       options : [ "ABC Company", "XYZ Corporation", "Design Studio","Global Marketing Agency"]
       },
    {
        filter: "location",
  options: [ "New York","Mumbai","London","canada"]
    },
    {
         filter: "date",
        options : ["Last 24 hours", "Last 48 hours", "Last 7 days", "Last 14 days"]
    },
    {
        filter: "skill",
        options : ["JavaScript"," HTML","SQL","CSS"]
    },
    {
        filter:"education",
        options : ["B.E", "B.Tech", "M.E", "M.Tech"]
    }
]
    const handleLang = (event) => {
        const selectedLang = event.target.value;
        setLang(selectedLang || 'en');
        i18n.changeLanguage(selectedLang ||'en');
};
const handleApplyFilter = (filteredValues) => {

    console.log( filteredValues);
    axios.post('/job',filteredValues)
    .then(response => {
      setAllJob(response.data);
    })
    .catch(error => console.log("in handleApplyFilter ", error));
  }
  const handleSort = (event) => {
    setSort(event.target.value);
    axios.post('/job/sort', {alljob, 'sort' :sort })
      .then(response => {
        setAllJob(response.data);
      })
      .catch(error => console.log(error));
  }
  console.log(sort)
    useEffect(() => {
        axios.get('/job')
            .then(response => {
              setAllJob(response.data);
           
            })
            .catch(error => {
                console.error("in get",error);
            });
    }, [lang]);
    const handleSearch = (searchQuery) => {
      const filtered = alljob.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredJobs(filtered);
    };
    

return(    <div className="mx-auto  bg-[#171C28] gap-4 w-full  min-h-screen">
<div className=" w-full  ">
{/* <Topbar lang={lang} handleLang={handleLang} 
/> */}
<Topbar lang={lang} handleLang={handleLang} handleSearch={handleSearch} />

</div>
<div className="px-16">
<div className="grid  grid-cols-11 ">
  <div className="col-span-3   bottom-20   rounded-lg ">
  {/* <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Filter BY</label> */}


      {/* <hr class="h-px w- bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
    <Sidebar 
     filters={filters} 
     tempFilterJob={tempFilterJob} 
     setTempFilterJob={setTempFilterJob} 
     handleApplyFilter={handleApplyFilter}
    />
  </div>
  <div className="col-span-8 pl-2   rounded-lg">
  <div class=" mb-6 w-full inline-flex pl-3 justify-between text-sm text-white">
  <div className="text-white text-xl m-1 inline-flex pb-6 ">
    {/* {t('mainscreen.SEARCH RESULTS/JOBS')} */}
    SEARCH RESULTS
    </div>
  <div className="text-white text-base mx-1 inline-flex pb-7 pt-1">/JOBS-{alljob.length} RESULTS
  </div>
 
  <div class="  flex-1 inline-flex place-items-center pr-4 flex-end justify-end  pb-6">
    <p className="mr-10">sort by</p>
  <button
className="bg-white   font-bold w-fit pr-1 rounded">
 <select className='outline-none  p-2 px-5 rounded text-xs text-black'  onChange={(event) => handleSort(event)}>Sort By
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
        </select>

</button>
    </div>
    </div>
    <div className="pb-2 w-2 content-center">
      </div>
    <div className="p-10   bg-[#1D2332]  rounded-lg">
    <div className="relative">
    </div>
      {/* {alljob.map((job) => (
    //     <Module
    //       key={job.id}
    //       position={job.title}
    //       company={job.company}
    //       location={job.location}
    //       date={job.date}
    //       salary={job.salary}
    //       skill={job.skill}
    //     />
    //   ))} */}
<div className="mb-5">
<svg width="652" height="48" viewBox="0 0 652 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 24C0.5 11.0213 11.0213 0.5 24 0.5H651.5V47.5H24C11.0213 47.5 0.5 36.9787 0.5 24Z" stroke="url(#paint0_linear_0_12)"></path>
<g>
    <text x="7%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="white">
      JOBS
    </text>
  </g>
  <defs>
  <linearGradient id="paint0_linear_0_12" x1="-1.21445e-06" y1="24" x2="652" y2="23.9999" gradientUnits="userSpaceOnUse">
<stop stop-color="#566292"/>
<stop offset="1" stop-color="#566292" stop-opacity="0"/>
</linearGradient>
  </defs>
</svg>
</div>
{filteredJobs.length > 0 ? (
  filteredJobs.slice(offset, offset + perPage).map((job) => (
    <Module
      key={job.id}
      position={job.title}
      company={job.company}
      location={job.location}
      date={job.date}
      salary={job.salary}
      skill={job.skill}
    />
  ))
) : (
  alljob.slice(offset, offset + perPage).map((job) => (
    <Module
      key={job.id}
      position={job.title}
      company={job.company}
      location={job.location}
      date={job.date}
      salary={job.salary}
      skill={job.skill}
    />
  ))
)}

{/* {alljob.slice(offset, offset + perPage).map((job) => (
        <Module
          key={job.id}
          position={job.title}
          company={job.company}
          location={job.location}
          date={job.date}
          salary={job.salary}
          skill={job.skill}
        />
      ))} */}
    </div>
    <div className="flex justify-center my-4">
    {/* <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        className='flex appearance-none rounded-full justify-center p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 w-fit text-white'
      /> */}
      <ReactPaginate
  previousLabel={'Previous'}
  nextLabel={'Next'}
  breakLabel={'...'}
  pageCount={pageCount}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handlePageChange}
  containerClassName={'pagination flex'}
  activeClassName={'active'}
  previousClassName={'flex appearance-none rounded-full justify-center p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 w-fit text-white  hover:bg-slate-500'}
  nextClassName={'flex appearance-none rounded-full justify-center p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 w-fit text-white  hover:bg-slate-500'}
  pageClassName={'flex appearance-none rounded-full justify-center p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 w-fit text-white  hover:bg-slate-500'}
  breakClassName={'flex appearance-none rounded-full justify-center p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 w-fit text-white  hover:bg-slate-500'}
  initialPage={currentPage}
 />

    </div>
  </div>
</div>
</div>
</div>
);
}
export default Screen;