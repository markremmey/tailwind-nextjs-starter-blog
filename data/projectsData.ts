interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Lyceum',
    description: `A Chat App leveraging OpenAI API with some added features`,
    imgSrc: '/static/images/lyceum.png',
    href: 'https://www.lyceum-app.com',
  },
  {
    title: 'Medici (Work in Progress)',
    description: `A personal finance app to aggregate and assess credit card transactions`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/projects',
  },
]

export default projectsData
