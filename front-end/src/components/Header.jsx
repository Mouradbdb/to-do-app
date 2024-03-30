function Header() {
  return (
    <div className="navbar bg-base-100 text-white h-1/6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl  font-black">TaskMaster</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Themes</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Theme 1</a>
                </li>
                <li>
                  <a>Theme 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
