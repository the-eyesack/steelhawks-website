$(function(){

  function mentor(name, title, bio, pic){
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.pic = pic;
  }

  var mentorHL = '/ctn/img/mentors/';
  var mentors = [
    new mentor('Joel Heitman','Head Coach', 'Mr. Heitman is the Head Coach of the Steel Hawks. He joined the Steel Hawks in 2013. His passion for Robotics has allowed the team to soar, and he hopes that with the help of his mentors, he can inspire the next generation of innovators.', "/ctn/img/genericProfile.jpg"),
    // {
    //   name: 'Joel Heitman',
    //   title: 'Head Coach',
    //   bio: 'Mr. Heitman is the Head Coach of the Steel Hawks. He joined the Steel Hawks in 2013. His passion for Robotics has allowed the team to soar, and he hopes that with the help of his mentors, he can inspire the next generation of innovators.',
    //   pic: "/ctn/img/genericProfile.jpg"
    // },
    {
      name: 'Susan Brustein',
      title: 'Coach',
      bio: 'Ms. Brustein is a Coach for the Steel Hawks. She was one of the founding coaches in 2008. Ms. Brustein is the Assistant Principal of Math, Science, and Technology at our school. She is currently the mentor of our Public Relations subteam.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Joshua Raghunath',
      title: 'Coach',
      bio: 'Mr. Raghunath is a Coach for the Steel Hawks. He joined the Steel Hawks in September of 2014. As an AP Physics teacher, he helps team members apply what they learn in his class to build the most efficient robot. His background in finance helps team members learn how to develop the Steel Hawks brand and represent the team professionally.',
      pic: mentorHL + 'mrR.JPG'
    },
    {
      name: 'David Stern',
      title: 'Coach',
      bio: 'Mr. Stern is a Coach for the Steel Hawks. He joined the Steel Hawks in September of 2016. As a Regents Physics teacher, he helps team members apply what they learn in class to their robot designs.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Olan-Ray Frith',
      title: 'Mentor',
      bio: 'Olan is a mechanical mentor for the Steel Hawks. He guides us through the prototyping, designing, and building processes.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Weijian Zeng',
      title: 'Mentor',
      bio: 'Weijian is a programming mentor for the Steel Hawks.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Kevin Goetzger',
      title: 'Mentor',
      bio: 'Kevin is a mentor for the Steel Hawks. We are grateful for his work in creating the practice field that we use for Open Field Weekend.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Kenneth Leuci',
      title: 'Mentor',
      bio: 'Ken is a mentor for the Steel Hawks. We are grateful for his work in creating the practice field that we use for Open Field Weekend.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'John Tsai',
      title: 'Mentor',
      bio: 'Mr. Tsai is a mentor for the Steel Hawks.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Lyndon Wong',
      title: 'Mentor',
      bio: 'Lyndon is a mentor for the Steel Hawks.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Marcus Barbu',
      title: 'Mentor',
      bio: 'Marcus Barbus is a graduate of the Class of 2016, and was formerly the President of the Steel Hawks. He currently mentors the programming subteam.',
      pic: "/ctn/img/genericProfile.jpg"
    },
    {
      name: 'Ishabul Haque',
      title: 'Mentor',
      bio: 'Ishabul is a mentor for the Steel Hawks.',
      pic: mentorHL + 'ishabul.JPG'
    },
    {
      name: 'Sam Diaz',
      title: 'Mentor',
      bio: 'Sam Diaz is a graduate of the Class of 2018, and was formerly the Vice President and Inventory Secretary for the Steel Hawks. He currently mentors the mechanical subteam',
      pic: "/ctn/img/genericProfile.jpg"
    }
  ];

  Vue.component('page-mentors', {
      template: window.App.templates.pages.mentors,
      data: function(){
        return {
          mentors: mentors
        }
      },
      mounted: function(){
        initializeMasonry();
      }
    });

    App.routes.push(
      { name: 'mentors', path: '/mentors', component: Vue.component('page-mentors') }
    );

});
