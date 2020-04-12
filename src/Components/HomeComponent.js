import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Image from 'react-bootstrap/Image'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container text-center" id="suiteList">
                    <br/>
                    <h2>Lodges</h2>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <Card>
                                <CardImg src="/assets/images/suite.jpg" thumbnail />
                                <CardBody>
                                    <CardTitle><h3>Suite</h3></CardTitle>
                                    <CardText>4-Bedroom Lodge</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-6">
                            <Card>
                                <CardImg src="/assets/images/deluxesuite.jpg" thumbnail />
                                <CardBody>
                                    <CardTitle><h3>Deluxe Suite</h3></CardTitle>
                                    <CardText>4-Bedroom Lodge w/ extra Amenitites</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                <br/>
                <div id="bannerDells" className="container text-center">
                    <div className="row">
                        <div class="col-12">
                            <Image src="/assets/images/back.jpg"  fluid />
                            <div id="bannerText" className="caption">
                                <h3>Located in the heart of it all</h3>
                                <p>Experience the Wisconsin Dells fully</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <h2>Photo Gallery</h2>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Image src="/assets/images/tinyBack.jpg" width="400" height="400" id="icon" thumbnail />
                        </div>
                        <div className="col-sm-6">
                            <Image src="/assets/images/tinyPool.jpg" width="400" height="400" id="icon" thumbnail />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Image src="/assets/images/tree1.jpg" width="400" height="400" id="icon" thumbnail />
                        </div>
                        <div className="col-sm-6">
                            <Image src="/assets/images/large.jpg" width="400" height="400" id="icon" thumbnail />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;   