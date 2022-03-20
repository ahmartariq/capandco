import React from "react";
import Folder from "./images/folder.svg";
import Care from "./images/care.svg";
import Calender from "./images/calender.svg";
import eCommerce from "./images/ecommerce.svg";
import Research from "./images/research.svg";
import It from "./images/it.svg";
import Contact from "./images/contact.svg";
import { Link } from "react-router-dom";
import Brand1 from "./images/brand1.jpeg";
import Brand2 from "./images/brand2.jpeg";
import Brand3 from "./images/brand3.jpeg";
import Brand4 from "./images/brand4.jpeg";
import Brand5 from "./images/brand5.jpeg";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="main-text">
          <h1>Virtual Assistant</h1>
          <h1> at Your Service</h1>
        </div>
        <div className="button" style={{ marginBottom: "100px" }}>
          <Link to="/services-and-pricing">See Services</Link>
        </div>
      </div>
      <div className="aboutUs-section">
        <h1>Work . Life . Time</h1>
        <h2>
          Dedicated Virtual Assistants who can help you get your work done,
          Enjoy Life More and Find all that lost time
        </h2>
        <p>
          That's where we come in. 24/7 allows you to streamline everything in
          work and in life, allowing you the time to work on the things that
          matter most to you and your business. We give you laser precision to
          focus on the big picture while we take care of the details. Our
          Virtual Assistants can take care of nearly anything, from paying
          bills, booking travel or even take care of some online shopping. As a
          24/7 client, you'll work with a smart, capable, college educated and
          dedicated Virtual Assistant who works remotely from our Offshore
          location or right here in the USA. Just delegate and consider it done.
        </p>
        <div className="button">
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="line"></div>

      <div className="wedo">
        <h1>What Can We Do For You?</h1>
      </div>
      <div className="services">
        <div className="service-card">
          <img src={Folder} alt="" width={"10%"} />
          <h2>Administrative Support</h2>
          <p>
            As a business owner, it’s essential to ensure that your time is
            spent on what matters most ⁠— growing your business. But oftentimes,
            business owners find themselves caught up in the daily grind of
            business operations that they don’t have time to spend on anything
            else. Our Administrative Virtual Assistants (VA) can help take care
            of the day-to-day routine tasks of running a business. They have the
            right combination of time management, organizational and
            communication skills needed to keep your business running smoothly.
            From managing your calendar and keeping track of your appointments
            to handling correspondence and answering emails, an Administrative
            VA can help free your time so you can focus on the core functions of
            growing your business.
          </p>
        </div>
        <div className="service-card">
          <img src={Care} alt="" width={"10%"} />
          <h2>Customer Support</h2>
          <p>
            A home-based virtual assistant (VA) is an excellent resource for
            startups and smaller businesses. But many business owners find that
            as their business expands, their staffing needs also start to shift.
            For growing businesses who are looking for a more robust, fail-safe
            offshore Business Process Outsourcing (BPO) solution, the answer is
            call center outsourcing. Our Call Center Services are perfect for
            growing businesses that need uninterrupted support 24/7. Companies
            that outsource customer service, general admin tasks, lead
            generation, and sales tasks to offshore online call centers.
          </p>
        </div>
        <div className="service-card no-line">
          <img src={Calender} alt="" width={"10%"} />
          <h2>Project Management</h2>
          <p>
            Specialist Virtual Assistants (VA) can help your business grow and
            thrive by assisting with branding, marketing, lead generation and
            other strategies that are essential for business growth. Our
            Specialist Virtual Assistants (Content Writer VA, Graphic Designer
            VA, Website Developer VA, Video Creator VA, SEO Specialist VA,
            Social Media VA, and more) can help you out in a number of functions
            including graphic design, content marketing, SEO management, website
            development, social media management, and so much more.
          </p>
        </div>
        <div className="service-card">
          <img src={eCommerce} alt="" width={"10%"} />
          <h2>eCommerce Virtual Assistant</h2>
          <p>
            Our eCommerce Virtual Assistants (VA) can help operate your business
            on a day-to-day basis. They have the skills and experience needed to
            provide seller support services for popular online marketplaces like
            Amazon, eBay, Walmart, Jet, Etsy, and more. You can hire an Amazon
            Seller VA, eBay Seller VA, and many other types of eCommerce VAs to
            perform a number of tasks such as product sourcing, product listing,
            inventory management, order fulfillment, customer service, feedback
            and product review monitoring, and a whole lot more. Hire an Amazon
            virtual assistant, eBay virtual assistant or general eCommerce
            virtual assistant to help you manage your online business today.
            They can take the essential but repetitive business tasks off your
            shoulders so you can finally have the time to focus on growing and
            scaling your business.
          </p>
        </div>
        <div className="service-card">
          <img src={Research} alt="" width={"10%"} />
          <h2>Data & Research</h2>
          <p>
            While lead generation is vital to any business, building a list of
            leads and reaching out to prospects is time-consuming and takes you
            away from other important business development tasks. Our lead
            generation VAs will take on mundane tasks like cleaning up your
            database and following up with hot leads. By delegating these tasks
            to a qualified lead generation VA, you can focus on selling and
            double (or triple) your revenue in no time.
          </p>
        </div>
        <div className="service-card no-line">
          <img src={It} alt="" width={"10%"} />
          <h2>IT Assistance</h2>
          <p>
            IT Virtual Assistants (VA) can help develop, fix, and maintain your
            website, online store, apps, and any other internal or external
            software you use to ensure that your internal and external customers
            will always have a smooth experience. These virtual assistants are
            carefully vetted to ensure that they are equipped with the right set
            of skills, training, and experience needed for solid and efficient
            software and website development. Our IT Virtual Assistants can help
            you out with the technical tasks involved in setting up and running
            your website. This includes everything from purchasing your domain,
            setting up your server, and building your website from scratch to
            developing custom software and handling website security.
          </p>
        </div>
      </div>
      <div className="button center">
        <Link to="/services-and-pricing">See pricing Plans</Link>

      </div>
      <div className="collab">
        <h1>Trusted by Companies and Entrepreneurs</h1>
        <h1>Throughout the Country</h1>
        <div className="imgrow">
          <img src={Brand1} alt="" width={"50%"}/>
          <img src={Brand2} alt="" width={"50%"}/>
          <img src={Brand3} alt="" width={"50%"}/>
          <img src={Brand4} alt="" width={"50%"}/>
          <img src={Brand5} alt="" width={"50%"}/>
        </div>
      </div>
      <div className="contact-us center">
        <img src={Contact} alt="" width={"25%"} />
        <h1>Let's Take Your Business to the Next Level</h1><br /><br />
        <div className="button">
        <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <footer>
          <p>© 2023 by Cap&Co.</p>
      </footer>
    </div>
  );
}

export default Home;
