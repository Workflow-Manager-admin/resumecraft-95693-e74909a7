import { ResumeData } from '@/types/resume'

// PUBLIC_INTERFACE
export const getSampleResumeData = (): ResumeData => {
  return {
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      linkedIn: 'https://linkedin.com/in/johndoe',
      portfolio: 'https://johndoe.com'
    },
    summary: 'Experienced Software Developer with 5+ years of expertise in full-stack web development. Proven track record of building scalable applications using modern technologies and leading cross-functional teams to deliver high-quality software solutions.',
    experience: [
      {
        id: '1',
        company: 'Tech Innovations Inc.',
        position: 'Senior Software Developer',
        startDate: '2021-06',
        endDate: '',
        current: true,
        description: 'Lead development of web applications using React, Node.js, and PostgreSQL. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.'
      },
      {
        id: '2',
        company: 'Digital Solutions LLC',
        position: 'Software Developer',
        startDate: '2019-03',
        endDate: '2021-05',
        current: false,
        description: 'Developed and maintained multiple client-facing applications. Collaborated with design teams to implement responsive user interfaces and optimized database queries for improved performance.'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'University of Technology',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        graduationDate: '2019-05',
        gpa: '3.8/4.0'
      }
    ],
    skills: [
      'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
      'MongoDB', 'AWS', 'Docker', 'Git', 'Agile Development', 'REST APIs'
    ],
    projects: [
      {
        id: '1',
        name: 'E-Commerce Platform',
        description: 'Built a full-stack e-commerce platform with payment integration, inventory management, and real-time order tracking. Handled 10,000+ daily active users.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
        link: 'https://github.com/johndoe/ecommerce-platform'
      },
      {
        id: '2',
        name: 'Task Management App',
        description: 'Developed a collaborative task management application with real-time updates, file sharing, and team communication features.',
        technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
        link: 'https://github.com/johndoe/task-manager'
      }
    ]
  }
}
