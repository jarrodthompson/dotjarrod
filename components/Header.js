import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
        <a><h2 className="h2"> <img className ="logo" src="/final_logo.png" alt="" /></h2></a> 
        </Link>
      </div>
    </header>
  )
}
