import React, { Component } from 'react';

'use strict';

const e = React.createElement;

class Cabeza extends Component {
    render() {
        let logo = "este es el logo";
        return (
            <div className="header">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <p style="text-transform: uppercase;">
                                anime shop
                            </p>
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                            data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">
                                Home
            </a>

                            <a class="navbar-item">
                                Documentation
            </a>

                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    More
                </a>

                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        About
                    </a>
                                    <a class="navbar-item">
                                        Jobs
                    </a>
                                    <a class="navbar-item">
                                        Contact
                    </a>
                                    <hr class="navbar-divider" />
                                    <a class="navbar-item">
                                        Report an issue
                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a class="button is-light">
                                        Log in
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section class="hero is-medium is-primary is-bold">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                {this.props.titulo}
        </h1>
                            <h2 class="subtitle">
                            {this.props.subtitulo}
        </h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const domContainer = document.querySelector('#cabeza');
ReactDOM.render(e(Cabeza), domContainer);

export default Cabeza;
