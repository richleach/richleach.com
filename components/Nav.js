import Link from 'next/link'

function Nav() {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo"><Link href='/'>richleach.com</Link></h1>
                <nav>
                    <ul>
                        <li>I hope you're having a great day.</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav