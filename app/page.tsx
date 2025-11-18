'use client'

import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone, Menu, X, Globe, ExternalLink, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

type Language = 'es' | 'en'

const translations = {
  es: {
    nav: {
      about: 'ACERCA DE',
      experience: 'EXPERIENCIA',
      projects: 'PROYECTOS',
      education: 'EDUCACIÓN',
      skills: 'HABILIDADES'
    },
    hero: {
      title: 'Danna Garcia Acevedo',
      subtitle: 'Ingeniería de Software – Sexto Semestre',
      description: 'Construyendo experiencias digitales modernas y funcionales'
    },
    about: {
      title: 'Acerca de mí',
      content: 'Ingeniera de Software con experiencia en el desarrollo de soluciones web y móviles end-to-end. Experta en la construcción de interfaces de usuario responsivas con HTML, CSS (Tailwind CSS) y TypeScript, usando frameworks como React y Angular. Especializada en el desarrollo de APIs robustas con Java (Spring Boot) y Node.js, y en la gestión de bases de datos relacionales como MySQL y PostgreSQL. Sólida experiencia en la implementación de flujos de trabajo ágiles con Git/GitHub, participando activamente desde la fase de diseño (Figma) hasta el despliegue.'
    },
    experience: {
      title: 'Experiencia',
      company: '3S IA S.A.S',
      period: '29/01/2024 - 05/06/2025',
      role: 'Desarrolladora Fullstack',
      description: 'Me desempeñé como desarrolladora fullstack, donde tuve responsabilidades relacionadas con el diseño y maquetación de aplicaciones frontend responsive enfocadas principalmente en el sector Agro con React para web y Kotlin para el desarrollo nativo en dispositivos móviles. Así mismo en el diseño y la creación de las bases de datos relacionales donde tuve la oportunidad de trabajar con motores como PostgreSQL y SQLite. Adicionalmente trabajé con Python en la creación de scripts para la automatización de procesos.',
      tech: 'Tecnologías'
    },
    projects: {
      title: 'Proyectos Personales',
      ecotrack: {
        name: 'Ecotrack',
        description: 'Aplicación móvil que busca mejorar la huella de carbono de las empresas, incentivando al personal a contribuir al planeta mediante tareas y lecciones sencillas.'
      },
      flower: {
        name: 'Flor Dinámica',
        description: 'Flor dinámica creada con el fin de probar las librerías de turtle y math en el lenguaje de Python.'
      },
      typescript: {
        name: 'TypeScript API',
        description: 'API de usuarios hecha con TypeScript y Express implementando arquitectura hexagonal.'
      },
      avocado: {
        name: 'Avocado Bank',
        description: 'Aplicación de banco creada desde cero con Angular CLI version 18.2.1, implementando funcionalidades bancarias completas.'
      }
    },
    education: {
      title: 'Educación',
      university: 'Ingeniería de Software',
      universityPeriod: '10/01/2023 - 01/07/2026',
      oracle: 'Oracle Next Education',
      oraclePeriod: '22/01/24 - 16/07/24',
      oracleOrg: 'Oracle + Alura LATAM'
    },
    skills: {
      title: 'Habilidades',
      technical: 'Técnicas',
      personal: 'Personales',
      languages: 'Idiomas',
      techList: ['Figma', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Java', 'Spring Boot', 'SQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
      personalList: ['Trabajo en equipo', 'Resolución de problemas', 'Proactividad', 'Comunicación efectiva', 'Gestión del tiempo'],
      languagesList: ['Inglés: B1', 'Español: Nativo']
    }
  },
  en: {
    nav: {
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      education: 'EDUCATION',
      skills: 'SKILLS'
    },
    hero: {
      title: 'Danna Garcia Acevedo',
      subtitle: 'Software Engineering – Sixth Semester',
      description: 'Building modern and functional digital experiences'
    },
    about: {
      title: 'About me',
      content: 'Software Engineer with experience in developing end-to-end web and mobile solutions. Expert in building responsive user interfaces with HTML, CSS (Tailwind CSS) and TypeScript, using frameworks like React and Angular. Specialized in developing robust APIs with Java (Spring Boot) and Node.js, and managing relational databases such as MySQL and PostgreSQL. Strong experience implementing agile workflows with Git/GitHub, actively participating from the design phase (Figma) to deployment.'
    },
    experience: {
      title: 'Experience',
      company: '3S IA S.A.S',
      period: '01/29/2024 - 06/05/2025',
      role: 'Fullstack Developer',
      description: 'I worked as a fullstack developer, where I had responsibilities related to the design and layout of responsive frontend applications focused mainly on the Agriculture sector with React for web and Kotlin for native development on mobile devices. Also in the design and creation of relational databases where I had the opportunity to work with engines such as PostgreSQL and SQLite. Additionally, I worked with Python in creating scripts for process automation.',
      tech: 'Technologies'
    },
    projects: {
      title: 'Personal Projects',
      ecotrack: {
        name: 'Ecotrack',
        description: 'Mobile application that seeks to improve the carbon footprint of companies, encouraging staff to contribute to the planet through simple tasks and lessons.'
      },
      flower: {
        name: 'Dynamic Flower',
        description: 'Dynamic flower created in order to test the turtle and math libraries in the Python language.'
      },
      typescript: {
        name: 'TypeScript API',
        description: 'User API made with TypeScript and Express implementing hexagonal architecture.'
      },
      avocado: {
        name: 'Avocado Bank',
        description: 'Banking application built from scratch with Angular CLI version 18.2.1, implementing complete banking functionalities.'
      }
    },
    education: {
      title: 'Education',
      university: 'Software Engineering',
      universityPeriod: '01/10/2023 - 07/01/2026',
      oracle: 'Oracle Next Education',
      oraclePeriod: '01/22/24 - 07/16/24',
      oracleOrg: 'Oracle + Alura LATAM'
    },
    skills: {
      title: 'Skills',
      technical: 'Technical',
      personal: 'Personal',
      languages: 'Languages',
      techList: ['Figma', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Java', 'Spring Boot', 'SQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
      personalList: ['Teamwork', 'Problem solving', 'Proactivity', 'Effective communication', 'Time management'],
      languagesList: ['English: B1', 'Spanish: Native']
    }
  }
}

const projects = [
  {
    name: 'Ecotrack',
    repo: 'https://github.com/diegospinax/ecotrack-api.git',
    techs: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT']
  },
  {
    name: 'Flor Dinámica',
    repo: 'https://github.com/DannaGA66/Flor-dinamica.git',
    techs: ['Python', 'Turtle', 'Math']
  },
  {
    name: 'TypeScript API',
    repo: 'https://github.com/DannaGA66/Typescript-API.git',
    techs: ['TypeScript', 'Express', 'Hexagonal Architecture']
  },
  {
    name: 'Avocado Bank',
    repo: 'https://github.com/diegospinax/bank-application.git',
    techs: ['Angular 18', 'TypeScript', 'HTML', 'CSS', 'JavaScript']
  }
]

export default function Portfolio() {
  const [lang, setLang] = useState<Language>('es')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const t = translations[lang]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education', 'skills']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll('.scroll-animate')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const scrollToProject = (index: number) => {
    if (carouselRef.current) {
      const projectWidth = carouselRef.current.scrollWidth / projects.length
      carouselRef.current.scrollTo({
        left: projectWidth * index,
        behavior: 'smooth'
      })
      setCurrentProjectIndex(index)
    }
  }

  const nextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length
    scrollToProject(nextIndex)
  }

  const prevProject = () => {
    const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length
    scrollToProject(prevIndex)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary animate-fade-in" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm transition-all duration-300 hover:text-primary ${
                activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm transition-all duration-300 hover:text-primary ${
                activeSection === 'experience' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm transition-all duration-300 hover:text-primary ${
                activeSection === 'projects' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className={`text-sm transition-all duration-300 hover:text-primary ${
                activeSection === 'education' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.nav.education}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-sm transition-all duration-300 hover:text-primary ${
                activeSection === 'skills' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.nav.skills}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden md:flex"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="hidden md:flex"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">{lang.toUpperCase()}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden animate-fade-in">
            <nav className="flex flex-col gap-4 px-6 py-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.education}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.skills}
              </button>
              {mounted && (
                <Button
                  variant="ghost"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full justify-start"
                >
                  {theme === 'dark' ? <Sun className="mr-2 h-5 w-5" /> : <Moon className="mr-2 h-5 w-5" />}
                  {theme === 'dark' ? (lang === 'es' ? 'Modo Claro' : 'Light Mode') : (lang === 'es' ? 'Modo Oscuro' : 'Dark Mode')}
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="w-full justify-start"
              >
                <Globe className="mr-2 h-5 w-5" />
                {lang === 'es' ? 'English' : 'Español'}
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 pt-24">
        {/* Hero Section */}
        <section className="grid min-h-[80vh] gap-12 py-12 md:grid-cols-12 md:py-20">
          <div className="flex flex-col justify-center md:col-span-5 animate-fade-in">
            <h1 className="mb-4 text-balance text-5xl font-bold tracking-tight md:text-6xl animate-slide-up">
              {t.hero.title}
            </h1>
            <p className="mb-2 text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>{t.hero.subtitle}</p>
            <p className="mb-8 text-pretty text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '200ms' }}>{t.hero.description}</p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <button
                onClick={() => setShowEmail(!showEmail)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {showEmail ? 'dannaacevt@hotmail.com' : 'Email'}
              </button>
              <a
                href="tel:+573164627102"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (+57) 3164627102
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '400ms' }}>
              <MapPin className="h-4 w-4" />
              Calle 25b # 72-8
            </div>

            <div className="mt-8 flex gap-4 animate-slide-up" style={{ animationDelay: '500ms' }}>
              <a
                href="https://github.com/DannaGA66"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/danna-garcia-acevedo-240060177/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-7 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="relative h-full w-full max-w-lg">
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-muted transition-transform duration-500 hover:scale-105">
                <img
                  src="/Cocoa_io.jpg"
                  alt="Danna Garcia Acevedo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="mb-8 flex items-center gap-4 animate-fade-in">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {t.nav.about}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="mx-auto max-w-3xl scroll-animate slide-from-left">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.about.content}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="mb-12 flex items-center gap-4 animate-fade-in">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {t.nav.experience}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-8 md:grid-cols-12 scroll-animate slide-from-right">
            <div className="md:col-span-3">
              <p className="text-sm text-muted-foreground">{t.experience.period}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="mb-2 text-2xl font-bold">{t.experience.company}</h3>
              <p className="mb-4 text-lg text-primary">{t.experience.role}</p>
              <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                {t.experience.description}
              </p>

              <div className="mb-4">
                <h4 className="mb-3 font-medium">{t.experience.tech}:</h4>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Frontend:</span> React con Vite, Kotlin + Jetpack Compose
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Backend:</span> Node.js + Express con TypeScript, Java (Spring Boot), Python
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Bases de datos:</span> PostgreSQL, SQLite
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Herramientas:</span> Git, GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="mb-12 flex items-center gap-4 animate-fade-in">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {t.nav.projects}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => {
                const projectKey = index === 0 ? 'ecotrack' : index === 1 ? 'flower' : index === 2 ? 'typescript' : 'avocado'
                const projectInfo = t.projects[projectKey]
                
                return (
                  <a
                    key={project.name}
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-project-accent hover:shadow-lg hover:scale-105"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-project-accent">{projectInfo.name}</h3>
                      <ExternalLink className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-project-accent" />
                    </div>
                    
                    <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {projectInfo.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-project-accent/10 px-3 py-1 text-xs font-medium text-project-accent transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToProject(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex 
                        ? 'bg-project-accent w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="mb-12 flex items-center gap-4 animate-fade-in">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {t.nav.education}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-8">
            <div className="grid gap-8 md:grid-cols-12 scroll-animate slide-from-left">
              <div className="md:col-span-3">
                <p className="text-sm text-muted-foreground">{t.education.universityPeriod}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-1 text-xl font-bold">{t.education.university}</h3>
                <p className="text-muted-foreground">Universidad Empresarial de Colombia</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-12 scroll-animate slide-from-left" style={{ animationDelay: '100ms' }}>
              <div className="md:col-span-3">
                <p className="text-sm text-muted-foreground">{t.education.oraclePeriod}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-1 text-xl font-bold">{t.education.oracle}</h3>
                <p className="text-muted-foreground">{t.education.oracleOrg}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="mb-12 flex items-center gap-4 animate-fade-in">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {t.nav.skills}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="scroll-animate slide-from-right">
              <h3 className="mb-6 text-xl font-bold">{t.skills.technical}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.techList.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="scroll-animate slide-from-right" style={{ animationDelay: '100ms' }}>
              <h3 className="mb-6 text-xl font-bold">{t.skills.personal}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.personalList.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="scroll-animate slide-from-right" style={{ animationDelay: '200ms' }}>
              <h3 className="mb-6 text-xl font-bold">{t.skills.languages}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.languagesList.map((language) => (
                  <span
                    key={language}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 Danna Garcia Acevedo. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/DannaGA66"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/danna-garcia-acevedo-240060177/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
              <button
                onClick={() => setShowEmail(!showEmail)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Email
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
