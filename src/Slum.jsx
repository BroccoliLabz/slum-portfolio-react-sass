import './Slum.scss';
import useAnim from './hooks/useAnim';


const Discography = [
  {
    id: 0,
    title: 'Shinigami Love',
    url: 'https://shinigamilove.broccolirecords.com/',
    art: 'images/shinigami.jpg',
  },
  {
    id: 1,
    title: 'Gasmask Redemption',
    url: 'https://soundcloud.com/broccoli-records-music/sets/gasmask-redemption',
    art: 'images/gasmask.jpeg',
  },
];

const tracks = [
  {
    id: 0,
    title: 'MISTY',
    art: 'images/misty.png',
    url: 'https://soundcloud.com/broccoli-records-music/misty?in=broccoli-records-music/sets/slum-chemist-r-y',
    with: [
      ['DBL Z', 'https://dblz.art/'],
      ['Sidoobee', 'https://sidoobee.broccolirecords.com/'],
      ['Bankorrupt', 'https://www.instagram.com/realbankorrupt/'],
    ],
  },
  {
    id: 1,
    title: 'VEGGIE POT',
    art: 'images/veggiepot.png',
    url: 'https://soundcloud.com/broccoli-records-music/veggie-pot?in=broccoli-records-music/sets/slum-chemist-r-y',
    with: [
      ['DBL Z', 'https://dblz.art/'],
      ['Sidoobee', 'https://sidoobee.broccolirecords.com/'],
      ['Supamedo', ''],
    ],
  },
  {
    id: 2,
    title: 'F.I.D (Freestyle is Dead)',
    art: 'images/fid.png',
    url: 'https://soundcloud.com/double-zz-99/f-i-d?in=broccoli-records-music/sets/slum-chemist-r-y',
    with: [['DBL Z', 'https://dblz.art/']],
  },
  {
    id: 3,
    title: "WHAT I'M ON",
    art: 'images/whatimon.png',
    url: 'https://soundcloud.com/broccoli-records-music/what-im-on?in=broccoli-records-music/sets/slum-chemist-r-y',
    with: [
      ['DBL Z', 'https://dblz.art/'],
      ['M4', 'https://www.instagram.com/muhanna_4/'],
      ['Fury', 'https://fury.broccolirecords.com/'],
    ],
  },
  {
    id: 4,
    title: 'Granmas in a Van',
    art: 'images/granmasinavan.png',
    url: 'https://soundcloud.com/broccoli-records-music/dblz-slum-chemist-ry-granmas-in-a-van?in=broccoli-records-music/sets/slum-chemist-r-y',
    with: [
      ['DBL Z', 'https://dblz.art/'],
      ['M4', 'https://www.instagram.com/muhanna_4/'],
    ],
  },
];

