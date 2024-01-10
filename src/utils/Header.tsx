import { Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      <div className='logocss'>
        <Image
            src="/ClofitWhite.png"
            alt="clofit Logo"
            width={100}
            height={24}
          />
      </div>

      <div className='clofitText'>
        <Text>Clofit</Text>
      </div>

      <hr className="rounded"/>

      <div className='tailleQuiCompte'>
        <Text>Parce que c'est la taille qui compte</Text>
      </div>

    </div>
  )
}

export default Header