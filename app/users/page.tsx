import React from 'react'
import UsersTable from '../users/usersTable'
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log('From page: ' + sortOrder);

  return (
    <div className='text-black'>
      <h1>UsersPage</h1>
      <Link href='/users/new' className='btn'>New User</Link>
      <UsersTable sortOrder={sortOrder} />
    </div>
  )
}

export default UsersPage