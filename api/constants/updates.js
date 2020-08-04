const fakeUpdate = {
  title: 'Fake title',
  author: 'Fake author',
  body: [
    'Fake body'
  ]
}

const updates = [
  {
    id: 0,
    title: 'Double Dutch Boom Bus Playlists',
    author: 'Hip Hop Xpress',
    body: [
      'As UIUC students wrap up their final exams of the semester, we want to wish everyone a joyous and prosperous summer! We have cultivated a Double Dutch Boom Bus playlist for you to enjoy consisting of artists that are featured on the images of the bus.',
      'Check them out on our Instagram! @uiuchhx'
    ]
  },
  {
    id: 1,
    title: 'IMPORTANT: COVID-19 Update',
    author: 'Hip Hop Xpress',
    body: [
      'Since the pandemic of Spring 2020 and the shift to online courses, we are pivoting to some new approaches. First, we are about to install wifi equipment that will make the Hip Hop Xpress a mobile hotspot.',
      'Next, we are setting up a scheduling system so that various various groups that want to use the bus can request it. This is part of the World Education Community Awareness and Action Network (WECAAN) that collaborates with many youth-serving organizations in Champaign County.',
      'Stay tuned for more information about these latest developments!'
    ]
  },
  {
    id: 2,
    title: 'HipHopXpress: Connecting School to Students',
    author: 'Hip Hop Xpress',
    body: [
      'The HipHopXpress is working to provide internet access to local communities that lack internet connection. Stay updated with us and our bus location through the app!'
    ],
  },
  {
    id: 3,
    title: 'The Double Dutch Boom Bus is here!',
    author: 'Hip Hop Xpress',
    body: [
      'With the generosity of Sally K. Carter, our team was able to purchase a school bus at an affordable price!',
      'The bus been customized by It’s a Wrap and it is now ready for University of Illinois students to begin work on the interior. Artist John Jennings designed the graphics, and artist Stacey Robinson is helping out with more imagery.',
      'We are collaborating with the School of Architecture and the School of Music to design and build the inside during a class co-taught by Professors Erickson (Architecture), Kruse (Music) and Patterson (Music and Engineering).'
    ],
  },
  {
    ...fakeUpdate,
    id: 50
  }
];

export default updates;