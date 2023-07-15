import React from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';



function Topbar({ lang, handleLang ,handleSearch}) {

  const [searchValue, setSearchValue] = useState("");

  const { t ,i18n } = useTranslation();
  
 
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchValue);
  };

  
  return (
    <div class=" h-13 px-10 bg-[#303B54] mb-10">
      <div class=" flex justify-between place-items-center  text-base text-gray-400">
      <div class="text-white text-xl">
      {t('topbar.Jobs')}
        </div>
        {/* <select className='appearance-none rounded-full p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 text-white' onChange={(event) => handlesort(event)}>
          <option value="en">English</option>
          <option value="ln">Lingala</option>
        </select> */}
        <div className="w-96 justify-between flex bg-slate-700 rounded-full ">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}

            placeholder= {t('topbar.Search_jobs')}
            className="px-2 py-1  min-w-fit border  bg-transparent border-transparent focus:outline-none"
          />
          <button className="ml-2 px-4 py-1 bg-transparent text-white rounded"  
           onClick={handleSearchClick}

          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </button>
        </div>
        <div class="pl-2 pt-1 flex relative">
        <button>
        <div
          // onMouseOver={handleMouseOver}
          // onMouseOut={handleMouseOut}
        >
          
          <svg width="4.5em" height="4.5em" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_0_79)">
<circle cx="82.5" cy="46.5" r="22.5" fill="#242D40"/>
</g>
<path d="M83 47C84.1867 47 85.3467 46.6481 86.3334 45.9888C87.3201 45.3295 88.0892 44.3925 88.5433 43.2961C88.9974 42.1997 89.1162 40.9933 88.8847 39.8295C88.6532 38.6656 88.0818 37.5965 87.2426 36.7574C86.4035 35.9182 85.3344 35.3468 84.1705 35.1153C83.0067 34.8838 81.8003 35.0026 80.7039 35.4567C79.6075 35.9109 78.6705 36.6799 78.0112 37.6666C77.3519 38.6533 77 39.8133 77 41C77.0016 42.5908 77.6342 44.116 78.7591 45.2409C79.884 46.3658 81.4092 46.9984 83 47ZM83 37C83.7911 37 84.5645 37.2346 85.2223 37.6741C85.8801 38.1136 86.3928 38.7384 86.6955 39.4693C86.9983 40.2002 87.0775 41.0044 86.9231 41.7804C86.7688 42.5563 86.3878 43.269 85.8284 43.8284C85.269 44.3878 84.5563 44.7688 83.7804 44.9231C83.0044 45.0775 82.2002 44.9983 81.4693 44.6955C80.7384 44.3928 80.1136 43.8801 79.6741 43.2223C79.2346 42.5645 79 41.7911 79 41C79 39.9391 79.4214 38.9217 80.1716 38.1716C80.9217 37.4214 81.9391 37 83 37V37Z" fill="white"/>
<path d="M83 49C80.6139 49.0026 78.3262 49.9517 76.639 51.639C74.9517 53.3262 74.0026 55.6139 74 58C74 58.2652 74.1054 58.5196 74.2929 58.7071C74.4804 58.8946 74.7348 59 75 59C75.2652 59 75.5196 58.8946 75.7071 58.7071C75.8946 58.5196 76 58.2652 76 58C76 56.1435 76.7375 54.363 78.0503 53.0503C79.363 51.7375 81.1435 51 83 51C84.8565 51 86.637 51.7375 87.9497 53.0503C89.2625 54.363 90 56.1435 90 58C90 58.2652 90.1054 58.5196 90.2929 58.7071C90.4804 58.8946 90.7348 59 91 59C91.2652 59 91.5196 58.8946 91.7071 58.7071C91.8946 58.5196 92 58.2652 92 58C91.9974 55.6139 91.0483 53.3262 89.361 51.639C87.6738 49.9517 85.3861 49.0026 83 49V49Z" fill="white"/>
{/* <defs>
<filter id="filter0_dd_0_79" x="0" y="-36" width="165" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
{/* <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> */}
<feOffset dx="15" dy="15"/>
<feGaussianBlur stdDeviation="22.5"/>
{/* <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.116667 0 0 0 0 0.166667 0 0 0 1 0"/> */}
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_79"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-15" dy="-15"/>
<feGaussianBlur stdDeviation="22.5"/>
{/* <feColorMatrix type="matrix" values="0 0 0 0 0.168627 0 0 0 0 0.211765 0 0 0 0 0.301961 0 0 0 1 0"/> */}
<feBlend mode="normal" in2="effect1_dropShadow_0_79" result="effect2_dropShadow_0_79"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_79" result="shape"/>
{/* </filter> *
</defs> */}
</svg>


    {/* {isHovering && (
            <div class="bg-slate-700 text-bold text-xs uppercase text-white">
            
            </div>
          )} */}
          </div>
          </button>
          <svg width="4.7em" height="4.7em" viewBox="0 0 105 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_0_83)">
<circle cx="41" cy="40" r="23" fill="#242D40"/>
</g>
<path d="M47.9004 36.5504C47.9004 34.7204 47.1734 32.9654 45.8794 31.6714C44.5854 30.3774 42.8304 29.6504 41.0004 29.6504C39.1704 29.6504 37.4154 30.3774 36.1214 31.6714C34.8274 32.9654 34.1004 34.7204 34.1004 36.5504C34.1004 44.6004 30.6504 46.9004 30.6504 46.9004H51.3504C51.3504 46.9004 47.9004 44.6004 47.9004 36.5504Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.9897 51.5C42.7876 51.8485 42.4974 52.1378 42.1482 52.339C41.799 52.5401 41.4032 52.6459 41.0002 52.6459C40.5973 52.6459 40.2014 52.5401 39.8523 52.339C39.5031 52.1378 39.2129 51.8485 39.0107 51.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="58" cy="22" r="11" fill="#E83363"/>
<path d="M54.4617 25.6094H56.0978V17.9244H54.6691L52.2495 20.3555L53.1828 21.3348L54.4617 20.0328V25.6094ZM57.4012 25.6094H63.1852V24.1692H59.9821C62.0445 22.7174 63.1276 21.5768 63.1276 20.2633C63.1276 18.7309 61.8256 17.8092 60.1895 17.8092C59.118 17.8092 57.9773 18.2009 57.2284 19.065L58.1617 20.1481C58.6802 19.6065 59.3484 19.2609 60.2125 19.2609C60.8578 19.2609 61.4684 19.595 61.4684 20.2633C61.4684 21.2081 60.5467 22.0031 57.4012 24.3189V25.6094Z" fill="#E3F1FD"/>
<defs>
<filter id="filter0_dd_0_83" x="0.71738" y="-0.28262" width="103.609" height="103.609" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="11.5217" dy="11.5217"/>
<feGaussianBlur stdDeviation="14.4022"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0977083 0 0 0 0 0.122552 0 0 0 0 0.175 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_83"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-3.45652" dy="-3.45652"/>
<feGaussianBlur stdDeviation="5.76087"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.175781 0 0 0 0 0.219727 0 0 0 0 0.3125 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_83" result="effect2_dropShadow_0_83"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_83" result="shape"/>
</filter>
</defs>
</svg>

  
          <div
          // onMouseOver={handleMouseOver}
          // onMouseOut={handleMouseOut}
        >
       

    {/* {isHovering && (
            <div class="bg-slate-700 text-bold text-xs uppercase text-white">
            
            </div>
          )} */}
    </div>
        
        </div>
        
        </div>
   
    
    </div>
    
  );
}


export default Topbar;
