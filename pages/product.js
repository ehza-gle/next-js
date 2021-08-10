function product () {
    return 
    <div className="md:container bg-base-200 mx-auto">
    <div className="flex flex-col">
      <div className="text-center flex flex-wrap sm:flex-row flex-col mb-3">
        <div className="flex flex-col text-center w-full mb-1">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600" data-aos="fade-right" data-aos-duration={800}>Temukan Mobil Suzuki yang tepat untuk anda!</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600" data-aos="fade-left" data-aos-duration={800}>Temukan berbagai mobil pilihan Suzuki yang dirancang
            khusus dengan presisi melalui teknologi modern dan desain stylish sesuai gaya Anda.</p>
          <h2 className="mt-5 tracking-widest text-sm title-font font-medium text-blue-400 mb-1">Passenger Car
          </h2>
        </div>
      </div>
    </div>
    <div className="md:flex md:flex-wrap mb-0">
      {/*XL7*/}
      <div className="card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki XL7
        </h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="XL7" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/xl7_thumb2.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          273.300.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/xl7.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://suzukicdn.net/uploads/brochures/XL7.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>

      <div className="card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki All
          New Ertiga</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="ANE" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/all-new-ertiga-thumb2.jpg" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          251.300.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/all-new-ertiga.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/AllNewErtiga.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>

      <div className="card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki New
          Ignis</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="ANE SS" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/ertiga-sport-thumb.jpg" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          290.300.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-ertiga-ss.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/AllNewErtigaSuzukiSport.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      <div className="mx-auto w-full justify-center flex flex-wrap mt-4">
        <button id="munculkan" className="btn btn-modalNo bg-gray-900 text-dark-500">Lihat Semua Model</button>
      </div>
      {/*New Ignis*/}
      <div id="ignis" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki New
          Ignis</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="New Ignis" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/Suzuki_Ignis_GX_Hero_Angle_FLIP_1.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          205.600.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-ignis.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/brocure_new_ignis_orange_2.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*New Baleno*/}
      <div id="baleno" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki New
          Baleno</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="New Baleno" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/new-baleno-thumb-2.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          253.500.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-baleno.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/NewBaleno.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*New SX4 S-Cross*/}
      <div id="s-cross" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki SX4
          S-Cross</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="SX-4 S-Cross" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/sx4.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          312.500.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-scross.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/Scross1.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*Karimun 50 TH*/}
      <div id="karimun-50th" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki
          Karimun 50 TH AE</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="Karimun 50TH" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/kar502.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          183.400.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-karimun50th.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/Karimun50thAnniversaryEdition.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*Karimun Wagon R*/}
      <div id="wagon-r" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki
          Karimun Wagon R</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="Karimun Wagon R" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/wagon-r-thumb3.jpg" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          155.400.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-karimun-wagonr.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/KarimunWagonR.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*Jimny*/}
      <div id="jimny" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki Jimny
        </h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="jimny" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/jimny-thumb.jpg" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          425.800.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-jimny.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/Jimny.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*APN New Luxury*/}
      <div id="apv-luxury" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki APV
          New Luxury</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="APV New Luxury" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/APV-New-Luxury-thumb1.jpg" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          266.000.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-apv-luxury.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/APVNewLuxury.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*APV Arena*/}
      <div id="apv-arena" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki APV
          Arena</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="APV Arena" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/APV-ARENA-thumb.jpg" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          220.000.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-apv-arena.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/APVArena.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
    </div>
    <div id="commercial-car" className="hidden flex flex-col text-center mb-1">
      <h2 className="mt-5 tracking-widest text-sm title-font font-medium text-blue-400 mb-1">Commercial Car</h2>
    </div>
    <div className="md:flex md:flex-wrap mb-0">
      {/*New Carry*/}
      <div id="nc" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki New
          Carry</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="New Carry" className="object-contain md:object-scale-down object-center h-full w-full" src="https://suzukicdn.net/uploads/automobile/tamnail_rev1.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          172.550.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-carry.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="https://www.suzuki.co.id/uploads/brochures/NewCarryPickup.pdf" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*New Carry Box*/}
      <div id="nc-box" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki New
          Carry Box</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="New Carry" className="object-contain md:object-scale-down object-center h-full w-full" src="img/Model/New carry box.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          183.100.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-carry-box.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="./error page/index.html" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*New Carry Ambulance*/}
      <div id="nc-ambulance" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki New
          Carry Ambulance</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="New Carry" className="object-contain md:object-scale-down object-center h-full w-full" src="img/Model/new carry ambulance.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          xxx.xxx.xxx</p>
        <div className="grid grid-cols-2">
          <a href="./produk/new-carry-ambulance.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="./error page/index.html" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*APV Arena Ambulance*/}
      <div id="apv-ambulance" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki APV
          Arena Ambulance</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="Apc Arena Ambulance" className="object-contain md:object-scale-down object-center h-full w-full" src="/img/Model/apv ambulance.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          xxx.xxx.xxx</p>
        <div className="grid grid-cols-2">
          <a href="./produk/apv-arena-ambulance.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="./error page/index.html" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*APV Arena Blind Van*/}
      <div id="apv-blindVan" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki APV
          Arena Blind Van</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="APV Arena Blind Van" className="object-contain md:object-scale-down object-center h-full w-full" src="img/Model/apvBlindVan.png" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          190.000.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/apv-arena-blindvan.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="./error page/index.html" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
      {/*Karimun Blind Van*/}
      <div id="karimun-blindVan" className="munculkan hidden card rounded-none hover:bg-white hover:shadow-lg px-4 md:w-1/3 sm:mb-0 mb-0 shadow-sm" data-aos="zoom-in-up" data-aos-duration={1700}>
        <h2 className="text-base md:text-lg font-medium title-font text-gray-500 text-center mt-3">Suzuki
          Karimun Blind Van</h2>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="Karimun Blind Van" className="object-contain md:object-scale-down object-center h-full w-full" src="img/Model/wagon-r-blind-van.jpg" />
        </div>
        <p className="text-base md:text-lg text-gray-800 text-center mt-0">Mulai dari</p>
        <p className="text-base md:text-2xl italic font-medium title-font text-blue-500 text-center mb-2">Rp
          172.400.000</p>
        <div className="grid grid-cols-2">
          <a href="./produk/karimun-wagonr-blindvan.html"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Jelajahi</button></a>
          <a href="./error page/index.html" target="_blank"><button className="btn-kotak rounded-none btn btn-outline my-2 flex items-center mt-auto py-2 px-4 w-full text-sm md:text-base">Unduh
              Brosur</button></a>
        </div>
        <a className="animate-pulse text-right text-blue-400 inline-flex items-center mt-1 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-90deg-down mt-4 mr-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
          </svg>Hubungi Bagian Penjualan</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B62811572922&text&app_absent=0" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp mr-5 anime" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg> Whatsapp
          </button></a>
        <a href="tel:0811572922" target="_blank">
          <button className=" btn btn-kontak my-2 flex items-center mt-auto py-2 px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-outbound mr-5 anime" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg> Telepon
          </button></a>
      </div>
    </div>
  </div>
}

export default product