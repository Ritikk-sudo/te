"use client"

import React from 'react'
import Lottie from 'lottie-react'
import loader from "../assets/Telegram.json"


function TelegramLoading() {
  return (
    <Lottie animationData={loader} loop={true}/>
  )
}

export default TelegramLoading