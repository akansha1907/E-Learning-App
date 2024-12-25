import {ALL, BUSINESS, TECH} from './constants';

export const courses = [
  {
    name: 'Python Programming',
    courseId: 'python101',
    shortDesc: 'Learn Python from basics to advanced concepts.',
    courseType: 'Tech',
    image: require('../assets/images/python.png'),
    ratings: 4.5,
    duration: '2 months',
  },
  {
    name: 'Financial Analysis',
    courseId: 'finAnalysis01',
    shortDesc: 'Master financial concepts and analysis techniques.',
    image: require('../assets/images/financial.png'),
    courseType: 'Business',
    ratings: 4.5,
    duration: '4 months',
  },
  {
    name: 'Web Development with React',
    courseId: 'reactWeb12',
    shortDesc: 'Learn to create dynamic web apps using React.',
    image: require('../assets/images/react.png'),
    courseType: 'Tech',
    ratings: 4.6,
    duration: '4 months',
  },
  {
    name: 'Digital Marketing',
    courseId: 'digitalMkt12',
    shortDesc: 'Master SEO, social media, and digital ads.',
    image: require('../assets/images/digitalMarket.png'),
    courseType: 'Business',
    ratings: 4.7,
    duration: '3 months',
  },
  {
    name: 'Leadership & Management',
    courseId: 'leadMgmt101',
    shortDesc: 'Develop strong leadership and managerial skills.',
    image: require('../assets/images/leadership.png'),
    courseType: 'Business',
    ratings: 4.6,
    duration: '3 months',
  },
  {
    name: 'Cybersecurity Basics',
    courseId: 'cybersec101',
    shortDesc: 'Learn to protect systems from cyber threats.',
    image: require('../assets/images/cyber_security.png'),
    courseType: 'Tech',
    ratings: 4.8,
    duration: '5 months',
  },
];
export const courseDetails = {
  python101: {
    name: 'Python Programming',
    image: require('../assets/images/python.png'),
    description:
      'This course covers Python programming from basics to advanced concepts, including data structures, algorithms, and web development. Students will gain hands-on experience with Python libraries such as NumPy and Pandas, and work on real-world projects like building web applications and data analysis tools.',
    instructor: 'John Doe',
    ratings: 4.5,
    duration: '2 months',
  },
  finAnalysis01: {
    name: 'Financial Analysis',
    image: require('../assets/images/financial.png'),
    description:
      'This course provides an in-depth understanding of financial analysis techniques, including ratio analysis, trend analysis, and financial modeling. Participants will learn how to interpret financial statements, build forecast models, and evaluate business performance through case studies and practical exercises.',
    instructor: 'Jane Smith',
    duration: '4 months',
    ratings: 4.5,
  },
  reactWeb12: {
    name: 'Web Development with React',
    image: require('../assets/images/react.png'),
    description:
      'Learn to build dynamic and responsive web applications using React, including state management, hooks, and routing. The course includes practical sessions on integrating APIs, managing global state with tools like Redux, and deploying applications. Participants will also explore best practices for optimizing performance and maintainability.',
    instructor: 'Emily Johnson',
    duration: '4 months',
    ratings: 4.6,
  },
  digitalMkt12: {
    name: 'Digital Marketing',
    image: require('../assets/images/digitalMarket.png'),
    description:
      'Master the art of digital marketing, including SEO, social media marketing, and digital advertising strategies. This course delves into content marketing, email campaigns, and analytics tools to measure success. Students will create their own digital marketing plans and learn to optimize campaigns for different platforms.',
    instructor: 'Michael Brown',
    duration: '3 months',
    ratings: 4.7,
  },
  leadMgmt101: {
    name: 'Leadership & Management',
    image: require('../assets/images/leadership.png'),
    description:
      'Develop strong leadership and managerial skills, including team management, strategic planning, and effective communication. Through interactive workshops and real-world scenarios, students will learn how to lead diverse teams, resolve conflicts, and drive organizational success.',
    instructor: 'Sarah Wilson',
    duration: '3 months',
    ratings: 4.6,
  },
  cybersec101: {
    name: 'Cybersecurity Basics',
    image: require('../assets/images/cyber_security.png'),
    description:
      'Learn to protect systems from cyber threats, including network security, cryptography, and risk management. The course covers the fundamentals of ethical hacking, securing web applications, and incident response strategies. Participants will gain practical experience through simulations and hands-on labs.',
    instructor: 'David Lee',
    duration: '5 months',
    ratings: 4.8,
  },
};

export const categoryType = [
  {id: 0, name: ALL},
  {id: 1, name: TECH},
  {id: 2, name: BUSINESS},
];
