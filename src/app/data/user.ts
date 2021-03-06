import { createProject } from '../creators/project-creator';
import { Gist } from '../types/gist';
import { ProjectStatus } from '../types/project';
import { ProjectCategory } from '../types/project-category';
import { User } from '../types/user';

export const user: User = {
  username: 'mvukic',
  url: 'https://github.com/mvukic'
};

export const categories: ProjectCategory[] = [
  {
    name: 'Advent of code',
    projects: [
      createProject(user, {
        name: 'advent_of_code_2015',
        displayName: 'AOC 2015',
        description: 'Advent of code 2015 solutions',
        status: ProjectStatus.ARCHIVED,
        technologies: ['python', 'rust', 'java', 'c'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'advent_of_code_2017',
        displayName: 'AOC 2017',
        description: 'Advent of code 2017 solutions',
        status: ProjectStatus.ARCHIVED,
        technologies: ['kotlin', 'gradle', 'intellij'],
        hasReadme: false
      }),
      createProject(user, {
        name: 'advent_of_code_2018',
        displayName: 'AOC 2018',
        description: 'Advent of code 2018 solutions',
        status: ProjectStatus.ARCHIVED,
        technologies: ['kotlin', 'gradle', 'intellij', 'typescript'],
        hasReadme: false
      }),
      createProject(user, {
        name: 'advent_of_code_2019',
        displayName: 'AOC 2019',
        description: 'Advent of code 2019 solutions',
        status: ProjectStatus.ARCHIVED,
        technologies: ['typescript', 'vscode'],
        hasReadme: true
      }),
    ]
  },
  {
    name: 'Brainfuck',
    projects: [
      createProject(user, {
        name: 'brainfuck-rust',
        displayName: 'Brainfuck - Rust',
        description: 'Brainfuck interpreter in Rust',
        status: ProjectStatus.ARCHIVED,
        technologies: ['rust'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'clojure-rust',
        displayName: 'Brainfuck - Clojure',
        description: 'Brainfuck interpreter in Clojure',
        status: ProjectStatus.ARCHIVED,
        technologies: ['jvm', 'clojure'],
        hasReadme: true
      }),
    ]
  },
  {
    name: 'Documentation',
    projects: [
      createProject(user, {
        name: 'docker',
        displayName: 'Dockers stuff',
        description: 'Docker cheat sheet',
        status: ProjectStatus.INPROGRESS,
        technologies: ['docker', 'shell'],
        hasReadme: true
      }),
    ]
  },
  {
    name: 'College',
    projects: [
      createProject(user, {
        name: 'officememo',
        displayName: 'OfficeMemo',
        description: 'Social network android application that uses Firebase',
        status: ProjectStatus.ARCHIVED,
        technologies: ['java', 'kotlin', 'rxjava', 'android studio'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'BellmanFord-WFI',
        displayName: 'BellmanFord and WFI',
        description: 'Bellman-Ford and WFI algorithms written in kotlin',
        status: ProjectStatus.ARCHIVED,
        technologies: ['gradle', 'kotlin', 'intellij'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'UTRLabosi',
        displayName: 'Introduction to Theoretical Computer Science',
        description: 'Finite automata, Turing machine, DPA, DFA minimization',
        status: ProjectStatus.ARCHIVED,
        technologies: ['java', 'intellij'],
        hasReadme: true
      })
    ]
  },
  {
    name: 'Other',
    projects: [
      createProject(user, {
        name: 'morse-code',
        displayName: 'Morse Code',
        description: 'Morse code encoder/decoder',
        status: ProjectStatus.INPROGRESS,
        technologies: ['nodejs', 'typescript', 'jest'],
        badges: [
          {
            type: 'Node.js',
            status: 'https://github.com/mvukic/morse-code/workflows/Node.js%20CI/badge.svg'
          }
        ],
        hasReadme: true
      }),
      createProject(user, {
        name: 'mvukic-github-io-source',
        displayName: 'Source for this page',
        description: 'Source for this github projects overview that is deployed to mvukic.github.io',
        status: ProjectStatus.ARCHIVED,
        technologies: ['angular', 'typescript', 'bulma'],
        hasReadme: true,
        badges: [
          {
            type: 'Node.js',
            status: 'https://github.com/mvukic/mvukic-github-io-source/workflows/Deploy%20to%20mvukic.github.io/badge.svg'
          }
        ]
      })
    ]
  }
];

export const gists: Gist[] = [
  {
    name: 'Some kotlin stuff',
    description: 'Cheat sheet for some Kotlin stuff',
    url: 'https://gist.github.com/mvukic/4e0eb3fc592f994679303428aa4bc5a3'
  }
];
