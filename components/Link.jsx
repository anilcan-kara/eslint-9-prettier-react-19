import PropTypes from 'prop-types';
import { usePageContext } from 'vike-react/usePageContext';

export function Link({ href, children }) {
    const pageContext = usePageContext();
    const { urlPathname } = pageContext;
    const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);

    return (
        <a href={href} className={isActive ? 'is-active' : undefined}>
            {children}
        </a>
    );
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
