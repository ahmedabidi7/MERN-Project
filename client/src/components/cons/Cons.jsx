import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import './Cons.css'
import data from '../../utils/accordion'
const Cons = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        <div className='v-left'>
            <div className='image-container photo'>
                 <img src='./l13.jpg'/>
            </div>
        </div>

        <div className='flexColStart v-right'>
          <span className='primaryText t1'>Estichar</span>
          <span className='orangeText  t2 ' >User-Friendly Experience</span>
          <span className='t3'>Estichara is an innovative web platform that bridges the gap between legal consultants and clients, providing a seamless and efficient way for both parties to connect and collaborate. With a focus on enhancing accessibility and convenience, LegalConnect revolutionizes the legal consultation process, making it easier for clients to find and engage with qualified legal consultants.
          </span>
          


        </div>
      </div>
    </section>
  )
}

export default Cons