import Nav from './Nav';

const Layout = ({ mainTitle, footer, children }) => (
    <div>
        <Nav />
        <h1>{mainTitle}</h1>
        {children}
        <hr />
        {footer}
    </div>
)

export default Layout;