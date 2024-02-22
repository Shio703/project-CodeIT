import Button from '@/components/button/Button'
import React from 'react'

function Dashboard() {
  return (
    <div>
      <Button url={"/dashboard/crud"} title={"CRUD"}/>
    </div>
  )
}

export default Dashboard