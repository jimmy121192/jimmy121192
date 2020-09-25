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
        labelBgColor: 'FAFAFA',
        logoBgColor: '5a0b06e8',
        logo: 'Firefox',
        link: 'https://jimmytruong.ca',
    },
    {
        name: 'LinkedIn',
        badgeText: '@jimmy1211',
        labelBgColor: '0077B5',
        logoBgColor: '0077B5',
        logo: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jimmy1211/',
    },
    {   
        name: 'Email',
        badgeText: 'hoangbao1992@gmail.com',
        labelBgColor: 'c14438',
        logoBgColor: 'FFFFFF',
        logo: 'Gmail',
        link: 'mailto:hoangbao1992@gmail.com',
    },
];
const badges = badgeConfigs.reduce((result, config) => result + ' ' + generateBadge(config), '');
const gif = `<img align="right" src="https://alonedreamer.com/jimmymedia/images/jimmy-animated.gif" />`;
const factsTitle = generateTitle(2, `:zap: Fun Facts`);
const factsConfigs = [
    `🎶 I took my English name from the old country song “Don’t cry Joni”!.`
];
const facts = factsConfigs.reduce((result, fact) => result + `\n - ${fact}`, '');
const toolsTitle = generateTitle(2, `:rocket: Some Tools I Use`)

const stats = `<img src="https://github-readme-stats.vercel.app/api?username=jimmy121192&show_icons=true&count_private=true" alt="jimmy121192" />`;
(async () => {
 const content = `${introTitle}\n
${introDescription}\n
${badges}\n
${gif}\n
${factsTitle}\n
${facts}\n
${toolsTitle}\n

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript) ![Nodejs](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js) ![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react) ![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap) ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript) ![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb) ![Redis](https://img.shields.io/badge/-Redis-black?style=flat-square&logo=Redis) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql) ![Apollo GraphQL](https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=flat-square&logo=apollo-graphql) ![MySQL](https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql) ![Heroku](https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku) ![Docker](https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker) ![Amazon AWS](https://img.shields.io/badge/Amazon%20AWS-232F3E?style=flat-square&logo=amazon-aws) ![Microsoft Azure](https://img.shields.io/badge/Microsoft%20Azure-232F7E?style=flat-square&logo=microsoft-azure) ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-black?style=flat-square&logo=google-cloud) ![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git) ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github) ![BitBucket](https://img.shields.io/badge/-BitBucket-darkblue?style=flat-square&logo=bitbucket)

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
