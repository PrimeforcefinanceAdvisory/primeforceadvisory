import React from 'react'

function Header() {
  return (
    <div id='main'>
      <div className='name'>
        <h2>Your Trading Partner</h2>
        <h1><span>Where Precision Meets</span>Profits</h1>
        <p className='details'>
        "At Prime Force Advisory, we empower traders with precise market insights and expert strategies. With over 5 years of experience, our trusted advisors guide you to make confident decisions in achieving your financial goals."
        </p>
        <div className='header-button'>
            <a href='#contact' className='header-btn'>JOIN US</a>
        </div>
        </div>
    </div>
  )
}

export default Header;