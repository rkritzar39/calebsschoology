export const viewerNotice = {
  title: 'Preview-only mode',
  text: 'Visitors can view your course pages, announcements, resources, and assignment descriptions. Editing, grades, and submissions are hidden in this public version.',
}

export const announcements = [
  {
    id: 1,
    title: 'Welcome to the Fall term',
    course: 'IT 101',
    date: 'August 31',
    body: 'This LMS preview shows how your public course pages can look before you add a private backend later.',
  },
  {
    id: 2,
    title: 'Syllabus posted',
    course: 'CS 1100',
    date: 'September 2',
    body: 'The syllabus, course schedule, and reading links are available in the Materials area for each course.',
  },
  {
    id: 3,
    title: 'Office hours update',
    course: 'ENG 1020',
    date: 'September 5',
    body: 'Use the Resources page to post support links, tutoring details, and downloadable handouts.',
  },
]

export const courses = [
  {
    id: 'it-101',
    code: 'IT 101',
    title: 'Foundations of Information Technology',
    instructor: 'Prof. Rivera',
    color: 'blue',
    description: 'Intro course with weekly modules, lab links, and study guides.',
    folders: [
      {
        name: 'Week 1 · Getting Started',
        items: ['Course Overview.pdf', 'Welcome Video', 'First Discussion Prompt'],
      },
      {
        name: 'Week 2 · Hardware Basics',
        items: ['Lecture Slides', 'Lab Checklist', 'Quiz Review Sheet'],
      },
      {
        name: 'Assignments',
        items: ['Reflection 1', 'Mini Lab Report'],
      },
    ],
    upcoming: ['Reflection 1 due Friday', 'Lab checklist due Sunday'],
  },
  {
    id: 'cs-1100',
    code: 'CS 1100',
    title: 'Intro to Programming',
    instructor: 'Dr. Patel',
    color: 'teal',
    description: 'Practice exercises, starter files, and coding walkthroughs.',
    folders: [
      {
        name: 'Module 1 · Variables',
        items: ['Syntax Notes', 'Starter Code', 'Practice Problems'],
      },
      {
        name: 'Module 2 · Conditions',
        items: ['Lesson Video', 'Worksheet', 'Challenge Activity'],
      },
      {
        name: 'Resources',
        items: ['Style Guide', 'FAQ', 'Command Reference'],
      },
    ],
    upcoming: ['Module 1 quiz on Tuesday', 'Starter project review next week'],
  },
  {
    id: 'eng-1020',
    code: 'ENG 1020',
    title: 'College Composition',
    instructor: 'Ms. Monroe',
    color: 'gold',
    description: 'Essay deadlines, reading packets, and writing workshop handouts.',
    folders: [
      {
        name: 'Unit 1 · Narrative Writing',
        items: ['Prompt Sheet', 'Example Essay', 'Outline Template'],
      },
      {
        name: 'Unit 2 · Research Skills',
        items: ['Library Guide', 'Citation Practice', 'Source Tracker'],
      },
      {
        name: 'Writing Support',
        items: ['Rubric', 'Peer Review Form', 'Revision Tips'],
      },
    ],
    upcoming: ['Outline check-in on Monday', 'Draft due next Thursday'],
  },
]

export const resources = [
  'Academic calendar',
  'Student support services',
  'Tutoring and writing center',
  'Downloadable handbook',
  'Technology help desk links',
]
