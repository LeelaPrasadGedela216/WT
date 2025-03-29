import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import about from "../assets/frontend_assets/about_img.png";
import NewsBox from "../components/NewsBox";
import CartItem from "../components/CartItem";
import { setIsSearchOpen } from "../utils/homeSlice";
import { useDispatch } from "react-redux";
import Cart from "./Cart";

const About = () => {
  const dispatch=useDispatch();
  const toggleSearch = () => {
      dispatch(setIsSearchOpen());
    };
  return (
    <div className="px-[5vw] sm:px-[7vw] lg:px-[9vw] text-center ">
      <Navbar toggleSearch={toggleSearch} /> 
      <hr className="border-none h-[1px] bg-gray-200 mb-10"/>
      <div className="mb-10 ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-16  mb-20">
        <div>
          <img src={about} className=" w-full  mb-10 sm:mb-0 sm:min-w-[450px]" />
        </div>
        <div className="  flex items-center mb-0 pt-0 ">
          <div className="flex flex-col  justify-center  sm:pr-8 text-left font-medium w-full">
            <p className="mb-5 text-gray-500 w-full">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="mb-5 text-gray-500">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <p className="text-black font-bold my-6">Our Mission</p>
            <p className="text-gray-500 mb-0 pt-0">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10  ">
        <div
          className={`flex  text-xl justify-start items-center space-x-1 font-semibold mt-8 flex-wrap p-1 xs:p-0`}
        >
          <p className=" text-gray-500">{"WHY"}</p>
          <p className=" text-gray-800">{"CHOOSE US"}</p>
          <hr className="w-[50px] border-none bg-gray-800 h-[2px]" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mb-20">
        <div className=" p-10 sm:py-20 sm:px-16 flex flex-col justify-center items-start border-[1.5px] flex-1">
          <p className="font-bold text-sm my-4">Quality Assurance:</p>
          <p className="text-sm text-gray-500 text-left">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="p-10 sm:py-20 sm:px-16 flex flex-col justify-center items-start border-[1.5px] flex-1">
          <p className="font-bold text-sm my-4">Convenience:</p>
          <p className="text-sm text-gray-500 text-left">
          
          With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className="p-10 sm:py-20 sm:px-16 flex flex-col  text-left border-[1.5px] items-start flex-1">
          <p className=" text-sm my-4 font-bold"> Exceptional Customer Service:</p>
          <p className="text-sm text-gray-500 text-left">
         
          Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsBox />
      
      <Footer />
    </div>
  );
};

export default About;
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import * as bootstrap from 'bootstrap';
// import elements from "./elements"
// function App() {
//   // State for selected element
//   const [selectedElement, setSelectedElement] = useState(null);
//   // State for search query
//   const [searchQuery, setSearchQuery] = useState('');
//   // State for filtered elements
//   const [filteredElements, setFilteredElements] = useState([]);
//   // State for category filter
//   const [categoryFilter, setCategoryFilter] = useState('all');
//   // State for dark mode
//   const [darkMode, setDarkMode] = useState(false);
//   // State for loading
//   const [loading, setLoading] = useState(true);
//   // State for offcanvas
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   // State for bookmark
//   const [bookmarks, setBookmarks] = useState([]);
//   // State for quiz mode
//   const [quizMode, setQuizMode] = useState(false);
//   // State for quiz question
//   const [quizQuestion, setQuizQuestion] = useState(null);
//   // State for quiz answer
//   const [quizAnswer, setQuizAnswer] = useState('');
//   // State for quiz score
//   const [quizScore, setQuizScore] = useState(0);
//   // State for quiz total questions answered
//   const [quizTotal, setQuizTotal] = useState(0);
  
//   // Elements data - add more element objects as needed.
  

//   // Element categories and colors
//   const categories = {
//     all: { name: 'All Elements', color: 'bg-dark' },
//     nonmetal: { name: 'Nonmetals', color: 'bg-primary' },
//     'noble-gas': { name: 'Noble Gases', color: 'bg-warning' },
//     'alkali-metal': { name: 'Alkali Metals', color: 'bg-danger' },
//     'alkaline-earth': { name: 'Alkaline Earth Metals', color: 'bg-success' },
//     metalloid: { name: 'Metalloids', color: 'bg-info' },
//     'post-transition': { name: 'Post-Transition Metals', color: 'bg-secondary' },
//     halogen: { name: 'Halogens', color: 'bg-secondary' }
//   };

//   // Generate a random quiz question
//   const generateQuizQuestion = () => {
//     const questionTypes = ['symbol', 'name', 'atomicWeight', 'category'];
//     const randomElement = elements[Math.floor(Math.random() * elements.length)];
//     const randomQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

//     let question = '';
//     let correctAnswer = '';

//     switch (randomQuestionType) {
//       case 'symbol':
//         question = `What is the symbol for ${randomElement.name}?`;
//         correctAnswer = randomElement.symbol;
//         break;
//       case 'name':
//         question = `What element has the symbol ${randomElement.symbol}?`;
//         correctAnswer = randomElement.name;
//         break;
//       case 'atomicWeight':
//         question = `What is the atomic weight of ${randomElement.name}?`;
//         correctAnswer = randomElement.atomicWeight;
//         break;
//       case 'category':
//         question = `What category does ${randomElement.name} belong to?`;
//         correctAnswer = randomElement.category;
//         break;
//       default:
//         question = `What is the symbol for ${randomElement.name}?`;
//         correctAnswer = randomElement.symbol;
//     }

//     return { question, correctAnswer, element: randomElement };
//   };

//   // Check the quiz answer
//   const checkQuizAnswer = () => {
//     if (!quizQuestion) return;

//     const isCorrect =
//       quizAnswer.toLowerCase() === quizQuestion.correctAnswer.toLowerCase();

//     if (isCorrect) {
//       setQuizScore(quizScore + 1);
//     }

//     // Show result via a bootstrap modal (ensure you create a modal with id "quizResultModal" if needed)
//     const modal = new window.bootstrap.Modal(
//       document.getElementById('quizResultModal')
//     );
//     modal.show();

//     // Set new question and update total
//     setQuizTotal(quizTotal + 1);
//     setQuizQuestion(generateQuizQuestion());
//     setQuizAnswer('');
//   };

//   // Filter elements based on search and category
//   useEffect(() => {
//     let filtered = elements;

//     if (searchQuery) {
//       filtered = filtered.filter(
//         (element) =>
//           element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           element.symbol.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (categoryFilter !== 'all') {
//       filtered = filtered.filter(
//         (element) => element.category === categoryFilter
//       );
//     }

//     setFilteredElements(filtered);
//   }, [searchQuery, categoryFilter]);

//   // Simulate loading
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//     setFilteredElements(elements);
//   }, []);

//   // Add bookmark
//   const addBookmark = (element) => {
//     if (!bookmarks.some((b) => b.id === element.id)) {
//       setBookmarks([...bookmarks, element]);

//       // Show toast
//       const toastElement = document.getElementById('bookmarkToast');
//       const toast = new bootstrap.Toast(toastElement);
// toast.show();

//     }
//   };

//   // Remove bookmark
//   const removeBookmark = (elementId) => {
//     setBookmarks(bookmarks.filter((b) => b.id !== elementId));
//   };

//   // Start quiz
//   const startQuiz = () => {
//     setQuizMode(true);
//     setQuizScore(0);
//     setQuizTotal(0);
//     setQuizQuestion(generateQuizQuestion());
//   };

//   // End quiz
//   const endQuiz = () => {
//     setQuizMode(false);
//     setQuizQuestion(null);
//   };

