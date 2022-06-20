import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      Enter
      <h2>Welcome to my</h2>

      <form>
        <label aria-label="yahalo" className="ok">yahalo</label>
        <input type="text" name="yahalo" value="John" />
      </form>
    </div >
  )
}
