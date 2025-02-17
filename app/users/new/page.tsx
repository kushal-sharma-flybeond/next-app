'use client';

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const NewUserPage = () => {
  const router = useRouter();
  return (
    <>
    <div className='text-black'>NewUserPage</div>
    <button className='btn btn-primary' onClick={()=> router.push('/users')}>Create</button>
    </>
  )
}

export default NewUserPage