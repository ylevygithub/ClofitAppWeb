"use client"

import MyForm from '@/utils/FormLogin'
import Header from '@/utils/Header'
import LoginPage from '@/utils/LoginPage'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <MyForm/>
    </div>
    // <LoginPage/>
  )
}

export default page