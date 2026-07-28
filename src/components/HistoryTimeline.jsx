import { useState } from 'react';
import { ChevronDownIcon } from './Icons';

export default function HistoryTimeline() {
  const [historyTab, setHistoryTab] = useState('experience');
  const [expandedItems, setExpandedItems] = useState({
    alpha_sde: true,
    alpha_intern: false,
    education_nirma: true,
  });

  const toggleExpand = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="bento-card col-span-2 timeline-card" id="timeline">
      <div className="timeline-nav">
        <button 
          className={`timeline-tab ${historyTab === 'experience' ? 'active' : ''}`}
          onClick={() => setHistoryTab('experience')}
        >
          Professional History
        </button>
        <button 
          className={`timeline-tab ${historyTab === 'education' ? 'active' : ''}`}
          onClick={() => setHistoryTab('education')}
        >
          Academic Background
        </button>
      </div>

      <div className="timeline-items">
        {historyTab === 'experience' ? (
          <>
            <article className="timeline-block">
              <div className="timeline-marker"></div>
              <div 
                className="timeline-block-header"
                onClick={() => toggleExpand('alpha_sde')}
              >
                <div>
                  <h4 className="timeline-role">SDE</h4>
                  <div className="timeline-comp">AlphaBI</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="timeline-time">Aug 2024 – Aug 2025</span>
                  <ChevronDownIcon className={`timeline-toggle-icon ${expandedItems.alpha_sde ? 'expanded' : ''}`} />
                </div>
              </div>
              <div className={`timeline-details ${expandedItems.alpha_sde ? 'expanded' : ''}`}>
                <ul className="timeline-points">
                  <li>Built and maintained production-grade React/NextJS interfaces for complex data analytics dashboards.</li>
                  <li>Designed and integrated ExpressJS APIs to support low-latency visualizations, aggregations, and csv/pdf report exports.</li>
                  <li>Refactored legacy modules into scalable TypeScript architectures, reducing code bugs and interface anomalies.</li>
                </ul>
              </div>
            </article>

            <article className="timeline-block">
              <div className="timeline-marker"></div>
              <div 
                className="timeline-block-header"
                onClick={() => toggleExpand('alpha_intern')}
              >
                <div>
                  <h4 className="timeline-role">Software Engineering Intern</h4>
                  <div className="timeline-comp">AlphaBI</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="timeline-time">Jan 2024 – Jun 2024</span>
                  <ChevronDownIcon className={`timeline-toggle-icon ${expandedItems.alpha_intern ? 'expanded' : ''}`} />
                </div>
              </div>
              <div className={`timeline-details ${expandedItems.alpha_intern ? 'expanded' : ''}`}>
                <ul className="timeline-points">
                  <li>Contributed features directly to core React applications, using styled components and standard state managers.</li>
                  <li>Assisted backend engineers in refactoring Express routing schemes, writing route verification middleware tests.</li>
                  <li>Actively participated in daily Standups, sprint retrospectives, and regular code reviews under senior guidance.</li>
                </ul>
              </div>
            </article>
          </>
        ) : (
          <article className="timeline-block">
            <div className="timeline-marker"></div>
            <div 
              className="timeline-block-header"
              onClick={() => toggleExpand('education_nirma')}
            >
              <div>
                <h4 className="timeline-role">B.Tech in Computer Science &amp; Engineering</h4>
                <div className="timeline-comp">Nirma University</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="timeline-time">2020 – 2024</span>
                <ChevronDownIcon className={`timeline-toggle-icon ${expandedItems.education_nirma ? 'expanded' : ''}`} />
              </div>
            </div>
            <div className={`timeline-details ${expandedItems.education_nirma ? 'expanded' : ''}`}>
              <p style={{ margin: 0, paddingLeft: '1.1rem' }}>
                Graduated with a focus on web systems, database design, software engineering lifecycle, and algorithmic complexity. Completed multiple projects including university portal interfaces and real-time multiplayer board games.
              </p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
