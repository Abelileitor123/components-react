import React, { Component } from 'react';

'use strict';

const e = React.createElement;

class Pie extends Component {
    render() {
        return (
            <div className="is-dark">
                <footer class="footer is-dark">
                    <div class="content has-text-centered">
                        <p>
                            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

const domContainer = document.querySelector('#pie');
ReactDOM.render(e(Pie), domContainer);

export default Pie;