//   return (
//     <div className={darkMode ? 'bg-dark text-light' : 'bg-light'}>
//       {/* Navigation Bar */}
//       <nav
//         className={`navbar navbar-expand-lg sticky-top ${
//           darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
//         } shadow-sm`}
//       >
//         <div className="container-fluid">
//           <a className="navbar-brand d-flex align-items-center" href="#">
//             <i className="bi bi-hexagon-fill me-2 text-primary"></i>
//             <span>Elemnt Gallery</span>
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#home">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#elements">
//                   Elements
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="#"
//                   onClick={() => setShowOffcanvas(true)}
//                 >
//                   Bookmarks{' '}
//                   <span className="badge bg-primary">{bookmarks.length}</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="#"
//                   data-bs-toggle="modal"
//                   data-bs-target="#quizModal"
//                 >
//                   Quiz
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Info
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       data-bs-toggle="modal"
//                       data-bs-target="#aboutModal"
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       data-bs-toggle="modal"
//                       data-bs-target="#helpModal"
//                     >
//                       Help
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       data-bs-toggle="modal"
//                       data-bs-target="#contactModal"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//             <div className="d-flex">
//               <div className="form-check form-switch me-3 mt-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="darkModeSwitch"
//                   checked={darkMode}
//                   onChange={() => setDarkMode(!darkMode)}
//                 />
//                 <label className="form-check-label" htmlFor="darkModeSwitch">
//                   Dark Mode
//                 </label>
//               </div>
//               <form className="d-flex">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search elements"
//                   aria-label="Search"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button className="btn btn-outline-primary" type="button">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Loading Spinner */}
//       {loading && (
//         <div
//           className="d-flex justify-content-center align-items-center"
//           style={{ height: '80vh' }}
//         >
//           <div
//             className="spinner-border text-primary"
//             role="status"
//             style={{ width: '3rem', height: '3rem' }}
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}

