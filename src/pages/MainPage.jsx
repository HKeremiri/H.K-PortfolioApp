import { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import Fade from '@mui/material/Fade';

import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import MyProjects from "../components/MyProjects";
import JobExperience from "../components/JobExperience";
import MyPhoto from "../components/MyPhoto";
import ScrollToTop from "../components/ScrollToTop";

import SchoolExperience from "../components/SchoolExperience";
import { contact } from "../components/data-en";

export default function MainPage({ navcolor, setnavColor, language,  data}) {
  const [visible, setVisible] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(false); // İş deneyimi için görünürlük kontrolü
  const [myprojectVisible, setMyProjectVisible] = useState(false); // MyProjects görünürlüğü

  const jobsRef = useRef(null); // İş deneyimi kısmını takip edecek ref
  const myprojectRef = useRef(null); // MyProjects kısmını takip edecek ref
 const { content, jobs, school, projects, pages } = data;




  useEffect(() => {
    // Sayfa yüklendiğinde ilk bölümü göster
    setTimeout(() => setVisible(true), 500);

    // İş deneyimi kısmını gözlemleyen Intersection Observer
    const jobObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setJobsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (jobsRef.current) {
      jobObserver.observe(jobsRef.current);
    }

    // MyProjects kısmını gözlemleyen Intersection Observer
    const projectObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMyProjectVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (myprojectRef.current) {
      projectObserver.observe(myprojectRef.current);
    }

    return () => {
      jobObserver.disconnect();
      projectObserver.disconnect();
    };
  }, []);
  const scrollToProjects = () => {
    myProjectRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  

  return (
    <div className="d-flex flex-column">
  
      {/* İlk Fade - Sayfa açıldığında */}
      <Fade in={visible} timeout={1000}>
        <Grid id="home" marginTop={10} container spacing={2}>
          
          <Grid item xs={12} md={8}  >
            <AboutMe content={content} />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyPhoto />
          </Grid>
        </Grid>
      </Fade>

   {/* Okul Başlığı */}
   <Grid id="schoollife" container spacing={2}>
        <Grid item xs={12}>
          <h1  style={{ textAlign: "center", color: "orangered" }}>{pages.find(p => p.id === "schoollife")?.name}</h1>
        </Grid>
      </Grid>


 {/* Okul bölümü */}
      <Fade in={jobsVisible} timeout={1000}>
        <Grid container spacing={2} sx={{ marginTop: 2 }} ref={jobsRef}>
          {school.map((school) => (
            <Grid item xs={12} key={school.id}>
              <SchoolExperience school={school} />
            </Grid>
          ))}
        </Grid>
      </Fade>

      {/* İş Deneyimi Başlığı */}
      <Grid id="joblife" container spacing={2}>
        <Grid item xs={12}>
          <h1 style={{ textAlign: "center", color: "orangered" }}>{pages.find(p => p.id === "joblife")?.name}</h1>
        </Grid>
      </Grid>

      {/* İş Deneyimi Bölümü - Scroll ile Fade */}
      <Fade in={jobsVisible} timeout={1000}>
        <Grid container spacing={2} sx={{ marginTop: 2 }} ref={jobsRef}>
          {jobs.map((job) => (
            <Grid item xs={12} key={job.id}>
              <JobExperience job={job} />
            </Grid>
          ))}
        </Grid>
      </Fade>

      

      {/* MyProjects Bölümü - Scroll ile Fade */}
      <Fade id="myprojects" in={myprojectVisible} timeout={1000}>
        <div ref={myprojectRef}>
          <MyProjects projects={projects} pages={pages} language={language}/>
        </div>
      </Fade>

      <Contact id="contact" navcolor={navcolor} contact={contact} />
      <ScrollToTop />
    </div>
  );
}
