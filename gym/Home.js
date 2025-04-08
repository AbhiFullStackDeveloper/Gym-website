import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import hello from "../img/Readyimg";
import '../Front/raj.css';
import '../img/gym2.jpg';


const Home = () => {
    return (

      
        <div>
             <Carousel>
      <Carousel.Item>
        <img src={hello.Biceps} alt=" Biceps" width="1500px" height="400px"/>
        <Carousel.Caption>
          <h3>Dumbbell WorkOut Zone</h3>
          <p>Stay Fit Stay Well</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={hello.Ram} alt=" Ram" width="1500px" height="400px"/>
        <Carousel.Caption>
          <h3>Tread Mill Zone</h3>
          <p>Burn Your Calories</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={hello.Work} alt=" Work" width="1500px" height="400px"/>
        <Carousel.Caption>
          <h3>Cycling Zone</h3>
          <p>
           Burn Your Fat
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>

<div className="raj" >
    <b> WELCOME TO THE  FITNESS HEALTH CLUB </b>
    <br></br><br></br>

<b>Facilities and Equipment Gym Area</b>
<br></br>
<p>Square footage, types of workout areas (e.g., cardio, strength training, functional training).<br></br>
Equipment: Brands and types of machines (treadmills, ellipticals, free weights, resistance machines, etc.).<br></br>
Specialized Areas: Yoga studio, spin room, boxing area, swimming pool, sauna, steam room.<br></br>
Locker Rooms: Availability of lockers, showers, toiletries.</p>
<br></br>
<b>Classes and Programs </b>
<br></br>
<p>Group Fitness Classes: Yoga, Pilates, Zumba, HIIT, spin classes, etc.
Personal Training: Availability, qualifications of trainers, pricing.<br></br>
Special Programs: Weight loss programs, rehabilitation, sports-specific training.</p>
<br></br>

<b>Membership Options and Pricing</b><br></br>
<p>
Membership Plans: Monthly, annual, family plans, student discounts.<br></br>
Pricing: Cost of each membership type, additional fees (sign-up, cancellation, etc.).<br></br>
Trial Options: Free trials, guest passes.</p>

<b>Additional Services</b><br></br>

<p>Nutrition Counseling: Availability of dietitians or nutritionists.
Childcare: On-site childcare services.<br></br>
Wellness Services: Massage therapy, physiotherapy.<br></br>
Retail: Sale of fitness apparel, supplements, and snacks.</p>
<br></br>


<b>Safety and Cleanliness</b><br></br>
<p>Sanitation Protocols: Cleaning schedules, availability of sanitizers.<br></br>
Safety Measures: Emergency protocols, security.</p>
</div>
        </div>
    )
}

export default Home;
