import Image from 'next/image'

export const Banner = () => (
  <div className="relative h-[calc(100vh-50px)] jc-center row-full before-base before:absolute before:left-0 before:top-0 before:z-base before:size-full before:bg-gradient-to-r before:from-[#000000b2_76%] before:to-[#00000078] md:before:from-[#0000007a_76%] md:before:to-transparent">
    <div className="z-base h-full jc-center container-col">
      <Image
        src="/img/logos/logo-vertical.png"
        alt="Pizzaria Toffanetto"
        sizes="560px"
        width="560"
        height="238"
        className="h-auto max-h-[40vh] w-full max-w-[300px] -translate-y-full animate-[move-y_0.4s_0.2s_cubic-bezier(0,_0.55,_0.45,_1)_forwards,_fade-in-blur_0.4s_0.2s_linear_forwards] object-contain object-left opacity-0 xs:max-w-[400px] lg:max-w-[500px]"
        priority
      />
      <h1 className="mt-12 max-w-[400px] translate-y-full animate-[move-y_0.6s_0.5s_cubic-bezier(0,_0.55,_0.45,_1)_forwards,_fade-in-blur_0.5s_0.4s_linear_forwards] text-balance text-20 font-500 leading-[1.5] text-white opacity-0 xs:mt-20 xs:max-w-[500px] xs:text-[calc(15px+1.3vh)] lg:mt-24 lg:max-w-[600px] lg:text-30">
        Pizzas exageradamente recheadas e saborosas, feitas em forno a lenha
        como manda a tradição italiana
      </h1>
    </div>
    <div className="absolute size-full">
      <Image
        src="/img/banners/banner-home.webp"
        alt="Bem-vindo(a) à Pizzaria Toffanetto"
        sizes="100%"
        className="object-cover object-[67%] lg:object-center"
        fill
        priority
      />
    </div>
  </div>
)
