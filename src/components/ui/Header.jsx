import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useTheme } from 'Context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { name: 'Home', path: '/homepage-premium-developer-learning-platform' },
    { name: 'MERN roadmap', path: '/mern' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActivePath = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-0 ease-out ${isScrolled
        ? 'bg-white/90 dark:bg-white-900/90 text-black dark:text-black backdrop-blur-md shadow-md border-b border-border dark:border-zinc-700/10'
        : 'bg-transparent dark:text-white  text-black'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/homepage-premium-developer-learning-platform"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-lg font-mono">K</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold  group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors duration-300">
                KeshavDovs
              </span>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">
                Developer Academy
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-out group ${isActivePath(item.path)
                  ? 'text-secondary-600 dark:text-secondary-400'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary-500 to-accent-500 transform origin-left transition-transform duration-300 ease-out ${isActivePath(item.path)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              variant="ghost"
                            to="/admin"

              size="sm"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              onClick={() => console.log('Sign In clicked')}
            >
              Sign In
            </Link>
            <Link
              to="/dashboard"
              className="micro-interaction text-black dark:text-zinc-200"
              size="sm"
            >
              Start Learning
            </Link>
            {/* Dark Mode Toggle */}

            <label class="inline-flex items-center relative">
              <input
                className="peer hidden"
                id="toggle"
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === 'dark'}
              />              <div
                class="relative w-[70px] h-[33px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[30px] after:h-[30px] after:bg-gradient-to-r from-blue-500 to-blue-200 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[1.7px] after:left-[3.5px] active:after:w-[10px] peer-checked:after:left-[67px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
              ></div>
              <svg
                height="0"
                width="70"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[11px]"
              >
                <path
                  d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                ></path>
              </svg>
              <svg
                height="430"
                width="430"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[9px]"
              >
                <path
                  d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                ></path>
              </svg>
            </label>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="transition-transform duration-200"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
            }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-border dark:border-zinc-700">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${isActivePath(item.path)
                  ? 'text-secondary-600 dark:text-secondary-400 bg-secondary-50 dark:bg-zinc-800'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-700'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col space-y-3 pt-4 border-t border-border dark:border-zinc-700">
              <Button
                variant="ghost"
                size="md"
                fullWidth
                className="justify-center"
                onClick={() => {
                  console.log('Sign In clicked');
                  closeMenu();
                }}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                className="justify-center"
                onClick={() => {
                  console.log('Start Learning clicked');
                  closeMenu();
                }}
              >
                Start Learning
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
