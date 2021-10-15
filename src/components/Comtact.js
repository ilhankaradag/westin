import React from 'react'
import ContactItem from './ContactItem'
import SectionTitle from "./SectionTitle"

const Comtact = () => {
    return (
        <section id="contact" className="contact-02 py-6 bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle baslik="contact" aciklama="Get in touch"/>
                    </div>
                </div>
                <div className="row contact-info mt-4">
                    <div className="col-md-4">
                        <ContactItem resim="assets/img/message.svg" baslik="Mail Me" aciklama="info@westin.com"/>
                    </div>
                    <div className="col-md-4">
                    <ContactItem resim="assets/img/phone-call.svg" baslik="Call Us On" aciklama="+123 456 7890"/>
                    </div>
                    <div className="col-md-4">
                    <ContactItem resim="assets/img/location.svg" baslik="Visit office" aciklama="24 Street, New York, United State."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <div className="contact-box">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="First name*" required="">
                                            </div>
                                        </div>
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="family" id="family" type="text" className="form-control" placeholder="Last name*" required="">
                                            </div>
                                        </div>
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your email*" required="">
                                            </div>
                                        </div>
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="phone" id="phone" type="tel" className="form-control" placeholder="Phone number*" required="">
                                            </div>
                                        </div>
                                        <div className="col-12 form-item">
                                            <div className="form-group">
                                                <textarea name="comments" id="comments" rows="4" className="form-control textarea" placeholder="Your message..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 text-left">
                                            <a href="javascript:void(0)" className="pill-button-01" id="submit-btn" onclick="sendEmail()">Send Message</a>
                                            <div id="message" className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
                                                <div className="toast-body d-inline-block"></div>
                                                <button type="button" className="pr-3 close" data-dismiss="toast" aria-label="Close">
                                                    <span aria-hidden="true" className="lni lni-close size-xs "></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comtact
