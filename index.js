/**
 * README Generator
 */
const md = require('markdown-it')({
    html: true,
    linkify: true,
    breaks: true
});
const mdEmoji = require('markdown-it-emoji');
const fs = require('fs');
const axios = require('axios').default;
md.use(mdEmoji);
const BLOG_HOST = `https://jimmytruong.ca`;
/* README Sections */
const introTitle = generateTitle(2, `Hey :wave:, My name is ${generateLink('Jimmy', 'https://jimmytruong.ca')}`);
const introDescription = `I'm currently a Full Stack Developer based in 🇨🇦 Vancouver. When I have free time, I usually play guitar and video games with friends. I also enjoy backpacking, sightseeing, and taking pictures around British Columbia.`;
const badgeConfigs = [
    {
        name: 'Website',
        badgeText: 'jimmytruong.ca',
        labelBgColor: '#5a0b06e8',
        logoBgColor: '4E69C8',
        logo: 'Chrome',
        link: 'https://jimmytruong.ca',
    },
    {
        name: 'LinkedIn',
        badgeText: '@serbis',
        labelBgColor: '0077B5',
        logoBgColor: '0077B5',
        logo: 'LinkedIn',
        link: 'https://www.linkedin.com/in/serbis/',
    },
];
const badges = badgeConfigs.reduce((result, config) => result + ' ' + generateBadge(config), '');
const gif = `<img align="right" src="https://alonedreamer.com/jimmymedia/images/jimmy.gif" />`;
const factsTitle = generateTitle(2, `:zap: A Few Quick Facts`);
const factsConfigs = [
    `🎶 I took my English name from the old country song “Don’t cry Joni”!.`
];
const facts = factsConfigs.reduce((result, fact) => result + `\n - ${fact}`, '');
const toolsTitle = generateTitle(2, `:rocket: Some Tools I Use`)
const toolsIconSize = 25;
const toolsConfig = [
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        alt: 'react',
    },
    {
        src: 'https://devicons.github.io/devicon/devicon.git/icons/vuejs/vuejs-original-wordmark.svg',
        alt: 'vue',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg',
        alt: 'bootstrap',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg',
        alt: 'gulp',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        alt: 'typescript',
    },
    {
        src: 'https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg',
        alt: 'mongodb',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
        alt: 'mysql',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
        alt: 'redis',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
        alt: 'nodejs',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain.svg',
        alt: 'heroku',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/travis/travis-plain.svg',
        alt: 'travis',
    },
    {
        src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png',
        alt: 'aws',
    },
    {
        src: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        alt: 'gcp',
    },
    {
        src: 'https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg',
        alt: 'Docker',
    },
    {
        src: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
        alt: 'Kubernetes',
    },
];
const tools = toolsConfig.reduce((result, toolConfig) => result + '\n' + generateIcon(toolConfig, toolsIconSize), '');
const stats = `<img src="https://github-readme-stats.vercel.app/api?username=jimmy121192&show_icons=true&count_private=true" alt="jimmy121192" />`;
(async () => {
    const content = `${introTitle}\n
${introDescription}\n
${badges}\n
${gif}\n
${factsTitle}\n
${facts}\n
${toolsTitle}\n
<p align="left">\n
    ${tools}\n
</p>\n
${stats}\n
`;
    const markdownContent = md.render(content);
    fs.writeFile('README.md', markdownContent, (err) => {
        if (err) {
            return console.error(err);
        }
        console.info(`Writing to README.md`);
    });
})();
function generateBadge(badgeConfig) {
    return `[![${badgeConfig.name} Badge](https://img.shields.io/badge/-${badgeConfig.badgeText}-${badgeConfig.labelBgColor}?style=flat-square&labelColor=${badgeConfig.logoBgColor}&logo=${badgeConfig.logo}&link=${badgeConfig.link})](${badgeConfig.link})`;
}
function generateIcon(iconConfig, toolsIconSize) {
    return `<img src="${iconConfig.src}" alt="${iconConfig.alt}" width="${toolsIconSize}" height="${toolsIconSize}" />`;
}
function generateTitle(size, title) {
    return `${'#'.repeat(size)} ${title}`;
}
function generateLink(label, link) {
    return `[${label}](${link})`;
}
