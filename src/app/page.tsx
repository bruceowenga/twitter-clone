import Link from 'next/link';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsTwitter, BsEnvelope } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: BsEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar */}
        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              href={`/${item.title.toLowerCase}`}
              key={item.title}
              className="hover:bg-white/10 text-2xl transition duration-200 flex rounded-3xl py-2 px-6 items-center justify-start w-fit space-x-4 "
            >
              <div>
                <item.icon />
              </div>
              {item.title !== 'Twitter' && <div>{item.title}</div>}
            </Link>
          ))}
          <button className="w-full rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
            Tweet
          </button>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
