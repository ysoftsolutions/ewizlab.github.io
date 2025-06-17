export default function HomePage() {
  // function SocialIcon({ href, icon, bg }) {
  //   return (
  //     <a
  //       href={href}
  //       className={`icon text-white p-2 rounded-full shadow-md ${bg} text-xs`}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <i className={icon}></i>
  //     </a>
  //   );
  // }
  return (
    <>
      <section
        id="first-section"
        style={{ height: "100vh", backgroundColor: "#eee" }}
      >
        <h1>Welcome to PinkMirror</h1>
      </section>
      <div style={{ height: "200vh", backgroundColor: "#ccc" }}>
        {/* <h2>Scroll down to trigger header</h2> */}
      </div>
    </>
    // <>
    //   <div className="header header-auto-show header-fixed header-logo-center header-active">
    //     <div className="container-fluid">
    //       <div className="row align-items-center">
    //         {/* Left icon/menu */}
    //         <div className="col-2 ps-3">
    //           <a
    //             href="#"
    //             className="text-dark"
    //             data-bs-toggle="offcanvas"
    //             data-bs-target="#mainMenu"
    //           >
    //             <i className="fas fa-bars fa-lg"></i>
    //           </a>
    //         </div>

    //         {/* Center welcome message */}
    //         {/* <div className="col-8 text-center">
    //           {userName ? (
    //             <h6
    //               className="text-capitalize m-0"
    //               style={{ color: "orange", marginTop: "16px" }}
    //             >
    //               Welcome {userName}
    //             </h6>
    //           ) : null}
    //         </div> */}

    //         {/* Login icon (right) */}
    //         {/* <div className="col-2 text-end pe-3" id="login_NO2">
    //           <Link href="/login" className="text-dark">
    //             <i className="fas fa-sign-in-alt fa-lg"></i>
    //           </Link>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="row"
    //     style={{ paddingTop: "10px", paddingBottom: "40px" }}
    //   >
    //     <div className="col-8">
    //       <p
    //         className="pinkmirrorBeautytext"
    //         style={{
    //           marginBottom: "12px",
    //           fontSize: "24px",
    //           fontWeight: "bold",
    //           color: "#f7941d",
    //         }}
    //       >
    //         PinkMirror
    //       </p>
    //     </div>
    //     <div className="col-4" style={{ textAlign: "right" }}>
    //       <p
    //         className="faceaesthetic"
    //         style={{
    //           marginBottom: "0px",
    //           textAlign: "right",
    //           fontWeight: "bold",
    //           fontSize: "16px",
    //         }}
    //       >
    //         Face Aesthetic Studio
    //       </p>
    //     </div>
    //     <div className="col-12">
    //       <img
    //         style={{ width: "100%" }}
    //         src="\images\PinkMirror-Face-Analysis.png"
    //         alt="PinkMirror Face Analysis"
    //       />
    //     </div>
    //   </div>
    //   <div className="card card-style">
    //     <div className="content pb-0">
    //       <div className="row">
    //         <div className="col-7">
    //           <p>
    //             Do you want to know what makes you <strong>ATTRACTIVE</strong>?
    //             Find yourself, know what suits you and look better. <br />
    //             Generate your {/* <Link href="/photo/add"> */}
    //             <a className="text-link">Face Analysis Report</a>
    //             {/* </Link>{" "} */}
    //             INSTANTLY. Backed by Science.
    //           </p>
    //         </div>

    //         <div className="col-5 text-center">
    //           <br />
    //           {/* <Link href="/photo/add"> */}
    //           <a
    //             id="aTryNow"
    //             className="btn btn-full btn-center-l rounded-sm font-700 font-13 bg-highlight scale-box"
    //           >
    //             TRY NOW <br /> Instant Face Analysis Report{" "}
    //             <i className="fa fa-user-md"></i>
    //           </a>
    //           {/* </Link> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* tsvs */}
    //   <div className="card card-style">
    //     <div className="content pb-0">
    //       <h2 className=" text-center mb-3" style={{ color: "#f7941d" }}>
    //         How does it work
    //       </h2>
    //       <p style={{ textAlign: "center" }}>
    //         Unlock Your Beauty Potential in 3 Simple Steps with PinkMirror!
    //       </p>
    //       <br />
    //       <div
    //         className="row mb-0"
    //         style={{ marginRight: "10px", marginLeft: "15px" }}
    //       >
    //         <Link href="#" className="col-6 pr-2 style">
    //           <div
    //             className="card mr-0 card-style pl-1"
    //             style={{ backgroundColor: "#f8faff", marginLeft: 0 }}
    //           >
    //             <div
    //               className="d-flex pt-3 pb-3 bg-57"
    //               style={{
    //                 height: "50px",
    //                 marginTop: "13px",
    //                 marginLeft: "15px",
    //               }}
    //             ></div>
    //             <div className="align-self-left">
    //               <h5
    //                 className="pl-2 ml-1 mb-0"
    //                 style={{
    //                   color: "#555",
    //                   textShadow: "none",
    //                   fontWeight: "normal",
    //                   fontSize: "1.25rem",
    //                 }}
    //               >
    //                 Step 1: Add a Photo.
    //                 <br />
    //                 Choose a well-lit frontal photo and effortlessly upload it
    //                 to PinkMirror. Remember, you should be the sole focus of the
    //                 image.
    //               </h5>
    //               <br />
    //             </div>
    //           </div>
    //         </Link>

    //         <Link href="#" className="col-6 pr-2">
    //           <div
    //             className="card mr-0 card-style"
    //             style={{ backgroundColor: "#f8faff", marginLeft: 0 }}
    //           >
    //             <div
    //               className="d-flex pt-3 pb-3 bg-58"
    //               style={{
    //                 height: "50px",
    //                 marginTop: "13px",
    //                 marginLeft: "15px",
    //               }}
    //             ></div>
    //             <div className="align-self-left">
    //               <h5
    //                 className="pl-2 ml-1 mb-0"
    //                 style={{
    //                   color: "#555",
    //                   textShadow: "none",
    //                   fontWeight: "normal",
    //                   fontSize: "1.25rem",
    //                 }}
    //               >
    //                 Step 2: Unleash the Power of Analysis.
    //                 <br />
    //                 Experience the cutting-edge technology of PinkMirror's face
    //                 analyzer. Our advanced algorithms and machine learning
    //                 models will examine your facial structure, bone composition,
    //                 and skin characteristics.
    //               </h5>
    //               <br />
    //             </div>
    //           </div>
    //         </Link>
    //       </div>

    //       <div
    //         className="row mb-0"
    //         style={{ marginRight: "10px", marginLeft: "15px" }}
    //       >
    //         <Link href="#" className="col-6 pr-2">
    //           <div
    //             className="card mr-0 card-style"
    //             style={{ backgroundColor: "#f8faff", marginLeft: 0 }}
    //           >
    //             <div
    //               className="d-flex pt-3 pb-3 bg-59"
    //               style={{
    //                 height: "50px",
    //                 marginTop: "13px",
    //                 marginLeft: "15px",
    //               }}
    //             ></div>
    //             <div className="align-self-left">
    //               <h5
    //                 className="pl-2 ml-1 mb-0"
    //                 style={{
    //                   color: "#555",
    //                   textShadow: "none",
    //                   fontWeight: "normal",
    //                   fontSize: "1.25rem",
    //                 }}
    //               >
    //                 Step 3: Instant Insights at Your Fingertips.
    //                 <br />
    //                 Within moments, receive your comprehensive report packed
    //                 with invaluable insights. Discover what truly matters for
    //                 enhancing your allure and uncover personalized makeover
    //                 tips.
    //               </h5>
    //               <br />
    //             </div>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   {/* counting container */}
    //   <div
    //     className="col-12"
    //     style={{
    //       alignContent: "center",
    //       textAlign: "center",
    //       backgroundColor: "#fdead2",
    //       paddingTop: "5px",
    //     }}
    //   >
    //     <h1
    //       style={{
    //         marginTop: "30px",
    //         fontSize: "26px",
    //         fontWeight: "bold",
    //       }}
    //     >
    //       1,100,370+ reports generated and counting ..
    //     </h1>
    //     <br />
    //   </div>
    //   <div
    //     className="col-12"
    //     style={{ alignContent: "center", textAlign: "center" }}
    //   >
    //     <h1
    //       className="color-black text-center mb-0"
    //       style={{
    //         marginTop: "57px",
    //         paddingBottom: "31px",
    //         fontSize: "26px",
    //         fontWeight: "bold",
    //       }}
    //     >
    //       Experience the transformative journey of self-discovery with
    //       PinkMirror today!
    //     </h1>
    //   </div>
    //   <div className="row">
    //     <div className="col-6">
    //       <div className="card card-style margin-top-15">
    //         <div className="content pb-0">
    //           <a
    //             className="card mr-0 mb-3 default-link"
    //             href="#"
    //             data-card-height="175"
    //             data-lightbox="gallery-d"
    //             style={{
    //               borderRadius: "20px",
    //               backgroundImage: `url("/images/find-your-face-shape-automatically.jpg")`,
    //             }}
    //           ></a>
    //           <h6 className="color-black text-md-left mb-3">
    //             What is your Face Shape? Find the accurate answer instantly
    //           </h6>
    //           <p>
    //             There are a few basic face shapes that cover all the 7 billion
    //             faces on this planet. Knowing your face shape will allow you to
    //             make better cosmetic and enhancement decisions about your
    //             outlook where it is concerned. The following face shapes
    //             describe the wide variety of facial structures among people:
    //             Round, Square, Oblong, Heart, Diamond, Triangle, Rectangle,
    //             Pear, and Oval.
    //           </p>
    //           <a
    //             className="btn-more hover-effect"
    //             href="blog/what-is-my-face-shape/"
    //             style={{ color: "orange" }}
    //           >
    //             read more
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-6">
    //       <div className="card card-style margin-top-15">
    //         <div className="content pb-0">
    //           <a
    //             className="card mr-0 mb-3 bg-2 default-link"
    //             href="#"
    //             data-card-height="175"
    //             data-lightbox="gallery-d"
    //             style={{ borderRadius: "20px" }}
    //           ></a>
    //           <h6 className="color-black text-md-left mb-3">
    //             Analysis for Face Attractiveness: What Are the Scoring Ranges
    //             and Factors?
    //           </h6>
    //           <p>
    //             To determine the Face Attractiveness Score, PinkMirror analyzes
    //             the geometric proportions of facial features such as the eyes,
    //             nose, lips, etc., and the distance between those. When the face
    //             analysis is finished, you are able to see which features of your
    //             face determine your beauty score.
    //           </p>
    //           <a
    //             className="btn-more hover-effect"
    //             href="blog/photo-retouch-face-attractiveness-score/"
    //             style={{ color: "orange" }}
    //           >
    //             read more
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-[#fdead2] mb-24 card card-style" id="footercard">
    //     <div className="px-4 pt-4 pb-0">
    //       {/* Logo Row */}
    //       <div className="flex items-center mb-2">
    //         <div className="w-1/6" id="logobottom">
    //           <img
    //             src="/Content/mobile/images/PinkMirror-Favicon.png"
    //             alt="PinkMirror Logo"
    //             className="h-10"
    //             id="pinkmirrorlogo1"
    //           />
    //         </div>
    //         <div
    //           className="w-2/3 text-center font-bold text-xl text-pink-700"
    //           id="pinkmirrorlogo"
    //         >
    //           PinkMirror
    //         </div>
    //       </div>

    //       {/* Description */}
    //       <div className="text-center px-6 pt-4">
    //         <p className="text-[12px] font-bold tracking-wide" id="pfooter">
    //           At PinkMirror, we are trained in understanding human beauty and
    //           finding ways to help you improve yours.
    //         </p>
    //       </div>

    //       {/* Social Media Icons */}
    //       <div className="flex justify-center space-x-3 my-4" id="icon">
    //         <SocialIcon
    //           href="https://www.facebook.com/face.retouch"
    //           icon="fab fa-facebook-f"
    //           bg="bg-blue-600"
    //         />
    //         <SocialIcon
    //           href="https://twitter.com/PinkMirror_com"
    //           icon="fab fa-twitter"
    //           bg="bg-blue-400"
    //         />
    //         <SocialIcon
    //           href="https://www.pinterest.com/pinkmirror/"
    //           icon="fab fa-pinterest"
    //           bg="bg-red-600"
    //         />
    //         <SocialIcon
    //           href="https://www.linkedin.com/organization/18019622#"
    //           icon="fab fa-linkedin-in"
    //           bg="bg-blue-700"
    //         />
    //         <SocialIcon
    //           href="https://www.instagram.com/pinkmirrorphotogenic/"
    //           icon="fab fa-instagram"
    //           bg="bg-pink-500"
    //         />
    //         <SocialIcon
    //           href="https://www.youtube.com/%40pinkmirrorfaceaestheticsstudio/"
    //           icon="fab fa-youtube-square"
    //           bg="bg-red-500"
    //         />
    //         <SocialIcon
    //           href="https://www.tiktok.com/%40pinkmirror.com/"
    //           icon="fab fa-tiktok"
    //           bg="bg-black"
    //         />
    //       </div>

    //       <hr className="border-t border-gray-400 mx-4" />

    //       {/* Footer Links */}
    //       <div
    //         className="flex justify-around text-[11px] font-bold text-orange-500 mt-4 flex-wrap"
    //         id="menubottom"
    //       >
    //         <a href="/privacy-policy" className="hover:underline">
    //           PRIVACY POLICY
    //         </a>
    //         <a href="/terms-and-conditions" className="hover:underline">
    //           TERMS OF SERVICES
    //         </a>
    //         <a href="/contact-us" className="hover:underline">
    //           SUPPORT
    //         </a>
    //         <a href="/person" className="hover:underline text-center">
    //           CELEBRITY FACIAL FEATURES
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
