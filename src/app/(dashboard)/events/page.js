"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const primaryColor = "#0c2461";

// --- IMAGES FOR SLIDESHOW ---
const DGY_4_1_2526_IMAGES = [
  { src: '/Images/dgy41.png', alt: 'DGY 4.1 Event Photo 1' },
  { src: '/Images/dgy42.png', alt: 'DGY 4.1 Event Photo 2' },
  { src: '/Images/dgy43.png', alt: 'DGY 4.1 Event Photo 3' },
  { src: '/Images/dgy44.png', alt: 'DGY 4.1 Event Photo 4' },
];

const DGY_3_2526_IMAGES = [
  { src: '/Images/dgy31.png', alt: 'DGY 3 Event Photo 1' },
  { src: '/Images/dgy32.png', alt: 'DGY 3 Event Photo 2' },
  { src: '/Images/dgy33.png', alt: 'DGY 3 Event Photo 3' },
  { src: '/Images/dgy34.png', alt: 'DGY 3 Event Photo 4' },
];

const CIS_IMAGES = [
  { src: '/Images/cis.jpeg', alt: 'CIS Module 1 Photo 1' },
  { src: '/Images/cis2.jpeg', alt: 'CIS Module 1 Photo 2' },
  { src: '/Images/cis3.jpeg', alt: 'CIS Module 1 Photo 3' },
  { src: '/Images/cis4.jpeg', alt: 'CIS Module 1 Photo 4' },
  { src: '/Images/cis5.jpeg', alt: 'CIS Module 1 Photo 5' },
];

const ADMIN_RETREAT2526_IMAGES = [
  { src: '/Images/rnradmin.jpg', alt: 'ADMIN Retreat Photo 1' }, 
  { src: '/Images/rnradmin2.png', alt: 'ADMIN Retreat Photo 2' }, 
];

const LAW_RETREAT2526_IMAGES = [
  { src: '/Images/rnrlaw.jpg', alt: 'LAW Retreat Photo 1' },
  { src: '/Images/rnrlaw2.png', alt: 'LAW Retreat Photo 2' },
  { src: '/Images/rnrlaw3.png', alt: 'LAW Retreat Photo 3' }, 
  { src: '/Images/rnrlaw4.png', alt: 'LAW Retreat Photo 4' }, 
];

const SED_RETREAT2526_IMAGES = [
  { src: '/Images/rnrsed.jpg', alt: 'SED Retreat Photo 1' }, 
  { src: '/Images/rnrsed2.png', alt: 'SED Retreat Photo 2' }, 
  { src: '/Images/rnrsed3.png', alt: 'SED Retreat Photo 3' }, 
];

const USO_RETREAT2526_IMAGES = [
  { src: '/Images/rnraloha.jpg', alt: 'USO Retreat Photo' }, 
];

const ACES_RETREAT2526_IMAGES = [
  { src: '/Images/rnraces.png', alt: 'ACES Retreat Photo 1' }, 
  { src: '/Images/rnraces2.png', alt: 'ACES Retreat Photo 2' }, 
  { src: '/Images/rnraces3.png', alt: 'ACES Retreat Photo 3' }, 
  { src: '/Images/rnraces4.png', alt: 'ACES Retreat Photo 4' }, 
];

const CSITE_RETREAT2526_IMAGES = [
  { src: '/Images/rnrcsite.jpg', alt: 'CSITE Retreat Photo' }, 
];

const INSTITUTIONALACTS_2526_IMAGES = [
  { src: '/Images/Intersession_1_25.jpg', alt: 'Intersession 25-26 Photo 1' },
  { src: '/Images/Intersession_2_25.png', alt: 'Intersession 25-26 Photo 1' }, 
  { src: '/Images/Intersession_3_25.png', alt: 'Intersession 25-26 Photo 1' }, 
  { src: '/Images/Intersession_4_25.png', alt: 'Intersession 25-26 Photo 1' }, 
];

const DGY_1_2425_IMAGES = [
  { src: '/Images/dgy1_2425.png', alt: 'DGY 1 24-25 Photo 1' },
];

const DGY_2_LANTAKA_2425_IMAGES = [
  { src: '/Images/dgy2_lantaka_2425.jpg', alt: 'DGY 2 Lantaka 24-25 Photo 1' }
];

