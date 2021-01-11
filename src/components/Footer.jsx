import React from 'react'

function Footer() {
    return(
        <footer className="page-footer green lighten-3">

            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/dm1tro69/React_shop">Repo</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer