import Image from 'next/image'

export const Banner = () => (
  <div className="relative h-[calc(100vh-50px)] jc-center before-base row-full before:absolute before:z-base before:size-full before:bg-gradient-to-r before:from-[#000000b2_76%] before:to-[#00000078] before:t-0 before:l-0 md:before:from-[#0000007a_76%] md:before:to-transparent">
    <div className="z-base h-full container-col jc-center">
      <Image
        src="/img/logos/logo-vertical.png"
        alt="Pizzaria Toffanetto"
        sizes="560px"
        width="560"
        height="238"
        className="obj-left h-auto max-h-[40vh] w-full max-w-72 -translate-y-full animate-[move-y_0.4s_0.2s_cubic-bezier(0,_0.55,_0.45,_1)_forwards,_fade-in-blur_0.4s_0.2s_linear_forwards] opacity-0 obj-contain xs:max-w-96 lg:max-w-[500px]"
        priority
      />
      <h1 className="xs:tx-[calc(15px+1.3vh)] mt-3 max-w-96 translate-y-full animate-[move-y_0.6s_0.5s_cubic-bezier(0,_0.55,_0.45,_1)_forwards,_fade-in-blur_0.5s_0.4s_linear_forwards] leading-[1.5] opacity-0 fs-xl-medium-white tx-balance xs:mt-5 xs:max-w-[500px] lg:mt-6 lg:max-w-[600px] lg:fs-3xl">
        Pizzas exageradamente recheadas e saborosas, feitas em forno a lenha
        como manda a tradição italiana
      </h1>
    </div>
    <div className="absolute size-full">
      <Image
        src="/img/banners/banner-home.webp"
        alt="Bem-vindo(a) à Pizzaria Toffanetto"
        sizes="100%"
        className="obj-[67%] lg:obj-center obj-cover"
        fill
        priority
      />
    </div>
  </div>
)