const DGY_2_MURUK_2425_IMAGES = [
  { src: '/Images/dgy2_muruk_2425.jpg', alt: 'DGY 2 Muruk 24-25 Photo 1' }
];

const DGY_2_NANCYFALLS_2425_IMAGES = [
  { src: '/Images/dgy2_nancyfalls_2425.jpg', alt: 'DGY 2 Nancy Falls 24-25 Photo 1' }
];

const DGY_2_11ISLANDS_2425_IMAGES = [
  { src: '/Images/dgy211islands_2425.jpg', alt: 'DGY 2 11 Islands 24-25 Photo 1' }
];

const DGY_3_2425_IMAGES = [
  { src: '/Images/dgy3_2425.jpg', alt: 'DGY 3 24-25 Photo 1' }
];

const DGY_2_11ISLANDS_2324_IMAGES = [
  { src: '/Images/dgy211islands_2324.jpg', alt: 'DGY 2 11 Islands 23-24 Photo 1' }
];

const PPO_DGY_2324_IMAGES = [
  { src: '/Images/ppodgyretreat2324.png', alt: 'PPO DGY 23-24 Photo 1' }
];

const NURSING_RETREAT_2324_IMAGES = [
  { src: '/Images/conretreat2324.png', alt: 'Nursing Retreat 23-24 Photo 1' }
];

const CSITE_RETREAT_2324_IMAGES = [
  { src: '/Images/csiteretreat2324.png', alt: 'CSITE Retreat 23-24 Photo 1' }
];

const SMA_RETREAT_2324_IMAGES = [
  { src: '/Images/smaretreat2324.png', alt: 'SMA Retreat 23-24 Photo 1' }
];

const SED_RETREAT_2324_IMAGES = [
  { src: '/Images/sedretreat2324.png', alt: 'SED Retreat 23-24 Photo 1' }
];

const ADMIN_RETREAT_2324_IMAGES = [
  { src: '/Images/adminrnr2324.jpg', alt: 'Admin Retreat 23-24 Photo 1' }
];

const DGY_1_FEB_2324_IMAGES = [
  { src: '/Images/dgy1feb2324.png', alt: 'DGY 1 23-24 Photo 1' }
];

const DGY_1_MARCH_2324_IMAGES = [
  { src: '/Images/dgy1march2324.png', alt: 'DGY 1 23-24 Photo 1' }
];

const DGY_2_LAPAZ_2324_IMAGES = [
  { src: '/Images/dgy2lapaz_2324.png', alt: 'DGY 2 La Paz 23-24 Photo 1' }
];

const DGY_2_LANTAKA_2324_IMAGES = [
  { src: '/Images/dgy2lantaka_2324.png', alt: 'DGY 2 Lantaka 23-24 Photo 1' }
];

const PPORETREAT_2324_IMAGES = [
  { src: '/Images/ppornrretreat2324.png', alt: 'PPO Retreat 23-24 Photo 1' },
];

