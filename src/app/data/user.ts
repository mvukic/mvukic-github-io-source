import { Gist } from '../types/gist';
import { User } from '../types/user';
import { Project, ProjectStatus } from '../types/project';
import { createProject } from '../creators/project-creator';
import { ProjectCategory } from '../types/project-category';

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
        description: 'Advent of code 2015 solutions',
        status: ProjectStatus.ARCHIVED,
        technologies: ['python', 'rust', 'java', 'c'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'advent_of_code_2017',
        description: 'Advent of code 2017 solutions',
        status: ProjectStatus.ARCHIVED,
        technologies: ['kotlin', 'gradle', 'intellij'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'advent_of_code_2018',
        description: 'Advent of code 2018 solutions',
        status: ProjectStatus.ARCHIVED,
        technologies: ['kotlin', 'gradle', 'intellij', 'typescript'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'advent_of_code_2019',
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
        description: 'Brainfuck interpreter in Rust',
        status: ProjectStatus.ARCHIVED,
        technologies: ['rust'],
        hasReadme: true
      }),
      createProject(user, {
        name: 'clojure-rust',
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
        description: 'Docker cheat sheet',
        status: ProjectStatus.INPROGRESS,
        technologies: ['docker', 'shell'],
        hasReadme: true
      }),
    ]
  },
  {
    name: 'Other',
    projects: [
      createProject(user, {
        name: 'morse-code',
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
        name: 'officememo',
        description: 'Social network android application that uses Firebase',
        status: ProjectStatus.ARCHIVED,
        technologies: ['java', 'kotlin', 'rxjava', 'android studio'],
        hasReadme: true
      })
    ]
  }
];

export const gists: Gist[] = [
  {
    name: 'Some kotlin stuff',
    description: '',
    url: 'https://gist.github.com/mvukic/4e0eb3fc592f994679303428aa4bc5a3'
  }
];