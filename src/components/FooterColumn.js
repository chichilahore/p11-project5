function FooterColumn ({title, submenus}) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {submenus.map((submenu) => (
                    <li key={submenu}>{submenu}</li>
                ))}
            </ul>
        </div>
    )
}

export default FooterColumn;