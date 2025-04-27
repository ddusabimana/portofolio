import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '💻' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🎯' },
  { name: 'Git', icon: '📦' },
  { name: 'TypeScript', icon: '📝' },
  { name: 'Node.js', icon: '🌐' },
  { name: 'Express', icon: '🚂' },
  { name: 'MongoDB', icon: '🗄️' },
  { name: 'PostgreSQL', icon: '📊' },
  { name: 'RESTful APIs', icon: '🔌' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300"
          >
            <p className="text-lg mb-6">
              I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies. 
              I specialize in creating robust, scalable, and user-friendly web applications. 
              With a comprehensive understanding of modern web technologies, I build end-to-end solutions 
              that deliver exceptional user experiences and efficient performance.
            </p>
            <p className="text-lg">
              My journey in web development started with a curiosity for creating
              things on the internet, and it has grown into a deep passion for
              building innovative digital experiences across the entire stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center"
              >
                <span className="text-2xl mb-2 block">{skill.icon}</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 