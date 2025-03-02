import { Link } from '../components/Link.jsx';
import logoUrl from '/logo.svg';

import './style.css';
import './tailwind.css';

function Sidebar({ children }) {
    return (
        <div id="sidebar" className={'p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200'}>
            {children}
        </div>
    );
}

function Content({ children }) {
    return (
        <div id="page-container">
            <div id="page-content" className={'p-5 pb-12 min-h-screen'}>
                {children}
            </div>
        </div>
    );
}

function Logo() {
    return (
        <div className={'p-5 mb-2'}>
            <a href="/">
                <img src={logoUrl} height={64} width={64} alt="logo" />
            </a>
        </div>
    );
}

export default function LayoutDefault({ children }) {
    return (
        <div className={'flex max-w-5xl m-auto'}>
            <Sidebar>
                <Logo />
                <Link href="/">Welcome</Link>
                <Link href="/todo">Todo</Link>
                <Link href="/star-wars">Data Fetching</Link>
            </Sidebar>
            <Content>{children}</Content>
        </div>
    );
}
