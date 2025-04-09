import React from 'react'
import MainCarousel from './MainCarousel'
import CarouselRight from './CarouselRight'

const MainSection = ({data}) => {

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-7 px-0">
                <MainCarousel maincrousel={data.maincrousal}/>
            </div>
            <div className="col-lg-5 px-0">
                
                   <CarouselRight sliderRight={data.sliderRight}/>
            </div>
        </div>
    </div>
  )
}

export default MainSection