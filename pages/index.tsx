import Head from 'next/head'
import Image from 'next/image'
import { withSentry } from '@sentry/nextjs';

const Home = () => {
  console.log("===>", withSentry);
  const a: number = 1;
  return (
    <>
      <Head>
        <script
          src="https://browser.sentry-cdn.com/7.2.0/bundle.min.js"
          integrity="sha384-yvW0r7aI4VkwNfs/eOzYsODvXkNVQon3MBtow61jPf/pOR166EPvTSNBr9nG3C3y"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div >
        Enter
        <h2 role="heading">Welcome to my</h2>

        <form>
          <label aria-label="yahalo" className="ok">yahalo</label>
          <input onChange={() => { }} type="text" name="yahalo" value="John" />
        </form>
        <button type="button" onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}>
          Throw error
        </button>
      </div >
    </>
  )
}

export default Home
