import './Teaching.css';
 export default function Teaching() {
    return (
        <div className='teaching-wrapper'>
            <div className='teaching-left'>
                <div className='teaching-text-wrapper'>
                    <div className='teaching-header-text'>
                        teaching at UC Berkeley
                    </div>
                    <div className='teaching-thoughts-text-wrapper'>
                        <div className='teaching-thoughts-text'>
                            read some of my thoughts on teaching
                        </div>
                        <a href='https://medium.com/@abbyramirez03/reflections-on-teaching-and-learning-at-uc-berkeley-b027e69575e6' target='_blank' className='teaching-medium-link'> here </a>
                    </div>

                    <div className='teaching-experience-module'> 
                        <div className='teaching-experience-header'>
                            <b>[CS61b] Data Structures uGSI</b>
                            <div className='teaching-resources-text-wrapper'>
                            <div className='teaching-resources-text'>
                                - access my teaching materials
                            </div>
                            <a href='https://drive.google.com/drive/folders/1_E0MVgwXBhqQv7BKIv1AOy_bm7CS2FRK?usp=sharing'
                                target='_blank' 
                                className='teaching-materials-link'> here </a>
                        </div>
                        </div>
                        <div className='teaching-experience-body'>
                            I'm currently a TA for a data structures course with over 1,000 students. You can find me teaching discussion, answering questions in office hours, and sometimes proctoring exams
                        </div>
                    </div>

                    <div className='teaching-experience-module'> 
                        <div className='teaching-experience-header'>
                            <b>[CS61a] Computer Programs uGSI & tutor</b>
                            <div className='teaching-resources-text-wrapper'>
                            <div className='teaching-resources-text'>
                                - access my teaching materials
                            </div>
                            <a href='https://abigailrb03.github.io/61a-teaching/'
                                target='_blank' 
                                className='teaching-materials-link'> here </a>
                        </div>
                        </div>
                        <div className='teaching-experience-body'>
                            I spent three semesters teaching discussions/labs, staffing office hours, and reviewing assignments for Berkeley's introductory CS class. You can still find me on the course youtube channel walking students through homeworks and projects!
                        </div>
                    </div>

                    <div className='teaching-experience-module'> 
                        <div className='teaching-experience-header'>
                            <b>[CSM] Diversity, Equity, & Inclusion Chair</b>
                            <div className='teaching-resources-text-wrapper'>
                            <div className='teaching-resources-text'>
                                - subscribe to the
                            </div>
                            <a href='https://forms.gle/BgiFcSNTGHsgbKqF9'
                                target='_blank' 
                                className='teaching-materials-link'> affinity newsletter </a>
                        </div>
                        </div>
                        <div className='teaching-experience-body'>
                            In my year as DEI Chair I tried to make CS @ Cal a bit more equitable and welcoming. I created our newsletter that shares opportunities in tech for students with historically marginalized identities, managed affinity sections (tutoring sections for students from shared backgrounds), and organized partnerships with other organizations on campus that serve underrepresented student populations
                        </div>
                    </div>

                </div>

            </div>
            <div className='teaching-right'>

            </div>
        </div>
    )
 }