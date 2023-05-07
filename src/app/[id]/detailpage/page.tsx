'use client'

import React, {useState} from "react";
import "../../../styles/globals.css"

export default function Page () {
      const [activeTab, setActiveTab] = useState("campaign-content"); // 초기값 설정

      const handleTabClick = (tabName) => {
          setActiveTab(tabName); // 상태 업데이트
  };

    return (
      <>
        <div className="h-80 w-full relative">
            <img src="https://www.ghibli.jp/gallery/umi015.jpg" className="object-cover h-full w-full"/>
            <div className="absolute bottom-0 left-1/3 p-4 text-white">
                <p className="underline decoration-sky-500 font-sans text-3xl">캠페인 제목이 여기에 나타나게 할 것입니다</p>
            </div>
        </div>
        <div className="flex items-center justify-evenly h-20 mx-auto w-3/4 border-b">
        <button className={`bg-white hover:bg-red-300 hover:text-white transition duration-500 ease-in-out transform hover:scale-110 rounded-full px-4 py-2 ${activeTab === "campaign-content" ? "bg-red-300" : ""}`} onClick={() => handleTabClick("campaign-content")}>캠페인 내용</button>
            <button className={`bg-white hover:bg-red-300 hover:text-white transition duration-500 ease-in-out transform hover:scale-110 rounded-full px-4 py-2 ${activeTab === "donation-content" ? "bg-red-300" : ""}`} onClick={() => handleTabClick("donation-content")}>기부 내역</button>
        </div>
        <div className="flex w-full h-full justify-center">
        <div className="flex items-center justify-evenly w-5/6 h-full pt-8">

          {/* 왼쪽 영역 */}
          {activeTab === "campaign-content" && (
          <div className="w-3/5 h-[2000px]">
            <div className="flex items-center justify-center w-full h-[64rem] rounded-b-lg shadow-md p-4 bg-red-300 relative">
              <img src="https://www.ghibli.jp/gallery/umi005.jpg" className="w-full h-64 object-cover object-center absolute top-0 left-0"/>
              <p>캠페인 상세 내용 구역</p>
            </div>
          </div>
          )}

          {activeTab === "donation-content" && (
          <div className="w-3/5 h-[2000px]">
            <div className="flex items-center justify-center w-full h-[32rem] rounded-b-lg shadow-md p-4 bg-red-200 relative">
              <p>여러분이 기부하신 마음이 그들에겐 힘이 됩니다</p>
            </div>

            <div className="mt-10 border-t"></div>
            <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-gray-600 mb-4">나눔상태</p>
            <div className="w-full h-10 bg-gray-300 rounded-full relative">
              <div className="absolute top-0 left-0 h-full bg-red-400 rounded-full" style={{width: "40%"}}></div>
            </div>
            <div className="flex justify-between w-full mt-4 border-t pt-4">
              <p className="text-gray-600 font-bold border-r pr-4">모금 금액: 10000원</p>
              <p className="text-gray-600 font-bold pl-4">목표 금액: 50000원</p>
            </div>
          </div>
        </div>

          <div className="mt-10 border-t"></div>
          <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center border-b">
            <p className="text-lg font-bold text-gray-600 mb-4">기부금 사용내역</p>
            <p className="text-gray-600 font-bold">여러분들의 소중한 기부금이 여기에 사용됩니다</p>
          </div>
          <div className="flex justify-between items-center w-full py-4 bg-gray-50 border-t border-b" style={{marginTop: "20px"}}>
            <p className="font-bold-xl">총 기부금</p>
            <p className="font-bold-xl bg-red-200 rounded-full text-blue-500 px-3 py-1">5000원</p>
            <p className="font-bold-xl">목표금액 : 5000원</p>
          </div>
          <div className="flex justify-between items-center w-full py-4 border-t border-b">
            <p className="font-bold-xl">사용비</p>
            <p className="font-bold-xl">아동 가정 생계지원</p>
            <p className="font-bold-xl">사용금액 : 2000원</p>
          </div>
          <div className="flex justify-between items-center w-full py-4 border-t border-b">
            <p className="font-bold-xl">사용비</p>
            <p className="font-bold-xl">아동 가정 생계지원</p>
            <p className="font-bold-xl">사용금액 : 3000원</p>
          </div>
            </div>
        </div>
          )}

          {/* 오른쪽 영역 */}
          <div className="relative w-1/4 h-[2000px] border-l flex justify-center">
          <div className="sticky top-24 w-72 h-[28rem] rounded-lg shadow-md p-4 border border-red-300 relative">
            <div className="relative inline-block w-12 h-12">
              <div className="absolute top-0 left-0 bg-red-300 rounded-md w-full h-full flex justify-center items-center">
                <p className="text-white text-center text-sm">D-14</p>
              </div>
            </div>

              <p>기부하기 기능이 들어간 카드에 담겨지는 내용 작성란</p>
              <p className="my-4">캠페인에 후원되어 있는 현재 금액: 1000원</p>
            <div className="w-full bg-gray-200 h-2 rounded-lg relative">
              <div className="bg-red-300 absolute top-0 left-0 h-full rounded-lg" style={{width: "40%"}}></div>
              </div>
                <p className="my-4">목표 금액: 5000원</p>
                <button className="absolute bottom-0 left-0 w-full bg-red-300 hover:bg-red-400 transition duration-500 ease-in-out text-white py-4 rounded-b-lg">기부하기</button>
            </div>
            </div>
        </div>
        </div>
      </>
    );
};
