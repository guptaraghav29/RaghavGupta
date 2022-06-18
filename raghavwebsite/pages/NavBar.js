import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-light bg-white">
                <div class="container">
                    <div id="leftBar">
                        <Link href="/">
                            <a> <b> Life of Raghav </b> </a>
                        </Link>
                    </div>
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <Link href="/About">
                                    <a> About </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Journey">
                                    <a> Journey </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Connect">
                                    <a> Connect </a>
                                </Link>
                            </li>
                
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}