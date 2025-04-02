import logo from "/logo-name.svg";
import { useEffect, useState } from 'react'

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <header>
      <img src={logo} alt="" />

      <span>Time: {now.toLocaleTimeString()}</span>
    </header>
  );
}