const Socials = [
  {
    id: 0,
    platform: 'IG',
    url: 'https://www.instagram.com/slum_chemist_ry/',
    icon: 'M 8 0 C 5.829 0 5.556 0.01 4.703 0.048 C 3.85 0.088 3.269 0.222 2.76 0.42 a 3.917 3.917 0 0 0 -1.417 0.923 A 3.927 3.927 0 0 0 0.42 2.76 C 0.222 3.268 0.087 3.85 0.048 4.7 C 0.01 5.555 0 5.827 0 8.001 c 0 2.172 0.01 2.444 0.048 3.297 c 0.04 0.852 0.174 1.433 0.372 1.942 c 0.205 0.526 0.478 0.972 0.923 1.417 c 0.444 0.445 0.89 0.719 1.416 0.923 c 0.51 0.198 1.09 0.333 1.942 0.372 C 5.555 15.99 5.827 16 8 16 s 2.444 -0.01 3.298 -0.048 c 0.851 -0.04 1.434 -0.174 1.943 -0.372 a 3.916 3.916 0 0 0 1.416 -0.923 c 0.445 -0.445 0.718 -0.891 0.923 -1.417 c 0.197 -0.509 0.332 -1.09 0.372 -1.942 C 15.99 10.445 16 10.173 16 8 s -0.01 -2.445 -0.048 -3.299 c -0.04 -0.851 -0.175 -1.433 -0.372 -1.941 a 3.926 3.926 0 0 0 -0.923 -1.417 A 3.911 3.911 0 0 0 13.24 0.42 c -0.51 -0.198 -1.092 -0.333 -1.943 -0.372 C 10.443 0.01 10.172 0 7.998 0 h 0.003 Z m -0.717 1.442 h 0.718 c 2.136 0 2.389 0.007 3.232 0.046 c 0.78 0.035 1.204 0.166 1.486 0.275 c 0.373 0.145 0.64 0.319 0.92 0.599 c 0.28 0.28 0.453 0.546 0.598 0.92 c 0.11 0.281 0.24 0.705 0.275 1.485 c 0.039 0.843 0.047 1.096 0.047 3.231 s -0.008 2.389 -0.047 3.232 c -0.035 0.78 -0.166 1.203 -0.275 1.485 a 2.47 2.47 0 0 1 -0.599 0.919 c -0.28 0.28 -0.546 0.453 -0.92 0.598 c -0.28 0.11 -0.704 0.24 -1.485 0.276 c -0.843 0.038 -1.096 0.047 -3.232 0.047 s -2.39 -0.009 -3.233 -0.047 c -0.78 -0.036 -1.203 -0.166 -1.485 -0.276 a 2.478 2.478 0 0 1 -0.92 -0.598 a 2.48 2.48 0 0 1 -0.6 -0.92 c -0.109 -0.281 -0.24 -0.705 -0.275 -1.485 c -0.038 -0.843 -0.046 -1.096 -0.046 -3.233 c 0 -2.136 0.008 -2.388 0.046 -3.231 c 0.036 -0.78 0.166 -1.204 0.276 -1.486 c 0.145 -0.373 0.319 -0.64 0.599 -0.92 c 0.28 -0.28 0.546 -0.453 0.92 -0.598 c 0.282 -0.11 0.705 -0.24 1.485 -0.276 c 0.738 -0.034 1.024 -0.044 2.515 -0.045 v 0.002 Z m 4.988 1.328 a 0.96 0.96 0 1 0 0 1.92 a 0.96 0.96 0 0 0 0 -1.92 Z m -4.27 1.122 a 4.109 4.109 0 1 0 0 8.217 a 4.109 4.109 0 0 0 0 -8.217 Z m 0 1.441 a 2.667 2.667 0 1 1 0 5.334 a 2.667 2.667 0 0 1 0 -5.334 Z',
  },
  {
    id: 1,
    platform: 'Youtube',
    url: 'https://www.youtube.com/c/JusChemistRYRudy',
    icon: 'M 8.051 1.999 h 0.089 c 0.822 0.003 4.987 0.033 6.11 0.335 a 2.01 2.01 0 0 1 1.415 1.42 c 0.101 0.38 0.172 0.883 0.22 1.402 l 0.01 0.104 l 0.022 0.26 l 0.008 0.104 c 0.065 0.914 0.073 1.77 0.074 1.957 v 0.075 c -0.001 0.194 -0.01 1.108 -0.082 2.06 l -0.008 0.105 l -0.009 0.104 c -0.05 0.572 -0.124 1.14 -0.235 1.558 a 2.007 2.007 0 0 1 -1.415 1.42 c -1.16 0.312 -5.569 0.334 -6.18 0.335 h -0.142 c -0.309 0 -1.587 -0.006 -2.927 -0.052 l -0.17 -0.006 l -0.087 -0.004 l -0.171 -0.007 l -0.171 -0.007 c -1.11 -0.049 -2.167 -0.128 -2.654 -0.26 a 2.007 2.007 0 0 1 -1.415 -1.419 c -0.111 -0.417 -0.185 -0.986 -0.235 -1.558 L 0.09 9.82 l -0.008 -0.104 A 31.4 31.4 0 0 1 0 7.68 v -0.123 c 0.002 -0.215 0.01 -0.958 0.064 -1.778 l 0.007 -0.103 l 0.003 -0.052 l 0.008 -0.104 l 0.022 -0.26 l 0.01 -0.104 c 0.048 -0.519 0.119 -1.023 0.22 -1.402 a 2.007 2.007 0 0 1 1.415 -1.42 c 0.487 -0.13 1.544 -0.21 2.654 -0.26 l 0.17 -0.007 l 0.172 -0.006 l 0.086 -0.003 l 0.171 -0.007 A 99.788 99.788 0 0 1 7.858 2 h 0.193 Z M 6.4 5.209 v 4.818 l 4.157 -2.408 L 6.4 5.209 Z',
  },
];

function Slum() {
  useAnim('fade');
  useAnim('slide');
  return (
    <div className='app'>
      <div className='bg fade'>
        <div className='skeleton '>
          <div className='gasmask '>
            <a href='#home'>
              <img className='' src='images/gasmask.png' alt='' />
            </a>
          </div>
          <div className='skel'>
            <img src='images/Skeleton.gif' alt='' />
          </div>
        </div>
        <div className='demon'>
          <img src='images/demon.gif' alt='' />
        </div>
        <div className='smoke '>
          <img src='images/smoke.gif' alt='' />
        </div>
        <div className='hell '>
          <img src='images/hell.jpg' alt='' />
        </div>
      </div>
      <div id='home' className='home'>
        <div className='header fade'>
          <h1>Slum Chemist R.Y</h1>
        </div>
        <div className='logo fade'>
          <img src='images/logo.png' alt='' />
        </div>
        <div className='player slide'>
          <iframe
            title='playlist'
            width='100%'
            height='300'
            scrolling='no'
            frameBorder='none'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1307367352&color=%2352256f&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
        </div>
      </div>
      <div className='discography'>
        <div className='header fade'>
          <h2>LPs</h2>
        </div>
        <div className='list'>
          {Discography.map((item) => (
            <li key={item.id} className='slide'>
              <a
                className={item.soon ? 'disabled' : ''}
                href={item.url}
                target='_blank'
                rel='noreferrer'
              >
                <span>{item.title}</span>
              </a>
              <img className='art' src={item.art} alt='' />
            </li>
          ))}
        </div>
      </div>
      <div className='apperances'>
        <div className='header fade'>
          <h2>Appearances</h2>
        </div>
        <div className='list'>
          {tracks.map((item) => (
            <ul key={item.id}>
              <li className='titles slide'>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  <span className='cursive'>{item.title}</span>
                  <img src={item.art} alt={item.title} />
                </a>{' '}
              </li>
              <li className='artists fade'>
                <code>with</code>{' '}
                {item.with.map((item) => (
                  <a
                    key={item.toString()}
                    href={item[1]}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {' '}
                    <span className='pixel'> {item[0] + ' '}</span>
                  </a>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className='links'>
        <h2 className='fade'>Links</h2>
        <ul>
          {Socials.map((item) => (
            <li key={item.id} className='slide'>
              <a href={item.url} target='_blank' rel='noreferrer'>
                <span>{item.platform}</span>
              </a>
              <svg viewBox='-10 0 35 35'>
                <path d={item.icon} />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slum;