// Initial structure for Past Events
const INITIAL_PAST_EVENTS_DATA = [
    {
        id: 'dgy-2025-2026',
        title: 'Days with God (DGY) 2025-2026',
        isCollapsible: true, // Indicates if this is a main archive section
        cards: [
            {
                cardId: 'dgy4-1',
                title: 'Days with God Year 4.1 (DGY4.1)',
                images: DGY_4_1_2526_IMAGES,
                location: 'Immaculate Conception Chapel (ICC)',
                date: 'August 28 to October 30, 2025',
                description: 'The DGY4.1 sessions serve as an essential preparation for the participants’ upcoming 3-day silent retreat. Participants are guided through personal prayer, reflections, and spiritual sharing.',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'dgy3',
                title: 'Days with God Year 3 (DGY3)',
                images: DGY_3_2526_IMAGES,
                location: 'Taluksangay Mosque, Zamboanga City Alliance Evangelical Church, and Avalokitesvara Temple',
                date: 'Novemeber 20-21, 2025',
                description: 'The DGY3 is a two-day Ignatian retreat designed for academic and non-academic staff who have previously completed DGY2.',
                theme: 'Inter-Religious Dialogue',
                icon: 'bi-geo-alt-fill',
                themeIcon: 'bi-chat-heart-fill'
            },
        ]
    },
    { 
        id: 'cis-module', 
        title: 'Center for Ignatian Spirituality (CIS) Module 1', 
        isCollapsible: true, 
        cards: [
            {
                cardId: 'cis-m1-workshop',
                title: 'CIS Module 1: Prayer Workshop & Silent Retreat',
                images: CIS_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'November 10–16, 2025',
                description: 'The Ateneo de Zamboanga University Campus Ministers and Freshmen Formation Program Formators successfully completed Module 1 of the Ignatian Formation Program. Module 1 consisted of an intensive Prayer Workshop, followed by a five-day silent retreat, allowing participants to enter more deeply into personal prayer, interior silence, and spiritual attentiveness. The program, rooted in Ignatian practice, deepens participants’ experience of prayer and prepares them to compassionately accompany others with discernment and an Ignatian grounding. Centered on compañerismo, it emphasizes journeying together in faith and walking with others as they seek meaning and purpose. CONTINUE DO EVERYTHING IN LOVE',
                icon: 'bi-geo-alt-fill'
            }
        ]
    },
    { 
        id: 'rnr-2025-2026',
        title: 'Retreat and Recollection 2025-2026',
        isCollapsible: true,
        cards: [
            {
                cardId: 'adminr',
                title: 'Administrators\' Retreat',
                images: ADMIN_RETREAT2526_IMAGES,
                location: 'Cebu Center for Ignatian Spirituality - Jesuit Retreat House',
                date: 'May 26-29, 2025',
                description: 'Some of the administrators just concluded their 3-day Ignatian (Individually Directed) Retreat in Cebu Center for Ignatian Spirituality - Jesuit Retreat House. It was a time of reflection, reconciliation, and spiritual growth. A celebration of Companionship in the mission.',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'ssednffp',
                title: 'School of Education and FFP Formators Retreat',
                images: SED_RETREAT2526_IMAGES,
                location: 'Cebu Center for Ignatian Spirituality - Jesuit Retreat House',
                date: 'May 27-30, 2025',
                description: 'The professors of the School of Education and FFP Formators just concluded their 3-day Ignatian (Individually Directed) Retreat at the Cebu Center for Ignatian Spirituality - Jesuit Retreat House. We thank God for the opportunity to rest and pray. We thank God for the mission. We thank God for the companions in the journey.',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'usorecollection',
                title: 'USO with Aloha Security Agency Participate in a Recollection',
                images: USO_RETREAT2526_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'June 22, 2025',
                description: 'The members of the Ateneo de Zamboanga University Security Office (USO) in close collaboration with the Aloha Investigation Management CEO Ms Evelyn C Catingub CSP joined forty (40) Aloha Security Personnel for a Recollection Activity led by the Formation Office at Hall A of the AdZU Lantaka Campus, NS Valderosa Street, Zamboanga City. Guiding the attendees was Mr Honey Rod Alfaro who inspired them to take this opportunity to reflect on their lives and build a stronger connection with God.',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'acesrecollection',
                title: 'ACES Corner | Recollection of Experiences',
                images: ACES_RETREAT2526_IMAGES,
                location: 'Immaculate Conception Chapel (ICC)',
                date: 'June 27, 2025',
                description: 'Today, our student immerses stepped into the Immaculate Conception Chapel for a profound Recollection of Experiences, guided by the Unit Director of Formation, Mr. Honey Rod Alfaro. In their quiet reflection, they revisited their journey, the struggles, the lessons, and the unexpected moments of growth. But this wasnt just about looking back. 𝐓𝐡𝐞𝐲 𝐰𝐞𝐫𝐞 𝐜𝐡𝐚𝐥𝐥𝐞𝐧𝐠𝐞𝐝 𝐭𝐨 𝐥𝐨𝐨𝐤 𝐟𝐨𝐫𝐰𝐚𝐫𝐝: "𝘞𝘩𝘢𝘵 𝘤𝘢𝘯 𝘺𝘰𝘶 𝘯𝘰𝘸 𝘥𝘰 𝘧𝘰𝘳 𝘵𝘩𝘦 𝘤𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺 𝘵𝘩𝘢𝘵 𝘩𝘢𝘴 𝘴𝘩𝘢𝘱𝘦𝘥 𝘺𝘰𝘶?"',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'lawstudentsretreat',
                title: 'Law Students Retreat',
                images: LAW_RETREAT2526_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'July 9, 2025',
                description: 'Law students from the Rosendo U. Castillo Jr. College of Law at Ateneo de Zamboanga University spent a day in prayer and reflection at the Lantaka Campus for an Ignatian recollection focused on Ignatian discernment and vocation.',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'csiteretreat',
                title: 'CSITE Retreat',
                images: CSITE_RETREAT2526_IMAGES,
                location: 'Cebu Center for Ignatian Spirituality - Jesuit Retreat House',
                date: 'July 16-18, 2025',
                description: 'The professors of College of Science Information Technology & Engineering (CSITE) have just completed their 3-day Ignatian Retreat, guided by Fr. Jerome "Jem" Guevara SJ, at the Cebu Center for Ignatian Spirituality - Jesuit Retreat House. We are deeply grateful to God for the opportunity to rest, reflect, and pray, for the mission entrusted to us, and for the companionship along this journey.',
                icon: 'bi-geo-alt-fill'
            },
        ] },
    { 
        id: 'inst-2025-2026',
        title: 'Institutional Activities 2025-2026',
        isCollapsible: true,
        cards: [
            {
                cardId: 'intersession',
                title: 'Intersession Program of the Jesuit Scholastics',
                images: INSTITUTIONALACTS_2526_IMAGES,
                location: 'AdZU Main Campus, Sadik Grand Mosque, AdZU Kreutz Campus, and Fort Pilar',
                date: 'July 23, 2025',
                description: 'The Ateneo de Zamboanga University community recently had the honor of welcoming Jesuit Scholastics Bertrand Leong SJ, Chanra Tieng SJ, and Brother JP Socrates SJ. During their intersessions, they visited various communities and participated in an Inter-Religious Dialogue. This experience allowed the Scholastics to observe how their formation aligns with the broader mission of the Society of Jesus and various Church practices, particularly during this Jubilee year. The program featured significant moments of prayer, dialogue, communal reflection, and pastoral guidance.',
                icon: 'bi-geo-alt-fill'
            },
        ] },
    { 
        id: 'inst-2024-2025',
        title: 'Institutional Activities 2024-2025',
        isCollapsible: true,
        cards: [

        ] },
    { 
        id: 'dgy-2024-2025',
        title: 'Days with God (DGY) 2024-2025',
        isCollapsible: true,
        cards: [
            {
                cardId: 'dgy1-2425-1',
                title: 'Days with God Year 1 (DGY1)',
                images: DGY_1_2425_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'N/A',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'ppo-dgy2-2425',
                title: 'PPO Personnel Ignatian Recollection "Days with God (DGY2)',
                images: DGY_2_MURUK_2425_IMAGES,
                location: 'ASEAN Heritage Park in Sitio Muruk',
                date: 'February 28 and March 7, 2025',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'irnf-dgy2-2425',
                title: 'Ignatian Recollection "Days with God (DGY2)',
                images: DGY_2_NANCYFALLS_2425_IMAGES,
                location: 'Nancy Falls, km 26, La Paz',
                date: 'February 20-21, 2025',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'ir-11islands-dgy2-2425',
                title: 'Ignatian Recollection "Days with God (DGY2)',
                images: DGY_2_11ISLANDS_2425_IMAGES,
                location: '11 Islands',
                date: 'February 6-7, 2025',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'ir-lantaka-dgy2-2425',
                title: 'Ignatian Recollection "Days with God (DGY2)',
                images: DGY_2_LANTAKA_2425_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'February 13-14, 2025',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'dgy3-2425',
                title: 'Days with God Year 3 (DGY3)',
                images: DGY_3_2425_IMAGES,
                location: 'Taluksangay Mosque, Zamboanga City Alliance Evangelical Church, and Avalokitesvara Temple',
                date: 'January 25, 2025',
                theme: 'Inter-Religious Dialogue',
                icon: 'bi-geo-alt-fill',
                themeIcon: 'bi-chat-heart-fill'
            },
        ] },
    { 
        id: 'rnr-2023-2024',
        title: 'Retreat and Recollection SY: 2023-2024',
        isCollapsible: true,
        cards: [
            {
                cardId: 'admin-retreat-2324',
                title: 'Administrators’ Retreat',
                images: ADMIN_RETREAT_2324_IMAGES,
                location: 'Mirador, Baguio',
                date: 'May 28–30, 2024',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'ppo-retreat-2324',
                title: 'Physical Plant Office Retreat',
                images: PPORETREAT_2324_IMAGES,
                location: 'Malaybalay, Bukidnon',
                date: 'June 3–7, 2024 ',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'con-retreat-2324',
                title: 'College of Nursing Retreat',
                images: NURSING_RETREAT_2324_IMAGES,
                location: 'Samal Island, Davao',
                date: 'July 10–12, 2024',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'sma-retreat-2324',
                title: 'School of Management and Accounting with JHS Middle Administration Retreat',
                images: SMA_RETREAT_2324_IMAGES,
                location: 'Mirador, Baguio',
                date: 'September 17–19, 2024',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'sed-retreat-2324',
                title: 'School of Education (SEd) Faculty and Staff Retreat',
                images: SED_RETREAT_2324_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'October 17-18, 2024',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'csite-retreat-2324',
                title: 'College of Science and Information Technology and Engineering Retreat',
                images: CSITE_RETREAT_2324_IMAGES,
                location: 'Angono, Rizal',
                date: 'October 24-26, 2024',
                icon: 'bi-geo-alt-fill',
            },
        ] },
    { 
        id: 'dgy-2023-2024',
        title: 'Days with God (DGY) 2023-2024',
        isCollapsible: true,
        cards: [
            {
                cardId: 'dgy1-2324-1',
                title: 'Days with God Year 1 (DGY1)',
                images: DGY_1_FEB_2324_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'February 23-24, 2024',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'dgy1-2324-2',
                title: 'Days with God Year 1 (DGY1)',
                images: DGY_1_MARCH_2324_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'March 1&2, 2024',
                icon: 'bi-geo-alt-fill',
            },

            {
                cardId: 'dgy2324ppo',
                title: 'PPO Retreat',
                images: PPO_DGY_2324_IMAGES,
                location: 'N/A',
                date: 'Batch 1 February 2-3, 2024 and Batch 2 February 16-17, 2024',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'dgy2-2324-1',
                title: 'Days with God Year 2 (DGY2) Laudato si\' at 11 Islands',
                images: DGY_2_11ISLANDS_2324_IMAGES,
                location: '11 Islands',
                date: 'March 14-15, 2024',
                icon: 'bi-geo-alt-fill'
            },
            {
                cardId: 'dgy2-2324-2',
                title: 'Days with God Year 2 (DGY2) Laudato Si\' at La Paz',
                images: DGY_2_LAPAZ_2324_IMAGES,
                location: 'La Paz',
                date: 'March 21-22, 2024',
                icon: 'bi-geo-alt-fill',
            },
            {
                cardId: 'dgy2-2324-3',
                title: 'Days with God Year 2 (DGY2) Laudato si\' at Lantaka',
                images: DGY_2_LANTAKA_2324_IMAGES,
                location: 'AdZU Lantaka Campus',
                date: 'April 11-12, 2024',
                icon: 'bi-geo-alt-fill'
            },
        ] },
];

