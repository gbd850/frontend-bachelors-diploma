function P1() {
  return (
    <div className="flex-grow p-6 overflow-auto">
    <div className="flex my-6 items-center gap-20">
      <span className="text-4xl font-semibold ">Przedszkole Pieski</span>
      <div className="flex justify-between items-center gap-5">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer" alt="" />
        <span className="base-color text-2xl font-medium">Edytuj</span>
      </div>
    </div>

    <div className="my-10 flex w-3/12 mx-auto border border-gray-400 rounded justify-center items-center bg-white">
      <input className="flex-grow px-2 py-1 bg-transparent rounded-tr rounded-br outline-none text-sm" type="date" />
    </div>

    <div className="text-sm font-medium text-gray-900">
      Podsumowanie obecności
    </div>
    <div className="my-6 flex justify-center items-center gap-3">
      <div className="flex flex-col gap-1 justify-center items-center w-3/12 h-16 shadow bg-white border cursor-pointer hover:shadow-lg">
        <p className="text-xs">Obecnych</p>
        <span className="text-md text-green-500">0</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center w-3/12 h-16 shadow bg-white border cursor-pointer hover:shadow-lg">
        <p className="text-xs">Nieobecnych</p>
        <span className="text-md text-red-500">0</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center w-3/12 h-16 shadow bg-white border cursor-pointer hover:shadow-lg">
        <p className="text-xs">Nieobecnych</p>
        <span className="text-md text-yellow-500">0</span>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center w-3/12 h-16 shadow bg-white border cursor-pointer hover:shadow-lg">
        <p className="text-xs">Zgłoszenia</p>
        <span className="text-md text-red-500">0</span>
      </div>
    </div>
    <div className="my-6 flex border border-gray-400 rounded justify-center items-center bg-white  ">
      <img src="/images/search.svg" className="w-6 h-6 ml-2" alt="" />
      <input className="flex-grow px-2 py-1 bg-transparent rounded-tr rounded-br outline-none text-sm" type="text" placeholder="Wyszukaj na liście..." />
    </div>

    <div className="flex flex-col gap-1">
      <div className="flex gap-1 justify-center items-center rounded">
        <div className="py-2 px-3 mx-3 my-2 font-semibold text-gray-900">#</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          Dziecko
        </div>
        <img src="/images/tick.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>

      <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
        <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-900 font-semibold text-xs text-white">1</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          Podsumowanie obecności
        </div>
        <img src="/images/correct.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>

      <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
        <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-900 font-semibold text-xs text-white">2</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          DimaBlack**
        </div>
        <img src="/images/correct.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>

      <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
        <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-200 font-semibold text-xs">3</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          PavSoloEstonia
        </div>
        <img src="/images/remove-red.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>

      <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
        <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-200 font-semibold text-xs">3</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          EscobarCuba77
        </div>
        <img src="/images/remove-red.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>
      <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
        <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-200 font-semibold text-xs">3</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          ZorroLatino
        </div>
        <img src="/images/remove.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>
      <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
        <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-200 font-semibold text-xs">3</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          RomanZorro
        </div>
        <img src="/images/remove.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>
      <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
        <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-200 font-semibold text-xs">3</div>
        <div className="text-sm font-medium text-gray-900 flex-grow">
          EscobarCuba77
        </div>
        <img src="/images/tick.png" className="w-7 h-7 mx-4 cursor-pointer text-black" alt="" />
      </div>
    </div>
  </div>

  )
}

export default P1;
