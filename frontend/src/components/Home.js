import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';
import EventCards from './EventCards';
import Workshop from './Workshop';

function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const form = useRef();
  const menuRef = useRef();
  const menuButtonRef = useRef();

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_n8znmka',
        'template_pwe156a',
        form.current,
        '8369E0N6Lv8Ikcvpm'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date('2025-05-30T00:00:00') - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home">
      {/* Navigation */}
      <nav>
  <div id="header">
    <button id="menu" onClick={toggleMenu} ref={menuButtonRef}>☰</button>
    <div id="title">Ignitia</div>
  </div>
  <ul
    id="menubar"
    ref={menuRef}
    style={{ display: menuVisible ? 'block' : 'none' }}
  >
    <li><a href="#home" onClick={closeMenu}>Home</a></li>
    <li><a href="#events" onClick={closeMenu}>Events</a></li>
    <li><a href="#workshop" onClick={closeMenu}>Workshops</a></li>
    <li><a href="#sponsors" onClick={closeMenu}>Sponsors</a></li>
    <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
  </ul>
</nav>



      <hr />
      <br />

      {/* Chakravyuha Countdown Section */}
      <section className="ignitia-section">
        <div className="event-tag">
          <br /><br /><br />One Event, Endless 
          <span className="highlight"> ✨ Possibilities</span>
        </div>
        <h1 className="ignitia-title">Ignitia</h1>
        <p className="ignitia-desc">
          A two-day celebration of innovation and technology, filled with engaging events, hands-on workshops, and exciting challenges.
        </p><br />
        <h3 className="countdown-title">The wait is until</h3>
        <div className="countdown-container">
          {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="countdown-box">
              <div className="countdown-number">{timeLeft[interval]}</div>
              <div className="countdown-label">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
            </div>
          ))}
        </div>
      </section>
      <br /><br />
      <img
        src="/images/ignitia.gif"
        alt="Ignitia Animated Logo"
        className="vedio"
      />
      <br /><br />
      {/* About MIT */}
      <div className="about-section first">
        <div className="about-image-wrapper">
          <img src="/images/mit.png" alt="MIT" className="about-image" />
        </div>
        <div className="about-text">
          <h1>About Madras Institute of Technology (MIT)</h1><br />
          <p>
            Established in 1949 by the visionary C. Rajam, the Madras Institute of Technology (MIT) is one of India's
            premier engineering institutions. As a part of Anna University, MIT has been at the forefront of technological
            innovation and academic excellence, producing some of the nation’s most brilliant engineers, scientists, and
            researchers.
          </p><br />
          <p>
            MIT is known for its pioneering efforts in Aeronautical Engineering, Electronics, Computer Science,
            and Robotics, among other disciplines. With a strong research culture, cutting-edge laboratories,
            and a dynamic learning environment, the institution continuously pushes the boundaries of innovation.
          </p><br />
          <p>
            As an integral part of Anna University, MIT continues to shape the future of technology,
            empowering students with the skills, knowledge, and vision to drive progress and innovation globally.
          </p>
        </div>
      </div>
      {/* About Ignitia */}
      <div className="about-section">
        <div className="about-image-wrapper">
          <img src="/images/ignitia.png" alt="Ignitia" className="about-image" />
        </div>
        <div className="about-text">
          <h1>About Ignitia</h1><br />
          <p>
            Ignitia is a grand celebration of innovation, talent, and creativity, hosted by the Madras Institute of Technology.
            This annual fest serves as a platform for young minds to showcase their skills in diverse domains like technology,
            robotics, arts, and culture.
          </p><br />
          <p>
            With a vibrant blend of technical events, non-tech challenges, and fun-filled activities, Ignitia brings together
            students from across the country to learn, compete, and grow. It’s not just an event, but an experience that
            inspires and connects the innovators of tomorrow.
          </p><br />
          <p>
            Beyond competitions, the fest features inspiring keynote speeches, hands-on workshops, networking zones, and cultural nights that
            foster collaboration and creativity in every participant.
          </p><br />
          <p>
            Whether you're a tech enthusiast, an artist, a performer, or a curious explorer, Ignitia welcomes you to be part of a community that celebrates the future—today.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="section">
        <h2 className="title">Endless Possibilities</h2>
        <p className="description">
          This fest isn't just limited to MIT—it serves as a hub for collaboration, competition, and innovation,
          attracting talent from leading engineering colleges, universities, and startups.
        </p>
        <div className="stats-grid">
          <div className="stat-card"><h3 className="stat-number">30<span className="stat-text">+</span></h3><p>Events</p></div>
          <div className="stat-card"><h3 className="stat-number">15<span className="stat-text">+</span></h3><p>Workshops</p></div>
          <div className="stat-card"><h3 className="stat-number">10<span className="stat-text">+</span></h3><p>Technical Clubs</p></div>
          <div className="stat-card"><h3 className="stat-number">50<span className="stat-text">K+</span></h3><p>Cash Prizes</p></div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section" id="events">
        <h1>Events</h1>
        <div style={{ padding: '20px 0' }}>
          <EventCards />
        </div>
      </section>

      {/* Workshops Section */}
      <section className="section" id="workshop">
        <h1>Workshops</h1>
        <div style={{ padding: '20px 0' }}>
          <Workshop />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section" id="sponsors">
        <h2>Our Sponsors</h2><br /> <br/>
        <div className="sponsors-container">
          <div className="sponsor">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          </div>
          <div className="sponsor">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
          </div>
          <div className="sponsor">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2>Contact Us</h2>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
