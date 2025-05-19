export default function Teaching() {
  return (
    <section id="teaching" className="mb-12">
      <h2 className="section-title">Teaching</h2>
      
      <div className="mb-6">
        <h3 className="subsection-title">Current Courses</h3>
        <ul className="space-y-3">
          <li>
            <div className="font-bold">CS 540: Advanced Machine Learning</div>
            <p className="text-secondary text-sm">Graduate-level course covering state-of-the-art machine learning algorithms with applications in healthcare and medicine.</p>
          </li>
          <li>
            <div className="font-bold">CS 427: Ethics in Artificial Intelligence</div>
            <p className="text-secondary text-sm">Undergraduate senior-level course examining ethical considerations in AI development and deployment.</p>
          </li>
          <li>
            <div className="font-bold">CS 332: Data Science in Practice</div>
            <p className="text-secondary text-sm">Junior-level course on applied data science methodologies and tools.</p>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="subsection-title">Teaching Philosophy</h3>
        <p className="mb-3">
          My teaching philosophy centers on experiential learning and real-world application. I structure courses to balance theoretical foundations with practical implementation, employing project-based assessments that mirror industry and research challenges.
        </p>
        <p>
          I emphasize critical thinking and ethical considerations in technology development, encouraging students to evaluate the societal implications of their work. My classroom serves as a collaborative environment where diverse perspectives enhance the learning experience for all participants.
        </p>
      </div>
    </section>
  );
}
