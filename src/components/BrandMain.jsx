import React from 'react'
import CartOne from '../assets/cardOne.png'
import CartTwo from '../assets/cartTwo.png'
import CartThre from '../assets/cartThree.png'
import CartFour from '../assets/cartFour.png'
import CartFive from '../assets/cartFive.png'
import CartSix from '../assets/cartSix.png'

const BrandMain = () => {
  return (
    <div className='bg-blue-500'>
        <h1 className='text-white text-4xl text-center font-medium py-10'>
                Наши инновации
            </h1>
        
        
        <div className='grid grid-cols-3 mx-50'>

            <div>
                <img className='w-90 h-90' src={CartOne} alt="" />
                <h1 className='text-white py-3 text-2xl w-80'>Тренажер Лестница TRUE Palisade</h1>
                <hr className=' border-t-2 border-yellow-500 w-60 py-5'/>
            </div>

            <div>
                <img className='w-90' src={CartTwo} alt="" />
                <h1 className='text-white py-3 text-2xl w-80'>Функциональный тренинг с Composite Strength</h1>
                <hr className=' border-t-2 border-yellow-500 w-60 py-5'/>
            </div>

            <div>
                <img className='w-90 h-90 object-cover' src={CartThre} alt="" />
                <h1 className='text-white py-3 text-2xl w-80'>Рамы для стрейтчинга TRUE Stretch</h1>
                <hr className=' border-t-2 border-yellow-500 w-60 py-5'/>
            </div>

            <div>
                <img className='w-90 h-90 object-cover' src={CartFour} alt="" />
                <h1 className='text-white py-3 text-2xl w-80'> Латеральный тренажер TRUE Traverse</h1>
                <hr className=' border-t-2 border-yellow-500 w-60 py-5'/>
            </div>

            <div>
                <img className='w-90 h-90 object-cover' src={CartFive} alt="" />
                <h1 className='text-white py-3 text-2xl w-80'>Беговая дорожка TRUE Alpine Runner</h1>
                <hr className=' border-t-2 border-yellow-500 w-60 py-5'/>
            </div>

            <div>
                <img className='w-90' src={CartSix} alt="" />
                <h1 className='text-white py-3 text-2xl w-80'>Эллиптический тренажер TRUE Spectrum</h1>
                <hr className=' border-t-2 border-yellow-500 w-60 py-5'/>
            </div>
            

        </div>
    </div>
  )
}

export default BrandMain