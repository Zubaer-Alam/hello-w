import { Button } from '@material-tailwind/react'
import React from 'react'

const RnA = () => {
  return (
    <div className='flex flex-col gap-4 my-2.5 mx-5'>
      <Button className='text-lg tracking-widest bg-[#152d52] rounded-xl '>Registration</Button>
      <Button className='text-lg tracking-widest rounded-xl'>Download APK</Button>
    </div>
  )
}

export default RnA
