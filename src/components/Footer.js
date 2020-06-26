import React from 'react';
function Footer(props) {
    return (
        <footer className="footer">
                    <div className="col-6 col-sm-5 mx-auto text-center">
                        <h5>Social</h5>
                        <hr class="footer-social"/>
                         <a class="btn btn-social-icon  btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"/></a>{' '}
                         <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"/></a>{' '}
                         <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"/></a>{' '}
                         <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"/></a>
                
                    </div>
                    <div class="col-sm-4 mx-auto text-center">
                      <a role="button" class="btn btn-link" href="tel:+12065551234"><i class="fa fa-phone"/> 1-206-555-1234</a><br />
                      <a role="button" class="btn btn-link" href="Hawkpines@gmail.com"><i class="fa fa-envelope-o"/>Hawkpines@gmail.com</a>
                      <p>© Copyright 2020</p>
                     </div>
                
    
        </footer>
    )
}

export default Footer;