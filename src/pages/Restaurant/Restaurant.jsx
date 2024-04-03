import './Restaurant.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import dataTimeline from '../../data/dataTimeline'
import {scrollTop} from "../../hooks/scrollTop"

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Restaurant() {
    scrollTop(0,0)
  return (
    <>
        <Header/>

        <div className="resto">
            <h1>Rétrospective de l'Escargot Bleu</h1>

            <VerticalTimeline>
                {
                    dataTimeline.map((element) => {
                        return (
                            <VerticalTimelineElement
                            key={element.id}
                            iconStyle={{ background: '#D7F3E6', border:'none'}}
                            >
                                <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                                <p className='vertical-timeline-element-subtitle'>{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>

        <Footer/>

    </>
  )
}