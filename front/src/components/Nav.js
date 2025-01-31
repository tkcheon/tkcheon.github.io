const { NavLink } = require("react-router-dom");

function getLinkStyle({ isActive}){
    return {
        textDecoration: isActive ? `underline` : ``,
    };
}

function Nav () {
    return(
        <div className={styles.nav}>
            <container className={styles.container}>
                <Link to ="/">
                    <img src={logoImg} alt="Codethat Logo"/>
                </Link>
                <ul className={styles.menu}>
                    <li>
                        <NavLink style={getLinkStyle} to="/courses">
                            카탈로그
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={getLinkStyle} to="/questions">
                            커뮤니티
                        </NavLink>
                    </li>
                    <li>
                        <UserMenu/>
                    </li>
                </ul>
            </container>
        </div>
    );
}