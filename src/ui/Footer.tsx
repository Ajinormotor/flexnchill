

const Footer = () => {
  return (
<section className=" bg-black w-full items-center justify-center flex flex-col p-3 md:p-10 gap-4 md:gap-0 py-8 md:py-14">
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-start lg:justify-items-center gap-5 md:gap-2">
  
  <div className="flex flex-col gap-4">

    
  <div className="flex items-center">
    <i className="ri-tv-2-fill text-3xl text-white"></i>
    <h1    className=" font-semibold text-4xl  flex gap-1 text-white font-playfair">Flex &<span className="text-red-400">Chill</span></h1>
    </div>

    <p className=" font-normal text-base opacity-80  text-white font-libre">A streaming movie platform,where you get updated about the latest and entertaining movies and tv series round the world,
    </p>
    

    <ul className="flex gap-2">
    <li><i className="ri-facebook-fill text-white"></i></li>
<li><i className="ri-instagram-fill text-white"></i></li>
<li><i className="ri-twitter-line text-white"></i></li>
<li><i className="ri-youtube-fill text-white"></i></li>
<li><i className="ri-tiktok-fill text-white"></i></li>

</ul>
  </div>

  {/* second div */}

  <div className="flex flex-col  gap-5">
    <h1 className="boder-b-[1px] border-red-700 w-full font-bold text-2xl text-white font-playfair">Links</h1>
    <ul className="flex flex-col gap-2">
    <li className="hover:text-red-600 hover:ml-2 cursor-pointer"> <h1 className=" font-normal text-base font-libre text-white hover:text-red-500"> - Home</h1> </li>
    <li className="hover:text-red-600 hover:ml-2 cursor-pointer"> <h1 className=" font-normal text-base font-libre text-white hover:text-red-500">  - Movies</h1> </li>
    <li className="hover:text-red-600 hover:ml-2 cursor-pointer"> <h1 className=" font-normal text-base font-libre text-white hover:text-red-500">  - Favorites</h1> </li>
    </ul>
  </div>

   {/* third div */}

   <div className="flex flex-col  gap-5">
    <h1 className="boder-b-[1px] border-red-700 w-full font-bold text-2xl text-white font-playfair">Support</h1>
    <ul className="flex flex-col gap-2">
    <li className="hover:text-red-600 hover:ml-2 cursor-pointer"> <h1 className=" font-normal text-base font-libre text-white hover:text-red-500"> - FAQ</h1> </li>
    <li className="hover:text-red-600 hover:ml-2 cursor-pointer"> <h1 className=" font-normal text-base font-libre text-white hover:text-red-500">  - Help Center</h1> </li>
    <li className="hover:text-red-600 hover:ml-2 cursor-pointer"> <h1 className=" font-normal text-base font-libre text-white hover:text-red-500">  - Support</h1> </li>
    </ul>
  </div>


   {/* second div */}

   <div className="flex flex-col  gap-5">
    <h1 className="boder-b-[1px] border-red-700 w-full font-bold text-2xl text-white font-playfair">Subscribe to Newsletter</h1>

    <ul className="flex bg-white rounded-md max-w-[400px] w-full h-[50px]   items-center  justify-between">
    <li className=" cursor-pointer pl-2 "><input type="text"  placeholder="Email"  className="border-0 outline-none bg-transparent w-full" /></li>
    <li className="flex items-center justify-center h-[50px] w-[50px] bg-red-500  cursor-pointer   rounded-tr-sm rounded-br-sm"> <i className="ri-message-line text-white font-bold text-base"></i> </li>
    </ul>

  </div>

</div>

<hr className="w-full h-[2px] bg-white  mt-[1rem]"  />

{/* <div className=""></div> */}
<p className="text-center text-white"></p>

</section>
  );
};

export default Footer;
