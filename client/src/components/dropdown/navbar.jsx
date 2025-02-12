const Navbar = () => {
  const navlink = [
    {
      navName: "Home",
      path: "",
    },
    {
      navName: "Products",
      path: "",
    },
    {
      navName: "Contact us",
      path: "",
    },
    {
      navName: "About us",
      path: "",
    },
  ];

  return (
    <div>
      <ul className="flex list-none flex-col justify-center gap-5 lg:flex-row">
        {navlink.map((nav, idx) => {
          return (
            <li key={idx}>
              <a
                className="decoration-highlight text-base decoration-[2px] underline-offset-2 hover:underline lg:text-sm"
                href={nav.path}
              >
                {nav.navName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
