import Link from 'next/link';
import { BiHomeCircle, BiSolidEnvelopeOpen, BiSolidUser } from 'react-icons/bi';
import { BsBell, BsBookmarkFill, BsTwitter } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';

const NAVIGATION_ITEMS = [
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
    icon: BiSolidEnvelopeOpen,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmarkFill,
  },
  {
    title: 'Profile',
    icon: BiSolidUser,
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar */}
        <section className="fixed w-72 flex flex-col h-screen">
          <Link href="/">
            <BsTwitter />
          </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              href={`/${item.title.toLowerCase}`}
              key={item.title}
              className="bg-white/50 flex rounded-3xl p-4 items-center justify-center space-x-2"
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          ))}
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
