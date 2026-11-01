// Project page content, in the order the Next links follow.
// impact: add rows as { label: 'Metric name', value: '00' }. The Impact section stays hidden while it's empty.
// images: a row with no src shows a Coming soon placeholder.

const shot = (folder, file) => encodeURI(`/static/${folder}/${file}.png`);

export const projects = [
  {
    slug: 'resy-joint-consumer-experience',
    title: 'Joint Consumer Experience',
    org: 'Tock × Resy',
    goal: 'Bring Tock venues into the Resy consumer experience, increasing their visibility and demand while reducing the overhead of maintaining multiple products and brands.',
    value: 'Diners get more discovery and dining options, and more value from their Resy credit through the channels they already use. For American Express, a wider network of the best restaurants delivers membership value to existing members and entices new card signups.',
    role: 'I was a lead designer on the search and availability squad, working on a cross-functional team with product and engineering.',
    impact: [],
    images: [{}, {}],
  },
  {
    slug: 'tock-manager',
    title: 'Manager App',
    org: 'Tock',
    goal: 'Provide a simple, reliable tool that helps owners, operators, and teams stay prepared for every service, supporting the delivery of exceptional hospitality.',
    value: "Exceptional hospitality and personalized experiences don't happen by accident. They require thoughtful preparation. Tock Manager simplifies reviewing guest details and planning ahead, helping teams execute each service with confidence so staff can focus on what matters most: delivering hospitality that stands out.",
    role: 'I was the only designer on a small innovation team with two senior iOS engineers. It was a new product, so I owned research, concepts, validation, final designs, and measurement, and acted as product owner for requirements and direction.',
    impact: [],
    images: [
      { src: shot('Tock Manager', 'Tock Manager 1'), alt: 'A calendar of services, a guest detail view, and a guest being swiped as reviewed' },
      { src: shot('Tock Manager', 'Tock Manager 2'), alt: 'Additional Tock Manager screens' },
    ],
  },
  {
    slug: 'tock-consumer',
    title: 'Tock App',
    org: 'Tock',
    goal: 'Create a world-class native app that keeps guests coming back again and again, driving butts in seats for our customers.',
    value: 'Guests are dining out more than ever, but the abundance of choice can be overwhelming. The Tock consumer app makes it easy to discover and book unforgettable experiences, while helping restaurants, wineries, and hospitality businesses drive demand, fill seats, and grow.',
    role: 'I was part of a trio stood up specifically to rebuild the Tock consumer app as fully native, replacing a React Native web wrapper. I owned all things design, and acted as product owner and set direction.',
    impact: [],
    images: [
      { src: shot('Tock Consumer', 'Tock Consumer 1'), alt: 'Tock Consumer app screens' },
      { src: shot('Tock Consumer', 'Tock Consumer 2'), alt: 'A restaurant on the map, its profile and experiences, and its awards' },
    ],
  },
  {
    slug: 'global-pathogen-analysis-system',
    title: 'Global Pathogen Analysis System',
    org: 'Oracle',
    goal: 'Give researchers and public health authorities around the world one standardized cloud platform for analyzing and comparing COVID-19 genomic data, so they can spot emerging variants sooner.',
    value: 'Researchers lacked the infrastructure to process sequences quickly and share results securely across borders. Built with the University of Oxford, the platform gave them one standardized place to analyze their data, and labs could choose to share results with others.',
    role: "I was a UX designer on Oracle's design team, working with Oxford University's product manager, research scientists, and public health officials. I improved the design to make the data easier to understand through clearer organization and visualizations.",
    impact: [
      { label: 'Time for labs to receive processed sequences', value: '96% faster' },
      { label: 'Genomic sequences processed', value: '500,000+' },
    ],
    images: [{}, {}],
  },
  {
    slug: 'activecampaign-mobile',
    title: 'ActiveCampaign App',
    org: 'ActiveCampaign',
    goal: 'Integrate the value of ActiveCampaign with the lives of our clients by providing key features on the go, allowing them to manage their business wherever they are.',
    value: 'A streamlined, intuitive interface lets users review important campaign and automation performance whenever they want, and the built-in CRM lets them manage their entire sales team and pipeline from the field. The app keeps business owners connected to customers, not their computer.',
    role: 'I led design of two iOS and Android apps, working on a cross-functional team with a product manager and five iOS and five Android engineers.',
    impact: [
      { label: 'Average app store rating', value: '41% increase' },
      { label: 'Monthly active users', value: '141% increase' },
    ],
    images: [
      { src: shot('Mobile App', 'Mobile App 1'), alt: 'ActiveCampaign mobile app screens' },
      { src: shot('Mobile App', 'Mobile App 2'), alt: 'Resending a campaign: best practices, resend type, and summary' },
      { src: shot('Mobile App', 'Mobile App 3'), alt: "A contact's details, a deals pipeline, and a task list" },
    ],
  },
  {
    slug: 'basis-global-search',
    title: 'Global Search',
    org: 'Centro',
    goal: 'Add Global Search to Basis, giving users a quick way to find content, move between views, and take common actions from anywhere in the platform.',
    value: 'Basis spans several roles and functions within adtech, and users managing multiple campaigns found its complex hierarchy painful to navigate. A dynamic global search lets them comb through unstructured data and quickly find what they want, when they need it most.',
    role: 'I was the UI designer, working very closely with a UX designer, product, and engineering.',
    impact: [],
    images: [
      { src: shot('Global Search', 'Global Search 1'), alt: 'Search overlay showing recent searches' },
      { src: shot('Global Search', 'Global Search 3'), alt: 'Search overlay in Basis, filtered to campaigns, with a results list and a preview of the selected campaign' },
      { src: shot('Global Search', 'Global Search 2'), alt: 'Search results grouped by campaign and property, with a View all results link' },
      { src: shot('Global Search', 'Global Search 5'), alt: "The selected campaign's overview page in Basis" },
    ],
  },
];
