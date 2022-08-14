let jsonResume = {
  basics: {
    name: "kalaivani",
    email: "abc@gamil.com",
    phone: 123456789,
    degree: "M.tech",
    location: {
      address: "1, mela st",
      postalCode: 612344,
      city: "kovai",
      state: "Tamilnadu",
      country: "India"
    },
    profiles: [
      {
        website: "www.google.com"
      }
    ]
  },
  work: [
    {
      company: "CTS",
      position: "Sr. Software Engineer",
      city: "Banglore"
    }
  ],
  education: [
    {
      institution: "SASTRA College Of Engineering",
      department: "Computer Science",
      gpa: 7.5
    }
  ],
  skills: [
    {
      name: "HTML, C, C++, JAVA",
    }
  ],
  languages: [
    {
      language: "Tamil, English, Hindi"
    }
  ],
  hobby: [
    {
      name: "Gardening"
    }
  ]
};
console.log(jsonResume);
