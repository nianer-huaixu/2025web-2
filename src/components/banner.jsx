"use client"

export default function Banner({url}){
  const remote = 'https://www.yangdong.co:8443/tianyan/banner/'
  return <div className="w-full">
    <img className="w-full" src={remote+url} alt="banner"/>
  </div>
}