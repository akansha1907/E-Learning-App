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
      'This course covers Python programming from basics to advanced concepts, including data structures, algorithms, and web development.',
    instructor: 'John Doe',
    ratings: 4.5,
    courseId: 'python101',
    duration: '2 months',
    skills: [
      'Python Fundamentals',
      'Data Structures',
      'Web Development',
      'Data Analysis',
      'Debugging',
    ],
  },
  finAnalysis01: {
    name: 'Financial Analysis',
    image: require('../assets/images/financial.png'),
    description:
      'This course provides an in-depth understanding of financial analysis techniques, including ratio analysis, trend analysis, and financial modeling.',
    instructor: 'Jane Smith',
    duration: '4 months',
    courseId: 'finAnalysis01',
    ratings: 4.5,
    skills: [
      'Ratio Analysis',
      'Financial Modeling',
      'Performance Evaluation',
      'Financial Statements',
      'Trend Analysis',
    ],
  },
  reactWeb12: {
    name: 'Web Development',
    image: require('../assets/images/react.png'),
    description:
      'Learn to build dynamic and responsive web applications using React, including state management, hooks, and routing.',
    instructor: 'Emily Johnson',
    duration: '4 months',
    courseId: 'reactWeb12',
    ratings: 4.6,
    skills: [
      'React Basics',
      'State Management',
      'API Integration',
      'Deployment',
      'Performance Optimization',
    ],
  },
  digitalMkt12: {
    name: 'Digital Marketing',
    image: require('../assets/images/digitalMarket.png'),
    description:
      'Master the art of digital marketing, including SEO, social media marketing, and digital advertising strategies.',
    instructor: 'Michael Brown',
    courseId: 'digitalMkt12',
    duration: '3 months',
    ratings: 4.7,
    skills: [
      'SEO',
      'Social Media Marketing',
      'Content Marketing',
      'Campaign Analytics',
      'Ad Optimization',
    ],
  },
  leadMgmt101: {
    name: 'Leadership & Management',
    image: require('../assets/images/leadership.png'),
    description:
      'Develop strong leadership and managerial skills, including team management, strategic planning, and effective communication.',
    instructor: 'Sarah Wilson',
    duration: '3 months',
    ratings: 4.6,
    courseId: 'leadMgmt101',
    skills: [
      'Team Management',
      'Strategic Planning',
      'Conflict Resolution',
      'Communication Skills',
      'Organizational Development',
    ],
  },
  cybersec101: {
    name: 'Cybersecurity Basics',
    image: require('../assets/images/cyber_security.png'),
    description:
      'Learn to protect systems from cyber threats, including network security, cryptography, and risk management.',
    instructor: 'David Lee',
    duration: '5 months',
    courseId: 'cybersec101',
    ratings: 4.8,
    skills: [
      'Network Security',
      'Cryptography',
      'Ethical Hacking',
      'Incident Response',
      'Web Security',
    ],
  },
};

export const categoryType = [
  {id: 0, name: ALL},
  {id: 1, name: TECH},
  {id: 2, name: BUSINESS},
];
