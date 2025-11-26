"use client";

import { useState } from 'react';
// Import necessary modules for Next.js if using Image or specialized components, 
// but sticking to basic JSX/Bootstrap for maximum compatibility with the provided code.

const DGY_IMAGES = [
  { src: 'placeholder1.png', alt: 'DGY Event Photo 1' },
  { src: 'placeholder2.png', alt: 'DGY Event Photo 2' },
  { src: 'placeholder3.png', alt: 'DGY Event Photo 3' },
];

// Reusable Carousel Component for the DGY Cards (Optional: Define outside or use inline if preferred)
function DGYCarousel({ id, images }) {
  return (
    <div id={`carousel-${id}`} className="carousel slide" data-bs-ride="carousel" style={{ height: '200px', backgroundColor: '#f4f7ff', borderBottom: '1px solid #ddd' }}>
      <div className="carousel-inner h-100">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}>
            {/* Placeholder Image/Content */}
            <div className="d-flex justify-content-center align-items-center h-100" style={{ color: '#0c2461', fontSize: '30px' }}>
              <i className="bi bi-image me-2"></i> {image.alt.replace('DGY Event Photo', 'Image')}
            </div>
            {/* Replace the above div with a real <Image> component when image source is available */}
            {/* <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="d-block w-100" /> */}
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


export default function Events() {
  const primaryColor = "#0c2461"; // Ateneo Blue

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              
              {/* HEADER (Styled with primaryColor) */}
              <div className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25" style={{ color: primaryColor }}> 
                <i className="bi bi-calendar-event me-2" style={{ fontSize: "18px" }}></i>
                <span style={{ fontSize: "18px" }}>Events</span>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">

                {/* 1. RECENT EVENTS SECTION */}
                <h3 className="fw-bold mb-4 mt-2" style={{ color: primaryColor }}>Recent Events</h3>
                
                {/* Events Grid (2-column layout on large screens, stacked on small screens) */}
                <div className="row g-4 mb-5">
                  
                  {/* Event Card 1: Year 1 - Introduction to Ignatian Spirituality */}
                  <div className="col-lg-6 col-md-12">
                    {/* Added custom class 'event-card-hover' for shadow transition */}
                    <div className="card h-100 rounded-3 border-0 shadow-sm event-card-hover">
                      <div className="card-body d-flex flex-column">
                        <h4 className="card-title fw-bold mb-3" style={{ color: primaryColor }}>
                          Year 1: Introduction to Ignatian Spirituality
                        </h4>
                        
                        <div className="mb-3">
                          <p className="card-subtitle text-success fw-bold fs-5">IS ON GOING</p>
                        </div>
                        
                        <div className="mt-auto pt-2 border-top">
                          <p className="mb-1 text-muted"><strong>Location:</strong> Lantaka Campus</p>
                          <p className="mb-0 text-secondary small">Theme: <em>Año de Compañerismo</em></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Card 2: Year 2 - Laudato Si' (Using the same new card format) */}
                  <div className="col-lg-6 col-md-12">
                    {/* Added custom class 'event-card-hover' for shadow transition */}
                    <div className="card h-100 rounded-3 border-0 shadow-sm event-card-hover">
                      <div className="card-body d-flex flex-column">
                        <h4 className="card-title fw-bold mb-3" style={{ color: primaryColor }}>
                          Year 2: Laudato Si&apos;
                        </h4>
                        
                        <div className="mb-3">
                          <span className="badge bg-secondary me-2 p-2">January 2026</span>
                          <span className="badge bg-secondary p-2">SY: 2025-2026</span>
                        </div>

                        <p className="card-text text-dark fst-italic mt-2">&quot;More sacred spaces awaits. Let&apos;s see where God leads you next.&quot;</p>
                        
                        <div className="mt-auto pt-2 border-top">
                          <p className="mb-0 text-secondary small">Theme: <em>Año de Compañerismo</em></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator */}
                <hr className="my-4" />

                {/* 2. DAYS WITH GOD (DGY) SECTION */}
                <h3 className="fw-bold mb-3" style={{ color: primaryColor }}>Days with God (DGY) 2025–2026</h3>
                
                <p className="text-muted mb-4 text-wrap text-break">
                    The DGY program offers retreats and formation sessions tailored for faculty and staff, 
                    using Ignatian Spirituality to deepen faith and engagement.
                </p>

                {/* DGY Main Cards Grid */}
                <div className="row g-4">
                    
                    {/* DGY Main Card 1: DGY 4.1 */}
                    <div className="col-lg-6 col-md-12">
                        <div className="card h-100 rounded-3 border-0 shadow-lg p-0">
                            
                            {/* Slideshow/Carousel Section */}
                            <DGYCarousel id="dgy4-1" images={DGY_IMAGES} />

                            <div className="card-body p-3">
                                <h4 className="card-title fw-bold mb-1" style={{ color: primaryColor }}>
                                    Days with God Year 4.1 (DGY4.1)
                                </h4>
                                <p className="mb-1 fw-semibold text-dark">
                                    August 28 to October 30, 2025
                                </p>
                                <p className="mb-3 text-muted">
                                    <i className="bi bi-geo-alt-fill me-1"></i> Immaculate Conception Chapel (ICC)
                                </p>

                                {/* Description */}
                                <div className="border-top pt-2">
                                    <h6 className="fw-bold mb-2">Description:</h6>
                                    <p className="small text-secondary mb-0 text-wrap text-break">
                                        The DGY 4.1 series focuses on a semester-long spiritual journey, encouraging participants to integrate Ignatian exercises into their daily work life through guided prayer and reflection sessions held at the ICC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DGY Main Card 2: DGY 3 */}
                    <div className="col-lg-6 col-md-12">
                        <div className="card h-100 rounded-3 border-0 shadow-lg p-0">
                            
                            {/* Slideshow/Carousel Section */}
                            <DGYCarousel id="dgy3" images={DGY_IMAGES} />

                            <div className="card-body p-3">
                                <h4 className="card-title fw-bold mb-1" style={{ color: primaryColor }}>
                                    Days with God Year 3 (DGY3)
                                </h4>
                                <p className="mb-1 fw-semibold text-dark">
                                    Inter-Religious Dialogue
                                </p>
                                <p className="mb-3 text-muted">
                                    <i className="bi bi-calendar-fill me-1"></i> Novemeber 20-21, 2025
                                </p>

                                {/* Description */}
                                <div className="border-top pt-2">
                                    <h6 className="fw-bold mb-2">Description:</h6>
                                    <p className="small text-secondary mb-0 text-wrap text-break">
                                        This retreat focuses on fostering understanding and respect across different faiths, aligning with the Jesuit mission of reconciliation. It includes facilitated dialogues and shared prayer experiences over two days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for Hover Effect */}
      <style jsx global>{`
        /* Applies a smooth transition to the shadow property */
        .event-card-hover {
          transition: box-shadow 0.3s ease-in-out, transform 0.1s ease-out;
        }

        /* Shadow increase and subtle lift on hover */
        .event-card-hover:hover {
          box-shadow: 0 0.5rem 1rem rgba(12, 36, 97, 0.25) !important; /* Stronger Ateneo Blue shadow */
          transform: translateY(-2px); /* Slight pop-up effect */
          cursor: pointer;
        }
        
        /* Ensures carousel buttons are visible against a light background */
        .carousel-control-prev-icon, .carousel-control-next-icon {
            filter: invert(100%); 
        }
      `}</style>
    </>
  );
}