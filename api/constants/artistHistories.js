const ARTIST_HISTORIES = [
  {
    name:'Michael Jackson',
    description: [
      'Michael Jackson’s career started from his family music group, the Jackson 5, which arose at a time of post-Motown America. Once he began his solo career in the 1980s, his career ascended to new heights. He was known for his pop hits like “Beat it”, “Billie Jean”, and “Thriller”, all accompanied with music videos the pushed and progressed the genre. He popularized and created dances that lasted generations like the moonwalk, as his following continued to grow. He is featured on the drivers side of the bus. ',
    ],
    born: 'August 29, 1958',
    died: 'June 25, 2009',
    images: [
      {
        url: 'https://www.grammy.com/sites/com/files/styles/news_detail_header/public/grammyrewind_michaeljackson_hero.jpg?itok=EoXUqDZN',
        caption: 'Michael Jackson at the 1985 Grammy Awards',
      },
    ],
  },
  {
    name: 'Public Enemy',
    born: '1985',
    died: null,
    description: [
      'Public Enemy, comprised of Chuck D and DJ Lord, formed in Long Island, New York, in 1985. Notorious for bringing political messages and hard-hitting opinions to the forefront of hip-hop, the group criticized the negative image that the media within American had created around African-Americans and the environments that raised them. Public Enemy interwove the complexities of politics within their music, creating a sound that captivated audiences across the east coast.',
    ],
    images: [
      {
        url: 'https://media.pitchfork.com/photos/5e5c757e0db1200009923e2a/2:1/w_2560%2Cc_limit/Public%252520Enemy-GettyImages-540748789.jpg',
        caption: 'Public Enemy in a photoshoot',
      },
    ],
  },
  {
    name: 'Prince',
    born: 'June 7, 1958',
    died: 'April 21, 2016',
    description: [
      'Prince Rogers Nelson was an American singer, songwriter, musician, record producer, dancer, actor and filmmaker. A guitar virtuoso and multi-instrumentalist, Prince created eclectic genre-crossing work. He filled arenas with his flamboyant persona and wide-ranging singing voice, in particular his far reaching falsetto and high-pitched screams.',
      'Prince is regarded as one of the greatest musicians in the history of popular music. Most notably, Prince pioneered the late 1970s Minneapolis sound, a funk rock subgenre drawing from synth-pop and new wave.',
    ],
    images: [
      {
        url: 'https://img.apmcdn.org/c825f7f714f9cec96ab56e0381be69af8492b719/uncropped/39af8d-20160421-prince12.jpg',
        caption: 'Prince Performing at the Super Bowl XLI halftime show',
      },
    ],
  },
  {
    name: 'B.B. King',
    born: 'September 16, 1925',
    died: 'May 14, 2015',
    description: [
      'Riley B. King, B.B. King, was an American singer-songwriter, guitarist, and record producer. King introduced a sophisticated style of soloing to the genre of blues and soul. His sound was based on fluid string bending and shimmering vibrato that influenced many later blues electric guitar players.',
      'King is one of the most influential blues musicians of all time, earning the nickname "The King of the Blues", and is considered one of the "Three Kings of the Blues Guitar" (along with Albert and Freddie King). King was a dedicated performer, appearing on average at more than 200 concerts per year into his 70s. In 1956 alone, he appeared at 342 shows.',
    ],
    images: [
      {
        url: 'https://www.aljazeera.com/mritems/Images/2019/9/16/00306b563a8e4b3d9be75aa5d8504644_6.jpg',
        caption: 'B.B. King in Memphis, 1949',
      },
    ],
  },
  {
    name: 'George Edward Clinton',
    born: 'July 22, 1941',
    died: null,
    description: [
      'George Edward Clinton is an American singer, songwriter, bandleader, and record producer.[5] His Parliament-Funkadelic collective developed an influential and eclectic form of funk music during the 1970s that drew on science fiction, outlandish fashion, psychedelic culture, and surreal humor. Clinton launched his solo career with the 1982 album Computer Games and would later on influence hip-hop and G-funk within the 1990’s.',
    ],
    images: [
      {
        url: 'https://www.interviewcelebrity.com/media/author/2018/george-clinton.jpg',
        caption: 'George Edward Clinton performing',
      },
    ],
  },
  {
    name: 'Kool Moe Dee',
    born: 'August 8, 1962',
    died: null,
    description: [
      'Mohandas Dewese better known by his stage name Kool Moe Dee, is an American hip hop MC prominent during the late 1970s through the early 1990s. Kool Moe Dee was a member of the rap group Treacherous Three, and also one of the first rappers to earn a Grammy Award and was the first rapper to perform at the Grammys. Later in his life he cooperated with young producers at ROOFTOP records that would contribute to the new jack swing movement.',
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Kool-moe-dee.jpg/220px-Kool-moe-dee.jpg',
        caption: 'Kool Moe Dee on the cover of his eponymous debut solo studio album',
      },
    ],
  },
  {
    name: 'Ray Charles',
    born: 'September 23, 1930',
    died: 'June 10, 2004',
    description: [
      'Ray Charles was a legendary musician often called the "Genius,” who pioneered the genre of soul music during the 1950s. Charles combined blues, gospel, R&B, rock, country music and jazz to create groundbreaking hits such as “Unchain My Heart,” “I’ve Got A Woman” and “What I’d Say.” His impressive multi-award winning 50-year career left an indelible mark on contemporary music all over the world.',
    ],
    images: [
      {
        url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNTg0OTQ3NzI1/ray-charles-9245001-1-402.jpg',
        caption: 'Ray Charles performing',
      },
    ],
  },
  {
    name: 'Grandmaster Flash',
    born: 'january 1, 1958',
    died: null,
    description: [
      'Grandmaster Flash is widely considered to be one of the best pioneers of DJing; cutting, scratching and remixing tracks. In 2007 Grandmaster Flash and the Furious Five were the first hip hop group inducted into the Rock and Roll Hall of Fame. Flash is also known for his major contributions to the art, which include DJing techniques such as backspinning, punch phrasing and scratching.',
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Dj_Grandmaster_Flash-01-mika.jpg/300px-Dj_Grandmaster_Flash-01-mika.jpg',
        caption: 'Grandmaster Flash performing, 1999',
      },
    ],
  },
  {
    name: 'Afrika Bambaataa',
    born: 'April 17, 1957',
    died: null,
    description: [
      'Afrika Bambaataa is a rapper, producer and songwriter from the South Bronx. He introduced the hip hop world to electro tracks in the 1980’s that further developed the culture. By incorporating himself and others into the music and culture-oriented Universal Zulu Nation, Mambaataa helped better spread hip hop throughout the world.',
    ],
    images: [
      {
        url: 'https://res.cloudinary.com/bloomsbury-publishing-public/image/upload/q_auto,f_auto,w_500,e_sharpen:80,c_limit/bpm/person_afrikaBambaataa/Afrika_Bambaataa.jpg',
        caption: 'Afrika Bambaataa performing',
      },
    ],
  },
  {
    name: 'Diana Ross',
    born: 'March 26, 1944',
    died: null,
    description: [
      'Diana Ross is an American singer, actress, and record producer. Born and raised in Detroit, Michigan, Ross rose to fame as the lead singer of the vocal group The Supremes, who during the 1960s became Motown\'s most successful act, and are the best-charting female group in US history,as well as one of the world\'s best-selling girl groups of all time.',
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Diana_Ross_1976.jpg/220px-Diana_Ross_1976.jpg',
        caption: 'Diana Ross in a 1976 shoot',
      },
    ],
  },
  {
    name: 'Miles Davis',
    born: 'May 26, 1926',
    died: 'September 28, 1991',
    description: [
      'Miles Davis was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music. Davis adopted a variety of musical directions in a five-decade career that kept him at the forefront of many major stylistic developments in jazz.',
    ],
    images: [
      {
        url: 'https://cdn.britannica.com/s:700x500/90/215290-050-9D95001B/American-musician-jazz-trumpeter-Miles-Davis.jpg',
        caption: 'Miles Davis performing',
      },
    ],
  },
  {
    name: 'Muddy Waters',
    born: 'April 4, 1913',
    died: 'April 30, 1983',
    description: [
      'Muddy Waters was born McKinley Morganfield on April 4, 1915, in Issaquena County, Mississippi. Waters grew up immersed in the Delta blues, and was first recorded by archivist Alan Lomax. In 1943, he moved to Chicago and began playing in clubs. A record deal followed, and hits like "I\'m Your Hoochie Coochie Man" and "Rollin\' Stone" made him an iconic Chicago blues man.',
    ],
    images: [
      {
        url: 'https://miro.medium.com/max/1400/1*v7OEv4vWE4A1MPEub-lOrw.png',
        caption: 'Muddy Waters performing',
      },
    ],
  },
  {
    name: 'Nina Simone',
    born: 'February 21, 1933',
    died: 'April 21, 2003',
    description: [
      'Legendary performer Nina Simone sang a mix of jazz, blues and folk music in the 1950s and \'60s, later enjoying a career resurgence in the \'80s. A staunch Civil Rights activist, she was known for tunes like "Mississippi Goddam," "Young, Gifted and Black" and "Four Women."',
    ],
    images: [
      {
        url: 'https://ninasimoneproject.org/wp-content/uploads/2018/12/1401x788-74314641.jpg',
        caption: 'Nina Simone on stage',
      },
    ],
  },
  {
    name: 'Kurtis Blow',
    born: 'August 9, 1959',
    died: null,
    description: [
      'Professionally known by his stage name Kurtis Blow, is an American rapper, singer, songwriter, record/film producer, b-boy, DJ, public speaker and minister. He is the first commercially successful rapper and the first to sign with a major record label.',
    ],
    images: [
      {
        url: 'https://static.hiphopdx.com/2019/05/kurtis-blow-basketball-interview-e1558544354809-835x620.jpg',
        caption: 'Kurtis Blow on stage',
      },
    ],
  },
  {
    name: 'MC Lyte',
    born: 'October 11, 1970',
    died: null,
    description: [
      'MC Lyte better known by her stage name MC Lyte, is an American rapper who first gained fame in the late 1980s, becoming the first solo female rapper to release a full album with 1988\'s critically acclaimed Lyte as a Rock.',
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/MC_Lyte_by_Gage_Skidmore.jpg/220px-MC_Lyte_by_Gage_Skidmore.jpg',
        caption: 'MC Lyte on stage',
      },
    ],
  },
  {
    name: 'James Brown',
    born: 'May 3, 1933',
    died: 'December 25, 2006',
    description: [
      'James Brown was an American singer, songwriter, dancer, musician, record producer and bandleader. A progenitor of funk music and a major figure of 20th century music and dance, he is often referred to as the "Godfather of Soul" and "Soul Brother No. 1".',
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/James_Brown_Live_Hamburg_1973_1702730029.jpg/220px-James_Brown_Live_Hamburg_1973_1702730029.jpg',
        caption: 'James Brown on stage',
      },
    ],
  },
  {
    name: 'KRS-One',
    born: 'August 20, 1965',
    died: null,
    description: [
      'KRS-One, better known by his stage names KRS-One, and Teacha, is an American rapper and occasional producer from The Bronx, New York. He rose to prominence as part of the hip hop music group Boogie Down Productions, which he formed with DJ Scott La Rock in the mid-1980s.',
    ],
    images: [
      {
        url: 'http://www.outlineonline.co.uk/files/img/750/cbea30147d145c1ce1fb1afc6abb3e2e.jpg',
        caption: 'KRS-One on stage',
      },
    ],
  },
];

export default ARTIST_HISTORIES;