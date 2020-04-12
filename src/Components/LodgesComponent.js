import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class Lodges extends Component {
    render() {
        return (
            <div>
                <div class="container text-center" id="suiteList">
                    <br />
                    <h2>Lodges</h2>
                    <p>We make your choices smaller. Choose from our two options below!</p>
                    <div class="row align-center">
                        <div class="col">
                            <Card>
                                <CardImg src="/assets/images/suite.jpg" thumbnail />
                                <CardBody>
                                    <CardTitle><h3>Suite</h3></CardTitle>
                                    <CardText>4-Bedroom Lodge</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div class="col-12">
                            <ul class="list-group d-block" width="50">
                                <li class="list-group-item">Wi-Fi</li>
                                <li class="list-group-item">Microwave</li>
                                <li class="list-group-item">Refrigerator</li>
                                <li class="list-group-item">Heating and Air-Conditioning</li>
                                <li class="list-group-item">LCD TV</li>
                                <li class="list-group-item">Sitting Area</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="container text-center" id="suiteList">
                    <div class="row align-center">
                        <div class="col-12">
                            <Card>
                                <CardImg src="/assets/images/deluxeSuite.jpg" thumbnail />
                                <CardBody>
                                    <CardTitle><h3>Deluxe Suite</h3></CardTitle>
                                    <CardText>4-Bedroom Lodge with Amenities</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div class="col-12 align-items-center"></div>
                            <ul class="list-group d-block" width="50" >
                                <li class="list-group-item">Wi-Fi</li>
                                <li class="list-group-item">Microwave</li>
                                <li class="list-group-item">Refrigerator</li>
                                <li class="list-group-item">Heating and Air-Conditioning</li>
                                <li class="list-group-item">LCD TV</li>
                                <li class="list-group-item">Sitting Area</li>
                                <li class="list-group-item">Free Noah's Ark Waterpark Tickets<br/> with Room Stay<br /><span id="ticket">Each ticket is valued at $42.99</span></li>
                                <li class="list-group-item">Free Mt. Olympus Tickets <br/>with Room Stay<br /><span id="ticket">Each ticket is valued at $55.99</span></li>
                                <li class="list-group-item">Poolside View</li>
                            </ul>
                        </div>
                        <br/>
                    </div>
                </div>
        )
    }
};

export default Lodges;