import React, { Component } from 'react'

export class About extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <br/>
                        <h2 className="text-center">A Little About Us</h2>
                        <br/>
                        <p>Tiny Lodges is located in the heart of the Wisconsin Dells Area, on the Parkway just walking distance to some of Wisconsin Dells best attractions. 
                            Enjoy our clean, newly renovated hotel rooms, as well as an indoor pool, hot tub, and sauna. Noah's Ark Waterpark and Timbavati Wildlife Zoo Tickets 
                            are included with your stay!</p>
                        <br />
                        <p>We’ve combined the luxury of a swimming pool with the natural beauty of a lagoon- and created an outdoor space full of blissful relaxation and 
                            fun for the whole family! Take a dip in nature’s newest Waterpark, where the fun comes naturally!</p>
                        <br />
                    </div>  
                </div>
            </div>
        )
    }
}

export default About;