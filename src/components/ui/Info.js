import Image from 'next/image';
import React from 'react';

const Info = () => {
  return (
    <div className='bg-base-200 py-24'>
      <div className=''>
      <Image alt='img' height={800} width={3100} className='w-full' src={"https://i.ibb.co/jyWFnh5/architect-1.png"}/>
    </div>
    </div>
  );
};

export default Info;