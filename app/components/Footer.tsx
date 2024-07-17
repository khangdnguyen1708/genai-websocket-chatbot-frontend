const Footer = () => {
    return (
        <footer className="rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://www.cloud-kinetics.com/" className="hover:underline">Cloud Kinetics</a>. All Rights Reserved.
                </span>

                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <a href="https://www.cloud-kinetics.com/services/applications-software-engineering/app-modernization/" className="hover:underline me-4 md:me-6">CKVN SA Team with ❤️</a>
                    </li>
                    <li>
                        <a href="https://www.cloud-kinetics.com/services/cloud-solutions/cloud-migration/" className="hover:underline me-4 md:me-6">Cloud Migration</a>
                    </li>
                    <li>
                        <a href="https://www.cloud-kinetics.com/services/applications-software-engineering/app-modernization/" className="hover:underline me-4 md:me-6">App Modernization</a>
                    </li>
                    <li>
                        <a href="https://www.cloud-kinetics.com/privacy-policy/" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://www.cloud-kinetics.com/terms-and-conditions/" className="hover:underline me-4 md:me-6">Terms and Conditions</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;