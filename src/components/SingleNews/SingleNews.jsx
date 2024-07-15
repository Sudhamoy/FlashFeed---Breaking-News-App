import React from 'react'

function SingleNews({singleNews}) {
  const {title,description,url,publishedAt,author,urlToImage}=singleNews
  const defaultFallbackImg='https://i.insider.com/6669b825764df1611258f121?width=1200&format=jpeg';

  return (
    <div className='w-80 p-3 mt-3 bg-black rounded-xl shadow-xl shadow-red-900 text-white'>
      
      <img src={urlToImage || defaultFallbackImg} alt='img-url' className='w-[100%]'/>
      
      <div className='flex flex-col pt-3'>
        <p className='text-[#2272FF] font-[900]'>{title}</p><br/>
        <p className=''>{description}</p><br/>
        <p>Reported By: {author} | Date: {publishedAt}</p>
        <a href={url} target='_blank' rel="noreferrer" className='text-[#2272FF] bg-white p-1 hover:font-[800]'>Read more</a>
      </div>
      
    </div>
  )
}

export default SingleNews
