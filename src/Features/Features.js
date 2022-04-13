import { AccountBalance, Autorenew, CastForEducation, Gif, LocationCity, Send, Timer, Twitter, Web } from '@material-ui/icons';
import './Features.css';
import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation , Mousewheel } from "swiper/core";
SwiperCore.use([Navigation , Mousewheel]);

const Features = () => {
	return (
            <div className="features">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-8 col-md-12">
                                    <div className="featured-items">
                                          <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                      <div className="featured-content">
                                                            <span className="featured-icon"><LocationCity /></span>
                                                            <div className="featured-content-data">
                                                                  <h2>Construction & Build</h2>
                                                                  <span>7 open positions</span>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                      <div className="featured-content">
                                                            <span className="featured-icon"><CastForEducation /></span>
                                                            <div className="featured-content-data">
                                                                  <h2>Education & Training</h2>
                                                                  <span>32 open positions</span>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                      <div className="featured-content">
                                                            <span className="featured-icon"><AccountBalance /></span>
                                                            <div className="featured-content-data">
                                                                  <h2>Accounting & Finance</h2>
                                                                  <span>0 open positions</span>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                      <div className="featured-content">
                                                            <span className="featured-icon"><Gif /></span>
                                                            <div className="featured-content-data">
                                                                  <h2>HealthCare & Beauty</h2>
                                                                  <span>2 open positions</span>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                      <div className="featured-content">
                                                            <span className="featured-icon"><Autorenew /></span>
                                                            <div className="featured-content-data">
                                                                  <h2>Cars & Automotive</h2>
                                                                  <span>7 open positions</span>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                      <div className="featured-content">
                                                            <span className="featured-icon"><Web /></span>
                                                            <div className="featured-content-data">
                                                                  <h2>Web development </h2>
                                                                  <span>7 open positions</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-12">
                                          <div className='dealing-social'>
                                                <div className="row">
                                                      <div className="col-lg-6 col-md-6">
                                                            <div className="subscribe-emails">
                                                                  <div className='subscribe-header'>
                                                                        <span><Send /></span>
                                                                        <h4>Subscribe our news</h4>
                                                                  </div>
                                                                  <div className='subscribe-content'>
                                                                        <p className='subscribe-content-desc'>
                                                                              Subscribe to our newsletter to get the latest jobs posted , candidates , and latest news
                                                                        </p>
                                                                        <FloatingLabel
                                                                              controlId="floatingInput"
                                                                              label="Email address"
                                                                              className="mb-3"
                                                                        >
                                                                              
                                                                              <Form.Control type="email" placeholder="name@example.com" />
                                                                        </FloatingLabel>
                                                                        <Button>Subscribe</Button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="col-lg-6 col-md-6">
                                                            <div className="tweets">
                                                                  <div className='tweets-header'>
                                                                        <span><Twitter /></span>
                                                                        <h4>Latest Tweets</h4>
                                                                  </div>
                                                                  <div className='tweets-content'>
                                                                        <span className='tweets-content-title'>@tielabs</span>
                                                                        <p className='tweets-content-desc'>We have released a major update for instaNOW plugin (formaly instagramy) v2.0 http/www.insta-now</p>
                                                                        <div className='tweets-time'>
                                                                              <Timer />
                                                                              <span>8 hours ago</span>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Carousel */}
                              <div className="col-lg-4 col-md-12">
                                    <div className='Features-carousel'>
                                          <h1>Featured Jobs</h1>
                                          <div className='Features-content'>
                                                <Swiper
                                                      slidesPerView={1}
                                                      spaceBetween={0}
                                                      slidesPerGroup={1}
                                                      navigation={true}
                                                      mousewheel={true}
                                                      modules={[Navigation, Mousewheel]}
                                                      className="mySwiper"
                                                >
                                                      <SwiperSlide>
                                                            <div className='feature-job-slide'>
                                                                  <div className='featured-slide-bg'>
                                                                        <img src='https://www.haec.gr/images/Academics/Photo-2020/12.jpg' alt='' />
                                                                  </div>
                                                                  <div className='feature-job-details'>
                                                                        <div className='feature-job-img'>
                                                                              <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                        </div>
                                                                        <div className='feature-job-data'>
                                                                              <div className='feature-job-info'>
                                                                                    <h2>Frontend developer</h2>
                                                                                    <div>
                                                                                          <h6>Tielabs</h6>
                                                                                          <h6>Beautiful WP Themes</h6>
                                                                                    </div>
                                                                              </div>
                                                                              <div className='feature-job-desc'>
                                                                                    <p>
                                                                                          We're looking for a talented , Egypt-based Front-end developer for an immediate mobile website project .
                                                                                    </p>
                                                                              </div>
                                                                              <div className='feature-job-located'>
                                                                                    <span><LocationCity /> Moscow , Russia</span>
                                                                                    <span><Timer /> Moscow , Russia</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className='line-break'></div>
                                                                  <div className='apply-for-job'>
                                                                        <Button>Apply for this job</Button>
                                                                  </div>
                                                            </div>
                                                      </SwiperSlide>
                                                      <SwiperSlide>
                                                            <div className='feature-job-slide'>
                                                                  <div className='featured-slide-bg'>
                                                                        <img src='https://coursesaiu.org/wp-content/uploads/2019/07/management-meeting.jpg' alt='' />
                                                                  </div>
                                                                  <div className='feature-job-details'>
                                                                        <div className='feature-job-img'>
                                                                              <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                        </div>
                                                                        <div className='feature-job-data'>
                                                                              <div className='feature-job-info'>
                                                                                    <h2>Frontend developer</h2>
                                                                                    <div>
                                                                                          <h6>Tielabs</h6>
                                                                                          <h6>Beautiful WP Themes</h6>
                                                                                    </div>
                                                                              </div>
                                                                              <div className='feature-job-desc'>
                                                                                    <p>
                                                                                          We're looking for a talented , Egypt-based Front-end developer for an immediate mobile website project .
                                                                                    </p>
                                                                              </div>
                                                                              <div className='feature-job-located'>
                                                                                    <span><LocationCity /> Moscow , Russia</span>
                                                                                    <span><Timer /> Moscow , Russia</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className='line-break'></div>
                                                                  <div className='apply-for-job'>
                                                                        <Button>Apply for this job</Button>
                                                                  </div>
                                                            </div>
                                                      </SwiperSlide>
                                                      <SwiperSlide>
                                                            <div className='feature-job-slide'>
                                                                  <div className='featured-slide-bg'>
                                                                        <img src='https://www.usnews.com/dims4/USNEWS/46feeaf/2147483647/crop/2000x1333+0+0/resize/1200x1200%3E/quality/85/?url=http://media.beam.usnews.com/ff/df/ee8036d44e5a961ab43470f57dee/200921-stock.jpg' alt='' />
                                                                  </div>
                                                                  <div className='feature-job-details'>
                                                                        <div className='feature-job-img'>
                                                                              <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                        </div>
                                                                        <div className='feature-job-data'>
                                                                              <div className='feature-job-info'>
                                                                                    <h2>Frontend developer</h2>
                                                                                    <div>
                                                                                          <h6>Tielabs</h6>
                                                                                          <h6>Beautiful WP Themes</h6>
                                                                                    </div>
                                                                              </div>
                                                                              <div className='feature-job-desc'>
                                                                                    <p>
                                                                                          We're looking for a talented , Egypt-based Front-end developer for an immediate mobile website project .
                                                                                    </p>
                                                                              </div>
                                                                              <div className='feature-job-located'>
                                                                                    <span><LocationCity /> Moscow , Russia</span>
                                                                                    <span><Timer /> Moscow , Russia</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className='line-break'></div>
                                                                  <div className='apply-for-job'>
                                                                        <Button>Apply for this job</Button>
                                                                  </div>
                                                            </div>
                                                      </SwiperSlide>
                                                </Swiper>
                                          </div>
                                    </div>
                              </div>
                              {/* Carousel */}
                        </div>
                  </div>
            </div>
      )
};

export default Features;
