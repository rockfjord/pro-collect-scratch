import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import cn from "classnames";
import data from '../../data/data-layouts/data-Footer.json'

import config from  '../../config.json';

const links = [{
    label: 'Explorer',
    href: '/explorer',
}, {
    label: 'Market',
    href: '/market',
}, {
    label: 'Collections',
     href: '/explorer?tab=collections',
}, {
    label: 'Assets',
    href: '/explorer?tab=assets',
}]

const companyLinks = [{
    label: 'FAQ',
    href: '/faq',
}, {
    label: 'Terms of Use',
    href: '/tou',
}, {
    label: 'Privacy',
    href: '/privacy',
}]

function Footer(props) {

    const LinksList = () => {
        return links.map((link, idx) => <li className={cn(
            'mb-3',
        )} key={idx}>
            <Link href={link.href}>
                <a>{link.label}</a>
            </Link>
        </li>)
    }

    const CompanyList = () => {
        return companyLinks.map((link, idx) => <li className={cn(
            'mb-3',
        )} key={idx}>
            <Link href={link.href}>
                <a>{link.label}</a>
            </Link>
        </li>)
    }

    return (
            <footer className="main-footer text-center">
                <div className="widgets-section padding-top-small padding-bottom-small">
                 <div className="container">
                     
                    <div className="row clearfix">
                       
                       <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                          <div className="footer-widget about-widget">
                             <h3 className="has-line-center">About Us</h3>
                             <div className="widget-content">
                                <div className="text">$$ PLACEHOLDER$$ </div>
                                   <ul className="social-links">
                                           {data[0].iconsData && data[0].iconsData.map((item , i) => (
                                               <li><a href="config"><span key={i} className={item.icoClass}></span></a></li>		
                                           ))}
                                   </ul>
                                 </div>
                             </div>
                         </div>
                         
                         
                         <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                             <div className="footer-widget contact-widget">
                                 <h3 className="has-line-center">Contact Us</h3>
                                 <div className="widget-content">
                                     <ul className="contact-info">
                                         <li><div className="icon"><span className="flaticon-support"></span></div></li>
                                         {data[1].infoData && data[1].infoData.map((item , i) => (
                                             <li key={i}>{item.text}</li>
                                         ))}
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         
                         
                         <div className="footer-column col-md-4 col-sm-12 col-xs-12">
                             <div className="footer-widget newsletter-widget">
                                 <h3 className="has-line-center">Newsletter</h3>
                                 <div className="widget-content">
                                   <div className="text">$$ PLACEHOLDER $$</div>
                                     <div className="newsletter-form">
                                         <form method="post">
                                             <div className="form-group">
                                                 <input type="email" name="field-name" value="" placeholder="Your Email" required="" />
                                                 <button type="submit" className="send-btn"><span className="fa fa-paper-plane-o"></span></button>
                                             </div>
                                         </form>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                     </div>
                 </div>
                </div>
                <div className="footer-bottom">
                 <div className="auto-container">
                    <div className="copyright-text">Copyright ©. All Rights Reserved</div>
                 </div>
                </div>
            </footer>
          )
        }
    
            

export default Footer;
