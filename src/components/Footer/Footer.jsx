import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className={"footer" + (this.props.transparent !== undefined ? " footer-transparent" : "")}>
                <div className={"container" + (this.props.fluid !== undefined ? "-fluid" : "")}>
                    <nav className="pull-left">
                        <ul>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {1900 + (new Date()).getYear()} <a href="https://github.com/Pet-Adoption-App-NONAME/Pet-Adoption-App">Github</a>, made with <i className="fa fa-heart heart"></i>
                    </p>
                </div>
            </footer>
        );
    }
}
export default Footer;
