"use client";

import Image from "next/image";
import { useState } from "react";

export default function MissionAndVision() {
  const [openSectionA, setOpenSectionA] = useState(true);
  const [openSectionB, setOpenSectionB] = useState(false);
  const [openSectionC, setOpenSectionC] = useState(false);
  const [openSectionD, setOpenSectionD] = useState(false);
  const [openSectionE, setOpenSectionE] = useState(false);
  const [openSectionF, setOpenSectionF] = useState(false);
  const [openSectionG, setOpenSectionG] = useState(false);
  const [openSectionH, setOpenSectionH] = useState(false);
  const [openSectionI, setOpenSectionI] = useState(false);
  const [openSectionJ, setOpenSectionJ] = useState(false);
  const [openSectionK, setOpenSectionK] = useState(false);
  const [openSectionL, setOpenSectionL] = useState(false);
  const [openSectionM, setOpenSectionM] = useState(false);
  const [openSectionAAE, setOpenSectionAAE] = useState(false);

  return (
    <div className="w-100">
      <div className="row g-0">
        <div className="col-12 py-4 px-3">

          {/* MAIN CARD */}
          <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm" >
            
            {/* HEADER */}
            <div className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25" style={{ color: "#0c2461" }}>
              <i className="bi bi-file-earmark-text me-2" style={{ fontSize: "18px" }}></i>
              <span style={{ fontSize: "18px" }}>Operations Manual</span>
            </div>

            {/* BODY */}
            <div className="p-4" style={{ maxHeight: "calc(88vh - 50px)", overflowY: "auto" }}>
              
              {/* OVERVIEW */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">
                
                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionA(!openSectionA)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-4" style={{color:"#0c2461"}}>
                    A. OVERVIEW
                  </h3>
                  <i className={`bi ${openSectionA ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionA ? "show" : ""}`}>
                  <h4 className="fw-bold mb-3" style={{color:"#0c2461"}}>
                    About AdZU
                  </h4>

                  <h5 className="fw-bold mb-3" style={{color:"#0c2461"}}>
                    History of the Ateneo de Zamboanga University
                  </h5>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    The <strong>Ateneo de Zamboanga University</strong>, also referred to by its acronym, <strong>AdZU</strong>, is a private, Catholic, 
                    co-educational, basic and higher education institution in Zamboanga City, Philippines.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    The Ateneo de Zamboanga University began in 1912 as the Escuela Catolica, a parochial school of the 
                    Immaculate Conception Parish along Zaragoza Street downtown. The pre-World War II cathedral and the Escuela 
                    Catolica occupied an entire block of what is today the Universidad de Zamboanga. Its founder was Fr. Manuel M. 
                    Sauras SJ, who was director until 1926. There was no campus except for the church courtyard. The Plaza de Don Juan Salcedo 
                    (later renamed Plaza Pershing) across the street was convenient for school activities, practices, and drills.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    In 1916 the Escuela Catolica became the Ateneo de Zamboanga (ADZ). The name of the Ateneo comes from the Greek athenaion 
                    or the Latin athenaeum, meaning a literary club, academy, or institution for learning. Athena is the Greek Goddess of Wisdom. 
                    The school may have originally been the Atheneo, which was hispanized into the Ateneo.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    By 1928 the school had moved to the nearby Mindanao Theater building at I. Magno corner P. Reyes Streets. In 1932 the government 
                    officially recognized the Ateneo high school. War broke out in 1941 and Ateneo was used as a public school during the Japanese occupation. 
                    In 1945 Zamboanga was bombed to drive away the Japanese troops and two-thirds of the city was leveled to the ground, including the cathedral and the Ateneo.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    After the war, Fr. Eusebio G Salvador SJ, the first Zamboangueño Jesuit priest and a product of the Escuela Catolica, transferred the cathedral and the school 
                    to its present location along La Purisima Street. He was director of ADZ 1938-41 and 1946-47. He is considered the second founder of ADZ and the main campus is named after him.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    Before and after the war, ADZ was always known as the School for Boys. In 1984 girls were accepted for the first time in the grade school, and in 1992 the high school also began accepting girls.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    In 1952 two-year Pre-Law and Associate in Arts programs were offered. Today there are numerous courses offered in the School of Liberal Arts, the School of Management and Accountancy, the School 
                    of Education, the College of Nursing, and the College of Science and Information Technology. 
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    The graduate school with its various master’s and doctoral programs was established in 1976. The Zamboanga Medical School Foundation, Inc., established in 1994, produced its first doctors in 1999
                    and became the ADZU School of Medicine in 2004.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    In 2001 the Ateneo de Zamboanga became a university. In 2006 the High School transferred to the eight-hectare campus at the Fr William H Kreutz, SJ campus in Tumaga. In 2011 ADZU opened the College
                    of Law in consortium with Xavier University, and the following year the university celebrated its centennial year.
                  </p>

                  <p className="lh-base mb-3" style={{ textAlign: "justify" }}>
                    The College of Law was originally located at Sauras Hall, completed in 2011. It has moved to the Fr. Jose Ma. Rosauro Hall, completed in 2013. Sauras Hall was extensively damaged by the July 2016 
                    fire that burned down the 66-year-old Brebeuf Gym.
                  </p>

                  <p className="small lh-base mb-0" style={{ textAlign: "justify" }}>
                    In 2015 the grade school transferred to the Tumaga campus, joining the Junior High School, and in 2016 the Senior High School was established at the La Purisima main campus. The latest building on
                    campus is the five-story Faustino W Saavedra Building (the new Senior High School Building), constructed in 2018.
                  </p>
                  
                  {/* ADZU VISION CARD */}
                  <div className="card shadow-sm rounded-2 border-0 mb-4 text-wrap text-break">
                    <div className="card-body">
                      <h3 className="fw-bold text-primary border-start border-3 ps-3 mb-4" style={{ color: "#0c2461" }}>
                        Vision
                      </h3>
                      <p className="lh-base m-0" style={{ textAlign: "justify" }}>
                        The Ateneo de Zamboanga University, steering forward like Mindanao’s agile vinta, is determined to chart courses 
                        of transformative education, hope, and peace. Finding God in every wave and wind, we navigate with discerning leadership 
                        as a learning community. In our journey, the Spirit of Magis inspires us to sail with Christ toward a reconciled world.
                      </p>
                    </div>
                  </div>
                  
                  {/* ADZU MISSION MAIN CARD */}
                  <div className="card shadow-sm rounded-2 border-0 mb-4 text-wrap text-break">
                    <div className="card-body">
                      <h3 className="fw-bold text-primary border-start border-3 ps-3 mb-4" style={{ color: "#0c2461" }}>
                        Mission
                      </h3>
                      <p className="lh-base mb-4" style={{ textAlign: "justify" }}>
                        Guided by the compass of our Filipino, Catholic, and Jesuit values and heritage, Ateneo de Zamboanga University commits 
                        to seeking and upholding truth through a deeper engagement with God, one another, and creation:
                      </p>
                      
                      {/* MISSION CARDS */}
                      <div className="row g-3">
                        
                        {/* FIRST */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Advancing Ignatian Spirituality
                            </h6>
                            <p className="small lh-base mb-0" style={{ textAlign: "justify" }}>
                              In faith, we are <strong>Advancing Ignatian Spirituality</strong>. We infuse Western Mindanaos education with transformative 
                              values that form persons and communities for and with others.
                            </p>
                          </div>
                        </div>

                        {/* SECOND */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Dedicated to Holistic Growth and Human Flourishing
                            </h6>
                            <p className="small lh-base mb-0" style={{ textAlign: "justify" }}>
                              In service, we are <strong>Dedicated to Holistic Growth and Human Flourishing</strong>. We form compassionate and discerning
                              leaders who care for our environment, and walk with, serve, and uplift others, especially the excluded, in a 
                              mission of reconciliation and justice.
                            </p>
                          </div>
                        </div>

                        {/* THIRD */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Zealous in Charting Global Paths
                            </h6>
                            <p className="small lh-base mb-0" style={{ textAlign: "justify" }}>
                              In excellence, we are <strong>Zealous in Charting Global Paths</strong>. We ensure our instruction, research, and innovations 
                              resonate beyond our shores, responding to the evolving realities of society and building a sustainable future for all.
                            </p>
                          </div>
                        </div>

                        {/* FOURTH */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              United in Purpose and Action
                            </h6>
                            <p className="small lh-base mb-0" style={{ textAlign: "justify" }}>
                              In companionship, we are <strong>United in Purpose and Action</strong>. We collaborate, adapt, and strive for institutional excellence 
                              and meaningful community engagements, always laboring for the greater glory of God.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CORE VALUES MAIN CARD */}
                  <div className="card shadow-sm rounded-2 border-0 mb-4 text-wrap text-break">
                    <div className="card-body">
                      <h3 className="fw-bold text-primary border-start border-3 ps-3 mb-4" style={{ color: "#0c2461" }}>
                        Core Values
                      </h3>
                      
                      {/* CORE VALUES CARDS */}
                      <div className="row g-3">
                        {/* MAGIS */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h5 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Magis
                            </h5>
                            <p className="lh-base mb-0">
                              The spirit of generosity and commitment to excellence
                            </p>
                          </div>
                        </div>
                        
                        {/* CURA PERSONALIS */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h5 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Cura Personalis
                            </h5>
                            <p className="lh-base mb-0">
                              The care and respect for the individual person
                            </p>
                          </div>
                        </div>

                        {/* COMPANIONSHIP */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Companionship
                            </h6>
                            <p className="lh-base mb-0">
                              The desire to be in community
                            </p>
                          </div>
                        </div>

                        {/* DISCERNMENT */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Discernment
                            </h6>
                            <p className="lh-base mb-0">
                              The sensitivity to God, to spirituality, and to change
                            </p>
                          </div>
                        </div>

                        {/* ANIMO */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Animo
                            </h6>
                            <p className="lh-base mb-0">
                              The passion to work, and the love and the joy it gives
                            </p>
                          </div>
                        </div>

                        {/* SOCIAL INVOLVEMENT */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                            <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                              Social Involvement
                            </h6>
                            <p className="lh-base mb-0">
                              The men and women with and for others, especially the poor
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* ORGANIZATIONAL CHART */}
                  <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">
                    <h3 className="fw-bold border-start text-primary border-3 ps-3 mb-1" style={{ color: "#0c2461" }}>
                      Institutional Organizational Chart
                    </h3>
                    
                    {/* DESCRIPTION */}
                    <div className="border-0 mb-4 p-4 text-wrap text-break">
                      <p className="lh-base mb-0" style={{ textAlign: "justify"}}>
                        The University’s administrative structure includes the academic units 
                        and the offices of administration and services. The academic units are 
                        the Higher Education Units (School of Medicine, College of Law, Colleges 
                        and Schools) and the Basic Education units (Senior High School, Junior 
                        High School, and Grade School). The offices of administration and 
                        services are the Office of the President, the Office of the Vice President 
                        for Administration, the Finance Office, the Human Resource Administration 
                        and Development Office (HRADO), the Unit Director for Formation Office, 
                        and the Social Development Unit. The Organizational Chart shows how these 
                        offices are interrelated with each other.
                      </p>
                    </div>
                    
                    <div className="border-0 p-3">
                      <div className="d-flex justify-content-center">
                        <Image
                          src="/Images/orgchart2.png"
                          alt="Organizational Chart"
                          width={900}
                          height={700}
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* ABOUT THE OFFICE */}
                  <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">
                    
                    {/* MAIN TITLE */}
                    <h3 className="fw-bold border-start border-3 ps-3 mb-4" style={{ color: "#0c2461" }}>
                      About the Office
                    </h3>
                    
                    {/* DEFINITION */}
                    <p className="lh-base mb-3" style={{ textAlign: "justify"}}>
                      The Office of the Unit Director for Formation convenes and oversees the 
                      various formation offices and departments within the university. The Unit 
                      Director plays a pivotal role in the development and implementation of holistic 
                      formation programs and activities, which encompass spiritual, psycho-emotional, 
                      social action, and coaching initiatives.
                    </p>
                    
                    <p className="lh-base mb-4" style={{ textAlign: "justify"}}>
                      The Unit Director for Formation is supported by the University Formation 
                      Management Council, which includes the Chaplains from both basic and higher 
                      education, Assistant Principals for Formation from the Basic Education Units, 
                      the College Campus Ministry Director, the College Guidance and Counseling Director, 
                      the Director of Social Awareness and Community Service Involvement, the Higher 
                      Education Athletics Coordinator, and a representative from the Human Resource 
                      Administration and Development Office.  
                      
                      The council convenes once each semester, although additional meetings may be 
                      scheduled as necessary. In addition, the Unit Director holds separate monthly 
                      meetings with the Basic Education and Higher Education Formation Groups. The 
                      council is responsible for organizing, preparing, discussing, implementing, 
                      monitoring, and evaluating all holistic formation programs and activities at 
                      the university.
                    </p>
                    
                    {/* VISION TITLE */}
                    <h4 className="fw-bold border-start border-3 ps-3 mb-3" style={{ color: "#0c2461" }}>
                      Vision
                    </h4>

                    <p className="lh-base mb-4">
                      The Office of the Unit Director for Formation is determined to set the hearts of 
                      the community on fire with deep faith and love of God.
                    </p>
                    
                    {/* MISSION TITLE */}
                    <h4 className="fw-bold border-start border-3 ps-3 mb-3" style={{ color: "#0c2461" }}>
                      Mission
                    </h4>

                    <p className="lh-base mb-3">
                      Our mission is to foster the holistic personal development of the community by 
                      providing activities and programs that will assist the community to be:
                    </p>
                    
                    {/* MISSION CARDS */}
                    <div className="row g-3 mb-4">
                      
                      {/* COMPETENT */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                          <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                            Competent
                          </h6>
                          <p className="small lh-base mb-0" style={{ textAlign: "justify"}}>
                            A solid grounding of self to an adequate development of self-awareness 
                            and self-acceptance of the abilities and limitations that contributes 
                            to human fulfillment.
                          </p>
                        </div>
                      </div>
                      
                      {/* CONSCIENCE */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                          <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                            Conscience
                          </h6>
                          <p className="small lh-base mb-0" style={{ textAlign: "justify"}}>
                            A look at the reality with the eyes of God; to discover the goodness 
                            and beauty of creation and individuals but also places of pain, misery, 
                            and injustice.
                          </p>
                        </div>
                      </div>

                      {/* CHARACTER */}
                      <div className="col-12 col-md-6">
                        <div
                          className="card h-100 border-0 shadow-sm p-3 text-wrap text-break"
                          style={{ backgroundColor: "#f4f7ff" }}
                        >
                          <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                            Character
                          </h6>
                          <p className="small lh-base mb-0" style={{ textAlign: "justify"}}>
                            A transformative experience to help the community form expansive hearts 
                            and minds as real persons of solidarity with all those in suffering, 
                            disadvantage, or oppression.
                          </p>
                        </div>
                      </div>

                      {/* COMPASSION */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                          <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                            Compassion
                          </h6>
                          <p className="small lh-base mb-0" style={{ textAlign: "justify"}}>
                            A person in solidarity with and assumes the suffering of others, 
                            recognizing the human dignity and the value of the person who, just 
                            for having been born, is deeply loved by God.
                          </p>
                        </div>
                      </div>

                      {/* CULTURE */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                          <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                            Culture
                          </h6>
                          <p className="small lh-base mb-0" style={{ textAlign: "justify"}}>
                            A celebration of identity and faith for social transformation.
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
              
              {/* STRUCTURE, ROLES, AND RESPONSIBILITIES CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">
                
                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionB(!openSectionB)}>
                  <h3 className="fw-bold border-start border-3 ps-3 m-0" style={{ color: "#0c2461" }}>
                    B. STRUCTURE, ROLES, AND RESPONSIBILITIES
                  </h3>
                  <i className={`bi ${openSectionB ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionB ? "show" : ""}`}>
                  
                  {/* ORGANIZATIONAL CHART */}
                  <div className="mb-4">
                    <p className="lh-base mb-0">
                      1. Organizational Chart of the Office
                    </p>
                    
                    <div className="card shadow-sm border-0 p-3">
                      <div className="d-flex justify-content-center">
                        <Image
                          src="/Images/orgchart.png"
                          alt="Organizational Chart"
                          width={900}
                          height={700}
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* ROLES AND RESPONSIBILITIES */}
                  <div className="border-0 mb-4 p-4 text-wrap text-break">
                    <h3 className="fw-bold border-start border-3 ps-3 mb-4" style={{ color: "#0c2461" }}>
                      Roles and Responsibilities
                    </h3>
                    
                    {/* TABLE */}
                    <div className="table-responsive mb-2">
                      <table className="table table-bordered small align-middle">
                        <tbody>
                          {/* ROW 1 */}
                          <tr>
                            <td style={{ width: "50%" }}>
                              <strong>Position Title:</strong> <br />
                              Unit Director for Formation
                            </td>
                            <td style={{ width: "50%" }}>
                              <strong>Unit/Office:</strong> <br />
                              Office of the Unit Director for Formation
                            </td>
                          </tr>

                          {/* ROW 2 */}
                          <tr>
                            <td>
                              <strong>Reports To:</strong> <br />
                              President
                            </td>
                            <td>
                              <strong>Job Level:</strong> <br />
                            </td>
                          </tr>

                          {/* ROW 3 */}
                          <tr>
                            <td>
                              <strong>Supervises:</strong> <br />
                              Chaplain (1), Liturgical Coordinator (1) <br />
                              University Church Support Staff (1) <br />
                              Formation Office Support Staff (1) <br />
                              Campus Ministers (9), Guidance Counsellor (5) <br />
                              SACSI Formators (11), FFP Formators (6)
                            </td>
                            <td>
                              {/* Blank Cell */}
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                    
                    {/* DESCRIPTION */}
                    <p className="small lh-base mb-2" style={{ textAlign: "justify"}}>
                      The Unit Director for Formation exercises general supervision and promotion of the following
                      through a well-planned and articulated formation program in Advancing Ignatian Spirituality 
                      as a Jesuit university in collaboration with the different units, departments, or offices:
                    </p>
                    
                    {/* RESPONSIBILITY LIST */}
                    <ol className="small lh-base mb-4 ps-3">
                      <li>Spiritual and Character development of the university’s stakeholders</li>
                      <li>Moral and Psychological Well-being of the university’s stakeholders</li>
                      <li>Social and Community Involvement Programs of the university’s stakeholders</li>
                      <li>Athletics Varsity Programs</li>
                    </ol>

                    {/* DUTIES AND FUNCTIONS */}
                    <h4 className="fw-bold border-start border-3 ps-3 mb-3" style={{ color: "#0c2461" }}>
                      Duties and Functions
                    </h4>
                    
                    <ol className="small lh-base mb-3 ps-3">
                      <li>Oversees the implementation of programs and activities which strengthens the spiritual lives of the higher education faculty members and central services through the Days with God Programs.</li>
                      <li>Supervises and coordinates the implementation of the Campus Ministry Programs of all units.</li>
                      <li>Supervises and coordinates the implementation of the Guidance Programs of all units.</li>
                      <li>Supervises and coordinates the implementation of the Social Awareness and Community Extension Programs of all units.</li>
                      <li>Supervises and coordinates the implementation of the Athletics Programs through the Athletics Coordinators of the different units.</li>
                      <li>Supervises and coordinates the implementation of the Inter-Religious Dialogue Programs of all units.</li>
                      <li>Hold monthly meetings or as need arises with the University Formation Management Council.</li>
                      <li>Prepares and monitors the budget accounts assigned to the Unit Director for Formation.</li>
                      <li>Performs any other duties as may be required by the position in accordance with the instructions and guidelines of the University President.</li>
                    </ol>
                    
                    {/* TABLE */}
                    <div className="table-responsive mt-2 mb-4">
                      <table className="table table-bordered small align-middle">
                        <tbody>
                          
                          {/* ROW 1 */}
                          <tr>
                            <td style={{ width: "50%" }}>
                              <strong>Position Title:</strong> <br />
                              Formation Support Staff
                            </td>
                            <td style={{ width: "50%" }}>
                              <strong>Unit/Office:</strong> <br />
                              Office of the Unit Director for Formation
                            </td>
                          </tr>

                          {/* ROW 2 */}
                          <tr>
                            <td>
                              <strong>Reports To:</strong> <br />
                              Unit Director for Formation
                            </td>
                            <td>
                              <strong>Job Level:</strong> <br />
                            </td>
                          </tr>

                          {/* ROW 3 */}
                          <tr>
                            <td>
                              <strong>Supervises:</strong> <br />
                              None
                            </td>
                            <td>
                              {/* Blank Cell */}
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                    
                    {/* JOB OBJECTIVE */}
                    <p className="small lh-base mb-4">
                      Job Objective: To provide secretarial, clerical, and administrative support to the Unit
                      Director for Formation for efficient and effective delivery of services.
                    </p>
                    
                    {/* BASIC DUTIES */}
                    <h5 className="fw-bold border-start border-3 ps-3 mb-3" style={{ color: "#0c2461" }}>
                      Basic Duties
                    </h5>
                    
                    {/* 1. RECORDS AND OFFICE MANAGEMENT */}
                    <p className="small fw-bold mb-2">1. Records and Office Management</p>
                    
                    <ol className="small lh-base mb-4 ps-3" type="a" style={{ textAlign: "justify"}}>
                      <li>Performs secretarial functions such as answering telephone calls, entertaining guests and clients, calendaring appointments and meetings of the Unit Director for Formation, reminding him of his scheduled appointments</li>
                      <li>Files all communications, office documents, reports and minutes of meetings</li>
                      <li>Receives letters, invitations and other communications for the Unit Director for Formation</li>
                      <li>Drafts and prints letters, invitations, announcements, and memos for the Unit Director for Formation</li>
                      <li>Checks office email daily and informs or forwards important emails to the Unit Director for Formation</li>
                      <li>Prepares the general calendar of formation activities</li>
                      <li>Distributes and/or sends letters, memos, announcements and other communications to the different offices/persons within and outside AdZU</li>
                      <li>Maintains adequate office supplies and manages their efficient use</li>
                      <li>Documents all formation and training activities</li>
                      <li>Maintains and updates formation and training materials</li>
                    </ol>

                    {/* 2. LOGISTICS */}
                    <p className="small fw-bold mb-2">2. Logistics</p>

                    <ol className="small lh-base mb-4 ps-3" type="a" style={{ textAlign: "justify"}}>
                      <li>Arranges for transportation and accommodation of invited guests, visitors and other activities related to the Formation Office</li>
                      <li>Prepares travel itinerary and plane reservations of the Unit Director for Formation and office guests</li>
                      <li>Provides logistical support to programs of formation and training of faculty and staff including but not limited to encoding, printing and photocopying of materials, reservation of venue and transportation, etc.</li>
                      <li>Coordinates with the sponsoring groups for institutional activities such as but not limited to the St. Ignatius Day Celebration, Faculty and Staff Day, Christmas program and party, and the Year-end activity</li>
                      <li>Arranges for transportation of the Unit Director for Formation for official business outside the campus</li>
                    </ol>

                    {/* 3. FINANCIAL MANAGEMENT */}
                    <p className="small fw-bold mb-2">3. Financial Management</p>

                    <ol className="small lh-base mb-4 ps-3" type="a" style={{ textAlign: "justify"}}>
                      <li>Prepares requests for payment for expenditures such as functions/activities related to faculty and staff formation, training and development</li>
                      <li>Prepares liquidation reports for expenditures of office activities and submits the same to the Finance office</li>
                      <li>Makes requests for petty cash and submits liquidation report for the same</li>
                      <li>Drafts the formation budget in coordination with the Unit Director for Formation</li>
                      <li>Monitors the use of office budget and informs the APF regarding budget performance</li>
                    </ol>

                    {/* 4. PHYSICAL FACILITIES */}
                    <p className="small fw-bold mb-2">4. Physical Facilities and Office Equipment</p>

                    <ol className="small lh-base mb-4 ps-3" type="a" style={{ textAlign: "justify"}}>
                      <li>Monitors the cleaning of the office (including aircon, windows, shelves and conference room)</li>
                      <li>Maintains cleanliness and order in the office and ensures proper waste segregation</li>
                      <li>Ensures that office equipment (computers and peripherals; projector, telephone, etc.) are in good working condition</li>
                      <li>Prepares job orders for repair and maintenance</li>
                    </ol>

                    {/* 5. SPECIAL DUTIES */}
                    <p className="small fw-bold mb-2">5. Special Duties</p>

                    <ol className="small lh-base mb-4 ps-3" type="a" style={{ textAlign: "justify"}}>
                      <li>Assists in recollection and retreats (Days with God) as facilitator or anchor person</li>
                      <li>Performs other related jobs assigned from time to time by the Unit Director for Formation</li>
                    </ol>

                    {/* 6. MINIMUM QUALIFICATIONS */}
                    <p className="small fw-bold mb-2">6. Minimum Qualifications</p>

                    <ol className="small lh-base mb-3 ps-3" type="a" style={{ textAlign: "justify"}}>
                      <li>College graduate</li>
                      <li>Good moral character</li>
                      <li>Proficient in oral and written communication</li>
                      <li>Computer literate</li>
                    </ol>
                  </div>

                </div>

              </div>
              
              {/* PROGRAMS AND SERVICES CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">
                
                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionC(!openSectionC)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    C. PROGRAMS AND SERVICES
                  </h3>
                  <i className={`bi ${openSectionC ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>

                <div className={`collapse ${openSectionC ? "show" : ""}`}>
                  
                  <p className="small fw-bold mb-2">1. Orientation of Spiritual Formation Programs</p>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    Orientation of the different spiritual formation programs is given to all the newly hired faculty and staff 
                    in the university. The orientation includes the rationale, objectives, and schedules of the different formation 
                    programs and activities. The orientation of the spiritual formation programs is usually done during the in-service 
                    training in coordination with the office of the vice president for higher education and human resource administration and development office.
                  </p>

                  <p className="small fw-bold mb-2">2. Spiritual Formation Program</p>
                  <p className="small lh-base mb-2" style={{ textAlign: "justify"}}>
                    Spiritual programs and activities should serve as genuine opportunities for individuals to encounter God. 
                    These various spiritual formation initiatives must enable community members to experience God&apos;s boundless love and mercy. 
                    The Unit Director for Formation, in collaboration with the Chaplaincy Office and various Campus Ministry offices, will 
                    oversee the implementation and administration of these spiritual formation programs and activities.
                  </p>

                  <p className="small fw-bold mb-1">a. Institutional Eucharistic Celebrations</p>
                  <p className="small mb-1" style={{ textAlign: "justify"}}>As a Catholic and Jesuit university and in the advancement of Ignatian Spirituality, the university observes and celebrates different solemnities, feasts, and votive Masses. These are the following:</p>
                  <ul className="small mb-3" style={{ textAlign: "justify"}}>
                    <li>Mass of the Holy Spirit. This is celebrated at the beginning of every school year as calendared by the different units.</li>
                    <li>Feast Day Mass of Saint Ignatius. In great honor to the founder of the Society of Jesus, the feast day Mass is celebrated within the novena of grace in honor of Saint Ignatius of Loyola by the respective units.</li>
                    <li>Solemnity of the Immaculate Conception. The Immaculate Conception is the principal patroness of the Ateneo de Zamboanga University.</li>
                    <li>Baccalaureate Mass. As gratitude and recognition of the different graces, each unit celebrates its baccalaureate Mass according to its respective calendar.</li>
                    <li>First Friday Mass (Devotion to the Most Sacred Heart of Jesus) and Weekday Masses (Devotion to the Eucharist) are likewise part of the identity in a Jesuit institution and a way of proceeding, especially for the Catholics. Other votive Masses are celebrated according to the needs of the unit.</li>
                  </ul>

                  <p className="small fw-bold mb-1">b. Ignatian Conversation Growth Circle</p>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    Spiritual conversation serves as a fundamental component of Ignatian Spirituality. This practice allows community members to discern 
                    individually or collectively the movements and invitations of the Spirit. Through such dialogues, the community can enhance their 
                    professional development, strengthen teamwork, and deepen their spiritual lives.
                  </p>

                  <p className="small fw-bold mb-1">c. Recollections and Retreats</p>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    The Unit Director for Formation, in collaboration with the deans of various schools and colleges, is responsible for scheduling the 
                    recollection and retreat programs for faculty members. The deans will submit their preferred schedules and venues for these events. 
                    The Unit Director will liaise with the retreat house to confirm availability and arrange for retreat guides. The Office of the Vice 
                    President for Higher Education will manage the budget for faculty recollection and retreat activities, while the Office of the Unit 
                    Director for Formation will prepare the budget for administrators and central services personnel.
                  </p>

                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    Additionally, offices within the formation unit are required to conduct regular silence, prayer sessions, and faith-sharing activities. 
                    These sessions should not address work-related matters unless the individual’s personal prayer concerns pertain to their responsibilities 
                    as a formator within the institution.
                  </p>

                  <p className="small fw-bold mb-2">3. Psycho-Emotional Formation Program</p>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    The Unit Director for Formation, in collaboration with various offices of guidance and counseling at the university, offers psycho-emotional 
                    formation programs and activities for all community members. The primary objective of these initiatives is to promote a healthy balance and 
                    overall well-being in relation to the individual, work, home, and community. Each program and activity are designed to facilitate an experience 
                    of support and accompaniment.
                  </p>

                  <p className="small fw-bold mb-2">4. Social Awareness and Community Service Involvement Formation Program</p>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    The unit director for formation collaborates with various offices within social action to organize immersions and outreach programs for university 
                    members. These initiatives are designed to instill Ignatian values, particularly cura personalis and a preferential option for the poor. Programs 
                    focused on social awareness and service involvement should serve as opportunities to encounter the face of Christ in the marginalized and 
                    impoverished, fostering a deeper connection with those who are often excluded from society.
                  </p>

                  <p className="small fw-bold mb-2">5. Coaching Program</p>
                  <p className="small fw-bold mb-1" >a. Professional Learning Circle (PLC)</p>
                  <p className="small lh-base mb-2" style={{ textAlign: "justify"}}>
                    The unit director for formation collaborates with the members of the university formation management council to address the needs of both the 
                    formators and the individuals within their respective offices. The professional learning circle serves as a platform for council members and 
                    their colleagues to enhance their professional development as formators through seminars, workshops, and spiritual discussions. This learning 
                    circle embodies a continuous process of learning, unlearning, and relearning, fostering both individual and collective growth within the team.
                  </p>

                  <p className="small fw-bold mb-1">b. Bridging Conference (BC)</p>
                  <p className="small lh-base mb-2" style={{ textAlign: "justify"}}>
                    Once each semester, the unit director for formation conducts individual consultations with the members of the council. These discussions offer 
                    each member the opportunity to personally share their experiences of consolation and desolation, both in their roles as formators and as individuals.
                  </p>

                  <p className="small fw-bold mb-1">c. Quarter Colloquy (QC)</p>
                  <p className="small lh-base mb-2" style={{ textAlign: "justify"}}>
                    A quarterly meeting will be held with the various offices within the formation unit. This gathering will offer the unit director an opportunity 
                    to gain deeper insights into the personnel involved in the formation process. It will serve as a platform for mutual understanding and may 
                    facilitate support for any professional needs or guidance that the formators may require.
                  </p>

                  <p className="small fw-bold mb-1">d. Start of the School Year Conference (SSYC)</p>
                  <p className="small lh-base mb-2" style={{ textAlign: "justify"}}>
                    The start-of-year conference marks a gathering of all members of the university&apos;s formation management council. During this event, the unit 
                    director will outline directives for the upcoming academic year.
                  </p>

                  <p className="small fw-bold mb-1">e. Year-End Conference (YEC)</p>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    The year-end conference serves as a platform for appreciation, gratitude, and the exchange of feedback. Each council member will present an 
                    evaluation report highlighting both the successes and challenges of the academic year. Accompanying these reports will be proposed actions 
                    for the upcoming school year, aligned with the recommendations derived from the evaluations and the office&apos;s developmental plan.
                  </p>

                  <p className="small fw-bold mb-2">7. Collaboration Program</p>
                </div>
              </div>
              
              {/* OFFICE POLICIES CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionD(!openSectionD)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    D. OFFICE POLICIES, GUIDELINES, AND PROCEDURES
                  </h3>
                  <i className={`bi ${openSectionD ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>

                <div className={`collapse ${openSectionD ? "show" : ""}`}>

                  <h5 className="fw-bold mb-2">1. Office Hours and Staff Schedules</h5>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    <strong>Objective:</strong> To establish a clear guideline on office hours, dress code, schedules, and activities to promote professionalism.
                  </p>
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    <strong>Reporting Time:</strong> The Unit Director for Formation and the office support staff are required to be present during the scheduled hours to oversee the operations of the formation programs and related activities.
                  </p>
                  
                  {/* TABLE */}
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered table-sm small">
                      <tbody>
                        <tr className="table-secondary">
                          <th className="border-r border-gray-300 px-1 py-0.5 font-bold">Schedule</th>
                          <th></th>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Morning</td>
                          <td>8:00 AM to 12:00 NN</td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Lunch Break</td>
                          <td>12:00 PM to 1:00 PM</td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Afternoon</td>
                          <td>1:00 PM to 5:00 PM</td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Saturday</td>
                          <td>8:00 AM to 12:00 Noon</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h5 className="fw-bold mb-2">2. Dress Code and Attire</h5>
                  <p className="small lh-base mb-0" style={{ textAlign: "justify"}}>
                    The Unit Director for Formation and Support Staff are required to wear the uniform prescribed by the Human Resource Administration and 
                    Development Office from Monday to Saturday as stated in the Administrative Manual.
                  </p>
                </div>
              </div>

              {/* RECORDS AND DOCUMENT MANAGEMENT CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionE(!openSectionE)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    E. RECORDS AND DOCUMENT MANAGEMENT
                  </h3>
                  <i className={`bi ${openSectionE ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionE ? "show" : ""}`}>
                  
                  <p className="small lh-base mb-3">
                    At the end of the school year, the office staff will organize and file the different documents into their respective folders.
                  </p>
                  
                  <ol className="list-decimal list-inside mb-3 small">
                    <li><strong>Files</strong>: General administrative documents related to the daily operations of the office.</li>
                    <li><strong>Budget</strong>: Financial records detailing the budget allocations and expenditures.</li>
                    <li><strong>Calendar of Activities</strong>: A comprehensive schedule of all programs and activities.</li>
                    <li><strong>Request Letters and Forms</strong>: Letters and forms to and from various offices and departments.</li>
                    <li><strong>Liquidation Forms</strong>: Forms used for accounting expenditures and reimbursements.</li>
                    <li><strong>Transportation Request Forms</strong>: Documents detailing requests for transportation.</li>
                    <li><strong>Days with God Documents</strong>: Records of Days with God recollections and retreats.</li>
                    <li><strong>FFP Documents</strong>: Files related to the Freshmen Formation Program.</li>
                    <li><strong>Disposal Process</strong>: Documents that are more than five years from their acquisition date are shredded to ensure confidential 
                    disposal.</li>
                  </ol>
                </div>
              </div>

              {/* SUPPLIES AND EQUIPMENT MANAGEMENT CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionF(!openSectionF)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    F. SUPPLIES AND EQUIPMENT MANAGEMENT
                  </h3>
                  <i className={`bi ${openSectionF ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionF ? "show" : ""}`}>
                  
                  {/* SUPPLIES AND EQUIPMENT MANAGEMENT CARDS */}
                  <div className="row g-3 mb-4">
                    
                    {/* Ordering and Replacement */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                        <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                          Ordering and Replacement
                        </h6>
                        <p className="small lh-base mb-0">
                          The office staff places orders for supplies and equipment through online PCO Shortcut/Purchasing and Custodial Office (PCO). 
                          The Unit Director for Formation approves the requests. 
                        </p>
                      </div>
                    </div>
                    
                    {/* Equipment Requisitions */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                        <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                          Equipment Requisitions
                        </h6>
                        <p className="small lh-base mb-0">
                          The office staff places orders for supplies and equipment through online PCO Shortcut/Purchasing and Custodial Office (PCO). 
                          The Unit Director for Formation approves the requests. 
                        </p>
                      </div>
                    </div>

                    {/* Equipment Usage and Safety */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                        <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                          Equipment Usage and Safety
                        </h6>
                        <p className="small lh-base mb-0">
                          Everyone is responsible for the care and maintenance of their assigned equipment, supplies, and materials. Anyone borrowing 
                          materials and/or equipment from the office must be logged in the borrowing book with the expected return dates, signature, and office.
                        </p>
                      </div>
                    </div>

                    {/* Maintenance and Repairs */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                        <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                          Maintenance and Repairs
                        </h6>
                        <p className="small lh-base mb-0">
                          Regular maintenance of office equipment like printers, laptops, and computers are essential for maintaining optimal performance and 
                          prevent risk of equipment failure. Any issues identified during the inspections must be reported to the Center for Information 
                          Technology Services.
                        </p>
                      </div>
                    </div>

                    {/* Securing and Storage */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                        <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                          Securing and Storage
                        </h6>
                        <p className="small lh-base mb-0">
                          High-value equipment should be kept in a secure, locked area when not in use. Access to this area is restricted to authorized personnel 
                          only, as designated by the unit director. Any loss or damage must be reported right away and documented using an incident report. The 
                          unit director will review the situation and decide on the appropriate next steps.
                        </p>
                      </div>
                    </div>

                    {/* Disposal Equipment */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm p-3 text-wrap text-break" style={{ backgroundColor: "#f4f7ff" }}>
                        <h6 className="fw-bold mb-2" style={{ color: "#1B3A90" }}>
                          Disposal Equipment
                        </h6>
                        <p className="small lh-base mb-0">
                          Segregating materials and equipment are one method of disposal in the office, allowing for the identification of items that can be 
                          recycled or donated upon the approval of the director of the Purchasing and Custodial Office. Items and materials designated for 
                          disposal should be turned over to the Purchasing and Custodial Office (PCO), the Physical Plant Office (PPO), or the Ateneo Center 
                          for Environment & Sustainability (ACES) with the approval of the Unit Director of Formation. 
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* BUDGET MANAGEMENT CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionG(!openSectionG)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    G. BUDGET MANAGEMENT - BUDGET PREPARATION
                  </h3>
                  <i className={`bi ${openSectionG ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionG ? "show" : ""}`}>
                  
                  <p className="lh-base mb-0" style={{ textAlign: "justify"}}>
                    Annual budget preparation starts in October. A pre-requisite document for the budget preparation is the operational plan of the previous 
                    year and that of the coming year. All budget proposals are to be anchored in the operational plan of the office and within the five-year 
                    target performance. Units and offices under the formation unit will have to work on their budget preparation using the same procedure to 
                    ensure quality assurance of the different programs and activities.
                  </p>

                </div>

              </div>

              {/* COMMUNICATIONS PROTOCOLS CARD*/}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionH(!openSectionH)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    H. COMMUNICATIONS PROTOCOLS
                  </h3>
                  <i className={`bi ${openSectionH ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionH ? "show" : ""}`}>
                  
                  <p className="small lh-base mb-3" style={{ textAlign: "justify"}}>
                    Implementing these protocols can enhance communication, foster collaboration, and create a more efficient office environment. In the Unit 
                    Director for Formation office, we practice several communication protocols:
                  </p>
                  
                  <ol className="list-decimal list-inside mb-3 small" style={{ textAlign: "justify"}}>
                    <li><strong>Email Communication Protocols</strong>: Staff must check their emails every morning and update the director about any important 
                    messages. Any official concerns must be directed via email.</li>
                    <li><strong>Social Media Protocols</strong>: All content shared on social media via the official Facebook page must be approved by the 
                    Director or an appointed social media coordinator. Posts should align with the values and mission of the university.</li>
                    <li><strong>Instant Messaging Protocols</strong>: Staff can use instant messaging platforms to communicate emergency, urgent, or important 
                    matters to the director.</li>
                    <li><strong>Feedback and Performance Communication Protocols</strong>: The director holds one-on-one meetings with staff to discuss 
                    performance and identify areas for improvement.</li>
                    <li><strong>Conflict Resolution Protocols</strong>: The director maintains a neutral stance and is open to individual consultations. Staff 
                    conflicts should be discussed with the director, and serious matters may be referred to the Human Resource Administration and Development 
                    Office.</li>
                    <li><strong>
                      Regular Meeting Protocols</strong>:
                      <ol className="list-disc list-inside mt-2 ps-3"  style={{ textAlign: "justify"}} type="a">
                        <li><strong>University Formation Management Council Meeting</strong>: Scheduled every quarter; additional meetings may be called by the 
                        Unit Director.</li>
                        <li><strong>Monthly Tuesdays Meeting</strong>: Morning for higher education formation group, afternoon for basic education formation 
                        group; for updates, clarifications, and preparation for activities.</li>
                        <li><strong>Monday Toolbox Meeting</strong>: Staff meets with the Unit Director to review weekly business, updates, and calendar of 
                        activities.</li>
                      </ol>
                    </li>
                  </ol>

                </div>

              </div>
              
              {/* CONFIDENTIALITY AND DATA PROTECTION POLICIES CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionI(!openSectionI)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    I. CONFIDENTIALITY AND DATA PROTECTION POLICIES
                  </h3>
                  <i className={`bi ${openSectionI ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionI ? "show" : ""}`}>
                  
                  <ol className="list-decimal list-inside small mb-0" style={{ textAlign: "justify"}}>
                    <li><strong>
                      Computer and Network Usage Policies</strong>: Formation staff members are permitted to use the office computers and network resources 
                      available in the office. Computer and network usage is strictly for work-related purposes only. Accessing inappropriate websites, 
                      including those with offensive, discriminatory, or explicit content, is strictly prohibited. 
                    </li>
                  </ol>

                </div>

              </div>

              {/* DATA PROTECTION AND PRIVACY POLICIES CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionJ(!openSectionJ)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    J. DATA PROTECTION AND PRIVACY POLICIES
                  </h3>
                  <i className={`bi ${openSectionJ ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionJ ? "show" : ""}`}>
                  
                  <p className="mb-0">
                    The office places all important documents (e.g., resignation letters, resumes) in a single brown envelope and stored it in the filing cabinet. 
                    At the end of each year, these documents will be filed appropriately.
                  </p>

                </div>

              </div>

              {/* OFFICE RISK MANAGEMENT AND CONTROL CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionK(!openSectionK)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    K. OFFICE RISK MANAGEMENT AND CONTROL
                  </h3>
                  <i className={`bi ${openSectionK ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionK ? "show" : ""}`}>

                  <p className="mb-0">
                    These health and safety policies are crucial for maintaining a secure and healthy working environment in the office. Staff members are 
                    encouraged to proactively identify and address potential hazards and to familiarize themselves with emergency procedures to ensure their 
                    own safety and that of others. Staff are likewise required to familiarize the University Disaster Risk Reduction Manual for any related 
                    man-made or natural disaster
                  </p>

                </div>

              </div>

              {/* INCIDENT REPORT CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionL(!openSectionL)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    L. INCIDENT REPORT
                  </h3>
                  <i className={`bi ${openSectionL ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionL ? "show" : ""}`}>
                  
                  <p className="small mb-0">
                    All incident is immediately reported to the Unit Director for Formation. Complete an incident report form within 24 hours of the incident. 
                    Include detailed information such as the name, date, time, location, and a description of what occurred. The office Staff, along with the 
                    relevant offices, will investigate all reported incidents to determine the cause. If medical treatment is needed, adhere to all prescribed 
                    procedures and keep your director updated on your condition and any work restrictions.
                  </p>

                </div>

              </div>

              {/* QUALITY ASSURANCE AND CONTINUOUS IMPROVEMENT CARD*/}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionM(!openSectionM)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    M. QUALITY ASSURANCE AND CONTINUOUS IMPROVEMENT
                  </h3>
                  <i className={`bi ${openSectionM ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionM ? "show" : ""}`}>
                  
                  <ol className="list-decimal list-inside small mb-0">
                    <li><strong>Evaluation and Assessment Processes</strong></li>
                  </ol>
                  <p className="small mb-0">
                    The office evaluates at the end of all its programs and activities. These evaluations are crucial information for the mid-year and 
                    end-year planning.
                  </p>

              </div>

            </div>

              {/* APPROVALS AND EFFECTIVITY */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 p-4 text-wrap text-break">

                <div className="d-flex justify-content-between align-items-center mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSectionAAE(!openSectionAAE)}>
                  <h3 className="fw-bold border-start border-3 ps-3 mb-0" style={{ color: "#0c2461" }}>
                    APPROVALS AND EFFECTIVITY
                  </h3>
                  <i className={`bi ${openSectionAAE ? "bi-chevron-up" : "bi-chevron-down"}`} style={{ fontSize: "20px", color: "#0c2461" }}></i>
                </div>
                
                <div className={`collapse ${openSectionAAE ? "show" : ""}`}>
                  
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered small">
                      <thead>
                        <tr>
                          <th className="fw-bold" style={{ width: "50%" }}>Prepared by:</th>
                          <th className="fw-bold" style={{ width: "50%" }}>Reviewed by:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Honey Rod T. Alfaro</strong> <br />
                            <em className="text-muted">Unit Director for Formation</em>
                          </td>
                          <td>
                            <strong>Dr. Jane Bascar</strong> <br />
                            <em className="text-muted">Director, HRADO</em>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Yya Micaela A. Macaroy</strong> <br />
                            <em className="text-muted">Support Staff</em>
                          </td>
                          <td>
                            {/* Blank cell */}
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={2} className="bg-light pt-3"> 
                            <strong className="d-block mb-1">Approved by:</strong>
                            Fr. Ernald Andal, SJ <br />
                            <em className="text-muted">President</em>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <em className="text-sm text-gray-600 mb-4">
                    Effective School Year 2024 – 2025 and to be reviewed at the end of SY.
                  </em>
                  
                  {/* Contact Information */}
                  <h4 className="fw-bold mb-2" style={{ color: "#0c2461" }}>CONTACT INFORMATION</h4>
                  {/* Appendices */}
                  <h4 className="fw-bold mb-2" style={{ color: "#0c2461" }}>APPENDICES</h4>
                  <ol className="list-decimal list-inside small mb-0">
                    <li>Office Forms and Templates</li>
                    <li>Checklists and Flowcharts</li>
                    <li>Calendar of Activities</li>
                  </ol>
                  
                  <table className="table table-bordered" style={{ width: "100%", tableLayout: "fixed", wordWrap: "break-word" }}>
                    <thead>
                      <tr>
                        <th className="fw-bold" style={{ width: "20%", padding: "0.5rem"}}>Month</th>
                        <th className="fw-bold" style={{ padding: "0.5rem" }}>Tasks (Activities to be Accomplished)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>March<br />April<br />May</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>On-going celebration of the Lenten season</li>
                            <li>Final preparation for the celebration of the Via Crucis</li>
                            <li>Final preparation and implementation of the Holy Week celebration</li>
                            <li>
                              Prepare the proposed schedule dates for the following:
                              <ol type="a">
                                <li>Feast Day Mass of Saint Ignatius of Loyola. Consultation may be done beforehand with the different units of basic education. 
                                  It is also good to invite former regents who are newly ordained priests to celebrate the Mass as it is also their Thanksgiving 
                                  Mass.</li>
                                <li>Start of the School Year Recollection. The recollection is usually celebrated on the first Friday of the second month after 
                                  the opening of classes in the higher education unit.</li>
                                <li>Novena Mass for the Feast Day of Our Lady of the Pillar. To avoid conflict with the school calendar, it is best to already 
                                  coordinate with the Curia of our intended date of sponsorship.</li>
                                <li>Novena Mass for the Solemnity of the Immaculate Conception. To avoid conflict with the school calendar, it is best to already 
                                  coordinate with the Curia of our intended date of sponsorship.</li>
                                <li>Solemnity of the Immaculate Conception. The celebration is kick-off celebration of the week-long Ateneo Fiesta. Coordinate 
                                  with the appointed Ateneo fiesta chair for proper planning of the program of activities.</li>
                                <li>Advent Recollection. The recollection is usually held on the morning of the community Christmas party. This usually happens 
                                  on the Friday closest to December 25.</li>
                              </ol>
                            </li>
                            <li>
                              The following programs and activities are to be scheduled but need not be presented to the president’s council:
                              <ol type="a">
                                <li>Days with God Year 1 – Central Services</li>
                                <li>Days with God Year 2 – Central Services</li>
                                <li>Days with God Year 3 – Central Services</li>
                                <li>Days with God Faculty</li>
                                <li>Days with God Administrators</li>
                                <li>Days with God New Appointments</li>
                              </ol>
                            </li>
                            <li>As soon as the school calendar is already available, consolidate the different scheduled programs and activities under the 
                              formation unit. The objective of the process is to articulate and streamline the different formation programs and activities for 
                              efficacy and efficiency.</li>
                            <li>General reports of the different units and offices under the formation unit will have to be submitted to the unit director for 
                              formation for proper assessment and documentation.</li>
                            <li>The accomplishment report for the school year written by the unit director for formation must be ready at the close of the school 
                              year on or before May 31.</li>
                            <li>Basic education units are having their in-service training; hence it is during this time that they will be having their respective 
                              annual 3-day silent retreat.</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>June<br />July<br />August</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>In coordination with the Office of the Campus Ministry of the different units, on-going preparation for the Mass of the Holy Spirit
                              and Feast Day Mass of Saint Ignatius.</li>
                            <li>Orientation and re-orientation of new members and new appointees to the identity and mission of Ateneo in coordination with the human
                              resource administration and development office and the quality assurance service and management office.</li>
                            <li>Student leadership camp in coordination with the Office of Student Affairs.</li>
                            <li>In coordination with the Office of the College Campus Ministry, final preparation for class recollections and retreats.</li>
                            <ol type="a">
                              <li>Recollection Module</li>
                              <li>Recollection Materials</li>
                              <li>Recollection Venue</li>
                            </ol>
                            <li>In coordination with the Office of the College Guidance and Counseling office, final preparation for psychological testing schedules.</li>
                            <li>In coordination with office of the Social Awareness and Community Service Involvement, final preparation for the orientation on the 
                              National Service Training Program and Service-Learning Program.</li>
                            <ol type="a">
                              <li>Schedule of the National Service Training Program</li>
                              <li>Schedule of the Service-Learning Program</li>
                            </ol>
                            <li>Final preparation for the Days with God programs.</li>
                            <li>Votive Mass of the Holy Spirit to mark the start of the new school year.</li>
                            <li>Feast Day Mass of Saint Ignatius of Loyola</li>
                            <li>Preparation for Days with God Year 3 – Central Services</li>
                            <li>Preparation for Days with God Faculty</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>September</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>Institutional recollection and general convocation. The activity is shared with the office of human resource administration and 
                              development office.</li>
                            <li>Days with God 2, Season of Creation</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>October</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>Implementation of Days with God 3.</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>November</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>On-going preparation for the Advent institutional recollection.</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>December</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>On-going preparation for Days with God Year 1</li>
                            <li>Ateneo alumni homecoming</li>
                            <li>Novena sponsorship in preparation for the Solemnity of the Immaculate Conception</li>
                            <li>Ateneo fiesta</li>
                            <li>Advent institutional recollection</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>January</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>Implementation for Days with God Year 1</li>
                            <li>On-going preparation for the Holy Week celebration in coordination with the office of the chaplain and office of the campus ministry of the different units</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.5rem" }}>February</td>
                        <td style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", textAlign: "justify", padding: "0.5rem" }}>
                          <ol>
                            <li>Implementation for Days with God Year 1</li>
                            <li>Final preparation for Ash Wednesday and Lenten season</li>
                          </ol>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                </div>
              </div>

              {/* STAFF */}
              <div className="mt-5">
                <h4 className="fw-bold mb-3 text-primary" style={{ color: "#0c2461" }}>
                  Meet Our Staff
                </h4>

                <div className="row g-4">
                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/sirhoneyrod.png"
                      alt="Mr Honey Rod T. Alfaro"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Mr. Honey Rod T. Alfaro
                    </div>
                    <div className="small text-muted">
                      Unit Director for Formation
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/msyya.png"
                      alt="Ms Yya Micaela Macaroy"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Ms. Yya Micaela Macaroy
                    </div>
                    <div className="small text-muted">Secretary</div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/frtex.png"
                      alt="Fr Alberto Tex Paurom"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Fr. Alberto Paurom, SJ, MD
                    </div>
                    <div className="small text-muted">
                      Chaplain & Liturgical Coordinator
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/siregidio.png"
                      alt="Mr Egidio Sua"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Mr. Egidio Sua
                    </div>
                    <div className="small text-muted">
                      Liturgy Support Staff
                    </div>
                  </div>

                </div>
              </div>

              {/* CONTACT and FIND US */}
              <div className="mt-5">
                <div className="row g-4">
                  {/* CONTACT */}
                  <div className="col-12 col-md-6">
                    <h4 className="fw-bold mb-3 text-primary" style={{ color: "#0c2461" }}>
                      Contact Us!
                    </h4>

                    <div className="card shadow-sm border-0 p-4 text-wrap text-break">
                      <p className="mb-1">
                        <strong>Email:</strong> vpformation@adzu.edu.ph
                      </p>

                      <p className="mb-1">
                        <strong>Phone:</strong> (062) 991-0871 local 2228 / 1008
                      </p>

                      <p className="mb-1">
                        <strong>Office:</strong> University Church of the Sacred
                        Heart of Jesus
                      </p>

                      <p className="mb-1">
                        <strong>Address:</strong> Ateneo de Zamboanga
                        University, La Purisima St., Zamboanga City, 7000
                      </p>

                    </div>

                  </div>

                  {/* FIND US */}
                  <div className="col-12 col-md-6">
                    <h4 className="fw-bold mb-3 text-primary" style={{ color: "#0c2461" }}>
                      Find Us!
                    </h4>

                    <div className="card shadow-sm border-0 p-4 d-flex align-items-center justify-content-center">
                      <a href="https://www.facebook.com/adzuformationoffice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                        style={{ fontSize: "60px" }}
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            {/* END BODY */}
          </div>
        </div>
      </div>
    </div>
  );
}
