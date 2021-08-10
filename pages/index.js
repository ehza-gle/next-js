import Link from 'next/link'
import Document from './_documents'

const Index = () => (
    <nav id="header" className="navbar fixed bg-transparent text-white w-full z-20 top-0">
    <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-px">
      <div className="flex pl-8 p-2 pt-px">
        <a className="text-dark no-underline hover:text-white hover:no-underline" href="https://dku.id">
          <img src="img/favicon.svg" alt="Suzuki DKU" style={{width: '100px'}} />
        </a>
      </div>
      <div className="block lg:hidden pr-4">
        <div id="animate-toogle" className="flex">
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            <span />
            <span />
            <span />
          </label>
        </div>
      </div>
      <div className="w-full flex-grow p-4 lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="a-nav">
        <ul id="a-nav" className="list-reset lg:flex justify-center flex-1 items-center">
          <li className="menu__item mr-3 text-right">
            <a className="btn btn-ghost rounded-btn hover:text-blue-700 activeSpy" data-scrollspy="#beranda" href="#beranda">Beranda</a>
          </li>
          <li className="menu__item mr-3 text-right">
            <a className="btn btn-ghost rounded-btn hover:text-blue-700" data-scrollspy="#model" href="#model">Model</a>
          </li>
          <li className="menu__item mr-3 text-right">
            <a className="btn btn-ghost rounded-btn hover:text-blue-700" data-scrollspy="#bandingkan-kendaraan" href="#bandingkan-kendaraan">Bandingkan Model</a>
          </li>
          <li className="menu__item mr-3 text-right">
            <a className="btn btn-ghost rounded-btn hover:text-blue-700" data-scrollspy="#hubungi-kami" href="#hubungi-kami">Kontak Kami</a>
          </li>
          <li className="menu__item mr-3 text-right">
            <a className="btn btn-ghost rounded-btn hover:text-blue-700" data-scrollspy="#Daftar Harga" target="_blank" href="pricelist.html">Daftar Harga</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="progress" className="h-1 z-40 top-0" style={{background: 'linear-gradient(to right, rgba(224, 231, 255) var(--scroll), transparent 0)'}} />
  </nav>
)

export default Index