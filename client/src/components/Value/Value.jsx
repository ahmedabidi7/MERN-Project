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
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        <div className='v-left'>
            <div className='image-container photo'>
                 <img src='./law2.jpg'/>
            </div>
        </div>

        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Value</span>
          <span className='primaryText' >Value We Give to you</span>
          <span>We always ready to help by providing the best services for you.
          </span>
          <Accordion className="accordion"
           allowMultipleExpanded={false}
           preExpanded={[0]}
           >
            {
              data.map((item,i)=> {
                return (
                    <AccordionItem className='accordionItem' key={i} uuid={i}>
                      <AccordionItemHeading>
                         <AccordionItemButton className='flexCenter accordionButton'>
                           <div className='flexCenter icon'>{item.icon}</div>
                           <span className='primaryText q1'>
                             {item.heading}
                           </span>
                           
                         </AccordionItemButton>
                       </AccordionItemHeading>
                       <AccordionItemPanel>
                       <p className='secondaryText q2 '>{item.detail}</p>
                       </AccordionItemPanel>
                    </AccordionItem>
                );
             
        })}
          </Accordion>


        </div>
      </div>
    </section>
  )
}

export default Value