//       {!loading && (
//         <>
//           {/* Hero Section */}
//           <section
//             id="home"
//             className={`py-5 text-center ${
//               darkMode ? 'bg-dark text-light' : 'bg-light'
//             }`}
//           >
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-8 mx-auto">
//                   <h1 className="display-4">Explore the Elements</h1>
//                   <p className="lead mb-4">
//                     Interactive guide to the periodic table with detailed
//                     chemical properties and information.
//                   </p>
//                   <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//                     <a
//                       href="#elements"
//                       className="btn btn-primary btn-lg px-4 gap-3"
//                     >
//                       View Elements
//                     </a>
//                     <button
//                       type="button"
//                       className="btn btn-outline-secondary btn-lg px-4"
//                       data-bs-toggle="modal"
//                       data-bs-target="#infoModal"
//                     >
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Category Filter */}
//           <section
//             className={`py-3 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}
//           >
//             <div className="container">
//               <div className="row">
//                 <div className="col-12">
//                   <h4>Filter by Category:</h4>
//                   <div className="d-flex flex-wrap">
//                     {Object.keys(categories).map((cat) => (
//                       <button
//                         key={cat}
//                         className={`btn m-1 ${
//                           categoryFilter === cat
//                             ? 'btn-primary'
//                             : `btn-outline-${
//                                 cat === 'all' ? 'primary' : 'secondary'
//                               }`
//                         }`}
//                         onClick={() => setCategoryFilter(cat)}
//                       >
//                         <span
//                           className={`badge ${categories[cat].color} me-1`}
//                         >
//                           &nbsp;
//                         </span>
//                         {categories[cat].name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Elements Grid */}
//           <section
//             id="elements"
//             className={`py-5 ${
//               darkMode ? 'bg-dark text-light' : 'bg-secondary bg-opacity-10'
//             }`}
//           >
//             <div className="container">
//               <h2 className="text-center mb-4">Periodic Table</h2>
//               {/* Show alert if no elements match filter */}
//               {filteredElements.length === 0 && (
//                 <div className="alert alert-info" role="alert">
//                   No elements match your search criteria. Try adjusting your
//                   search or filters.
//                 </div>
//               )}
//               <div className="row g-3">
//                 {filteredElements.map((element) => (
//                   <div key={element.id} className="col-md-3 col-sm-6">
//                     <div
//                       className={`card h-100 ${element.color} bg-opacity-25 element-card ${
//                         darkMode ? 'text-light border-secondary' : ''
//                       }`}
//                       onClick={() => setSelectedElement(element)}
//                       data-bs-toggle="modal"
//                       data-bs-target="#elementModal"
//                     >
//                       <div className="card-body">
//                         <div className="d-flex justify-content-between">
//                           <h5 className="card-title">{element.symbol}</h5>
//                           <span className="badge bg-secondary">
//                             {element.id}
//                           </span>
//                         </div>
//                         <h6 className="card-subtitle mb-2">{element.name}</h6>
//                         <p className="card-text small mb-1">
//                           Atomic Weight: {element.atomicWeight}
//                         </p>
//                         <p className="card-text small">
//                           Group: {element.group}, Period: {element.period}
//                         </p>
//                         <span className={`badge ${element.color}`}>
//                           {element.category}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Element Details Modal */}
//           <div
//             className="modal fade"
//             id="elementModal"
//             tabIndex="-1"
//             aria-labelledby="elementModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-lg">
//               <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="elementModalLabel">
//                     {selectedElement && (
//                       <>
//                         <span className="fs-1">{selectedElement.symbol}</span> -{' '}
//                         {selectedElement.name}
//                       </>
//                     )}
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   {selectedElement && (
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div
//                           className={`card mb-3 ${selectedElement.color} bg-opacity-25 ${
//                             darkMode ? 'text-light border-secondary' : ''
//                           }`}
//                         >
//                           <div className="card-body">
//                             <h3 className="card-title">
//                               {selectedElement.symbol}
//                             </h3>
//                             <h5 className="card-subtitle mb-2">
//                               {selectedElement.name}
//                             </h5>
//                             <p className="card-text">
//                               Atomic Number: {selectedElement.id}
//                             </p>
//                             <p className="card-text">
//                               Atomic Weight: {selectedElement.atomicWeight}
//                             </p>
//                             <p className="card-text">
//                               Electron Configuration:{' '}
//                               {selectedElement.electronConfig}
//                             </p>
//                             <p className="card-text">
//                               Group: {selectedElement.group}, Period:{' '}
//                               {selectedElement.period}
//                             </p>
//                             <span className={`badge ${selectedElement.color}`}>
//                               {selectedElement.category}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <h5>Description:</h5>
//                         <p>{selectedElement.description}</p>
//                         <h5>Common Uses:</h5>
//                         <p>{selectedElement.uses}</p>
//                         <button
//                           className="btn btn-outline-primary"
//                           onClick={() => addBookmark(selectedElement)}
//                         >
//                           <i className="bi bi-bookmark-plus"></i> Bookmark
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bookmarks Offcanvas */}
//           <div
//             className={`offcanvas offcanvas-start ${
//               darkMode ? 'bg-dark text-light' : ''
//             }`}
//             tabIndex="-1"
//             id="bookmarksOffcanvas"
//             aria-labelledby="bookmarksOffcanvasLabel"
//             show={showOffcanvas ? 'true' : 'false'}
//           >
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="bookmarksOffcanvasLabel">
//                 <i className="bi bi-bookmark-heart"></i> Bookmarked Elements
//               </h5>
//               <button
//                 type="button"
//                 className="btn btn-close text-reset"
//                 onClick={() => setShowOffcanvas(false)}
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="offcanvas-body">
//               {bookmarks.length === 0 ? (
//                 <div className="alert alert-info">
//                   You haven't bookmarked any elements yet. Click the bookmark
//                   button on any element to add it here.
//                 </div>
//               ) : (
//                 <div className="list-group">
//                   {bookmarks.map((element) => (
//                     <div
//                       key={element.id}
//                       className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
//                     >
//                       <div>
//                         <strong>{element.symbol}</strong> - {element.name}
//                       </div>
//                       <button
//                         className="btn btn-sm btn-outline-danger"
//                         onClick={() => removeBookmark(element.id)}
//                       >
//                         <i className="bi bi-trash"></i>
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Info Modal */}
//           <div
//             className="modal fade"
//             id="infoModal"
//             tabIndex="-1"
//             aria-labelledby="infoModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog">
//               <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="infoModalLabel">
//                     About the Periodic Table
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <p>
//                     The periodic table is a tabular arrangement of chemical
//                     elements, organized by their atomic number, electron
//                     configuration, and recurring chemical properties. Elements are
//                     presented in order of increasing atomic number.
//                   </p>
//                   <div className="accordion" id="periodicTableInfo">
//                     <div className="accordion-item">
//                       <h2 className="accordion-header" id="headingOne">
//                         <button
//                           className={`accordion-button ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#collapseOne"
//                           aria-expanded="true"
//                           aria-controls="collapseOne"
//                         >
//                           History of the Periodic Table
//                         </button>
//                       </h2>
//                       <div
//                         id="collapseOne"
//                         className="accordion-collapse collapse show"
//                         aria-labelledby="headingOne"
//                         data-bs-parent="#periodicTableInfo"
//                       >
//                         <div
//                           className={`accordion-body ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                         >
//                           <p>
//                             The periodic table was first created by Russian chemist
//                             Dmitri Mendeleev in 1869. He arranged chemical elements by
//                             their atomic weight, and noticed patterns in their
//                             properties, allowing him to place them in groups.
//                           </p>
//                           <p>
//                             The modern periodic table is arranged by atomic number rather
//                             than weight, following Henry Moseley's work in 1913.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header" id="headingTwo">
//                         <button
//                           className={`accordion-button collapsed ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#collapseTwo"
//                           aria-expanded="false"
//                           aria-controls="collapseTwo"
//                         >
//                           Structure and Organization
//                         </button>
//                       </h2>
//                       <div
//                         id="collapseTwo"
//                         className="accordion-collapse collapse"
//                         aria-labelledby="headingTwo"
//                         data-bs-parent="#periodicTableInfo"
//                       >
//                         <div
//                           className={`accordion-body ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                         >
//                           <p>Elements are arranged in periods (rows) and groups (columns):</p>
//                           <ul>
//                             <li>Groups share similar chemical properties</li>
//                             <li>
//                               Periods show trends in atomic radius, ionization energy,
//                               and electronegativity
//                             </li>
//                           </ul>
//                           <p>
//                             The table is divided into blocks based on the electron shell
//                             being filled: s-block, p-block, d-block, and f-block elements.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* About Modal */}
//           <div
//             className="modal fade"
//             id="aboutModal"
//             tabIndex="-1"
//             aria-labelledby="aboutModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog">
//               <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="aboutModalLabel">
//                     About This Application
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <p>
//                     The Interactive Periodic Table & Chemical Explorer is a web
//                     application designed to help users explore and learn about chemical
//                     elements in an engaging way.
//                   </p>
//                   <p>Features include:</p>
//                   <ul>
//                     <li>Interactive element cards with detailed information</li>
//                     <li>Filtering by element category</li>
//                     <li>Search functionality</li>
//                     <li>Element bookmarking system</li>
//                     <li>Educational quiz mode</li>
//                     <li>Dark mode support</li>
//                   </ul>
//                   <p>This application was built using React and Bootstrap 5.</p>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Help Modal */}
//           <div
//             className="modal fade"
//             id="helpModal"
//             tabIndex="-1"
//             aria-labelledby="helpModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog">
//               <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="helpModalLabel">
//                     Help & Instructions
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <div className="accordion" id="helpAccordion">
//                     <div className="accordion-item">
//                       <h2 className="accordion-header" id="headingBasics">
//                         <button
//                           className={`accordion-button ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#collapseBasics"
//                           aria-expanded="true"
//                           aria-controls="collapseBasics"
//                         >
//                           Basic Navigation
//                         </button>
//                       </h2>
//                       <div
//                         id="collapseBasics"
//                         className="accordion-collapse collapse show"
//                         aria-labelledby="headingBasics"
//                         data-bs-parent="#helpAccordion"
//                       >
//                         <div
//                           className={`accordion-body ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                         >
//                           <p>To get started:</p>
//                           <ol>
//                             <li>Browse the element cards in the Periodic Table section</li>
//                             <li>Click on any element card to view detailed information</li>
//                             <li>Use the category buttons to filter elements by type</li>
//                             <li>Use the search box to find specific elements</li>
//                           </ol>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header" id="headingBookmarks">
//                         <button
//                           className={`accordion-button collapsed ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#collapseBookmarks"
//                           aria-expanded="false"
//                           aria-controls="collapseBookmarks"
//                         >
//                           Using Bookmarks
//                         </button>
//                       </h2>
//                       <div
//                         id="collapseBookmarks"
//                         className="accordion-collapse collapse"
//                         aria-labelledby="headingBookmarks"
//                         data-bs-parent="#helpAccordion"
//                       >
//                         <div
//                           className={`accordion-body ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                         >
//                           <p>To bookmark elements:</p>
//                           <ol>
//                             <li>Click on an element to open its details</li>
//                             <li>Click the "Bookmark" button</li>
//                             <li>
//                               Access your bookmarked elements by clicking "Bookmarks" in the navigation
//                               bar
//                             </li>
//                             <li>Remove bookmarks by clicking the trash icon</li>
//                           </ol>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header" id="headingQuiz">
//                         <button
//                           className={`accordion-button collapsed ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#collapseQuiz"
//                           aria-expanded="false"
//                           aria-controls="collapseQuiz"
//                         >
//                           Quiz Mode
//                         </button>
//                       </h2>
//                       <div
//                         id="collapseQuiz"
//                         className="accordion-collapse collapse"
//                         aria-labelledby="headingQuiz"
//                         data-bs-parent="#helpAccordion"
//                       >
//                         <div
//                           className={`accordion-body ${
//                             darkMode ? 'bg-dark text-light' : ''
//                           }`}
//                         >
//                           <p>To test your knowledge:</p>
//                           <ol>
//                             <li>Click "Quiz" in the navigation bar</li>
//                             <li>Click "Start Quiz" to begin</li>
//                             <li>Answer the questions by typing in the answer field</li>
//                             <li>
//                               Click "Submit Answer" to check your answer and move to the next question
//                             </li>
//                             <li>View your score at the end of the quiz</li>
//                           </ol>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Modal */}
//           <div
//             className="modal fade"
//             id="contactModal"
//             tabIndex="-1"
//             aria-labelledby="contactModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog">
//               <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="contactModalLabel">
//                     Contact Us
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <form>
//                     <div className="mb-3">
//                       <label htmlFor="contactName" className="form-label">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="contactName"
//                         placeholder="Your name"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="contactEmail" className="form-label">
//                         Email address
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="contactEmail"
//                         placeholder="your.email@example.com"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="contactSubject" className="form-label">
//                         Subject
//                       </label>
//                       <select className="form-select" id="contactSubject">
//                         <option selected>Please select a subject</option>
//                         <option value="feedback">Feedback</option>
//                         <option value="suggestion">Suggestion</option>
//                         <option value="report">Report an issue</option>
//                         <option value="question">Question</option>
//                       </select>
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="contactMessage" className="form-label">
//                         Message
//                       </label>
//                       <textarea
//                         className="form-control"
//                         id="contactMessage"
//                         rows="5"
//                         placeholder="Your message"
//                       ></textarea>
//                     </div>
//                   </form>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                   <button type="button" className="btn btn-primary">
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quiz Modal */}
//           <div
//             className="modal fade"
//             id="quizModal"
//             tabIndex="-1"
//             aria-labelledby="quizModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog">
//               <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="quizModalLabel">
//                     Element Quiz
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   {quizMode ? (
//                     <div>
//                       <div className="alert alert-primary">
//                         <p className="mb-0">
//                           Question {quizTotal + 1}:{' '}
//                           {quizQuestion?.question}
//                         </p>
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="quizAnswer" className="form-label">
//                           Your Answer:
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="quizAnswer"
//                           value={quizAnswer}
//                           onChange={(e) => setQuizAnswer(e.target.value)}
//                         />
//                       </div>
//                       <button
//                         className="btn btn-primary"
//                         onClick={checkQuizAnswer}
//                       >
//                         Submit Answer
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="d-flex flex-column align-items-center">
//                       <p>Ready to test your periodic table knowledge?</p>
//                       <button
//                         className="btn btn-success mb-2"
//                         onClick={startQuiz}
//                       >
//                         Start Quiz
//                       </button>
//                       <button className="btn btn-secondary" onClick={endQuiz}>
//                         Exit Quiz
//                       </button>
//                     </div>
//                   )}
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                     onClick={endQuiz}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bookmark Toast */}
//           <div
//             className="toast-container position-fixed bottom-0 end-0 p-3"
//             style={{ zIndex: 1100 }}
//           >
//             <div
//               id="bookmarkToast"
//               className="toast"
//               role="alert"
//               aria-live="assertive"
//               aria-atomic="true"
//             >
//               <div className="toast-header">
//                 <strong className="me-auto">Bookmark Added</strong>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="toast"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="toast-body">Element has been bookmarked.</div>
//             </div>
//           </div>
          
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
