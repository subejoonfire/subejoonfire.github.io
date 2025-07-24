import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page to try again.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

// Enhanced Profile Sidebar Component
const ProfileSidebar = React.memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/harlan-muradi-0a3a97284/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512" aria-label="LinkedIn Profile">
          <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
      ),
      label: "LinkedIn Profile"
    },
    {
      href: "https://github.com/subejoonfire",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 496 512" aria-label="GitHub Profile">
          <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
      ),
      label: "GitHub Profile"
    }
  ];

  return (
    <aside className="rightSide-container" role="complementary">
      <div className="photo-container">
        <img 
          src="./profile.jpg" 
          alt="Harlan Muradi - Full Stack Web Developer"
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </div>
      
      <div className="biography-container">
        <h1>Harlan Muradi</h1>
        <span>Full Stack Web Developer</span>
      </div>
      
      <nav className="socialmedia-container" aria-label="Social Media Links">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="social-link"
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </aside>
  );
});

// Enhanced Home Section
const HomeSection = React.memo(() => (
  <section className="home-container fade-in" role="main" aria-labelledby="welcome-heading">
    <h1 id="welcome-heading">Selamat Datang</h1>
    <p>
      Experience the web in its raw, unfiltered form. My site is a HTML and CSS playground, 
      a testament to the beauty of DIY digital craftsmanship. No pre-made templates or shortcuts here, 
      just pure code artistry. I've ditched the mainstream and embraced the cool factor of handcrafting 
      every line, bringing you a website that's as unique as it gets. Welcome to the realm of bespoke 
      HTML and CSS coolness.
    </p>
    <span>This website is under progress.</span>
  </section>
));

// Enhanced About Section
const AboutSection = React.memo(() => {
  const personalInfo = [
    { label: "Umur", value: "19" },
    { label: "Negara", value: "Indonesia" },
    { label: "Kota", value: "Pelaihari" },
    { label: "Email", value: "Harlanmuradi@gmail.com" },
    { label: "Nomor", value: "+6285751616536" }
  ];

  const services = [
    {
      icon: "devices",
      title: "Computer Development",
      description: "Saya berhasil membuat berbagai macam Sistem Informasi seperti Pencatatan Barang dan Pengrosiran Barang."
    },
    {
      icon: "linked_services",
      title: "Freelancer",
      description: "Saya menerima jasa membuat website, seperti Profile, Sistem Informasi, dan hal yang sebagainya."
    },
    {
      icon: "storefront",
      title: "Marketing",
      description: "Saya menjalankan suatu bisnis dalam menjual suatu barang, baik menjual langsung ke konsumen, maupun ke distributor."
    }
  ];

  return (
    <section className="aboutme-container slide-up" role="main" aria-labelledby="about-heading">
      <header className="aboutme-header-container">
        <h1 id="about-heading">
          <span className="About">About</span>
          <span className="Me">Me</span>
        </h1>
      </header>
      
      <div className="aboutme-content-container">
        <div className="aboutme-kelahiran">
          <p>
            Saya adalah mahasiswa <strong>Politeknik Negeri Tanah Laut</strong>, 
            program studi <strong>D3 Teknologi Informasi</strong> sejak tahun 2022.
          </p>
          <p>
            Saya memiliki pengalaman sebagai <strong>Web Developer</strong>. 
            Saya berpengalaman menggunakan <strong>Framework Laravel, Code Igniter 3/4, dan React JS</strong>. 
            Saya merupakan pribadi yang bertanggung jawab, mudah beradaptasi, cepat belajar, 
            mampu bekerja sama dengan baik dalam tim maupun individu.
          </p>
        </div>
        
        <div className="aboutme-side-container">
          <table>
            <tbody>
              {personalInfo.map((info, index) => (
                <tr key={index}>
                  <td className="span-header">{info.label}</td>
                  <td>{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="aboutme-whatido-container">
        <header className="aboutme-whatido-header-container">
          <h2>
            <span className="What">What</span>
            <span className="Ido">I Do</span>
          </h2>
        </header>
        
        <div className="aboutme-whatido-body-container">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <header>
                <span className="material-symbols-outlined" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
              </header>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sections = useMemo(() => [
    { id: 'home', component: HomeSection, name: 'Home' },
    { id: 'about', component: AboutSection, name: 'About' },
    // Add other sections here
  ], []);

  const handleSectionChange = useCallback((sectionIndex) => {
    setActiveSection(sectionIndex);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const CurrentSection = sections[activeSection].component;

  return (
    <ErrorBoundary>
      <div className="content-container">
        <ProfileSidebar />
        
        <main className="profile-container">
          <div className="transition-container">
            <CurrentSection />
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;