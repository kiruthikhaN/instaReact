const User = [
  {
    name: "Aarav",
    username: "@aarav_01",
    profession: "Software Engineer",
    followers: 1200,
    following: 530,
    desc: "Building cool apps 🚀 | Love coding & coffee ☕",
    image:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww",
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        caption: "Debugging late night 🚀",
        likes: 320,
        posted: "2h ago",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600",
        caption: "Coffee + Code = ❤️",
        likes: 450,
        posted: "1d ago",
      },
      { id: 1, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600", caption: "Data visualization is an art 🎨", likes: 610, posted: "3h ago" },
      { id: 2, image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600", caption: "Working on ML models 🤖", likes: 870, posted: "2d ago" },
      { id: 3, image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600", caption: "Analyzing datasets", likes: 530, posted: "4d ago" },
    ],
  },
  {
    name: "Riya",
    username: "@riya_ds",
    profession: "Data Scientist",
    followers: 2400,
    following: 890,
    desc: "Turning data into decisions 📊✨",
    image:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHwwfDB8fHww",
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
        caption: "Data visualization is an art 🎨",
        likes: 610,
        posted: "3h ago",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600",
        caption: "Working on ML models 🤖",
        likes: 870,
        posted: "2d ago",
      },
    ],
  },
  {
    name: "Vivaan",
    username: "@vivaan_pm",
    profession: "Product Manager",
    followers: 3100,
    following: 650,
    desc: "Making products people love ❤️",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        caption: "Product launch day 🎉",
        likes: 950,
        posted: "5h ago",
      },
    ],
  },
  {
    name: "Ananya",
    username: "@ananya_designs",
    profession: "UX Designer",
    followers: 4100,
    following: 700,
    desc: "Designing smooth experiences ✨🎨",
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww",
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
        caption: "Wireframes to prototypes ✏️",
        likes: 720,
        posted: "1d ago",
      },
    ],
  },
  {
    name: "Kunal",
    username: "@kunal_marketer",
    profession: "Marketing Specialist",
    followers: 1800,
    following: 450,
    desc: "Marketing is storytelling 📢 | Coffee lover ☕",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
        caption: "Storytelling is the future of marketing 📈",
        likes: 540,
        posted: "8h ago",
      },
    ],
  },
  {
    name: "Priya",
    username: "@priya_finance",
    profession: "Financial Analyst",
    followers: 2600,
    following: 600,
    desc: "Numbers tell stories 💹 | Travel ✈️ | Yoga 🧘‍♀️",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHwwfDB8fHww",
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
        caption: "Finance + Travel ✈️",
        likes: 670,
        posted: "12h ago",
      },
    ],
  },
  {
    name: "Rohan",
    username: "@rohan_ops",
    profession: "Operations Manager",
    followers: 900,
    following: 300,
    desc: "Optimizing processes 🔧 | Fitness 💪",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    posts: [
      {
        id: 1   ,
        image:
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600",
        caption: "Morning workout grind 🏋️",
        likes: 300,
        posted: "2d ago",
      },
    ],
  },
];

export default User;
