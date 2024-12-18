import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../redux/theme/themeSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";

export default function HeaderComponent() {
  const path = useLocation().pathname;
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="h-8 w-full bg-gray-600 dark:bg-slate-600"></div>
      <Navbar fluid className="border-b-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/liberty_logo.png"
            alt="thog header"
            className="h-10 sm:h-14 w-12 sm:w-16"
          />
          <div className="hidden lg:flex flex-col">
            <h1 className="text-2xl text-red-600 font-extrabold dark:text-yellow-300">
              LIBERTY VINEYARD
            </h1>
            <h1 className="font-bold">MINISTRIES</h1>
          </div>
        </Link>

        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Search ..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline lg:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button
          onClick={handleSubmit}
          className="w-12 h-10 lg:hidden border border-slate-300 dark:border-slate-600"
          color="grey"
        >
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10"
            color="gray"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="user" img={currentUser.avatar} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              {currentUser.isAdmin && (
                <Link to={"/create-content"}>
                  <Dropdown.Item>Add Content</Dropdown.Item>
                </Link>
              )}
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/authentication?tab=sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/publications"} as={"div"}>
            <Link to="/publications">Publications</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/announcements"} as={"div"}>
            <Link to="/announcements">Announcements</Link>
          </Navbar.Link>
          {/* <Navbar.Link active={path === "/messages"} as={"div"}>
            <Link to="/messages">Messages</Link>
          </Navbar.Link> */}
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About Us</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact-us">Contact Us</Link>
          </Navbar.Link>
          {/* <Navbar.Link active={path === "/contact-us"} as={"div"}>
            <Link
              to="/contact-us"
              className="md:border md:border-gray-500 md:p-2 rounded-lg hover:bg-slate-600 hover:text-white"
            >
              Contact Us
            </Link>
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
