import Link from 'next/link';
import { FC } from 'react';

const Index: FC = () => {
  return (
    <div>
      <div>Hi there, the landing site works fine, no Recoil involved ...</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link href={{ pathname: '/recoil-bug' }} passHref>
          Next-link to the recoil bug (receives the value, fails after reload)
        </Link>
        <a href={'/recoil-bug'}>
          Html-link to the recoil bug (receives no value, immediate error)
        </a>
      </div>
    </div>
  )
}

export default Index
