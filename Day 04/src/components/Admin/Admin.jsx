import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Rating } from '@mui/material';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../Admin/Admin.css';

import Home from '../../assets/homebg.png';
import P1 from '../../assets/program_images/p1.jpg';
import P2 from '../../assets/program_images/p2.jpg';
import P3 from '../../assets/program_images/p3.jpg';
import P4 from '../../assets/program_images/p4.jpg';
import P5 from '../../assets/program_images/p5.jpg';
import P6 from '../../assets/program_images/p6.jpg';

const Admin = () => {
    const [academies, setAcademies] = useState([
      { id: 1, name: 'Nirvana Yoga Academy', location: 'New York', image: Home, rating: 4 },
      { id: 2, name: 'Glo Yoga Academy', location: 'Tokyo', image: P1, rating: 3 },
      { id: 3, name: 'Mantra Yoga Academy', location: 'Delhi', image: P2, rating: 5 },
      { id: 4, name: 'Octave Yoga Academy', location: 'London', image: P3, rating: 2 },
      { id: 5, name: 'Asana Yoga Academy', location: 'Paris', image: P4, rating: 4 },
      { id: 6, name: 'Blue Moon Yoga Academy', location: 'Melbourne', image: P5, rating: 3 },
      { id: 7, name: 'Arch Yoga Academy', location: 'Sao Paulo', image: P6, rating: 4 },
      { id: 7, name: 'Astral Yoga Academy', location: 'Beijing', image: P6, rating: 4 },
      // Add more academies as needed
    ]);
  
    const [searchTerm, setSearchTerm] = useState('');
    const [editingAcademy, setEditingAcademy] = useState(null);
    const [newName, setNewName] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newRating, setNewRating] = useState(0);
    const [newImage, setNewImage] = useState('');
    const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);
  
    const filteredAcademies = academies.filter((academy) =>
      academy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleEdit = (academy) => {
      setEditingAcademy(academy);
      setNewName(academy.name);
      setNewLocation(academy.location);
      setNewRating(academy.rating);
      setNewImage(academy.image);
      openModal();
    };
  
    const handleSaveEdit = () => {
      setAcademies((prevAcademies) =>
        prevAcademies.map((academy) =>
          academy.id === editingAcademy.id
            ? { ...academy, name: newName, location: newLocation, rating: newRating, image: newImage }
            : academy
        )
      );
      setEditingAcademy(null);
      resetNewAcademyFields();
      closeModal();
    };
  
    const handleCancelEdit = () => {
      setEditingAcademy(null);
      resetNewAcademyFields();
      closeModal();
    };
  
    const handleDelete = (academyId) => {
      setAcademies((prevAcademies) =>
        prevAcademies.filter((academy) => academy.id !== academyId)
      );
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
    const handleAddNewAcademy = () => {
      setIsAddNewModalOpen(true);
    };
  
    const handleSaveNewAcademy = () => {
      if (newName && newLocation && newRating !== null && newImage) {
        const newAcademy = {
          id: academies.length + 1,
          name: newName,
          location: newLocation,
          rating: newRating,
          image: newImage,
        };
        setAcademies((prevAcademies) => [...prevAcademies, newAcademy]);
        resetNewAcademyFields();
        setIsAddNewModalOpen(false);
      }
    };
  
    const handleCancelNewAcademy = () => {
      resetNewAcademyFields();
      setIsAddNewModalOpen(false);
    };
  
    const resetNewAcademyFields = () => {
      setNewName('');
      setNewLocation('');
      setNewRating(0);
      setNewImage('');
    };
  
    const navigate = useNavigate();
  
    // Redirect to ViewCourses page
    const redirectToViewCourses = () => {
      navigate('/programs');
    };
  
    // Redirect to ViewCourses page when clicking the "View Courses" button
    const handleViewCourses = () => {
      navigate('/programs');
    };
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
      <Navbar/>
        <Container className='admin-ac-whole'>
          <div className='admin-academy'>
            <center>
              <h2>Academies</h2>
              <div className='academy-search'>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="admin-academy-text"
                  />
                  <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </button>
                </div>
              </div>
            </center>
            <div className="academy-list">
              {filteredAcademies.length === 0 ? (
                <div className="no-academy-found-message">
                  <p>Oops! No academy found.</p>
                </div>
              ) : (
              filteredAcademies.map((academy) => (
                  // <div className='search-box'>
                <div key={academy.id} className="academy-box">
                  <div className="academy-info">
                    <center>
                      <img
                        src={academy.image}
                        alt={academy.name}
                        className="academy-img"
                        onClick={() => handleEdit(academy)}
                      />
                    </center>
                    <div>
                      <strong>{academy.name}</strong>
                      <p>{academy.location}</p>
                      <div className="academy-rating">
                          <Rating name="read-only" value={academy.rating} readOnly className="star-icon" />
                      </div>
                  </div>
                  </div>
  
                  <div className="academy-actions">
                    <button onClick={() => handleEdit(academy)}>
                      <FontAwesomeIcon icon={faEdit} />
                      {/* Edit */}
                    </button>
                    <button onClick={() => handleDelete(academy.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                      {/* Delete */}
                    </button>
                  <div className="view-courses-button">
                      <button onClick={handleViewCourses}>View Programs</button>
                  </div>
                  </div>
                </div>
              )))}
            </div>
            <div className="add-academy-form">
              {/* <h3>Add New Academy</h3> */}
              <center>
              <button onClick={handleAddNewAcademy} className="modal-add-new">
                <FontAwesomeIcon icon={faPlus} />
                Add New Academy
              </button>
              </center>
            </div>
          </div>
        </Container>
  
        {/* Modal for Editing */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Academy"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
            },
            content: {
              width: '50%',
              margin: 'auto',
              borderRadius: '8px',
            },
          }}
        >
          <div className="modal-header">
            <h2>Edit Academy</h2>
            <div className='modal-close-button'>
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </div>
          </div>
          <div className="modal-content">
            {editingAcademy?.id && (
              <div className="edit-form">
                <input
                  type="text"
                  placeholder="New Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="New Location"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                />
                <Rating
                  name="newRating"
                  value={newRating}
                  onChange={(event, newValue) => setNewRating(newValue)}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>
          <div className='academyEdit'>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </Modal>
  
        {/* Modal for Adding New Academy */}
        <Modal
          isOpen={isAddNewModalOpen}
          onRequestClose={handleCancelNewAcademy}
          contentLabel="Add New Academy"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
            },
            content: {
              width: '50%',
              margin: 'auto',
              borderRadius: '8px',
              height:'50%',
            },
          }}
        >
          <div className="modal-header">
            <h2>Add New Academy</h2>
            <div className='modal-close-button'>
              <button onClick={handleCancelNewAcademy} className="close-button">
                &times;
              </button>
            </div>
          </div>
          <div className="modal-content">
            <div className="edit-form">
              <input
                type="text"
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Location"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
              <Rating
                name="newRating"
                value={newRating}
                onChange={(event, newValue) => setNewRating(newValue)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className='academyEdit'>
            <button onClick={handleSaveNewAcademy}>Save</button>
            <button onClick={handleCancelNewAcademy}>Cancel</button>
          </div>
        </Modal>
        <Footer/>
      </>
    );
  };
  
  export default Admin;