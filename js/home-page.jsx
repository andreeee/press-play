import React from "react";
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";
import DropZoneComponent from 'react-dropzone-component'
import Upload from './Upload'
import Browse from './Browse'

const brandName = "Press:Play";
const brand = <span>{brandName}</span>;

const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    2049 O'Farrell St.<br/>
    San Francisco CA 94115<br/>
  +1 (415) 235-4362
  </address>
);

export default (props) => {
  return (
    <Page>

      <Navbar brand={brand}>
        <NavItem><Link to="Home" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="Home" className="nav-link">Splash</Link></NavItem>
        <NavItem dropdown={true}>
          <DropdownToggle>Older versions</DropdownToggle>
          <DropdownMenu>
            <a href="http://oscon.saintjoe-cs.org:8000/" className="dropdown-item" target="_blank">
              Test
            </a>
            <a href="http://oscon-sb.saintjoe-cs.org:5000" className="dropdown-item" target="_blank">
              Another Test
            </a>
            <a href="#" className="dropdown-item" target="_blank">
              Test
            </a>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
              <a className="nav-link" data-toggle="modal" data-target="#signup-modal">Sign-up!</a>
        </NavItem>
      </Navbar>

      <Hero backgroundImage="img/background.png"
        className="text-xs-center">
        <h1 className="display-4">Press:Play </h1>
        <p className="lead">Find San Francisco Bay <br />
          Photographers & Videographers Today!
        </p>

        <p>
          <a href="https://github.com/andreeee" target="_blank" className="btn btn-white">
            Get it on Github
          </a>
        </p>
      </Hero>


      <Section>
        <Upload
          className="display-4"/>
      </Section>

      <Section>
        <Browse
          className = "display-4"/>
      </Section>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">Batteries Included</p>
            <p>Neal is based on <a href="http://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a> and ships with navbar, hero, footer, sections, horizontal split, pricing tables, customer quotes and other components you need for a landing page. No more repetitive coding! Oh, and it's easy to extend.</p>
          </div>
          <div>
            <p className="lead">Third-Party Integrations</p>
            <p>External integrations like &nbsp;
              <a href="http://www.google.com/analytics/">Google Analytics</a>,&nbsp;
              <a href="https://segment.com/">Segment</a>,&nbsp;
              <a href="https://stripe.com/">Stripe</a> and&nbsp;
              <a href="http://typeform.com">Typeform</a> are included.
              No more copying & pasting integration code, all you need is your API keys. We automatically track events when visitors navigate to different parts of your page.</p>
          </div>
          <div>
            <p className="lead">Serverless Deployment</p>
            <p>Because you are relying on react.js and third-party integration you don't need a server to host your landing page. Simply upload it to an Amazon S3 bucket, enable website hosting, and it's ready to go!</p>
          </div>
        </HorizontalSplit>
      </Section>

      <Section heading="Sign up as a member today!" className="gray">
        <p>We'll capture users here, the onSignup function will interact with our DB, e.g. mongoDB</p>
        <SignupInline onSubmit={onSignup}/>
      </Section>

      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com/press-play"
        githubUrl="https://github.com/andreee"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
