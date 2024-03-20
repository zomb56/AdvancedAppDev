import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Login from '../../assets/login.jpg';
import Yoga from '../../assets/yoga.jpeg';
import Yoga2 from '../../assets/yoga2.jpg';
// import Sidebar from './Sidebar';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

//   const nav = useNavigate();
  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const exploreButtonStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <Navbar/>
      {/* <div className='main'> */}
      {/* <Sidebar/> */}
      <div className='title'>
        <div className='home-text' style={contentStyle}>
        <h1 className='text-white fw-bold text-center mt-4 mb-4'>ZenVista</h1>
        <p className='col-lg-12 mb-8'>
        ZenVista Yoga Academy is dedicated to promoting holistic wellness through the ancient practice of yoga, aiming to cultivate physical, mental, and spiritual well-being among its students. The academy offers a diverse range of yoga classes, workshops, and training programs suitable for practitioners of all levels, from beginners to advanced yogis. Classes may include Hatha, Vinyasa, Ashtanga, Yin, and more, catering to various interests and preferences. Led by experienced and certified yoga instructors, Zenvista Yoga Academy prioritizes the quality of instruction and personalized guidance. The instructors are passionate about sharing their knowledge and expertise to support students on their yoga journey.The academy provides a serene and welcoming environment conducive to practice, equipped with modern amenities and comfortable spaces for yoga sessions, meditation, and relaxation.
        </p>
        <div className='home-container'>
            <div className='text-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac elit id tortor facilisis ultricies. Maecenas vitae lacus in
              velit aliquet feugiat. Vivamus vestibulum, neque nec convallis
              tempus, elit nisl viverra nulla, ac sollicitudin nisi libero nec
              magna.</p>
            </div>
            <div className='image-container'>
              <img src={Login}/>
            </div>
        </div>
        <div className='home-container'>
            <div className='image-container'>
              <img src={Yoga}/>
            </div>
            <div className='text-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac elit id tortor facilisis ultricies. Maecenas vitae lacus in
              velit aliquet feugiat. Vivamus vestibulum, neque nec convallis
              tempus, elit nisl viverra nulla, ac sollicitudin nisi libero nec
              magna.</p>
            </div>
        </div>
        <div className='home-container'>
            <div className='text-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac elit id tortor facilisis ultricies. Maecenas vitae lacus in
              velit aliquet feugiat. Vivamus vestibulum, neque nec convallis
              tempus, elit nisl viverra nulla, ac sollicitudin nisi libero nec
              magna.</p>
            </div>
            <div className='image-container'>
              <img src={Yoga2}/>
            </div>
        </div>

        {/* <div className='text-center mb-4' style={exploreButtonStyle}><button className='btn btn-primary'>Explore!</button></div> */}
        </div>
      </div>
      {/* </div> */}
      <Footer/>
    </>
  );
};

export default Home;

// import { NavLink } from "react-router-dom";
// import '../Home/Home.css';

// export const Home = () => {
//   return (
//     <div>
//         <div className="home">
//           <div className="aad">
//           <div className="glass-container">
//             <NavLink to="/" className="glass prepaid">
//               <h3>Prepaid</h3>
//               <ul>
//                 <li>Instant recharge.</li>
//                 <li>Flexible plans.</li>
//                 <li>Cost control.</li>
//               </ul>
//             </NavLink>
//             <NavLink to="/" className="glass postpaid">
//               <h3>Postpaid</h3>
//               <ul>
//                 <li>Convenient billing.</li>
//                 <li>Premium features.</li>
//                 <li>Budget flexibility.</li>
//               </ul>
//             </NavLink>
//             <NavLink to="/" className="glass addons">
//               <h3>Addons</h3>
//               <ul>
//                 <li>Enhance your plan.</li>
//                 <li>Tailored experience.</li>
//                 <li>Value for money.</li>
//               </ul>
//             </NavLink>
//             <div className="glass others">
//               <h3>Others</h3>
//               <ul>
//               <li>Explore more options.</li>
//               <li>Discover new offerings.</li>
//               <li>Stay updated with latest deals.</li>
//               </ul>
//             </div>
//           </div>
//           </div>
//           <div className="ezpay-text"><span className="ezt">ezPay</span> - Tap, Recharge, Done !!</div>
//         </div>
//     </div>
//   );
// };

// export default Home;