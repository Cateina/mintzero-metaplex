// import logo from './logo.svg';
// //  import './App.css';
import { useHistory } from 'react-router-dom'

export const MintZeroView = ()=>{
  const history = useHistory();
  {/* <a style={{ cursor: "pointer" }} className="btn-7dMxAg" onClick={() => history.push("/home")}> */} // change the button's anchro tag with this when replacing the HTML 
  const iframe = '<div class="about-the-project-xI43ai valign-text-middle lato-normal-white-18px"><iframe id="myIframe" src="https://docs.google.com/forms/d/e/1FAIpQLSffD60zAsxeTuP5Qbn2wENPccivIECyb3ODM90K6Hv5GxS8MA/viewform?embedded=true" width="640" height="780" frameborder="0" marginheight="0" marginwidth="0"  style="display:none"></iframe><a href="#" target="_blank" id="button" href="https://docs.google.com/forms/d/e/1FAIpQLSffD60zAsxeTuP5Qbn2wENPccivIECyb3ODM90K6Hv5GxS8MA/viewform?embedded=true">About the Project</a></div>'; 
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=1920, maximum-scale=1.0" />
  <link
    rel="shortcut icon"
    type="image/png"
    href="https://animaproject.s3.amazonaws.com/home/favicon.png"
  />
  <meta name="og:type" content="website" />
  <meta name="twitter:card" content="photo" />
  <link rel="stylesheet" type="text/css" href="css/mintzero.css" />
  <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
  <link rel="stylesheet" type="text/css" href="css/globe.css" />
  <input type="hidden" id="anPageName" name="page" defaultValue="mintzero" />
  <div className="container-center-horizontal">
    <div className="mintzero screen">
      <img className="bg-nx9POK" src="img/bg@1x.png" />
      <img className="bg-Z7dddx" src="img/bg@1x.png" />
      <div className="footer-nx9POK">
        <div className="rectangle-492-sn9ws7" />
        <div className="rectangle-493-sn9ws7" />
        <div className="email-sn9ws7">
          <div className="x31101-nafi-dr-immokalee-florida-34142-l6fFdj valign-text-middle lato-normal-white-18px">
            31101 Nafi Dr.
            <br />
            Immokalee, Florida 34142
          </div>
          <img className="vector-l6fFdj" src="img/vector@2x.svg" />
        </div>
        <div className="my-wallet-sn9ws7 valign-text-middle lato-normal-white-18px">
          My wallet
        </div>
        <div className="shopping-cart-sn9ws7 valign-text-middle lato-normal-white-18px">
          Shopping Cart
        </div>
        <div className="fa-qs-sn9ws7 valign-text-middle lato-normal-white-18px">
          FAQs
        </div>
        <div className="insta-sn9ws7">
          <div className="ellipse-28-n8kUlN border-1px-white" />
          <img className="vector-n8kUlN" src="img/vector-1@2x.svg" />
          <img className="vector-Ynjry0" src="img/vector-2@2x.svg" />
          <img className="vector-2tufSY" src="img/vector-3@2x.svg" />
        </div>
        <div className="facebook-sn9ws7">
          <img className="facebook-yydyl9" src="img/facebook@2x.svg" />
          <div className="ellipse-30-yydyl9 border-1px-white" />
        </div>
        <div className="phone-sn9ws7">
          <div className="x863225-1810-JxpQww valign-text-middle lato-normal-white-18px">
            (863)225-1810
          </div>
          <img className="vector-JxpQww" src="img/vector-4@2x.svg" />
        </div>
        <img className="logo-sn9ws7" src="img/logo@2x.svg" />
        <div className="about-us-sn9ws7 valign-text-middle lato-normal-white-18px">
          About us
        </div>
        <div className="about-sn9ws7 valign-text-middle">About</div>
        <div className="customer-care-sn9ws7 valign-text-middle">
          Customer Care
        </div>
        <div className="contact-us-sn9ws7 valign-text-middle lato-normal-white-18px">
          Contact us
        </div>
        <div className="privacy-policy-sn9ws7 valign-text-middle lato-normal-white-18px">
          Privacy policy
        </div>
        <div className="terms-conditions-sn9ws7 valign-text-middle lato-normal-white-18px">
          Terms &amp; Conditions
        </div>
        <div className="all-rights-reserved-mint-zero-sn9ws7 valign-text-middle">
          All rights reserved&nbsp;&nbsp;@ MintZero
        </div>
      </div>
      <div className="fa-qs-nx9POK">
        <div className="fa-qs-YZnAbW valign-text-middle lato-semi-bold-white-40px">
          FAQs
        </div>
        <div className="x1-YZnAbW">
          <div className="x1-aCJl6W">
            <div className="rectangle-478-9JusLx border-1px-screamin-green" />
            <div className="carbon-credits-are-m-9JusLx lato-light-white-18px">
              Carbon credits are measurable, verifiable emission reductions from
              certified climate action projects. These projects reduce, remove
              or avoid greenhouse gas (GHG) emissions. But they also can
              generate other positive benefits, such as improving community
              livelihoods, protecting ecosystems, restoring forests or reducing
              pollution from fossil fuels. One carbon credit is equal to one
              tonne of carbon dioxide equivalent Greenhouse Gases (GHGs). <br />
              Organizations or individuals that have a carbon emissions
              footprint from their personal or business activities can buy and
              retire carbon credits, to “offset” their footprint. Offsetting is
              generally used in instances where it is not yet possible to fully
              reduce one’s carbon emissions to zero (e.g. to achieve net zero
              emissions).
            </div>
            <div className="what-are-carbon-credits-9JusLx lato-semi-bold-screamin-green-24px">
              What are carbon credits?
            </div>
          </div>
          <img className="vector-aCJl6W" src="img/vector-5@2x.svg" />
        </div>
        <div className="x2-YZnAbW">
          <div className="rectangle-479-BxXHxc border-1px-white" />
          <div className="are-these-carbon-creditsoffsets-verified-BxXHxc lato-semi-bold-white-24px">
            Are these carbon credits/offsets verified?
          </div>
          <img className="vector-BxXHxc" src="img/vector-6@2x.svg" />
        </div>
        <div className="x3-YZnAbW">
          <div className="rectangle-481-fRMeq3 border-1px-white" />
          <div className="what-is-my-carbon-footprint-fRMeq3 lato-semi-bold-white-24px">
            What is my carbon footprint?
          </div>
          <img className="vector-fRMeq3" src="img/vector-6@2x.svg" />
        </div>
        <div className="x4-YZnAbW">
          <div className="rectangle-480-fKEbbR border-1px-white" />
          <div className="how-do-i-know-where-fKEbbR lato-semi-bold-white-24px">
            How do I know where my carbon offsets came from?
          </div>
          <img className="vector-fKEbbR" src="img/vector-6@2x.svg" />
        </div>
        <div className="x5-YZnAbW">
          <div className="rectangle-482-PPxjA5 border-1px-white" />
          <div className="whats-an-nft-PPxjA5 lato-semi-bold-white-24px">
            What’s an NFT?
          </div>
          <img className="vector-PPxjA5" src="img/vector-6@2x.svg" />
        </div>
        <div className="x6-YZnAbW">
          <div className="rectangle-492-yAOfip border-1px-white" />
          <div className="is-there-a-presale-yAOfip lato-semi-bold-white-24px">
            Is there a presale?
          </div>
          <img className="vector-yAOfip" src="img/vector-6@2x.svg" />
        </div>
        <div className="x7-YZnAbW">
          <div className="rectangle-483-AZkH3U border-1px-white" />
          <div className="who-is-behind-this-project-AZkH3U lato-semi-bold-white-24px">
            Who is behind this project?
          </div>
          <img className="vector-AZkH3U" src="img/vector-6@2x.svg" />
        </div>
        <div className="x8-YZnAbW">
          <div className="rectangle-484-s7bCUE border-1px-white" />
          <div className="what-is-the-impact-o-s7bCUE lato-semi-bold-white-24px">
            What is the impact of MintZero on the world?
          </div>
          <img className="vector-s7bCUE" src="img/vector-6@2x.svg" />
        </div>
        <div className="x9-YZnAbW">
          <div className="rectangle-485-x7qz5r border-1px-white" />
          <div className="what-is-the-impact-o-x7qz5r lato-semi-bold-white-24px">
            What is the impact of MintZero on my business?
          </div>
          <img className="vector-x7qz5r" src="img/vector-6@2x.svg" />
        </div>
        <div className="x10-YZnAbW">
          <div className="rectangle-486-pMrnTI border-1px-white" />
          <div className="x30-years-isnt-that-a-long-time-pMrnTI lato-semi-bold-white-24px">
            30 years? Isn’t that a long time?
          </div>
          <img className="vector-pMrnTI" src="img/vector-6@2x.svg" />
        </div>
        <div className="x11-YZnAbW">
          <div className="rectangle-487-1oACMz border-1px-white" />
          <div className="what-if-i-dont-want-1oACMz lato-semi-bold-white-24px">
            What if I don’t want my MintZero membership at a later date?
          </div>
          <img className="vector-1oACMz" src="img/vector-6@2x.svg" />
        </div>
        <div className="x12-YZnAbW">
          <div className="rectangle-488-wRZZ7A border-1px-white" />
          <div className="which-blockchain-pro-wRZZ7A lato-semi-bold-white-24px">
            Which blockchain protocol does MintZero use?
          </div>
          <img className="vector-wRZZ7A" src="img/vector-6@2x.svg" />
        </div>
        <div className="x13-YZnAbW">
          <div className="rectangle-489-tIkcgg border-1px-white" />
          <div className="arent-blockchainsnf-tIkcgg lato-semi-bold-white-24px">
            Aren’t blockchains/NFTs/crypto really bad for the planet?
          </div>
          <img className="vector-tIkcgg" src="img/vector-6@2x.svg" />
        </div>
        <div className="x14-YZnAbW">
          <div className="rectangle-490-sxZYvU border-1px-white" />
          <div className="do-you-have-a-roadmap-sxZYvU lato-semi-bold-white-24px">
            Do you have a roadmap?
          </div>
          <img className="vector-sxZYvU" src="img/vector-6@2x.svg" />
        </div>
        <div className="x15-YZnAbW">
          <div className="rectangle-491-iWDxV2 border-1px-white" />
          <div className="what-if-i-know-a-goo-iWDxV2 lato-semi-bold-white-24px">
            What if I know a good carbon credit project for MintZero?
          </div>
          <img className="vector-iWDxV2" src="img/vector-6@2x.svg" />
        </div>
      </div>
      <div className="logos-nx9POK">
        <div className="rectangle-495-T2D0C4" />
        <div className="companies-using-mint-T2D0C4 valign-text-middle">
          <span>
            <span className="span0-xQZShE lato-semi-bold-cyprus-40px">
              Companies using
            </span>
            <span className="span1-xQZShE"> MintZero </span>
            <span className="span2-xQZShE lato-semi-bold-cyprus-40px">
              for easy and high-impact offsetting
            </span>
          </span>
        </div>
        <div className="group-5225-T2D0C4">
          <img className="logo-rbc-nuUPgE" src="img/logo-rbc@2x.png" />
          <img className="logo-cibc-nuUPgE" src="img/logo-cibc@2x.png" />
          <img className="logo-ibm-nuUPgE" src="img/logo-ibm@2x.png" />
          <img className="logo-ibm-VLhyUv" src="img/logo-ibm@2x.png" />
          <img className="logo-rogers-nuUPgE" src="img/logo-rogers@2x.png" />
          <img className="logo-toronto-nuUPgE" src="img/logo-toronto@2x.png" />
          <img className="logo-toronto-VLhyUv" src="img/logo-toronto@2x.png" />
        </div>
      </div>
      <img className="bg-rpSGmK" src="img/bg@1x.svg" />
      <div className="form-nx9POK">
        <div className="rectangle-496-uxQY1k border-1px-screamin-green" />
        <div className="rectangle-497-uxQY1k border-1px-screamin-green" />
        <div className="text-uxQY1k">
          <div className="rectangle-500-bhMcop" />
          <div className="rectangle-501-bhMcop" />
          <div className="rectangle-502-bhMcop" />
          <div className="want-to-be-the-first-bhMcop valign-text-middle lato-semi-bold-cyprus-40px">
            Want to be the first to learn about upcoming MintZero NFT drops?
          </div>
          <div className="give-us-your-details-bhMcop valign-text-middle">
            Give us your details to get early heads up!
          </div>
          <div className="your-name-bhMcop valign-text-middle lato-light-cyprus-18px">
            Your name
          </div>
          <div className="company-name-bhMcop valign-text-middle lato-light-cyprus-18px">
            Company Name
          </div>
          <div className="email-bhMcop valign-text-middle lato-light-cyprus-18px">
            Email
          </div>
          <div className="btn-bhMcop">
            <div className="rectangle-411-K6zTBN" />
            <div className="submit-K6zTBN valign-text-middle">Submit</div>
          </div>
        </div>
      </div>
      <div className="about-nx9POK">
        <div className="mint-zero-is-the-eas-rxLmre valign-text-middle">
          <span>
            <span className="span0-xYG1GN">MintZero </span>
            <span className="span1-xYG1GN lato-semi-bold-white-40px">
              is the easiest way for small and high-growth businesses to
              neutralize their carbon footprint
            </span>
          </span>
        </div>
        <div className="x1-rxLmre">
          <div className="simply-purchase-your-HxmmQQ valign-text-middle lato-light-white-18px">
            Simply purchase your MintZero access today and receive automated
            carbon credits each quarter for the next 30 years. Your carbon
            credit purchases and offsets are recorded on the blockchain, and
            publicly verifiable by your stakeholders
          </div>
          <div className="quick-easy-offset-yo-HxmmQQ">
            <span className="span0-YQDnKB">Quick &amp; easy:</span>
            <span className="span1-YQDnKB">
              {" "}
              Offset your footprint for decades with one click
            </span>
          </div>
          <div className="ellipse-32-HxmmQQ border-1px-white" />
          <div className="ellipse-31-HxmmQQ border-1px-white" />
          <img className="vector-HxmmQQ" src="img/vector-20@2x.svg" />
        </div>
        <div className="x3-rxLmre">
          <div className="our-experts-have-yea-v0vZFK valign-text-middle lato-light-white-18px">
            Our experts have years of experience in sustainable development and
            emerging markets, and we work only with projects with third-party
            verification, such as Gold Standard or Verra, with a focus on those
            with additional livelihoods or other community benefits.
          </div>
          <div className="high-impact-diverse-v0vZFK lato-semi-bold-white-24px-2">
            <span className="span0-cxxslr lato-semi-bold-screamin-green-24px">
              High impact:{" "}
            </span>
            <span className="span1-cxxslr lato-semi-bold-white-24px">
              {" "}
              Diverse carbon projects with co-benefits
            </span>
          </div>
          <div className="ellipse-32-v0vZFK border-1px-white" />
          <div className="ellipse-31-v0vZFK border-1px-white" />
          <img className="vector-v0vZFK" src="img/vector-21@2x.svg" />
        </div>
        <div className="x2-rxLmre">
          <div className="carbon-credit-prices-2pybuu valign-text-middle lato-light-white-18px">
            Carbon credit prices are projected to increase by 100% or more, but
            your MintZero purchase means you have no price risk for 30
            years.&nbsp;&nbsp;You own your carbon credits: any credits you
            receive and don’t use are yours to sell or share
          </div>
          <div className="low-cost-protection-2pybuu lato-semi-bold-white-24px-2">
            <span className="span0-CLDyF2 lato-semi-bold-screamin-green-24px">
              Low cost:
            </span>
            <span className="span1-CLDyF2 lato-semi-bold-white-24px">
              {" "}
              Protection against potential price increases
            </span>
          </div>
          <div className="ellipse-32-2pybuu border-1px-white" />
          <div className="ellipse-31-2pybuu border-1px-white" />
          <img className="vector-2pybuu" src="img/vector-22@2x.svg" />
        </div>
        <div className="x4-rxLmre">
          <div className="nft-members-gain-acc-AWL6AQ valign-text-middle lato-light-white-18px">
            NFT members gain access to the MintZero trademark, content, and
            social media assets to share your carbon offsets story with
            investors, customers, or employees. Your company name and logo can
            be displayed on the MintZero platform and blockchain.
          </div>
          <div className="shareable-use-our-so-AWL6AQ lato-semi-bold-white-24px-2">
            <span className="span0-Whxi0Q lato-semi-bold-screamin-green-24px">
              Shareable:
            </span>
            <span className="span1-Whxi0Q lato-semi-bold-white-24px">
              Use our social-ready assets to tell your story
            </span>
          </div>
          <div className="ellipse-32-AWL6AQ border-1px-white" />
          <div className="ellipse-31-AWL6AQ border-1px-white" />
          <img className="vector-AWL6AQ" src="img/vector-23@2x.svg" />
        </div>
        <img className="phone-rxLmre" src="img/phone@1x.svg" />
      </div>
      <div className="nft-nx9POK">
        <div className="enjoy-decades-of-car-sEuoDT valign-text-middle lato-semi-bold-white-40px">
          Enjoy decades of carbon neutrality with one-click via your MintZero
          NFT
        </div>
        <div className="mint-zero-makes-it-e-sEuoDT valign-text-middle lato-light-white-24px">
          MintZero makes it easy for businesses to become carbon neutral.
          Instead of short-term solutions to offset your emissions from
          electricity usage, travel, or other activities, choose your preferred
          NFT based on your business’ current carbon footprint and enjoy decades
          of carbon neutrality, instantly.
        </div>
        <div className="terms-and-conditions-sEuoDT valign-text-middle lato-light-white-18px">
          Terms and conditions
        </div>
        <div className="x1-sEuoDT">
          <div className="rectangle-474-wYR2cA border-1px-white" />
          <img
            className="rectangle-469-wYR2cA"
            src="img/rectangle-469@2x.svg"
          />
          <div className="mint-zero-nft-tier1-tdb-membership-wYR2cA lato-semi-bold-cyprus-20px">
            MintZero NFT TIER1 TDB membership
          </div>
          <div className="for-individuals-wYR2cA lato-semi-bold-screamin-green-16px">
            FOR INDIVIDUALS
          </div>
          <div className="membership-price-15-wYR2cA valign-text-middle lato-semi-bold-cyprus-20px">
            Membership
            Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15
          </div>
          <div className="x92-92-wYR2cA valign-text-middle lato-normal-cyprus-18px">
            92 / 92
          </div>
          <img className="line-20-wYR2cA" src="img/line-20@2x.svg" />
          <div className="access-to-10-carbon-wYR2cA lato-normal-cyprus-14px">
            Access to 10 carbon offsets per year for 30 years from verified,
            high-quality carbon projects, similar to the average carbon
            footprint of individuals or families [in Europe or North America].
          </div>
        </div>
        <div className="x2-sEuoDT">
          <div className="rectangle-474-94ubBR border-1px-white" />
          <img
            className="rectangle-469-94ubBR"
            src="img/rectangle-469@2x.png"
          />
          <div className="mint-zero-nft-tier2-tbd-membership-94ubBR valign-text-middle lato-semi-bold-cyprus-20px">
            MintZero NFT TIER2 TBD membership
          </div>
          <div className="time-left-1725-94ubBR valign-text-middle">
            time left 17:25
          </div>
          <img className="vector-94ubBR" src="img/vector-24@2x.svg" />
          <div className="tbdtdb-94ubBR valign-text-middle lato-normal-cyprus-18px">
            TBD/TDB
          </div>
          <img className="line-20-94ubBR" src="img/line-20@2x.svg" />
          <div className="access-to-30-carbon-94ubBR lato-normal-cyprus-14px">
            Access to 30 carbon offsets per year for 30 years from verified,
            high-quality carbon projects, similar to the average carbon
            footprint of small businesses in the tech/services sectors
          </div>
          <div className="membership-price-50-94ubBR valign-text-middle lato-semi-bold-cyprus-20px">
            Membership
            Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50
          </div>
          <div className="for-small-businesses-94ubBR lato-semi-bold-screamin-green-16px">
            FOR SMALL BUSINESSES
          </div>
        </div>
        <div className="x3-sEuoDT">
          <div className="rectangle-474-uRxzx7 border-1px-white" />
          <img
            className="rectangle-469-uRxzx7"
            src="img/rectangle-469-1@2x.svg"
          />
          <div className="mint-zero-nft-tier3-tbd-membership-uRxzx7 valign-text-middle lato-semi-bold-cyprus-20px">
            MintZero NFT TIER3 TBD membership
          </div>
          <div className="time-left-1725-uRxzx7 valign-text-middle">
            time left 17:25
          </div>
          <img className="vector-uRxzx7" src="img/vector-24@2x.svg" />
          <div className="tbdtdb-uRxzx7 valign-text-middle lato-normal-cyprus-18px">
            TBD/TDB
          </div>
          <img className="line-20-uRxzx7" src="img/line-20@2x.svg" />
          <div className="access-to-200-carbon-uRxzx7 lato-normal-cyprus-14px">
            Access to 200 carbon offsets per year for 30 years from verified,
            high-quality carbon projects, suited to the carbon footprint of
            larger organisations or tech/services venture portfolios.
          </div>
          <div className="membership-price-50-uRxzx7 valign-text-middle lato-semi-bold-cyprus-20px">
            Membership
            Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50
          </div>
          <div className="for-larger-organisations-v-cs-uRxzx7 lato-semi-bold-screamin-green-16px">
            FOR LARGER ORGANISATIONS, VCS
          </div>
        </div>
        <div className="x4-sEuoDT">
          <div className="rectangle-474-P5LyzL border-1px-white" />
          <img
            className="rectangle-469-P5LyzL"
            src="img/rectangle-469-2@2x.svg"
          />
          <div className="mint-zero-nft-tier4-tbd-membership-P5LyzL valign-text-middle lato-semi-bold-cyprus-20px">
            MintZero NFT TIER4 TBD membership
          </div>
          <div className="tbdtdb-P5LyzL valign-text-middle lato-normal-cyprus-18px">
            TBD/TDB
          </div>
          <img className="line-20-P5LyzL" src="img/line-20@2x.svg" />
          <div className="access-to-200-carbon-P5LyzL lato-normal-cyprus-14px">
            Access to 200 carbon offsets per year for 30 years from verified,
            high-quality carbon projects, suited to the carbon footprint of
            larger organisations or tech/services venture portfolios.
          </div>
          <div className="membership-price-50-P5LyzL valign-text-middle lato-semi-bold-cyprus-20px">
            Membership
            Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50
          </div>
          <div className="for-larger-organisations-v-cs-P5LyzL lato-semi-bold-screamin-green-16px">
            FOR LARGER ORGANISATIONS, VCS
          </div>
        </div>
      </div>
      <div className="table-nx9POK">
        <div className="which-mint-zero-token-is-right-for-me-lDKXVy valign-text-middle lato-semi-bold-white-40px">
          Which MintZero token is right for me?
        </div>
        <div className="annual-carbon-offset-x-30-yrs-lDKXVy valign-text-middle lato-semi-bold-white-24px">
          Annual carbon offset x 30 yrs
        </div>
        <div className="for-businesses-with-ie-lDKXVy valign-text-middle lato-semi-bold-white-24px">
          For&nbsp;&nbsp;businesses <br />
          with i.e.
        </div>
        <div className="nft-price-lDKXVy valign-text-middle lato-semi-bold-white-24px">
          NFT price
        </div>
        <div className="no-of-nf-ts-available-lDKXVy valign-text-middle lato-semi-bold-white-24px">
          No. of <br />
          NFTs available
        </div>
        <div className="no-of-nf-ts-available-U06CwF valign-text-middle lato-semi-bold-white-24px">
          No. of <br />
          NFTs available
        </div>
        <div className="coming-soon-lDKXVy lato-light-white-24px">
          *coming soon
        </div>
        <div className="x1-lDKXVy">
          <div className="mint-zero-platinum-XiUvnG valign-text-middle lato-semi-bold-screamin-green-24px">
            MintZero Platinum
          </div>
          <div className="group-289134-XiUvnG">
            <div className="rectangle-468-KzTNpa border-1px-malachite" />
            <img className="vector-KzTNpa" src="img/vector-26@2x.svg" />
            <img className="vector-RLvK7d" src="img/vector-26@2x.svg" />
            <img className="vector-otrj7m" src="img/vector-26@2x.svg" />
            <img className="vector-IMXWns" src="img/vector-26@2x.svg" />
            <img className="vector-947Em0" src="img/vector-26@2x.svg" />
            <img className="vector-1UBQ9t" src="img/vector-26@2x.svg" />
            <div className="x300-tonsyr-KzTNpa valign-text-middle lato-light-white-24px">
              300 tons/yr.
            </div>
            <div className="x100-employees-KzTNpa valign-text-middle lato-light-white-24px">
              100+ employees
            </div>
            <div className="x90000-KzTNpa valign-text-middle lato-light-white-24px">
              $90,000
            </div>
            <div className="x1-KzTNpa valign-text-middle lato-light-white-24px">
              1
            </div>
            <img className="line-10-KzTNpa" src="img/line-10@2x.svg" />
            <img className="line-14-KzTNpa" src="img/line-10@2x.svg" />
            <img className="line-16-KzTNpa" src="img/line-10@2x.svg" />
            <img className="line-13-KzTNpa" src="img/line-10@2x.svg" />
            <img className="line-15-KzTNpa" src="img/line-10@2x.svg" />
            <img className="vector-Q2MXxu" src="img/vector-26@2x.svg" />
          </div>
        </div>
        <div className="x2-lDKXVy">
          <div className="mint-zero-gold-WyVOJv valign-text-middle lato-semi-bold-screamin-green-24px">
            MintZero Gold
          </div>
          <div className="group-289135-WyVOJv">
            <div className="rectangle-468-aSE9RD border-1px-malachite" />
            <div className="x100-tonsyr-aSE9RD valign-text-middle lato-light-white-24px">
              100 tons/yr.
            </div>
            <div className="x50-employees-aSE9RD valign-text-middle lato-light-white-24px">
              50+ employees
            </div>
            <div className="x32000-aSE9RD valign-text-middle lato-light-white-24px">
              $32,000
            </div>
            <div className="x2-aSE9RD valign-text-middle lato-light-white-24px">
              2
            </div>
            <img className="line-10-aSE9RD" src="img/line-10-1@2x.svg" />
            <img className="line-14-aSE9RD" src="img/line-10-1@2x.svg" />
            <img className="line-16-aSE9RD" src="img/line-10-1@2x.svg" />
            <img className="line-13-aSE9RD" src="img/line-10-1@2x.svg" />
            <img className="line-15-aSE9RD" src="img/line-10-1@2x.svg" />
            <img className="vector-aSE9RD" src="img/vector-33@2x.svg" />
          </div>
        </div>
        <div className="x3-lDKXVy">
          <div className="mint-zero-silver-gD3sJD valign-text-middle lato-semi-bold-screamin-green-24px">
            MintZero Silver
          </div>
          <div className="group-289136-gD3sJD">
            <div className="rectangle-468-cKcQZU border-1px-malachite" />
            <div className="x30-tonsyr-cKcQZU valign-text-middle lato-light-white-24px">
              30 tons/yr.
            </div>
            <div className="x10-employees-cKcQZU valign-text-middle lato-light-white-24px">
              10+ <br />
              employees
            </div>
            <div className="x8000-cKcQZU valign-text-middle lato-light-white-24px">
              $8,000
            </div>
            <div className="x7-cKcQZU valign-text-middle lato-light-white-24px">
              7
            </div>
            <img className="line-10-cKcQZU" src="img/line-10-2@2x.svg" />
            <img className="line-14-cKcQZU" src="img/line-10-2@2x.svg" />
            <img className="line-16-cKcQZU" src="img/line-10-2@2x.svg" />
            <img className="line-13-cKcQZU" src="img/line-10-2@2x.svg" />
            <img className="line-15-cKcQZU" src="img/line-10-2@2x.svg" />
            <img className="vector-cKcQZU" src="img/vector-34@2x.svg" />
          </div>
        </div>
        <div className="x4-lDKXVy">
          <div className="mint-zero-bronze-MwD26j valign-text-middle lato-semi-bold-screamin-green-24px">
            MintZero Bronze
          </div>
          <div className="group-289136-MwD26j">
            <div className="rectangle-468-hr2D3G border-1px-malachite" />
            <div className="x10-tonsyr-hr2D3G valign-text-middle lato-light-white-24px">
              10 tons/yr.
            </div>
            <div className="start-ups-hr2D3G valign-text-middle lato-light-white-24px">
              Start-ups
            </div>
            <div className="x3500-hr2D3G valign-text-middle lato-light-white-24px">
              $3,500
            </div>
            <div className="x90-hr2D3G valign-text-middle lato-light-white-24px">
              90
            </div>
            <img className="line-10-hr2D3G" src="img/line-10-3@2x.svg" />
            <img className="line-14-hr2D3G" src="img/line-10-3@2x.svg" />
            <img className="line-16-hr2D3G" src="img/line-10-3@2x.svg" />
            <img className="line-13-hr2D3G" src="img/line-10-3@2x.svg" />
            <img className="line-15-hr2D3G" src="img/line-10-3@2x.svg" />
            <img className="vector-hr2D3G" src="img/vector-35@2x.svg" />
          </div>
        </div>
      </div>
      <div className="intro-nx9POK">
        <img className="dec-1-YqkfU9" src="img/dec-1@1x.svg" />
        <div className="dec-2-YqkfU9">
          <img className="ellipse-3-m9hZIV" src="img/ellipse-3@1x.svg" />
          <img className="vector-m9hZIV" src="img/vector-36@2x.svg" />
          <img className="vector-Bt3Par" src="img/vector-37@2x.svg" />
          <img className="vector-vyGasj" src="img/vector@2x.svg" />
          <img className="vector-IGV8be" src="img/vector-39@2x.svg" />
        </div>
        <div className="text-YqkfU9">
          <div className="mint-a-carbon-neutra-7dMxAg valign-text-middle">
            MINT A CARBON NEUTRAL FOOTPRINT. ONCE AND FOR ALL.
          </div>
          <div
            className="mint-zero-makes-smal-7dMxAg valign-text-middle"
            style={{ marginLeft: 200 }}
          >
            <span>
              <span className="span0-GIeO8c">
                MintZero
                <br />
              </span>
              <span className="span1-GIeO8c lato-light-white-24px">
                makes small businesses instantly carbon neutral for the
                long-term with its unique NFT
              </span>
            </span>
          </div>
          <div className="the-fastest-low-cost-7dMxAg valign-text-middle">
            The fastest, low-cost, and high-impact way to acheive carbon
            neutrality
          </div>
          {/* <a style={{ cursor: "pointer" }} className="btn-7dMxAg" onClick={() => history.push("/home")}> */}
          <a style={{ cursor: "pointer" }} className="btn-7dMxAg" >
            <div className="btn-7dMxAg">
              <div className="rectangle-411-Xx2Hll" />
              <div className="go-carbon-neutral-now-Xx2Hll valign-text-middle">
                Go Carbon Neutral Now
              </div>
            </div>
          </a>
          <img className="mouse-7dMxAg" src="img/mouse@2x.svg" />
        </div>
      </div>
      <div className="header-nx9POK">
        <img
          className="logo-Xow06a"
          src="./img/logo-1@2x.svg"
          style={{ marginLeft: 200 }}
        />
        <div className="menu-Xow06a">
          <div className="buy-nft-join-xI43ai valign-text-middle lato-normal-white-18px">
            Buy NFT
          </div>
          <div className="about-the-project-xI43ai valign-text-middle lato-normal-white-18px">
            About the Project
          </div>
          <div className="fa-qs-xI43ai valign-text-middle lato-normal-white-18px">
            FAQs
          </div>
          <div className="discord-xI43ai valign-text-middle lato-normal-white-18px">
            Discord
          </div>
        </div>
        <div className="cart-Xow06a">
          <div className="email-NFP1gG" style={{ marginLeft: "-150px" }}>
            <div className="connect-wallet-KF9mw5 valign-text-middle">
              Connect Wallet
            </div>
            <img className="vector-KF9mw5" src="img/vector-40@2x.svg" />
          </div>
        </div>
      </div>
      <div className="media-assets-nx9POK valign-text-middle lato-semi-bold-white-24px">
        Media assets
      </div>
      <div className="logo-display-nx9POK valign-text-middle lato-semi-bold-white-24px">
        Logo display
      </div>
    </div>
  </div>
</>

  );
}

