import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div className="outer_section">
      <div className='info_section'>
         <h1> M. AMAN IMRAN  </h1>
         <p>My name is M. AMAN IMRAN a professional </p>
          <p>Next js Developer and an industry expert </p>
      </div>
      <div className="button_section">
         <button>Let&apos;s get started <i className="bi bi-arrow-right-short"></i></button>
      </div>
      </div>
      <div>
      <Image className='img'
      src="/download (2).jpg"
      width={350}
      height={350}
      alt="Error!"
    />
      </div>
    </div>
  )
}

export default HeroSection