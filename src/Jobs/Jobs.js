import { Wifi , Timer, LocationOn, Search } from '@material-ui/icons';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Form , Button, Accordion } from 'react-bootstrap';
import './Jobs.css';

const jobsUrlApi = "https://6251492bdfa31c1fbd6bcc26.mockapi.io/jobs"

const Jobs = () => {
      return (
            <div className="features">
                  <div className="container">
                        <div className="row">
                        <div className="col-lg-8">
                              <div className="jobs-container">
                                    <div className="jobs-header-details">
                                          <span>We have <b>1234</b> Potential jobs for you</span>
                                          <div className="jobs-sort">
                                                <span>Sort by : Newest</span>
                                                <h4>RSS <Wifi /></h4>
                                          </div>
                                    </div>
                                    <div className="jobs-tabs">
                                          <Tabs defaultIndex={0}>
                                                <TabList>
                                                      <Tab>AllJobs</Tab>
                                                      <Tab>FullTime</Tab>
                                                      <Tab>Tomporary</Tab>
                                                      <Tab>Internship</Tab>
                                                      <Tab>PartTime</Tab>
                                                      <Tab>Freelance</Tab>
                                                </TabList>

                                                <TabPanel>
                                                      <div className="job-tab">
                                                            <div className="row">
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-temporary">
                                                                                    <span>Temporary</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-intern">
                                                                                    <span>Internship</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Part time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-freelance">
                                                                                    <span>Freelance</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className='load-more-list'>
                                                                              <Button>Load more listings</Button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </TabPanel>
                                                <TabPanel>
                                                      <div className="job-tab">
                                                            <div className="row">
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Full time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Full time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Full time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Full time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className='load-more-list'>
                                                                              <Button>Load more listings</Button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </TabPanel>
                                                <TabPanel>
                                                      <div className="job-tab">
                                                            <div className="row">
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-temporary">
                                                                                    <span>Temporary</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-temporary">
                                                                                    <span>Temporary</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-temporary">
                                                                                    <span>Temporary</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-temporary">
                                                                                    <span>Temporary</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className='load-more-list'>
                                                                              <Button>Load more listings</Button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </TabPanel>
                                                
                                                <TabPanel>
                                                      <div className="job-tab">
                                                            <div className="row">
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-intern">
                                                                                    <span>Internship</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-intern">
                                                                                    <span>Internship</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-intern">
                                                                                    <span>Internship</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-intern">
                                                                                    <span>Internship</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className='load-more-list'>
                                                                              <Button>Load more listings</Button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </TabPanel>
                                                <TabPanel>
                                                      <div className="job-tab">
                                                            <div className="row">
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Part time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Part time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Part time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-part">
                                                                                    <span>Part time</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className='load-more-list'>
                                                                              <Button>Load more listings</Button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </TabPanel>
                                                <TabPanel>
                                                      <div className="job-tab">
                                                            <div className="row">
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-freelance">
                                                                                    <span>Freelance</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-freelance">
                                                                                    <span>Freelance</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-freelance">
                                                                                    <span>Freelance</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className="job-tab-content">
                                                                              <div className="job-tab-information">
                                                                                    <div className='job-tab-img'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/512/3616/3616991.png' alt=''/>         
                                                                                    </div>
                                                                                    <div className='job-tab-data'>
                                                                                          <h2>Frontend developer</h2>
                                                                                          <div>
                                                                                                <h6>Tielabs</h6>
                                                                                                <h6>Beautiful WP Themes</h6>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div className="job-tab-located">
                                                                                    <span><LocationOn /> Moscow , Russia</span>
                                                                              </div>
                                                                              <div className="job-tab-timer">
                                                                                    <span><Timer /> 8 hours ago</span>
                                                                              </div>
                                                                              <div className="job-tab-status job-freelance">
                                                                                    <span>Freelance</span>
                                                                              </div>
                                                                              <div className="job-tab-dots">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-lg-12">
                                                                        <div className='load-more-list'>
                                                                              <Button>Load more listings</Button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </TabPanel>
                                          </Tabs>
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-4">
                              <div className="jobs-searching">
                                    <Accordion defaultActiveKey={['0']} flush>
                                          <Accordion.Item eventKey="0">
                                                <Accordion.Header> <span><Search /></span> Start Searching</Accordion.Header>
                                                <Accordion.Body>
                                                      <Form>
                                                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>JOB</Form.Label>
                                                                  <Form.Control type="email" placeholder="Job title , Keywords" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>LOCATION</Form.Label>
                                                                  <Form.Control type="email" placeholder="City , province or region" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>CATEGORY</Form.Label>
                                                                  <Form.Select aria-label="Default select example">
                                                                        <option value="1">Select industry</option>
                                                                        <option value="2">First</option>
                                                                        <option value="3">Second</option>
                                                                        <option value="4">Third</option>
                                                                  </Form.Select>
                                                            </Form.Group>
                                                      </Form>
                                                </Accordion.Body>
                                          </Accordion.Item>
                                          <Accordion.Item eventKey="1">
                                                <Accordion.Header>Contract type</Accordion.Header>
                                                <Accordion.Body>
                                                      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>CONTRACT NAME</Form.Label>
                                                            <Form.Control type="email" placeholder="Contract title , Keywords" />
                                                      </Form.Group>
                                                      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>CATEGORY</Form.Label>
                                                            <Form.Select aria-label="Default select example">
                                                                  <option value="1">Select Type</option>
                                                                  <option value="2">First</option>
                                                                  <option value="3">Second</option>
                                                                  <option value="4">Third</option>
                                                            </Form.Select>
                                                      </Form.Group>
                                                </Accordion.Body>
                                          </Accordion.Item>
                                          <Accordion.Item eventKey="2">
                                                <Accordion.Header>Specialisms</Accordion.Header>
                                                <Accordion.Body>
                                                      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>SPECIALISMS NAME</Form.Label>
                                                            <Form.Control type="email" placeholder="Contract title , Keywords" />
                                                      </Form.Group>
                                                      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>CATEGORY</Form.Label>
                                                            <Form.Select aria-label="Default select example">
                                                                  <option value="1">Select Special Type</option>
                                                                  <option value="2">First</option>
                                                                  <option value="3">Second</option>
                                                                  <option value="4">Third</option>
                                                            </Form.Select>
                                                      </Form.Group>
                                                </Accordion.Body>
                                          </Accordion.Item>
                                    </Accordion>
                                    <Button><Search /> Search</Button>
                              </div>
                        </div>
                        </div>
                  </div>
            </div>
      )
}

export default Jobs