import React from 'react'
import { IoIosPersonAdd } from "react-icons/io";
import { TbHomeBolt } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Choose = () => {
  const navigate = useNavigate();
  const handleConsumer = () => {
    navigate("/");
  }
  
  const handleProvider = () => {
    navigate("/register-provider");
  }
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center">
        <div className="w-[850px] h-[500px] border-4 rounded-lg flex items-center justify-center flex-row gap-10">
              {/*Become a Consumer*/}
              <div className="w-[40%] h-[250px] border-4 select-none border-[#509B6F] flex flex-col items-center justify-center hover:opacity-50 gap-5"
              onClick={handleConsumer}
              >
                    <IoIosPersonAdd color="white" font-size="48px"/>
                    <h1 className="text-3xl font-semibold text-white">Become a Consumer</h1>
              </div>
              {/*Become a Provider*/}
              <div className="w-[40%] select-none h-[250px] border-4 border-[#509B6F] flex flex-col items-center justify-center hover:opacity-50 gap-5"
              onClick={handleProvider}
              >
                    <TbHomeBolt color="white" font-size="48px"/>
                    <h1 className="text-3xl font-semibold text-white">Become a Provider</h1>
              </div>
        </div>

    </div>
  )
}

export default Choose