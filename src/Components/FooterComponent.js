import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="site-footer">
                    <div className="container text-center">
                        <div className="row">
                            <div class="col align-center">
                                <a class="btn btn-social-icon btn-instagram" href="https://www.instagram.com/waterparkcapital/?hl=en"><i class="fa fa-instagram"></i></a>
                                <a class="btn btn-social-icon btn-facebook" href="https://www.facebook.com/dellsamericanresort/"><i class="fa fa-facebook"></i></a>
                                <a class="btn btn-social-icon btn-twitter" href="https://twitter.com/wisdells?lang=en"><i class="fa fa-twitter"></i></a>
                                <a class="btn btn-social-icon btn-youtube" href="https://www.youtube.com/watch?v=6Q7L3oHfwgY"><i class="fa fa-youtube-square"></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                    <br />
                                    <Image src="/assets/images/littleLogoWhite.png" width="125" height="125" fluid className="text-center" />
                                    <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col align-center">
                                <br />
                                <p>&copy; Little Lodges.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;