import React, { Component } from 'react';

export class Contact extends Component {
    render() {
        return(
            <div class="container" id="contactContainer">
                <div className="row">
                    <div className="col text-center">
                    <h1>Contact Us</h1>
                    <h4>+1 262-5544</h4>
                    <h4>tinylodgedells@gmail.com</h4><br />
                    <p>Ring us up or shoot us an email if you have any further questions!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <form>
                            <label for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                            <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label for="country">Country</label>
                                <select id="country" name="country">
                                    <option value="australia">USA</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">Mexico</option>
                                </select>
                            <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <label for="email">Email</label>
                                <input type="email" id="email" name="emailaddress" placeholder="Your email..." />
                                <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;