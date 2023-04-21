import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl"> Joseph Cotterell</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text 2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font font-medium">
              {" "}
              Joseph Cotterell
            </h2>
            <h3 className="text-2xl py-2"> Coding Student</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Hi, my name is Joseph and I am a coding student from Birmingham.
              This is my portfolio where you will find a number of my projects.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div></div>
        </section>

        <section>
          <div className="text-center p-10">
            <h3 className="text-3xl py-1">My Coding Experience</h3>
            <p className="text-md py-1 leading-8 text-gray-800">
              I have been studying coding since October 2022 at Birmingham Uni.
              I am nearing the end of the course and have learnt various
              languages such as: HTML, CSS, JavaScript, MySQL, React etc.
            </p>
          </div>
          <div>
            <div
              div
              className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
            >
              <h3 className="text-3xl py-1 ">My Projects</h3>
              <h4 className="text-1xl py-1 ">Animl</h4>
              https://github.com/AlastairHafield/Animl-Project
              <h4 className="text-1xl py-1 ">Book Nook</h4>
              https://github.com/indiataylor1/book-nook
              <h4 className="text-1xl py-1 ">Tech Blog</h4>
              https://github.com/josephcotterell/Tech-Blog
              <h4 className="text-1xl py-1 ">Team Profile Generator</h4>
              https://github.com/josephcotterell/Team-Profile-Gen
              <h4 className="text-1xl py-1 ">Social Network</h4>
              https://github.com/josephcotterell/Social-Network-API
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
