import "./find.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';
import {Search} from '@material-ui/icons'


const Find = () => {
      // const { form, getState } = useForm({
      //       defaultValues: { username: "", email: "", password: "" },
      //       onSubmit: (values) => console.log("onSubmit: ", values),
      // });
      // const errors = getState("errors", { filterUntouchedError: true });
      return (
            <div className="find-container">
                  <div className="container">
                        <Tabs defaultIndex={0}>
                              <TabList>
                                    <Tab>find a job</Tab>
                                    <Tab>find resume</Tab>
                              </TabList>

                              <TabPanel>
                                    <div className="container">
                                          <div className="row">
                                                <div className="col-lg-3 find-content">
                                                      <Form>
                                                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>JOB</Form.Label>
                                                                  <Form.Control type="email" placeholder="Job title , Keywords" />
                                                            </Form.Group>
                                                      </Form>
                                                </div>
                                                <div className="col-lg-3 find-content">
                                                      <Form>
                                                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>LOCATION</Form.Label>
                                                                  <Form.Control type="email" placeholder="City , province or region" />
                                                            </Form.Group>
                                                      </Form>
                                                </div>
                                                <div className="col-lg-3 find-content">
                                                      <Form>
                                                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>CATEGORY</Form.Label>
                                                                  <Form.Select aria-label="Default select example">
                                                                        <option value="1">Select industry</option>
                                                                        <option value="2">First</option>
                                                                        <option value="3">Second</option>
                                                                        <option value="4">Third</option>
                                                                  </Form.Select>
                                                            </Form.Group>
                                                      </Form>
                                                
                                                </div>
                                                <div className="col-lg-3 find-content">
                                                      <Button variant="" type="submit"><Search /> Search </Button>
                                                </div>
                                          </div>
                                    </div>
                              </TabPanel>
                              <TabPanel>
                                    <div className="container">
                                          <div className="row">
                                                <div className="col-lg-3 find-content">
                                                      <Form>
                                                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>RESUME</Form.Label>
                                                                  <Form.Control type="email" placeholder="resume title , Keywords" />
                                                            </Form.Group>
                                                      </Form>
                                                </div>
                                                <div className="col-lg-3 find-content">
                                                      <Form>
                                                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>LOCATION</Form.Label>
                                                                  <Form.Control type="email" placeholder="City , province or region" />
                                                            </Form.Group>
                                                      </Form>
                                                </div>
                                                <div className="col-lg-3 find-content">
                                                      <Form>
                                                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                                                  <Form.Label>CATEGORY</Form.Label>
                                                                  <Form.Select aria-label="Default select example">
                                                                        <option value="1">Select industry</option>
                                                                        <option value="2">First</option>
                                                                        <option value="3">Second</option>
                                                                        <option value="4">Third</option>
                                                                  </Form.Select>
                                                            </Form.Group>
                                                      </Form>
                                                
                                                </div>
                                                <div className="col-lg-3 find-content">
                                                      <Button variant="" type="submit"><Search /> Search </Button>
                                                </div>
                                          </div>
                                    </div>
                              </TabPanel>
                        </Tabs>
                  </div>
            </div>
      );
};

export default Find;
