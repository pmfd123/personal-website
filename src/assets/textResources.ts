const textResources : Record<string,string> = {
    'name': 'Pedro Dias',
    'job': 'Software Engineer',
    'aboutMeTitle': 'About Me',
    'aboutMeText': 'Hello, my name is Pedro and I am a software engineer. I consider myself as an autonomous problem solver which has the ability to adapt to new challenges and is always willing to learn. To me, the answer to the question "What drives me?" is self-improvement, living new experiences and helping others. Bellow, I list my skills and capabilities as well as the technologies I have worked with before.',
    'footerText': 'Copyright© 2022 Pedro Dias'
};

const getTextResource = (key: string) : string => (textResources[key]);

export default getTextResource;