const INITIAL_RECENT_EVENTS_DATA = [
    {
        id: 1,
        title: 'Year 1: Introduction to Ignatian Spirituality',
        status: 'IS ON GOING',
        location: 'AdZU Lantaka Campus',
        theme: 'Año de Compañerismo',
        statusColor: 'text-success'
    },
    {
        id: 2,
        title: 'Year 2: Laudato Si\'',
        status: 'January 2026 | SY: 2025-2026', 
        quote: 'More sacred spaces awaits. Let\'s see where God leads you next.',
        theme: 'Año de Compañerismo',
        location: 'AdZU Main Campus',
        statusColor: 'text-dark'
    },
];

// --- REUSABLE COMPONENTS ---

// Reusable Carousel Component for the Cards (Past Events)
function DGYCarousel({ id, images }) {
  const safeImages = images && images.length > 0 ? images : [{ src: '/Images/placeholder-dgy.png', alt: 'No Image Available' }];

  return (
    <div id={`carousel-${id}`} className="carousel slide rounded-top-3" data-bs-ride="carousel" style={{ height: '200px', backgroundColor: '#f4f7ff', borderBottom: '1px solid #ddd', overflow: 'hidden' }}>
      
      {safeImages.length > 1 && (
        <div className="carousel-indicators">
          {safeImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#carousel-${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}

      <div className="carousel-inner h-100">
        {safeImages.map((image, index) => (
          <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''} position-relative`}> 
            <Image 
                src={image.src} 
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="d-block w-100" 
            />
          </div>
        ))}
      </div>
      
      {/* Carousel Controls */}
      {safeImages.length > 1 && (
        <>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </>
      )}
    </div>
  );
}

// --- MAIN COMPONENT ---

export default function Events() {
  const [editMode, setEditMode] = useState(false);
  const [recentEventData, setRecentEventData] = useState(INITIAL_RECENT_EVENTS_DATA);
  const [pastEventsData, setPastEventsData] = useState(INITIAL_PAST_EVENTS_DATA);
  
  // Load data from Local Storage on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const savedRecent = localStorage.getItem('adzu_recent_events');
        const savedPast = localStorage.getItem('adzu_past_events');
        
        if (savedRecent) {
            setRecentEventData(JSON.parse(savedRecent));
        }
        if (savedPast) {
            setPastEventsData(JSON.parse(savedPast));
        }
    }
  }, []);

  // Save data to Local Storage when saving edits
  const handleSave = () => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('adzu_recent_events', JSON.stringify(recentEventData));
        localStorage.setItem('adzu_past_events', JSON.stringify(pastEventsData));
    }
    setEditMode(false);
  };

  const handleRecentEventChange = (index, field, value) => {
    const newEvents = [...recentEventData];
    newEvents[index][field] = value;
    setRecentEventData(newEvents);
  };

  const handlePastEventCardChange = (sectionIndex, cardIndex, field, value) => {
    const newPastEvents = [...pastEventsData];
    if (field === 'imagesText') {
        newPastEvents[sectionIndex].cards[cardIndex].images = value.split(',').map((src, i) => ({ 
            src: src.trim(), 
            alt: `Past Event Image ${i + 1}` 
        }));
    } else {
        newPastEvents[sectionIndex].cards[cardIndex][field] = value;
    }
    setPastEventsData(newPastEvents);
  };

  const addPastEventCard = (sectionIndex) => {
    const newPastEvents = [...pastEventsData];
    const newId = Date.now().toString(); // Simple unique ID
    newPastEvents[sectionIndex].cards.push({
        cardId: newId,
        title: 'New Past Event Card',
        images: [{ src: '/Images/placeholder-dgy.png', alt: 'Placeholder Image' }],
        location: 'Location details',
        date: 'Date details',
        description: 'Description...',
        icon: 'bi-geo-alt-fill'
    });
    setPastEventsData(newPastEvents);
  };
  
  const deletePastEventCard = (sectionIndex, cardIndex) => {
    if (window.confirm("Are you sure you want to delete this event card?")) {
        const newPastEvents = [...pastEventsData];
        newPastEvents[sectionIndex].cards.splice(cardIndex, 1);
        setPastEventsData(newPastEvents);
    }
  };


  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              
              {/* HEADER (Controls Edit Mode) */}
              <div className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center justify-content-between border-opacity-25" style={{ color: primaryColor }}> 
                <div className="d-flex align-items-center">
                  <i className="bi bi-calendar-event me-2" style={{ fontSize: "18px" }}></i>
                  <span style={{ fontSize: "18px" }}>Events</span>
                </div>
                {/* ADMIN SETTINGS BUTTON */}
                <button 
                  className="btn btn-sm btn-outline-primary fw-semibold" 
                  onClick={editMode ? handleSave : () => setEditMode(true)}
                  style={{ borderColor: primaryColor, color: primaryColor }}
                  title={editMode ? "Save changes to Local Storage" : "Enable Editing"}
                >
                  <i className={`bi bi-${editMode ? 'save' : 'pencil-square'} me-1`}></i>
                  {editMode ? 'Save Changes' : 'Enable Edit Mode'}
                </button>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">

                {/* RECENT EVENTS SECTION */}
                <h3 className="fw-bold mb-4 mt-2" style={{ color: primaryColor }}>Recent Events</h3>
                
                {/* Events Grid (2-column layout on large screens, stacked on small screens) */}
                <div className="row g-4 mb-5">
                  
                  {/* Map through recentEventData to render cards */}
                  {recentEventData.map((event, index) => (
                    <div key={event.id} className="col-lg-6 col-md-12">
                      <div className="card h-100 rounded-3 border-0 shadow-sm event-card-hover">
                        <div className="card-body d-flex flex-column">
                          <RecentEventCard 
                              event={event} 
                              index={index} 
                              editMode={editMode} 
                              primaryColor={primaryColor}
                              handleChange={handleRecentEventChange}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>

                <hr className="my-4" />

                {/* PAST EVENTS SECTION (Collapsible Archive) */}
                <h3 className="fw-bold mb-3 text-wrap text-break" style={{ color: primaryColor }}>Past Events</h3>
                <p className="text-muted mb-4 text-wrap text-break">Archive of past institutional activities, retreats, and formation programs.</p>

                {/* Event Archive List (Collapsible Sections) */}
                <div className="accordion" id="eventArchiveAccordion">
                    {pastEventsData.map((section, sectionIndex) => (
                        <div key={section.id} className="accordion-item shadow-sm mb-3 rounded-3 text-wrap text-break" style={{ border: '1px solid #ddd' }}>
                            <h2 className="accordion-header text-wrap text-break" id={`heading-${section.id}`}>
                                <button 
                                    className="accordion-button fw-bold collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target={`#collapse-${section.id}`} 
                                    aria-expanded="false" 
                                    aria-controls={`collapse-${section.id}`}
                                    style={{ color: primaryColor, borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem' }}
                                >
                                    <i className={`bi bi-folder-fill me-2`}></i> 
                                    {section.title}
                                </button>
                            </h2>
                            <div 
                                id={`collapse-${section.id}`} 
                                className="accordion-collapse collapse" 
                                aria-labelledby={`heading-${section.id}`} 
                                data-bs-parent="#eventArchiveAccordion"
                            >
                                <div className="accordion-body bg-light">
                                    {editMode && (
                                        <button 
                                            className="btn btn-sm btn-outline-success mb-3"
                                            onClick={() => addPastEventCard(sectionIndex)}
                                        >
                                            <i className="bi bi-plus-circle me-1"></i> Add Event Card
                                        </button>
                                    )}

                                    {/* Event Cards within the collapsible section */}
                                    <div className="row g-4">
                                        {section.cards.map((card, cardIndex) => (
                                            <div key={card.cardId} className="col-lg-6 col-md-12">
                                                <PastEventCard 
                                                    sectionIndex={sectionIndex}
                                                    cardIndex={cardIndex}
                                                    card={card}
                                                    editMode={editMode}
                                                    primaryColor={primaryColor}
                                                    handleChange={handlePastEventCardChange}
                                                    handleDelete={deletePastEventCard}
                                                />
                                            </div>
                                        ))}
                                        {section.cards.length === 0 && !editMode && (
                                            <p className="text-muted fst-italic ps-3">No completed events found for this category.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
        
        .accordion-button:not(.collapsed) {
            color: white !important;
            background-color: ${primaryColor};
        }
        .accordion-button:not(.collapsed) i {
             color: white !important;
        }
      `}</style>
    </>
  );
}

function RecentEventCard({ event, index, editMode, primaryColor, handleChange }) {
    return (
        <>
            {/* Event Title */}
            <h4 className="card-title fw-bold mb-3 text-wrap text-break" style={{ color: primaryColor }}>
              {editMode ? (
                <input 
                  type="text" 
                  className="form-control" 
                  value={event.title || ''} 
                  onChange={(e) => handleChange(index, 'title', e.target.value)}
                />
              ) : (
                event.title
              )}
            </h4>
            
            {/* Event Status */}
            <div className="mb-3">
              {editMode ? ( // Edit for status
                <>
                  <label className="form-label small text-muted">Status/Date Info (e.g., IS ON GOING / Jan 2026 | SY: 2026)</label>
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    value={event.status || ''} 
                    onChange={(e) => handleChange(index, 'status', e.target.value)}
                  />
                </>
              ) : event.status ? ( // Display Status
                <p className={`card-subtitle fw-bold fs-5 ${event.statusColor || 'text-dark'}`}>{event.status}</p>
              ) : null}
            </div>
            
            {/* Event Quote / Description */}
            {editMode ? (
              <textarea
                className="form-control mb-2"
                rows="3"
                value={event.quote || ''}
                onChange={(e) => handleChange(index, 'quote', e.target.value)}
                placeholder="Enter a quote or description"
              />
            ) : event.quote && (
              <p className="card-text text-dark fst-italic mt-2 text-wrap text-break">
                &quot;{event.quote}&quot;
              </p>
            )}

            <div className="mt-auto pt-2 border-top">
              {/* Location */}
              <p className="mb-1 text-muted">
                <strong>Location:</strong> 
                {editMode ? (
                  <input 
                    type="text" 
                    className="form-control d-inline w-auto ms-2" 
                    value={event.location || ''} 
                    onChange={(e) => handleChange(index, 'location', e.target.value)}
                  />
                ) : (
                  <span className="ms-1">{event.location}</span>
                )}
              </p>
              
              {/* Theme */}
              <p className="mb-0 text-secondary small">
                <strong>Theme:</strong> 
                {editMode ? (
                  <input 
                    type="text" 
                    className="form-control d-inline w-auto ms-1" 
                    value={event.theme || ''} 
                    onChange={(e) => handleChange(index, 'theme', e.target.value)}
                  />
                ) : (
                  <em className="ms-1">{event.theme}</em>
                )}
              </p>
            </div>
        </>
    );
}

function PastEventCard({ sectionIndex, cardIndex, card, editMode, primaryColor, handleChange, handleDelete }) {
    // Helper to join image URLs for editing
    const currentImagesText = card.images ? card.images.map(img => img.src).join(', ') : '';

    return (
        <div className="card h-100 rounded-3 border-0 shadow-lg p-0">
            {/* Conditional DELETE button */}
            {editMode && (
                <div className="d-flex justify-content-end p-2 bg-light rounded-top-3">
                    <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(sectionIndex, cardIndex)}
                    >
                        <i className="bi bi-trash"></i> Delete Card
                    </button>
                </div>
            )}

            {editMode && (
                <div className="p-3 bg-light border-bottom">
                    <label className="form-label small text-muted">Image URLs (comma-separated):</label>
                    <textarea 
                        className="form-control form-control-sm"
                        rows="3"
                        value={currentImagesText}
                        onChange={(e) => handleChange(sectionIndex, cardIndex, 'imagesText', e.target.value)}
                        placeholder="/Images/dgy1.png, /Images/dgy2.png"
                    />
                </div>
            )}
            
            {/* Slideshow/Carousel Section */}
            <DGYCarousel id={card.cardId} images={card.images} />

            <div className="card-body p-3">
                {/* Title */}
                <h4 className="card-title fw-bold mb-1" style={{ color: primaryColor }}>
                    {editMode ? (
                        <input 
                            type="text" 
                            className="form-control" 
                            value={card.title} 
                            onChange={(e) => handleChange(sectionIndex, cardIndex, 'title', e.target.value)}
                        />
                    ) : card.title}
                </h4>

                {/* Location */}
                <p className="mb-1 fw-semibold text-dark text-wrap text-break">
                    <i className={`bi ${card.icon || 'bi-geo-alt-fill'} me-1`}></i> 
                    {editMode ? (
                        <input 
                            type="text" 
                            className="form-control d-inline w-auto ms-1" 
                            value={card.location} 
                            onChange={(e) => handleChange(sectionIndex, cardIndex, 'location', e.target.value)}
                        />
                    ) : card.location}
                </p>

                {/* Theme/Dialogue (Conditional) */}
                {card.theme && (
                    <p className="mb-1 fw-semibold text-dark">
                        <i className={`bi ${card.themeIcon || 'bi-chat-heart-fill'} me-1`} style={{ color: primaryColor }}></i> 
                        {editMode ? (
                            <input 
                                type="text" 
                                className="form-control d-inline w-auto ms-1" 
                                value={card.theme} 
                                onChange={(e) => handleChange(sectionIndex, cardIndex, 'theme', e.target.value)}
                            />
                        ) : card.theme}
                    </p>
                )}

                {/* Date */}
                <p className="mb-3 text-muted">
                    <i className="bi bi-calendar-fill me-1"></i> 
                    {editMode ? (
                        <input 
                            type="text" 
                            className="form-control d-inline w-auto ms-1" 
                            value={card.date} 
                            onChange={(e) => handleChange(sectionIndex, cardIndex, 'date', e.target.value)}
                        />
                    ) : card.date}
                </p>

                {/* Description */}
                <div className="border-top pt-2">
                    <h6 className="fw-bold mb-2">Description:</h6>
                    {editMode ? (
                        <textarea
                            className="form-control small text-secondary"
                            rows="3"
                            value={card.description}
                            onChange={(e) => handleChange(sectionIndex, cardIndex, 'description', e.target.value)}
                        />
                    ) : (
                        <p className="small text-secondary mb-0 text-wrap text-break">
                            {card.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}