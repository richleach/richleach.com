function getYear() {
    return new Date().getFullYear()
}

function Footer() {
    return (
        <footer className="footer bg-dark py-1 text-center">
            Copyright &copy; {getYear()} richleach.com.  All Rights Reserved. Please don't steal my stuff.
        </footer>
    )
}

export default Footer
