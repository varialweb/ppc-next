import Nav from './nav'

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <footer>Footer</footer>
        </div>
    )
}