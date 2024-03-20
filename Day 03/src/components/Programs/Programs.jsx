import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../Programs/Programs.css';
import P1 from '../../assets/program_images/p1.jpg';
import P2 from '../../assets/program_images/p2.jpg';
import P3 from '../../assets/program_images/p3.jpg';
import P4 from '../../assets/program_images/p4.jpg';
import P5 from '../../assets/program_images/p5.jpg';
import P6 from '../../assets/program_images/p6.jpg';
import { useNavigate } from 'react-router-dom';

const Programs = () => {



  return (
    <>
      <Navbar/>
      {/* <div class="card-grid card-grid--scroll">
        <div class="content-card__container grid-column-span-4-lg grid-column-span-4-md grid-column-span-3-sm 
        grid-column-span-all-xs content-card__container--link" data-link="/programs/426">
          <div class="content-card" tabindex="0">
            <div class="content-card__content-container">
              <a href='programs/426'>
                <div class="content-card__header " style="background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(30, 30, 40, 0.3) 100%), 
                url(https://ddjv1g7udgx6x.cloudfront.net/programs/426/Khetanya_Henderson_ProgStills_Assets_v1Thumbnail_Image_900x453.jpg);">
                  <div class="content-card__modality"></div>

                </div>
              </a>
              <div class="content-card__copy-container">
                <div class="content-card__copy-hearder">

                </div>
                <div class="content-card__copy-body">
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}
      <div className='primary-grid'>
        <div class="grid-container">
          <div class="card">
            <img src={P1}/>
            <div class="card-content">
              <h4>Dynamic Cardio & Pilates Blast</h4>
              <p>Mat Pilates and Cardio with Khetanya Henderson</p>
            </div>
          </div>
        
          <div class="card">
            <img src={P2}/>
            <div class="card-content">
            <h4>Complete Mind-Body Prenatal Support</h4>
              <p>Prenatal and Postnatal with Ivorie Jenkins</p>
            </div>
          </div>
          <div class="card">
            <img src={P3}/>
            <div class="card-content">
              <h4>Full Body Balance</h4>
              <p>Hatha with Jason Crandell</p>
            </div>
          </div>
        
        </div>
        <div class="grid-container">
          <div class="card">
            <img src={P4}/>
            <div class="card-content">
              <h4>Mind-Body Barre Sculpt</h4>
              <p>Barre with Jenni Del Pozo</p>
            </div>
          </div>
        
          <div class="card">
            <img src={P5}/>
            <div class="card-content">
              <h4>Iyengar Yoga 101</h4>
              <p>Iyengar Yoga with Nikki Costello</p>
            </div>
          </div>
        
          <div class="card">
            <img src={P6}/>
            <div class="card-content">
              <h4>40-Day Radiant Body Sadhana</h4>
              <p>Kundalini with Kia Miller</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Programs;