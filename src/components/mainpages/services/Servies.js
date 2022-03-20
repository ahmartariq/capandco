import React, { useContext, useState, useEffect } from "react";
import Folder from "../home/images/folder.svg";
import Care from "../home/images/care.svg";
import Calender from "../home/images/calender.svg";
import eCommerce from "../home/images/ecommerce.svg";
import Research from "../home/images/research.svg";
import It from "../home/images/it.svg";
import First from "./images/first.svg";
import Second from "./images/second.svg";
import Third from "./images/third.svg";
import { Link } from "react-router-dom";

function Servies() {
  return (
    <div>
      <div className="hero"></div>
      <div className="float">
        <h1>Services & Pricing</h1>
      </div>
      <div className="body">
        <h1>Services I Offer</h1>
        <div className="services">
          <div className="service-card">
            <img src={Folder} alt="" width={"10%"} />
            <h2>Administrative Support</h2>
            <p>
              As a business owner, it’s essential to ensure that your time is
              spent on what matters most ⁠— growing your business. But
              oftentimes, business owners find themselves caught up in the daily
              grind of business operations that they don’t have time to spend on
              anything else. Our Administrative Virtual Assistants (VA) can help
              take care of the day-to-day routine tasks of running a business.
              They have the right combination of time management, organizational
              and communication skills needed to keep your business running
              smoothly. From managing your calendar and keeping track of your
              appointments to handling correspondence and answering emails, an
              Administrative VA can help free your time so you can focus on the
              core functions of growing your business.
            </p>
          </div>
          <div className="service-card">
            <img src={Care} alt="" width={"10%"} />
            <h2>Customer Support</h2>
            <p>
              A home-based virtual assistant (VA) is an excellent resource for
              startups and smaller businesses. But many business owners find
              that as their business expands, their staffing needs also start to
              shift. For growing businesses who are looking for a more robust,
              fail-safe offshore Business Process Outsourcing (BPO) solution,
              the answer is call center outsourcing. Our Call Center Services
              are perfect for growing businesses that need uninterrupted support
              24/7. Companies that outsource customer service, general admin
              tasks, lead generation, and sales tasks to offshore online call
              centers.
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
              Social Media VA, and more) can help you out in a number of
              functions including graphic design, content marketing, SEO
              management, website development, social media management, and so
              much more.
            </p>
          </div>
          <div className="service-card">
            <img src={eCommerce} alt="" width={"10%"} />
            <h2>eCommerce Virtual Assistant</h2>
            <p>
              Our eCommerce Virtual Assistants (VA) can help operate your
              business on a day-to-day basis. They have the skills and
              experience needed to provide seller support services for popular
              online marketplaces like Amazon, eBay, Walmart, Jet, Etsy, and
              more. You can hire an Amazon Seller VA, eBay Seller VA, and many
              other types of eCommerce VAs to perform a number of tasks such as
              product sourcing, product listing, inventory management, order
              fulfillment, customer service, feedback and product review
              monitoring, and a whole lot more. Hire an Amazon virtual
              assistant, eBay virtual assistant or general eCommerce virtual
              assistant to help you manage your online business today. They can
              take the essential but repetitive business tasks off your
              shoulders so you can finally have the time to focus on growing and
              scaling your business.
            </p>
          </div>
          <div className="service-card">
            <img src={Research} alt="" width={"10%"} />
            <h2>Data & Research</h2>
            <p>
              While lead generation is vital to any business, building a list of
              leads and reaching out to prospects is time-consuming and takes
              you away from other important business development tasks. Our lead
              generation VAs will take on mundane tasks like cleaning up your
              database and following up with hot leads. By delegating these
              tasks to a qualified lead generation VA, you can focus on selling
              and double (or triple) your revenue in no time.
            </p>
          </div>
          <div className="service-card no-line">
            <img src={It} alt="" width={"10%"} />
            <h2>IT Assistance</h2>
            <p>
              IT Virtual Assistants (VA) can help develop, fix, and maintain
              your website, online store, apps, and any other internal or
              external software you use to ensure that your internal and
              external customers will always have a smooth experience. These
              virtual assistants are carefully vetted to ensure that they are
              equipped with the right set of skills, training, and experience
              needed for solid and efficient software and website development.
              Our IT Virtual Assistants can help you out with the technical
              tasks involved in setting up and running your website. This
              includes everything from purchasing your domain, setting up your
              server, and building your website from scratch to developing
              custom software and handling website security.
            </p>
          </div>
        </div>
      </div>
      <div className="Objective">
        <div className="content">
          <h1>Real Estate</h1>
          <br />
          <p>
            Our objective is to understand your goals while finding a property.
            If you’re seeking a place to conduct your business operations and
            are not interested in rental revenue, we have options available for
            you. If you desire rental revenues to offset your expenses AND would
            like to use it periodically, we have options for that too. And, if
            you want to purchase a property to attain appreciation and you’re
            not going to use it, we’ll show you those options as well. The
            bottom line, depending on your goals and objectives, CAP&Co will
            tailor properties that fit your needs and desires. We are proud to
            have clients that have worked with us throughout the years. To us,
            true success is seeing our clients getting exactly what they want.
          </p>
        </div>
      </div>
      <div className="planning-section">
        <h1>Pricing Plans</h1>
        <div className="row">
          <div className="plans">
            <img src={First} alt="firstpic" width={"35%"} />
            <h1>Basic Plan</h1>
            <h2>15 Hours a Month</h2>
            <ul>
              <li>Fixed Monthly Price</li>
              <li>Work in Any Time Zone</li>
              <li>Video Chat/Call With Your Virtual Team</li>
              <li>24/7 Support Available</li>
              <li>Free Experienced Supervisor</li>
              <li>Well-supervised Office Environment</li>
              <li>College-educated</li>
              <li>English Speaking</li>
            </ul>
            <p>
              250$ <span>per month</span>
            </p>
          </div>
          <div className="plans">
            <img src={Second} alt="secondpic" width={"35%"} />
            <h1>Advanced Plan</h1>
            <h2>30 Hours a Month</h2>
            <ul>
              <li>Shared Virtual Assistant</li>
              <li>5 Years Experience</li>
              <li>Unlimited Hours</li>
              <li>Fixed Monthly Price</li>
              <li>Work in Any Time Zone</li>
              <li>Video Chat/Call With Your Virtual Team</li>
              <li>24/7 Support Available</li>
              <li>Well-supervised Office Environment</li>
              <li>College-educated</li>
              <li>English Speaking</li>
            </ul>
            <p>
              450$ <span>per month</span>
            </p>
          </div>
          <div className="plans">
            <img src={First} alt="firstpic" width={"35%"} />
            <h1>Custom Plan</h1>
            <h2>Suitable for Your Needs</h2>
            <ul>
              <li>Dedicated Virtual Assistant</li>
              <li>10+ Years Experience</li>
              <li>Unlimited Hours</li>
              <li>Fixed Monthly Price</li>
              <li>Work in Any Time Zone</li>
              <li>Video Chat/Call With Your Virtual Team</li>
              <li>24/7 Support Available</li>
              <li>Well-supervised Office Environment</li>
              <li>Free Experienced Supervisor</li>
              <li>College-educated</li>
              <li>English Speaking</li>
            </ul>
            <p>
              15$ <span>per hour</span>
            </p>
          </div>
        </div>
        <div className="button center" style={{ marginTop: "100px" }}>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <footer>
        <p>© 2023 by Cap&Co.</p>
      </footer>
    </div>
  );
}

export default Servies;
